<template>
  <main id="register" class="view" role="main">
    <md-field>
      <md-field-item style="background-color:#6799AF;" name="item0" title="填写订单" solid>
        <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
      </md-field-item>
    </md-field>
    <div class="md-example-child md-example-child-agree md-example-child-0">
      <md-field style="margin-top:10px" v-model="shippingListVoList">
        <md-field-item @click.native="qqqq()">
          <div>
            <p>{{shippingListVoList.userName}} {{shippingListVoList.phoneNumber}}</p>
            <p>{{shippingListVoList.receviceAddress}}</p>
          </div>
        </md-field-item>
      </md-field>
      <!-- <md-field>
        <md-field-item>
          <md-icon @click.native="qqqq()" style="float:right" name="address" class="md-icon"></md-icon>
          <div>
            <p style="margin-left:10px">张三 136****3634</p>

            <p style="margin-left:10px">浙江省杭州市西湖区古墩路100号</p>
          </div>

        </md-field-item>
      </md-field> -->
      <md-field style="margin-top:10px" v-for="(item,index) in shopcarList" :key="index">
        <md-field-item>
          <span style="float:right">{{item.shopName}}</span>
        </md-field-item>
        <md-field-item>
          <div style="width:100%">
            <img src="" alt="">
            <span>{{item.sampleName}}/{{item.productName}} </span>
            <span style="float:right">￥{{item.price}}</span>
            <br>
            <br />
          </div>
        </md-field-item>
        <md-field-item class="color1">
          <div style="width:100%">
            <span style="margin-left:10px">商品小计:</span>
            <span style="float:right">￥{{item.price}}</span>
            <br>
            <br />
            <span style="margin-left:10px">运费:</span>
            <span style="float:right">￥{{item.postFare}}</span>
          </div>
        </md-field-item>
      </md-field>
    </div>
    <md-field class="bottom">
      <md-field-item class="bottom1">
        <div style="width:100%">
          <span style="line-height:1rem;">共:{{totalNum}}件</span>
          <span style="line-height:1rem;">需付款:￥{{totalPrice}}</span>
          <md-button @click.native="submit(totalPrice)">结算</md-button>
        </div>

      </md-field-item>
      <md-field-item class="color" name="item5">
        <div class="md-item">
          <md-icon name="yangbanjian" size="lg"></md-icon>
          <p>样板间</p>
        </div>
        <div class="md-item">
          <md-icon name="shopcar" size="lg" @click.native="shopcar"></md-icon>
          <p>购物车</p>
        </div>
        <div class="md-item">
          <md-icon name="idset" size="lg" @click.native="idset"></md-icon>
          <p>我的</p>
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
      shopcarList: [],
      shippingListVoList: '',
      res: {
        authorization: '',
        sampleroomId: '',
        productIds: '',
        receviceAddressId: '',
        componentId: ''
      }
    }
  },
  created () {
    this.shopcarList = JSON.parse(localStorage.getItem('shopcartChecked'))
    var arr = []
    this.shopcarList.forEach(function (item) {
      arr.push(item.productId)
      return arr
    })
    this.productIds = arr.toString()
    localStorage.setItem('productIds', this.productIds)
    console.log('productIds', this.productIds)
    this.shippingListVoList = JSON.parse(localStorage.getItem('fandi'))
    console.log(JSON.parse(localStorage.getItem('fandi')))
  },
  computed: {
    totalNum: function () {
      let num = 0
      this.shopcarList.forEach(function (item) {
        num += item.amount
      })
      return num
    },
    totalPrice: function () {
      let price = 0
      this.shopcarList.forEach(function (item) {
        price += item.price * item.amount + item.postFare
      })
      return price
    }
  },
  methods: {
    qqqq () {
      this.$router.push({
        path: '/dixuanze'
      })
    },
    shopcar () {
      this.$router.push({
        path: '/shopcar'
      })
    },
    back () {
      this.$router.back()
    },
    submit (totalPrice) {
      this.res.receviceAddressId = this.shippingListVoList.id
      this.shopcarList = JSON.parse(localStorage.getItem('shopcartChecked'))
      var arr = []
      this.shopcarList.forEach(function (item) {
        arr.push(item.productId)
        return arr
      })
      this.res.productIds = arr.toString()
      this.res.componentId = localStorage.getItem('componentId') ? localStorage.getItem('componentId') : '0'
      this.res.authorization = localStorage.getItem('authorization')
      this.res.sampleroomId = localStorage.getItem('sampRoomId')
      axios.post('http://101.132.44.253:8768/addOrder', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log('add', response)
        this.$router.push({
          name: 'Pay',
          params: {
            orderNo: response.data.data.orderInfoVo.orderNo,
            price: totalPrice
          }
        })
      })
    },
    idset () {
      this.$router.push({
        path: '/zhuye'
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

  /* .jiesuan{
  position: fixed;
  bottom:100px;
  width: 100%;
} */

</style>
