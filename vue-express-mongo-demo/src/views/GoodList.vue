<template>
	<div>
    <symbol id="icon-arrow-short" viewBox="0 0 25 32">
        <title>arrow-short</title>
        <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
    </symbol>
    <symbol id="icon-status-ok" viewBox="0 0 32 32">
        <title>status-ok</title>
        <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
        <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
    </symbol>
      <nav-header></nav-header>
      <nav-bread>
      	<span slot="bread">GOODS</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" @click="sortGoods" class="price">Price <svg class="icon icon-arrow-short" :class="{'sort-up': !sortFlag}"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)"  @click="priceChecked = 'all'" :class="{'cur': priceChecked == 'all'}">All</a></dd>
                <dd v-for="(item,index) in priceFilter" @click="setPriceFilter(index)">
                  <a href="javascript:void(0)" :class="{'cur': priceChecked == index}">{{item.startPrice}} - {{item.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">

                <ul class="clearfix">
                  <li v-for="(item,index) in goodsList">
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/'+item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                    加载中。。。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayflag" @click="closePop"></div>
      <modal v-bind:mdShow="mdShow" v-on:close="cosleModal">
          <p slot="message">
            请先登录，否则无法加入购物车！
          </p>
          <div slot="btnGroup">
            <a class="btn btn--m" href="javascript:;" @click="mdShow = false">关闭</a>
          </div>
        </modal>

        <modal v-bind:mdShow="mdShowCart" v-on:close="cosleModal">
          <p slot="message">
            <svg class="icon icon-status-ok" >
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
            </svg>
            <span>加入购物车成功！</span>
          </p>
          <div slot="btnGroup">
            <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
            <router-link class="btn btn--m" href="javascript:;" to="/cart">查看购物车</router-link>
          </div>
        </modal>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
import './../assets/css/base.css';
import './../assets/css/product.css';
import './../assets/css/login.css';
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import NavBread from '@/components/Bread'
import Modal from '@/components/Modal'
export default {
	name: 'GoodList',
	data () {
		return {
			goodsList: [],
			priceFilter: [
				{
					startPrice: '0.00',
					endPrice: '100.00'
				},
                {
                    startPrice: '100.00',
                    endPrice: '500.00'
                },
				{
					startPrice: '500.00',
					endPrice: '1000.00'
				},
				{
					startPrice: '1000.00',
					endPrice: '5000.00'
				}
			],
			priceChecked: 'all',
			filterBy: false,
			overLayflag: false,
            sortFlag: true,
            page: 1,
            pageSize: 8,
            busy: true,
            mdShow: false,
            mdShowCart: false
		}
	},
	components: {
		'NavHeader': NavHeader,
		'NavFooter': NavFooter,
		'NavBread': NavBread,
        'Modal': Modal
	},
	mounted: function(){
		this.getGoodsList();
	},
	methods: {
		showFilterPop(){
            this.filterBy = true;
            this.overLayflag = true;
		},
        closePop(){
            this.filterBy = false;
            this.overLayflag = false;
        },
        setPriceFilter(index){
            this.priceChecked = index;
            this.page = 1;
            this.getGoodsList();
            this.closePop();
        },
        getGoodsList(flag){
            let param = {
                page: this.page,
                pageSize: this.pageSize,
                sort: this.sortFlag ? 1 : -1,
                priceLevel: this.priceChecked
            };
            this.$http.get('/goods/list',{
                params: param
            }).then((res) => {
                if(res.data.status == "0"){
                    if(flag){
                        this.goodsList = this.goodsList.concat(res.data.result.list);
                        if(res.data.result.list.length < 8){
                            this.busy = true;
                        }else{
                            this.busy = false;
                        }
                    }else{
                        this.goodsList = res.data.result.list;
                        this.busy = false;
                    }
                }else{
                    this.goodsList = [];
                }
            })
        },
        sortGoods(){
            this.sortFlag = !this.sortFlag;
            this.page = 1;
            this.getGoodsList();
        },
        loadMore(){
            this.busy = true;
            setTimeout(() => {
                this.page++;
                this.getGoodsList(true);
            },500)
        },
        addCart(productId){
            this.$http.post('/goods/addCart', {
                productId: productId
            }).then((res)=>{
                if(res.data.status == 0){
                    this.mdShowCart = true;
                }else{
                    this.mdShow = true;
                }
                
            })
        },
        cosleModal () {  //关闭模态框
          this.mdShow = false;
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.load-more{
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.sort-up{
    transform: rotate(180deg);
    transition: all .3 ease-out;
}
</style>
