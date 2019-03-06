<template>
  <main id="register" class="view" role="main">
    <div class="md-example-child md-example-child-agree md-example-child-0">
      <md-field>
        <md-field-item style="background-color:#6799AF;" name="item0" title="订单支付" solid>
          <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        </md-field-item>
        <md-field-item>
          <div style="width:100%">
            <span>订单编号:</span>
            <span style="float:right;color:#fc9153;font-weight: 500;">{{this.res.orderNo}}</span>
          </div>
        </md-field-item>
        <md-field-item>
          <div style="width:100%">
            <span>订单金额:</span>
            <span style="float:right;color:#fc9153;font-weight: 500;">￥{{this.res.price}}</span>
          </div>
        </md-field-item>
      </md-field>
      <md-field style="margin-top:20px">
        <md-field-item @click="isCashierhow = !isCashierhow">
          <md-icon style="width:1rem;height:1rem;" name="zhifubao" slot="left" class="md-icon"></md-icon>
          <span>使用支付宝支付</span>
        </md-field-item>
      </md-field>
      <md-cashier ref="cashier" v-model="isCashierhow" :channels="cashierChannels" :payment-amount="this.res.price" payment-describe="关于支付金额的特殊说明"
        @select="onCashierSelect" @pay="onCashierPay"></md-cashier>
    </div>
  </main>
</template>

<script>
import '@/my-project-svg-folder/zhifubao.svg'
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
      res1: {
        authorization: '',
        out_trade_no: '',
        price: ''
      },
      res: {
        orderNo: '',
        price: ''
      },
      isCashierhow: false,
      isCashierCaptcha: false,
      cashierAmount: '100.00',
      cashierResult: 'success',
      cashierResults: [{
        text: '支付成功',
        value: 'success'
      }, {
        text: '支付失败',
        value: 'fail'
      }],
      cashierChannels: [{
        icon: 'zhifubao',
        text: '支付宝支付',
        value: '002'
      }]
    }
  },
  computed: { cashier () { return this.$refs.cashier } },
  created () {
    this.res.orderNo = this.$route.params.orderNo
    this.res.price = this.$route.params.price
  },
  methods: {
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
    aaa () {
      this.$router.push({
        path: '/zhuye'
      })
    },
    onCashierSelect (item) {
      console.log(`[Mand Mobile] Select ${JSON.stringify(item)}`)
    },
    onCashierPay (item) {
      this.res1.authorization = localStorage.getItem('authorization')
      this.res1.price = this.$route.params.price
      this.res1.out_trade_no = this.$route.params.orderNo
      axios.post('http://101.132.44.253:8768/pay/alipayAppPay', this.res1, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        localStorage.setItem('sdk', response.data.data)
        this.doPay()
      })
    },
    doPay () {
      this.createPay().then(() => {
        this.cashier.next(this.cashierResult, {
          buttonText: '好的',
          handler: () => {
          }
        })
      })
    },
    createPay () {
      this.cashier.next('loading')
      return new Promise(resolve => {
        this.timer = setTimeout(() => {
          resolve()
        },
        3000)
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
