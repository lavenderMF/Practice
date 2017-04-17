;
(function($) {

	var LightBox = function(settings) {
		var self = this;
		
		//参数设置
		this.settings = {
			speed: 500
		};
		
		//传入参数
		$.extend(this.settings, settings || {});

		//创建遮罩和弹出框
		this.popupMask = $('<div id="G-lightbox-mask">');

		this.popupWin = $('<div id="G-lightbox-popup">');

		//保存BODY
		this.bodyNode = $(document.body);

		//渲染剩余的DOM，并且插入到BODY
		this.renderDOM();
		
		//获取DOM
		this.picViewArea = this.popupWin.find("div.lightbox-pic-view");
		this.popupPic = this.popupWin.find("img.lightbox-image");
		this.picCaptionArea = this.popupWin.find("div.lightbox-pic-caption");
		this.nextBtn = this.popupWin.find("span.lightbox-next-btn");
		this.prevBtn = this.popupWin.find("span.lightbox-prev-btn");

		this.captionText = this.popupWin.find("p.lightbox-pic-desc");
		this.currentIndex = this.popupWin.find("span.lightbox-of-index");
		this.closeBtn = this.popupWin.find("span.lightbox-close-btn");

		//准备开发事件委托，获取组数据
		this.groupName = null;
		this.groupData = [];
		
		//delegate() 方法为指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。
		//获取被绑定的图片组,添加点击事件
		this.bodyNode.delegate(".js-lightbox,[data-role=lightbox]", "click", function(e) {
			e.stopPropagation();
			//获取点击的图片组组名
			var currentGroupName = $(this).attr("data-group");
			//判断now的图片组是否为当前的图片组，不是的话将当前的图片组名换为当前点击的，同时获取所有同一图片组内的所有
			if(currentGroupName != self.groupName) {
				self.groupName = currentGroupName;
				//获取当前组的所有的图片
				self.getGroup();
			};
			//初始化弹出
			self.initPopup($(this));
		});

		//关闭弹出
		this.popupMask.click(function() {
			$(this).fadeOut();
			self.popupWin.fadeOut();
			self.clear = false;
		});
		this.closeBtn.click(function() {
			self.popupMask.fadeOut();
			self.popupWin.fadeOut();
			self.clear = false;
		});

		this.flag = true;
		//绑定上下按钮
		this.nextBtn.hover(function() {
			if(!$(this).hasClass("disabled") && self.groupData.length > 1) {
				$(this).addClass("lightbox-next-btn-show");
			}
		}, function() {
			if(!$(this).hasClass("disabled") && self.groupData.length > 1) {
				$(this).removeClass("lightbox-next-btn-show");
			}
		}).click(function(e) {
			if(!$(this).hasClass("disabled") && self.flag) {
				self.flag = false;
				e.stopPropagation();
				self.goto("next");
			}
		});

		this.prevBtn.hover(function() {
			if(!$(this).hasClass("disabled") && self.groupData.length > 1) {
				$(this).addClass("lightbox-prev-btn-show");
			}
		}, function() {
			if(!$(this).hasClass("disabled") && self.groupData.length > 1) {
				$(this).removeClass("lightbox-prev-btn-show");
			}
		}).click(function(e) {
			if(!$(this).hasClass("disabled") && self.flag) {
				self.flag = false;
				e.stopPropagation();
				self.goto("prev");
			}
		});

		var timer = null;
		this.clear = false;
		//绑定窗口调整事件
		$(window).resize(function() {
			if(self.clear) {
				window.clearTimeout(timer);
				timer = window.setTimeout(function() {
					self.loadPicSize(self.groupData[self.index].src);
				}, 500)
			}

		}).keyup(function(e) {
			var keyValue = e.which;
			if(self.clear) {
				if(keyValue == 38 || keyValue == 37) {
					self.prevBtn.click();
				} else if(keyValue == 39 || keyValue == 40) {
					self.nextBtn.click();
				}
			}
		});

	}

	LightBox.prototype = {
		goto: function(dir) {
			if(dir === "next") {
				this.index++;
				if(this.index >= this.groupData.length - 1) {
					this.nextBtn.addClass("disabled").removeClass("lightbox-next-btn-show");
				};
				if(this.index != 0) {
					this.prevBtn.removeClass("disabled");
				};

				var src = this.groupData[this.index].src;
				this.loadPicSize(src);

			} else if(dir === "prev") {
				this.index--;
				if(this.index <= 0) {
					this.prevBtn.addClass("disabled").removeClass("lightbox-prev-btn-show");
				}
				if(this.index != this.groupData.length - 1) {
					this.nextBtn.removeClass("disabled");
				};

				var src = this.groupData[this.index].src;
				this.loadPicSize(src);

			}
		},
		loadPicSize: function(sourceSrc) {
			var self = this;
			this.popupPic.css({
				width: "auto",
				height: "auto"
			}).hide();
			this.picCaptionArea.hide();
			this.preLoadImg(sourceSrc, function() {
				self.popupPic.attr("src", sourceSrc);
				var picWidth = self.popupPic.width(),
					picHeight = self.popupPic.height();

				self.changePic(picWidth, picHeight);
			});
		},
		changePic: function(width, height) {
			var self = this,
				winWidth = $(window).width(),
				winHeight = $(window).height();

			//如果图片的宽高大于浏览器 的宽高比例，看是否溢出
			var scale = Math.min(winWidth / (width + 10), winHeight / (height + 10), 1);
			width = width * scale;
			height = height * scale;

			if(width < 100) {
				width = width + 100;
				height = height + 100;
			}

			this.picViewArea.animate({
				width: width - 10,
				height: height - 10
			}, self.settings.speed);

			this.popupWin.animate({
				width: width,
				height: height,
				marginLeft: -(width / 2),
				top: (winHeight - height) / 2
			}, self.settings.speed, function() {
				self.popupPic.css({
					width: width - 10,
					height: height - 10
				}).fadeIn();
				self.picCaptionArea.fadeIn();
				self.flag = true;
				self.clear = true;
			});

			//设置描述文字和当前索引
			this.captionText.text(this.groupData[this.index].caption);
			this.currentIndex.text("当前索引：" + (this.index + 1) + " of " + this.groupData.length);

		},
		preLoadImg: function(src, callback) {
			var img = new Image();
			if(!!window.ActiveXObject) {
				img.onreadystatechange = function() {
					if(this.readyState == "complete") {
						callback();
					}
				}
			} else {
				img.onload = function() {
					callback();
				}
			};
			img.src = src;
		},
		//弹窗的动画和位置设置
		showMaskAndPopup: function(sourceSrc, currentId) {
			var self = this;

			this.popupPic.hide();
			this.picCaptionArea.hide();

			this.popupMask.fadeIn();

			var winWidth = $(window).width(),
				winHeight = $(window).height();
			this.picViewArea.css({
				width: winWidth / 2,
				height: winHeight / 2
			});

			this.popupWin.fadeIn();

			var viewHeight = winHeight / 2 + 10;

			this.popupWin.css({
				width: winWidth / 2 + 10,
				height: winHeight / 2 + 10,
				marginLeft: -(winWidth / 2 + 10) / 2,
				top: -viewHeight
			}).animate({
				top: (winHeight - viewHeight) / 2
			}, self.settings.speed, function() {
				//回调函数，加载图片
				self.loadPicSize(sourceSrc);
			});

			this.index = this.getIndexOf(currentId);

			var groupDataLength = this.groupData.length;
			if(groupDataLength > 1) {
				if(this.index === 0) {
					this.prevBtn.addClass("disabled");
					this.nextBtn.removeClass("disabled");
				} else if(this.index === groupDataLength - 1) {
					this.prevBtn.removeClass("disabled");
					this.nextBtn.addClass("disabled");
				} else {
					this.prevBtn.removeClass("disabled");
					this.nextBtn.removeClass("disabled");
				}
			}

		},
		getIndexOf: function(currentId) {
			var index = 0;
			$(this.groupData).each(function(i) {
				index = i;
				if(this.id === currentId) {
					return false;
				}
			});
			return index;
		},
		//初始化弹出
		initPopup: function(currentObj) {
			var self = this,
				sourceSrc = currentObj.attr("data-source"),
				currentId = currentObj.attr("data-id");
			//将当前点击的图片的地址和id作为参数弹窗显示图片
			this.showMaskAndPopup(sourceSrc, currentId);
		},
		//根据当前的组别名称获取所有的图片
		getGroup: function() {
			var self = this;

			//根据当前的组别名称获取页面中所有相同组别的对象
			var groupList = this.bodyNode.find("*[data-group=" + this.groupName + "]");

			self.groupData.length = 0;
			//将对象里的图片的属性遍历获取到数组里面
			groupList.each(function() {
				self.groupData.push({
					src: $(this).attr("data-source"),
					id: $(this).attr("data-id"),
					caption: $(this).attr("data-caption"),
				});
			});
		},
		//渲染出弹窗的所有DOM
		renderDOM: function() {
			var strDom = '<div class="lightbox-pic-view">' +
				'<span class="lightbox-btn lightbox-prev-btn"></span>' +
				'<img class="lightbox-image" src=""/>' +
				'<span class="lightbox-btn lightbox-next-btn"></span>' +
				'</div>' +
				'<div class="lightbox-pic-caption">' +
				'<div class="lightbox-caption-area">' +
				'<p class="lightbox-pic-desc"></p>' +
				'<span class="lightbox-of-index"></span>' +
				'</div>' +
				'<span class="lightbox-close-btn"></span>' +
				'</div>';
			//插入到this.popupWin
			this.popupWin.html(strDom);
			//把遮罩和弹出框插入到body
			this.bodyNode.append(this.popupMask, this.popupWin);
		}
	}

	window['LightBox'] = LightBox;

})(jQuery);