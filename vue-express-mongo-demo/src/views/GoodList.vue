<template>
	<div>
      <nav-header></nav-header>
      <nav-bread>
      	<span slot="bread">GOODS</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" @click="sortGoods" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
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
            busy: true
		}
	},
	components: {
		'NavHeader': NavHeader,
		'NavFooter': NavFooter,
		'NavBread': NavBread
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
            this.$http.get('/goods',{
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
                    alert('加入陈宫');
                }else{
                    alert("msg:" + res.msg);
                }
                
            })
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
</style>
