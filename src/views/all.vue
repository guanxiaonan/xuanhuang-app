<template>
  <main id="register" class="view" role="main">
    <div class="md-example-child md-example-child-agree md-example-child-0">
      <md-field-item style="background-color:#6799AF;padding-left:0.22rem" name="item0" title="茶园数据" solid>
        <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
      </md-field-item>
      <div class="md-example-child md-example-child-tabs md-example-child-tabs-1">
        <md-tabs show-ink-bar ref="tabs">
          <div slot="title">
            <div>全部
            </div>
          </div>
          <div class="tab-content">
            <md-field style="margin-top:20px" v-for="(item,index) in orderInfolist" :key="index">
              <md-field-item>
                <div style="width:100%">
                  <span>组件供应商名称:{{item.shopName}}</span>
                  <span v-if="item.status=='0'" style="float:right;color:#fc9153;font-weight: 500;">待付款</span>
                  <span v-if="item.status=='1'" style="float:right;color:#fc9153;font-weight: 500;">待发货</span>
                  <span v-if="item.status=='2'" style="float:right;color:#fc9153;font-weight: 500;">卖家已发货</span>
                  <span v-if="item.status=='3'" style="float:right;color:#fc9153;font-weight: 500;">退换货</span>
                </div>
              </md-field-item>
              <md-field-item @click.native="more(item.orderNo)">
                <div style="width:100%;heigt:50px">
                  <img src="" alt="">
                  <span>方案/组件供应商名称:{{item.sampleName}}/{{item.componentName}}</span>
                  <br>
                  <br />
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%;line-height:1">
                  <span style="float:right;font-size:12px">共{{item.count}}件商品，需付款￥{{item.totalPrice}}元</span>
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%">
                  <md-button v-if="item.status=='0'" @click="pays(item.orderNo,item.totalPrice)" style="float:right"
                    type="ghost" size="small">立即付款</md-button>
                  <md-button v-if="item.status=='3'" style="float:right" type="ghost" size="small">查看详情</md-button>
                  <md-button v-if="item.status=='2'" @click="que()" style="float:right" size="small" type="ghost">确认收货</md-button>
                  <md-button v-if="item.status=='1'||item.status=='2'" @click="tui(item.orderNo,item.totalPrice)"  style="float:right" size="small"
                    type="ghost">申请退款</md-button>
                  <md-button v-if="item.status=='0'" style="margin-left:180px" size="small" @click="canel(item.orderNo)"
                    type="ghost">取消订单</md-button>
                  <md-button v-if="item.status=='3'" style="margin-left:180px" size="small" type="ghost">取消售后</md-button>
                </div>
              </md-field-item>
            </md-field>
          </div>
          <div slot="title">
            <div>
              茶园1
            </div>
          </div>
          <div>
            <md-field style="margin-top:20px" v-for="(item,index) in orderInfolist" v-if="item.status=='0'" :key="index">
              <md-field-item>
                <div style="width:100%">
                  <span>组件供应商名称:{{item.shopName}}</span>
                  <span v-if="item.status=='0'" style="float:right;color:#fc9153;font-weight: 500;">待付款</span>
                </div>
              </md-field-item>
              <md-field-item @click.native="more(item.orderNo)">
                <div style="width:100%;heigt:50px">
                  <img src="" alt="">
                  <span>方案/组件供应商名称:{{item.sampleName}}/{{item.componentName}}</span>
                  <br>
                  <br />
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%;line-height:1">
                  <span style="float:right;font-size:12px">共{{item.count}}件商品，需付款￥{{item.totalPrice}}元</span>
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%">
                  <md-button @click="pays(item.orderNo,item.totalPrice)" style="float:right" type="ghost" size="small">立即付款</md-button>
                  <md-button style="margin-left:180px" size="small" type="ghost" @click="canel(item.orderNo)">取消订单</md-button>
                </div>
              </md-field-item>
            </md-field>
          </div>
          <div slot="title">
            <div>
              茶园2
            </div>
          </div>
          <div>
            <md-field style="margin-top:20px" v-for="(item,index) in orderInfolist" v-if="item.status=='1'" :key="index">
              <md-field-item>
                <div style="width:100%">
                  <span>组件供应商名称:{{item.shopName}}</span>
                  <span v-if="item.status=='1'" style="float:right;color:#fc9153;font-weight: 500;">待发货</span>
                </div>
              </md-field-item>
              <md-field-item @click.native="more(item.orderNo)">
                <div style="width:100%;heigt:50px">
                  <img src="" alt="">
                  <span>方案/组件供应商名称:{{item.sampleName}}/{{item.componentName}}</span>
                  <br>
                  <br />
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%;line-height:1">
                  <span style="float:right;font-size:12px">共{{item.count}}件商品，需付款￥{{item.totalPrice}}元</span>
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%">
                  <md-button style="float:right" size="small" type="ghost" @click="tui(item.orderNo,item.totalPrice)">申请退款</md-button>
                </div>
              </md-field-item>
            </md-field>
          </div>
          <div slot="title">
            <div>
              茶园3
            </div>
          </div>
          <div>
            <md-field style="margin-top:20px" v-for="(item,index) in orderInfolist" v-if="item.status=='2'" :key="index">
              <md-field-item>
                <div style="width:100%">
                  <span>组件供应商名称:{{item.shopName}}</span>
                  <span v-if="item.status=='2'" style="float:right;color:#fc9153;font-weight: 500;">待收货</span>
                </div>
              </md-field-item>
              <md-field-item @click.native="more(item.orderNo)">
                <div style="width:100%;heigt:50px">
                  <img src="" alt="">
                  <span>方案/组件供应商名称:{{item.sampleName}}/{{item.componentName}}</span>
                  <br>
                  <br />
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%;line-height:1">
                  <span style="float:right;font-size:12px">共{{item.count}}件商品，需付款￥{{item.totalPrice}}元</span>
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%">
                  <md-button v-if="item.status=='2'" @click="que()" style="float:right" size="small" type="ghost">确认收货</md-button>
                  <md-button style="margin-left:180px" size="small" type="ghost" @click="tui(item.orderNo,item.totalPrice)">申请退款</md-button>
                </div>
              </md-field-item>
            </md-field>
          </div>
          <!-- <div slot="title">
            <div>
              退换货
            </div>
          </div> -->
          <!-- <div>
            <md-field style="margin-top:20px" v-for="(item,index) in orderInfolist" v-if="item.status=='3'" :key="index">
              <md-field-item>
                <div style="width:100%">
                  <span>组件供应商名称:{{item.shopName}}</span>
                  <span v-if="item.status=='3'" style="float:right;color:#fc9153;font-weight: 500;"></span>
                </div>
              </md-field-item>
              <md-field-item @click.native="more(item.orderNo)">
                <div style="width:100%;heigt:50px">
                  <img src="" alt="">
                  <span>方案/组件供应商名称:{{item.sampleName}}/{{item.componentName}}</span>
                  <br>
                  <br />
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%;line-height:1">
                  <span style="float:right;font-size:12px">共{{item.count}}件商品，需付款￥{{item.totalPrice}}元</span>
                </div>
              </md-field-item>
              <md-field-item>
                <div style="width:100%">
                  <md-button v-if="item.status=='3'" style="float:right" size="small" type="ghost">查看详情</md-button>
                </div>
              </md-field-item>
            </md-field>
          </div> -->
        </md-tabs>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import '@/my-project-svg-folder/add.svg'
