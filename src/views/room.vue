<template>
  <main id="register" class="view" role="main">
    <div  style="height: calc(100% - 63px);overflow: auto;">
       <!-- <el-row class="panel-group" :gutter="80"> -->
    <!-- <el-col :xs="24" :sm="24" :lg="10" class="card-panel-col"> -->
      <img src="../assets/images/map.jpeg" border="0" usemap="#teamap">
      <map name="teamap" id="teamap">
      <area shape="rectangle" coords="173,84,204,119" target="_blank"  @click="order3">
      <area shape="rectangle" coords="203,130,231,166" target="_blank" @click="order3" >
      <area shape="rectangle" coords="244,299,272,335" target="_blank" @click="order2" >
      <area shape="rectangle" coords="190,315,219,351" target="_blank"  @click="order2">
      <area shape="rectangle" coords="147,349,175,384" target="_blank" @click="order2" >
      <area shape="rectangle" coords="111,428,141,463" target="_blank" @click="order" >
      <area shape="rectangle" coords="164,431,193,462" target="_blank" @click="order" >
      </map>
    <!-- </el-col> -->
      <!-- <div style="width:100%;">
        <div v-for="(item,index) of list" :key="index" class="itema" >
          <img src="item.image" alt="">
         <p @click="roommore(item.sampRoomId)" style="font-size:16px">{{index}} - {{item.name}}</p>
          <p style="font-size:12px">{{item.shopName}}</p>
        </div>
      </div> -->
      <!-- <el-form v-if="operMessage === 'caijidian1'" :label-position="labelPosition" label-width="100px" :model="realData">
              <el-form-item label="土壤温度" class="redItem">
                <el-input v-model="realData.turangwendu">℃</el-input>
              </el-form-item>
              <el-form-item label="土壤湿度" class="redItem">
                <el-input v-model="realData.turangshidu">%</el-input>
              </el-form-item>
              <el-form-item label="空气温度" class="redItem">
                <el-input v-model="realData.kongqiwendu">℃</el-input>
              </el-form-item>
              <el-form-item label="空气湿度" class="redItem">
                <el-input v-model="realData.kongqishidu">%</el-input>
              </el-form-item>
              <el-form-item label="CO2浓度" class="redItem">
                <el-input v-model="realData.CO2">ppm</el-input>
              </el-form-item>
            </el-form> -->
    </div>
    <md-field class="bottom">
      <md-field-item class="color" name="item5">
        <div class="md-item">
          <md-icon name="map" size="lg" @click.native="room()"></md-icon>
          <p>地图</p>
        </div>
        <div class="md-item">
          <md-icon name="tea" size="lg" @click.native="shopcar"></md-icon>
          <p>农事</p>
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
import axios from 'axios'
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
      list: [],
      res: {
        currentPage: 1,
        pageSize: 6
      }

    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      axios.post('http://101.132.44.253:8770/sampRoomList', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.list = response.data.data.sampleRoomlist
      })
    },
    shopcar () {
      this.$router.push({
        path: '/shopcar'
      })
    },
    idset () {
      console.log('aaaaa')
      this.$router.push({
        path: '/zhuye'
      })
    },
    order () {
      this.$router.push({
        path: '/all?type=1'
      })
    },
     order2 () {
      this.$router.push({
        path: '/all?type=2'
      })
    },
     order3 () {
      this.$router.push({
        path: '/all?type=3'
      })
    },
    address () {
      this.$router.push({
        path: '/address'
      })
    },
    room () {
      this.$router.push({
        path: '/room'
      })
    },
    roommore (sampRoomId) {
      this.$router.push({
        name: 'Roommore',
        params: {
          sampRoomId: sampRoomId
        }
      })
      localStorage.setItem('sampRoomId', sampRoomId)
    }
  }
}
</script>

<style scoped>
  .view {
    height: 100%;
    background: url("~@/assets/images/Rectangle.png") no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  .bottom {
    display: flex;
    left: 0;
    bottom: 0px;
    width: 100%;
    position: fixed;
  }

  .bottom1 {
    margin-top: 0px;
    display: flex;
    width: 100%;
  }

  .bottom1.md-icon {
    flex: 1;
    text-align: center;
  }

  .bottom.md-icon {
    flex: 1;
    text-align: center;
  }

  .view>>>.md-field-content {
    width: 100%;
  }

  /* .view >>> .bottom {
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  } */

  .p {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }

  .md-icon {
    flex: 1;
  }

  /* .md-icon.lg {
    width: 0.55rem;
    height: 0.55rem;
  } */

  .md-item {
    flex: 1;
    text-align: center;
  }

  .md-item>p {
    font-size: 12px;
  }

  .md-icon.md-icon-user.lg {
    height: 150px;
    width: 150px;
  }

  .avatar {
    display: block;
    margin: 0 auto;
    padding-top: 50px;
  }

  .color {
    background-color: #e6e5e4;
  }

  .view>>>.md-input-item {
    padding-right: 0;
  }

  .itema {
    float: left;
    box-sizing: border-box;
    width: 48%;
    height: 400px;
    border: 1px solid #e1e2e3;
    margin: 10px 1%;
  }

</style>
