<template>
  <main id="register" class="view" role="main">
    <md-field-item style="background-color:#6799AF;padding-left:0.22rem" name="item0" title="地址" solid>
      <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
    </md-field-item>
    <div style="height: calc(100% - 99px);overflow: auto;position:fixed;top:50px;bottom:50px;width:100%">
      <md-field style="margin-top:10px" v-for="(item,index) in shippingListVoList" :key="index">
        <md-field-item>
          <div>
            <p>{{item.userName}} {{item.phoneNumber}}</p>
            <p>{{item.receviceAddress}}</p>
          </div>
        </md-field-item>
       <md-field-item >
          <md-agree style="width:100%;line-height:3.5" @change="onChange(item.id,item.isRegular)" v-model="item.isRegular">
            <span>默认地址</span>
          </md-agree>
          <md-button class="edit" icon="edit" @click="edit(item.id)">编辑</md-button>
          <md-button class="edit" icon="delete" @click="shanchu(item.id)">删除</md-button>
        </md-field-item>
      </md-field>
    </div>
    <md-field class="bottom">
      <md-button style="width:100%;font-size:16px" @click="addAdd">添加地址</md-button>
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
import '@/my-project-svg-folder/delete.svg'
import '@/my-project-svg-folder/edit.svg'
import '@/my-project-svg-folder/arrowl.svg'
import axios from 'axios'

export default {
  data () {
    return {
      shippingListVoList: [],
      item: {
        isRegular: ''
      },
      res: {
        authorization: '',
        currentPage: 1,
        pageSize: 20
      },
      res1: {
        authorization: '',
        receiveAddressId: ''
      },
      res2: {
        receiveId: '',
        authorization: '',
        isRegular: ''
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.res.authorization = localStorage.getItem('authorization')
      axios.post('http://101.132.44.253:8762/shippinglist', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log('response', response)
        // var arr = []
        const shippingListVoList = response.data.data.shippingListVoList
        for (var i in shippingListVoList) {
          shippingListVoList[i].isRegular = shippingListVoList[i].isRegular === '1'
        }
        this.shippingListVoList = shippingListVoList
      })
    },
    onChange (id, isregular) {
      const title = isregular ? '设置为默认地址' : '取消设置默认地址'
      this.$confirm('确定要' + title + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.res2.isRegular = isregular ? '1' : '0'
        console.log('11', this.res2.isRegular)
        this.res2.authorization = localStorage.getItem('authorization')
        this.res2.receiveId = id
        axios.post('http://101.132.44.253:8762/setRegular', this.res2, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          this.item.isRegular = response.data.data.isRegular !== 0
          console.log(isregular)
          this.getList()
        })
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
    addAdd () {
      this.$router.push({
        path: '/addAdd'
      })
    },
    edit (id) {
      this.$router.push({
        name: 'EditAdd',
        params: {
          id: id
        }
      })
    },
    shanchu (id) {
      this.res1.authorization = localStorage.getItem('authorization')
      this.res1.receiveAddressId = id
      this.$confirm('你确定删除该收货地址吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.post('http://101.132.44.253:8762/delAddress', this.res1, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (response.data.code === '200') {
            this.$message({
              type: 'success',
              message: '已成功删除'

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

  .md-button.primary.edit {
    background-color: #fff;
    color: #000;
  }

  /* .jiesuan{
  position: fixed;
  bottom:100px;
  width: 100%;
} */

</style>
