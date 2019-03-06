<template>
  <main id="register" class="view" role="main">
    <div class="md-example-child md-example-child-agree md-example-child-0">
      <md-field-item style="background-color:#6799AF;" name="item0" title="农事管理" solid>
        <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
      </md-field-item>
      <div style="height: calc(100% - 180px);overflow: auto;position:fixed;top:50px;bottom:50px;width:100%">
        <md-field style="margin-top:10px" v-for="(item,index) in shopcarList" :key="index">
          <md-field-item>
            <!-- <input type="checkbox" v-model="checked" :value="item"> -->
            <span style="float:right">{{item.shopName}}</span>
          </md-field-item>
          <md-field-item>
            <div style="width:100%">
              <input type="checkbox" v-model="checked" :value="item">
              <img src="" alt="">
              <span>{{item.sampleName}}/{{item.productName}} </span>
              <span style="float:right">￥{{item.price}}</span>
              <br>
              <br />
              <!-- <md-icon style="float:right" name="add" class="md-icon"></md-icon>
          <span class="span">{{item.amount}}</span>
          <md-icon style="float:right" name="reduce" class="md-icon"></md-icon> -->
              <md-icon style="float:right" name="delete" @click.native="del(item.productId,item.sampleRoomId)"></md-icon>
              <el-input-number size="small" style="float:right,margin-right:1rem" v-model="item.amount" @change="handleChange"
                :min="1" label="描述文字"></el-input-number>
            </div>
          </md-field-item>
        </md-field>
      </div>
      <md-field class="bottom">
        <!-- <md-field-item class="bottom1">
          <div style="width:100%">
            <label><input type="checkbox" @click="selectAll()" style="line-height:1rem;" :checked="checked.length==shopcarList.length">全选</label>
            <span style="line-height:1rem;">共:{{totalNum}}件</span>
            <span style="line-height:1rem;">合计:{{totalPrice}}（不含运费）</span>
            <md-button @click.native="submit()">结算</md-button>
          </div>
        </md-field-item> -->
        <md-field-item class="color" name="item5">
          <div class="md-item">
            <md-icon name="map" size="lg"></md-icon>
            <p>地图</p>
          </div>
          <div class="md-item">
            <md-icon name="tea" size="lg" @click.native="shopcar"></md-icon>
            <p>农事</p>
          </div>
          <div class="md-item">
            <md-icon name="idset" size="lg" @click.native="aaa"></md-icon>
            <p>我的</p>
          </div>
        </md-field-item>
      </md-field>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import '@/my-project-svg-folder/delete.svg'
import '@/my-project-svg-folder/add.svg'
import '@/my-project-svg-folder/reduce.svg'
import '@/my-project-svg-folder/map.svg'
import '@/my-project-svg-folder/user.svg'
import '@/my-project-svg-folder/order.svg'
import '@/my-project-svg-folder/pay.svg'
import '@/my-project-svg-folder/tuihuan.svg'
import '@/my-project-svg-folder/tea.svg'
import '@/my-project-svg-folder/address.svg'
import '@/my-project-svg-folder/idset.svg'
import '@/my-project-svg-folder/waitsend.svg'
import '@/my-project-svg-folder/waittake.svg'
import '@/my-project-svg-folder/arrowl.svg'

export default {
  data () {
    return {
      checked: [],
      res: {
        authorization: ''
      },
      res1: {
        productId: '',
        sampleroomId: '',
        componentId: '',
        authorization: ''
      },
      sum: '',
      checkAll: false,
      isIndeterminate: true,
      shopcarList: []
    }
  },
  created () {
    this.getList()
  },
  computed: {
    totalNum: function () {
      let num = 0
      this.checked.forEach(function (item) {
        num += item.amount
      })
      return num
    },
    totalPrice: function () {
      let price = 0
      this.checked.forEach(function (item) {
        price += item.price * item.amount
      })
      return price
    }
  },
  methods: {
    del (id, sid) {
      for (var i = 0; i < this.checked.length; i++) {
        let index = this.shopcarList.indexOf(this.shopcarList[i])
        if (index >= 0) {
          this.$confirm('你确定删除吗, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.res1.productId = id
            this.res1.authorization = localStorage.getItem('authorization')
            this.res1.sampleroomId = sid
            this.res1.componentId = localStorage.getItem('componentId') ? localStorage.getItem('componentId') : '0'
            axios
              .post('http://101.132.44.253:8770/cancelCarts', this.res1, {
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(response => {
                this.getList()
                this.$message({
                  type: 'success',
                  message: response.data.message
                })
              })
          })
        }
      }
    },
    handleChange (value) {
      console.log(value)
    },
    selectAll: function () {
      if (this.checked.length > 0) {
        this.checked = []
      } else {
        for (var i = 0; i < this.shopcarList.length; i++) {
          this.checked.push(this.shopcarList[i])
        }
      }
    },
    handleCheckAllChange () {
      this.isIndeterminate = false
    },

    getList () {
      this.res.authorization = localStorage.getItem('authorization')
      axios.post('http://101.132.44.253:8770/queryCartList', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.shopcarList = response.data.data.shoppingCartlist
        console.log(response.data.data)
      })
    },
    // onChange (name, checked) {
    //   console.log(`agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`)
    // },
    shopcar () {
      this.$router.push({
        path: '/shopcar'
      })
    },
    back () {
      this.$router.back()
    },
    submit () {
      localStorage.setItem('shopcartChecked', JSON.stringify(this.checked))
      if (this.checked.length > 0) {
        this.$router.push({
          path: '/submit'
        })
      }
    },
    aaa () {
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
    height: 100%;
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

  .el-checkbox>>>.el-checkbox__label {
    width: 100%;
  }

  .md-item>p {
    font-size: 12px
  }

  .el-checkbox__label {
    width: 100%
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
