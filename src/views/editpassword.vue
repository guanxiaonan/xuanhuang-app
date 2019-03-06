<template>
  <main id="register" class="view" role="main">
    <div class="register">
      <md-field>
        <md-field-item style="background-color:#6799AF;" name="item0" title="修改密码" solid>
          <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        </md-field-item>
      </md-field>
      <md-field class="input">
        <md-input-item type="phone" ref="name" placeholder="请输入原密码" clearable>
        </md-input-item>
      </md-field>
      <div>
        <button class="button1" size="small" @click="forget">忘记密码？</button>
      </div>
      <md-field style="margin-top:40px">
        <md-button @click="next">下一步</md-button>
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
      this.$router.back()
    },
    next () {
      this.$router.push({
        path: '/set'
      })
    },
    forget () {
      this.$router.push({
        path: '/forget'
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

  .view>>>.md-input-item-right {
    width: 1.6rem;
  }

  .view>>>.md-input-item {
    padding-right: 0;
  }

  .view>>>.md-button {
    font-size: 12px;
  }

  .button {
    color: #fff;
    float: left;
    margin-left: 30px;
    font-size: 14px;
  }

  .button1 {
    color: #fff;
    float: right;
    margin-right: 30px;
    font-size: 14px;

  }

</style>