import '@/my-project-svg-folder/reduce.svg'
import '@/my-project-svg-folder/yangbanjian.svg'
import '@/my-project-svg-folder/user.svg'
import '@/my-project-svg-folder/order.svg'
import '@/my-project-svg-folder/pay.svg'
import '@/my-project-svg-folder/tuihuan.svg'
import '@/my-project-svg-folder/shopcar.svg'
import '@/my-project-svg-folder/address.svg'
import '@/my-project-svg-folder/idset.svg'
import '@/my-project-svg-folder/waitsend.svg'
import '@/my-project-svg-folder/waittake.svg'
import '@/my-project-svg-folder/arrowl.svg'
export default {
  data () {
    return {
      orderInfolist: [],
      res: {
        authorization: '',
        currentPage: 1,
        pageSize: 10
      },
      res2: {
        authorization: '',
        orderNo: ''
      }
    }
  },
  mounted () {
    this.$refs.tabs.selectTab(this.$route.query.type)
  },
  created () {
    this.getList()
  },
  methods: {
    tui (orderNo, totalPrice) {
      this.$router.push({
        name: 'Tuihuo',
        params: {
          orderNo: orderNo,
          price: totalPrice
        }
      })
    },
    canel (id) {
      this.res2.authorization = localStorage.getItem('authorization')
      this.res2.orderNo = id
      this.$confirm('确定要取消订单吗？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.post('http://101.132.44.253:8768/cancelOrder', this.res2, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (response.data.code === '200') {
            this.$message({
              type: 'success',
              message: response.data.message
            })
            this.getList()
          } else {
            this.$message({
              type: 'error',
              message: response.data.message
            })
          }
        })
      })
    },
    que () {
      this.$confirm('确定要收获吗？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '收获成功'
        })
      })
    },
    getList () {
      this.res.authorization = localStorage.getItem('authorization')
      axios.post('http://101.132.44.253:8768/order/orderList', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.orderInfolist = response.data.data.orderInfoList
        console.log(response)
      })
    },
    onChange (name, checked) {
      console.log(`agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`)
    },
    shopcar () {
      this.$router.push({
        path: '/shopcar'
      })
    },
    back () {
      this.$router.back()
    },
    submit () {
      this.$router.push({
        path: '/submit'
      })
    },
    shouhou () {
      this.$router.push({
        path: '/shouhou'
      })
    },
    aaa () {
      this.$router.push({
        path: '/zhuye'
      })
    },
    pays (orderNo, price) {
      this.$router.push({
        name: 'Pay',
        params: {
          orderNo: orderNo,
          price: price
        }
      })
    },
    more (orderNo) {
      this.$router.push({
        name: 'More',
        params: {
          orderNo: orderNo
        }
      })
    }
  }
}

