<template>
  <main id="register" class="view" role="main">
    <div style="height: 150px">

      <div class="md-item">
        <md-icon name="user" size="lg" class="avatar"></md-icon>
        <p style="font-size:18px">用户ID:</p>
      </div>
    </div>
    <md-field>
      <md-field-item name="item0" title="茶园信息" arrow="arrow-right" solid align="right" @click.native="order">
        <md-icon name="order" slot="left" class="md-icon"></md-icon>
        <div>详细数据</div>
      </md-field-item>
    </md-field>
    <md-field class="bottom1">
      <md-field-item name="item1">
        <div class="md-item">
          <router-link to="/all?type=1">
            <md-icon name="chayuan" size="lg"></md-icon>
            <p>茶园1</p>
          </router-link>
        </div>
        <div class="md-item">
          <router-link to="/all?type=2">
            <md-icon name="chayuan" size="lg"></md-icon>
            <p>茶园2</p>
          </router-link>
        </div>
        <div class="md-item">
          <router-link to="/all?type=3">
            <md-icon name="chayuan" size="lg"></md-icon>
            <p>茶园3</p>
          </router-link>
        </div>
        <!-- <div class="md-item">
          <router-link to="/all?type=4">
            <md-icon name="tuihuan" size="lg"></md-icon>
            <p>退换货</p>
          </router-link>
        </div> -->
      </md-field-item>
    </md-field>
    <md-field style="margin-top:50px">
      <!-- <md-field-item name="item2" title="购物车" arrow="arrow-right" solid align="right" @click.native="shopcar">
        <md-icon name="shopcar" slot="left" class="md-icon"></md-icon>
      </md-field-item>
      <md-field-item name="item3" title="收货地址管理" arrow="arrow-right" solid align="right" @click.native="address">
        <md-icon name="address" slot="left" class="md-icon"></md-icon>
      </md-field-item> -->
      <md-field-item name="item4" title="账号设置" arrow="arrow-right" solid align="right" @click.native="myset">
        <md-icon name="idset" slot="left" class="md-icon"></md-icon>
      </md-field-item>
    </md-field>
    <md-field class="bottom">
      <md-field-item class="color" name="item5">
        <div class="md-item">
          <md-icon name="map" size="lg" @click.native="room"></md-icon>
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
import '@/my-project-svg-folder/map.svg'
import '@/my-project-svg-folder/user.svg'
import '@/my-project-svg-folder/order.svg'
import '@/my-project-svg-folder/chayuan.svg'
import '@/my-project-svg-folder/tuihuan.svg'
import '@/my-project-svg-folder/tea.svg'
import '@/my-project-svg-folder/address.svg'
import '@/my-project-svg-folder/idset.svg'
import '@/my-project-svg-folder/waitsend.svg'
import '@/my-project-svg-folder/waittake.svg'
import '@/my-project-svg-folder/arrowl.svg'
export default {
  data () {
    return {}
  },
  methods: {
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
        path: '/all?type=0'
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
    myset () {
      this.$router.push({
        path: '/myset'
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
    font-size: 12px
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
    text-align: center
  }

  .md-item>p {
    font-size: 12px
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
    background-color: #E6E5E4;
  }

  .view>>>.md-input-item {
    padding-right: 0;
  }

</style>
