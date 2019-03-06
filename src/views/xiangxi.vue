<template>
  <main id="register" class="view" role="main">
    <md-field>
      <md-field-item style="background-color:#6799AF" name="item0" :title="form.productName" solid>
        <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
      </md-field-item>
    </md-field>
    <div style="height: calc(100% - 99px);overflow: auto;">
      <div style="width:100%;">
        <md-field>
          <md-field-item>
            <div class="flex-content">
              <div style="width:100px;text-align:center">
                <div style="margin-top:10px;">
                  <md-icon @click.native="basicDialog.open = true" style="width:40px;height:40px;" name="shangliao"
                    slot="left" class="md-icon"></md-icon>
                  <p>关键组件1</p>
                </div>
                <div style="margin-top:40px">
                  <md-icon style="width:40px;height:40px;" name="chuansongdai" slot="left" class="md-icon"></md-icon>
                  <p>关键组件2</p>
                </div>
                <div style="margin-top:40px">
                  <md-icon style="width:40px;height:40px;" name="hanjie" slot="left" class="md-icon"></md-icon>
                  <p>关键组件3</p>
                </div>
              </div>
              <div class="pro-line">
                <div>生</div>
                <div>产</div>
                <div>线</div>
              </div>
              <div style="width:100px;text-align:center">
                <div style="margin-top:10px;">
                  <md-icon style="width:40px;height:40px;" name="jiqiren" slot="left" class="md-icon"></md-icon>
                  <p>关键组件4</p>
                </div>
                <div style="margin-top:40px">
                  <md-icon style="width:40px;height:40px;" name="chuansongdai" slot="left" class="md-icon"></md-icon>
                  <p>关键组件5</p>
                </div>
                <div style="margin-top:40px">
                  <md-icon style="width:40px;height:40px;" name="xialiao" slot="left" class="md-icon"></md-icon>
                  <p>关键组件6</p>
                </div>
              </div>
            </div>

          </md-field-item>
          <md-field-item>
            <div style="width:100%">
              <span>价格:{{form. price}} </span>
              <span>运费:{{form. postFare}} </span>
              <span>库存:{{form. stock}} </span>
              <span style="float:right">提供者: {{form. shopName}}</span>
            </div>
          </md-field-item>
        </md-field>
        <md-field style="margin-top:20px">
          <md-field-item>
            <div>
              <h4>方案详情:{{form.detail}}</h4>
            </div>

          </md-field-item>
        </md-field>
      </div>
    </div>
    <md-field class="bottom">
      <md-field-item class="bottom1">
        <md-icon slot="left" style="width:30px;height:30px;margin-left:0.2rem;" name="shopcar" class="md-icon"></md-icon>
        <md-button @click.native="jia()">加入购物车</md-button>
        <md-button style="background-color:red" @click.native="pay">立即购买</md-button>
      </md-field-item>
    </md-field>

  </main>
</template>

<script>
import '@/my-project-svg-folder/arrowl.svg'
import '@/my-project-svg-folder/arrowr.svg'

import '@/my-project-svg-folder/chuansongdai.svg'
import '@/my-project-svg-folder/shangliao.svg'
import '@/my-project-svg-folder/xialiao.svg'
import '@/my-project-svg-folder/hanjie.svg'
import '@/my-project-svg-folder/jiqiren.svg'
import axios from 'axios'

export default {
  data () {
    return {
      res: {
        productId: ''
      },
      res1: {
        authorization: '',
        count: '1',
        productId: '',
        sampleroomId: '',
        componentId: ''
      },
      form: {
        price: '',
        stock: '',
        shopName: '',
        postFare: '',
        productName: '',
        detail: ''
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      const params = this.$route.params.productId
      this.res.productId = params
      axios.post('http://101.132.44.253:8770/queryProductDetail', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.form = response.data.data.productDetail
        console.log(111)
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
    jia () {
      const params = this.$route.params.productId
      this.res1.productId = params
      this.res1.authorization = localStorage.getItem('authorization')
      this.res1.sampleroomId = localStorage.getItem('sampRoomId')
      this.res1.componentId = this.$route.params.componentId
      axios.post('http://101.132.44.253:8770/addCarts', this.res1, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.$message({
          type: 'success',
          message: response.data.message
        })
      })
    },
    idset () {
      this.$router.push({
        path: '/zhuye'
      })
    },
    element () {
      this.$router.push({
        path: '/element'
      })
    },
    xiangxi () {
      this.$router.push({
        path: '/xiangxi'
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
    padding: 0;
    width: 100%
  }

  .bottom1>>>.md-field-item-inner {
    padding: 0;
    width: 100%
  }

  .bottom1>>>.md-field-item-content {
    justify-content: flex-end;
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

  .md-item {
    flex: 1;
    text-align: center
  }

  .md-item>p {
    font-size: 12px
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

  .md-field-item>>>.md-field-item-label.solid {
    width: 300px;
  }

  .flex-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .pro-line {
    width: 1rem;
    height: 3.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #eee;
  }

  /* .md-popup.center>>>.md-popup-box {
    width: 100%
  }

  .md-example-child-drop-menu-3 .md-drop-menu-custom-title {
    font-size: 28px
  }

  .md-example-child-drop-menu-3 .md-drop-menu-custom-brief {
    font-size: 20px;
    color: #999
  } */

  /* .md-example-popup {
    position: relative;
    font-size: font-minor-large;
    background: color-bg-base;
    box-sizing: border-box;
    text-align: center;
  } */

  /* .md-example-popup-center {
    padding: 50px;
    border-radius: radius-normal;
  } */

  .md-dialog>>>.md-dialog-content {
    width: 100%
  }

  .md-dialog>>>.md-popup-box {
    width: 100%
  }

  .md-dialog>>>.md-drop-menu {
    position: absolute;
  }

</style>