</script>
<style scoped>
  .view {
    height: 100%;
    background: url('~@/assets/images/Rectangle.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  .view>>>.bottom1 {
    padding: 0
  }

  .bottom1>>>.md-field-item-inner {
    padding: 0;
  }

  .bottom {
    display: flex;
    left: 0;
    bottom: 0px;
    width: 100%;
    position: fixed;
  }

  .view>>>.md-agree .md-agree-icon {
    line-height: 1;
    display: flex;
    align-items: center;
  }

  /* .md-icon .md-icon-circle-right .lg {
    vertical-align: top;
    margin: .2rem;
  } */

  .bottom.md-icon {
    flex: 1;
    text-align: center;
  }

  .view>>>.md-field-content {
    width: 100%;
  }

  /* .md-icon.lg {
    width: 0.55rem;
    height: 0.55rem;
  } */

  .md-item {
    flex: 1;
    text-align: center
  }

  .span {
    float: right;
    width: 40px;
    text-align: center;
  }

  .md-item>p {
    font-size: 12px
  }

  .color {
    background-color: #E6E5E4;
  }

  .view>>>.md-input-item-right {
    width: 1.6rem;
  }

  /* .view>>>.md-input-item {
    padding-right: 0;

  } */

  .view>>>.md-button {
    font-size: 10px;
  }

  .md-button.primary.large,
  .md-button.primary.small {
    width: 1.6rem;
    float: right;
  }

  .view>>>.md-field-item-title {
    color: #ffffff;
    font-size: 0.32rem;
  }

  /* .jiesuan{
  position: fixed;
  bottom:100px;
  width: 100%;
} */

  .md-example-child-tabs-1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 1rem;
    bottom: 0;
    overflow: hidden;
  }

  .md-tabs {
    height: 100%;
  }

  .md-tab-content {
    position: relative;
  }

  /* .tab-content{
 position: absolute; left: 0; right: 0; top: 0; bottom: 0; height: 100%; overflow: auto;
} */

</style>
