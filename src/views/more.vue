<template>
  <main id="register" class="view" role="main">
    <md-field>
      <md-field-item style="background-color:#6799AF;" name="item0" title="订单详情" solid>
        <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
      </md-field-item>
    </md-field>
    <div>
      <md-field>
        <md-field-item>
          <div>
            <h3 v-if="form1.status=='0'" style="margin-left:10px">待付款</h3>
            <h3 v-if="form1.status=='1'" style="margin-left:10px">待发货</h3>
            <h3 v-if="form1.status=='2'" style="margin-left:10px">卖家已发货</h3>
            <h3 v-if="form1.status=='3'" style="margin-left:10px">退换货</h3>

            <p style="margin-left:10px">订单金额（含运费）：￥{{form1.price}}</p>
          </div>

        </md-field-item>
        <md-field-item>
          <md-icon style="float:right" name="address" class="md-icon"></md-icon>
          <div>
            <p style="margin-left:10px">{{form.username}} {{form.phoneNumber}}</p>

            <p style="margin-left:10px">{{form.takeAddress}}</p>
          </div>

        </md-field-item>
      </md-field>
      <md-field v-for="(item,index) in orderDetailList" :key="index">
        <md-field-item>
          {{item.shopName}}
        </md-field-item>
        <md-field-item>
          <div style="width:100%">
            <img src="" alt="">
            <span>{{item.sampleName}}/{{item.componentName}} </span>
            <span style="float:right">￥{{item.price}}</span>
            <br>
            <br />
            <span class="span">*{{item.count}}</span>
          </div>
        </md-field-item>
        <md-field-item class="color1">
        <div style="width:100%">
          <span style="margin-left:10px">商品小计</span>
          <span style="float:right">￥{{item.totalPrice}}</span>
          <br>
          <br />
          <span style="margin-left:10px">运费</span>
          <span style="float:right">￥{{item.postFare}}</span>
          <br>
          <br />
          <span style="margin-left:10px">实付款(含运费)</span>
          <span style="float:right">￥{{item.actualPrice}}</span>
        </div>
      </md-field-item>
      </md-field>
    </div>
    <md-field>
      <!-- <md-field-item class="color1">
        <div style="width:100%">
          <span style="margin-left:10px">商品小计</span>
          <span style="float:right">￥{{form2.price}}</span>
          <br>
          <br />
          <span style="margin-left:10px">运费</span>
          <span style="float:right">￥{{form2.postFare}}</span>
          <br>
          <br />
          <span style="margin-left:10px">实付款(含运费)</span>
          <span style="float:right">￥{{form2.totalPrice}}</span>
        </div>
      </md-field-item> -->
      <md-field-item>
        <div style="width:100%">
          <p style="margin-left:10px">订单编号：{{form3.orderNo}}</p>
          <p v-if="form3.createTime" style="margin-left:10px">创建时间：{{this.formatDate(form3.createTime = form3.createTime ?
            form3.createTime:'')}}</p>
          <p v-if="form3.payTime" style="margin-left:10px">支付时间：{{this.formatDate(form3.payTime = form3.payTime ? form3.payTime:'')}}</p>
          <p v-if="form3.deliveryTime" style="margin-left:10px">发货时间：{{this.formatDate(form3.deliveryTime)}}</p>
          <p v-if="form3.completeTime" style="margin-left:10px">完成时间：{{this.formatDate(form3.completeTime)}}</p>
        </div>

      </md-field-item>
    </md-field>

    <md-field class="jiesuan">

    </md-field>
    <md-field class="bottom">
      <md-field-item>
        <div style="width:100%">
          <md-button @click="pays(form3.orderNo,form1.price)" style="float:right;color:#000" type="ghost" size="small">立即付款</md-button>
          <md-button style="margin-left:180px;color:#000" size="small" type="ghost">取消订单</md-button>
        </div>
      </md-field-item>
    </md-field>
  </main>
</template>

<script>
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
import axios from 'axios'
export default {
  data () {
    return {
      res: {
        authorization: '',
        orderNo: ''
      },
      orderDetailList: [],
      form: {
        username: '',
        phoneNumber: '',
        takeAddress: ''

      },
      form1: {
        price: '',
        status: ''
      },
      // form2: {
      //   images: '',
      //   shopName: '',
      //   sampleName: '',
      //   componentName: '',
      //   count: '',
      //   postFare: '',
      //   price: '',
      //   totalPrice: '',
      //   actualPrice: ''
      // },
      form3: {
        orderNo: '',
        createTime: '',
        payTime: '',
        deliveryTime: '',
        completeTime: ''
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    formatDate (timestamp) {
      var date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '/'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/'
      var D = date.getDate() + ' '
      var h = date.getHours() + ':'
      var m = date.getMinutes() + ':'
      var s = date.getSeconds()
      return Y + M + D + h + m + s
    },
    getList () {
      this.res.orderNo = this.$route.params.orderNo
      this.res.authorization = localStorage.getItem('authorization')
      axios.post('http://101.132.44.253:8768/orderUserDetail1', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.form = response.data.data.userOrderDetailVo
        console.log(response)
      })
      axios.post('http://101.132.44.253:8768/orderStatus', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.form1 = response.data.data.orderStatusVo
        console.log(response)
      })
      axios.post('http://101.132.44.253:8768/orderUserDetail2', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.orderDetailList = response.data.data.orderDetailList
        console.log(response)
      })
      axios.post('http://101.132.44.253:8768/orderTime', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.form3 = response.data.data.orderTimeVo
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
        path: '/pay'
      })
    },
    idset () {
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

  .view>>>.color1 {
    background-color: #CAEFD1
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

  .view>>>.md-input-item {
    padding-right: 0;

  }

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

  .md-button.ghost:after {
    border: 0.02rem solid #999;
  }

  /* .jiesuan{
  position: fixed;
  bottom:100px;
  width: 100%;
} */

</style>
