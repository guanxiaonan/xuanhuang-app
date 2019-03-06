<template>
  <main id="register" class="view" role="main">
    <div class="register">
      <md-field>
        <md-field-item style="background-color:#6799AF;" name="item0" title="安全设置" solid>
          <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        </md-field-item>
      </md-field>
      <md-field style="margin-top: 40px;font-size:12px">
        <md-field-item @click="editpassword"  class="black" name="item0" title="修改密码" arrow="arrow-right"
          solid align="right">
        </md-field-item>
      </md-field>

      <md-field style="margin-top:40px">
        <md-button @click="back">安全退出</md-button>
      </md-field>
    </div>
  </main>
</template>

<script>
import '@/my-project-svg-folder/arrowl.svg'
export default {
  data () {
    return {
      type: 'password',
      eye: 'eye_close'
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/'
      })
    },
    next () {
      this.$router.push({
        path: '/set'
      })
    },
    editpassword () {
      this.$router.push({
        path: '/editpassword'
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

  .input {
    margin-top: 80px
  }

  .input1 {
    margin-top: 10px
  }

  /* .md-button.primary {
    background-color: #6799AF;
  } */

  .button {
    color: red;
    float: left;
    margin-left: 30px;
    font-size: 14px;
  }

  .view>>>.md-field-item-title {
    color: #ffffff;
    font-size: 0.32rem;
  }

  .black>>>.md-field-item-title {
    color: #000;
    font-size: 0.32rem;
  }

  .view>>>.md-input-item-right {
    width: 1.6rem;
  }

  .view>>>.md-input-item {
    padding-right: 0;
  }

  .view>>>.md-button {
    font-size: 12px;
  }

</style>
