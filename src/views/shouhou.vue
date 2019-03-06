<template>
  <main id="register" class="view" role="main">
    <div class="register">
      <md-field>
        <md-field-item style="background-color:#6799AF;" name="item0" title="申请售后" solid>
          <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        </md-field-item>
        <md-field-item :value="pickerValue0" @click.native="isPickerShow0 = true" class="black" name="item0" title="处理方式" arrow="arrow-right"
          solid align="right">
        </md-field-item>
        <md-field-item class="black" name="item0" title="退款原因" arrow="arrow-right" solid align="right">
        </md-field-item>
        <md-input-item ref="id" title="退款说明" placeholder="选填">
        </md-input-item>
        <md-input-item ref="id" title="退款金额">
        </md-input-item>
      </md-field>
      <md-field class="bottom">
        <md-button style="width:100%;font-size:16px">保存</md-button>
      </md-field>
    </div>
    <md-picker ref="picker0" v-model="isPickerShow0" :data="pickerData0" @confirm="onPickerConfirm(0)" title="选择退货原因"></md-picker>
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
import simple from '@/assets/js/simple'
export default {
  data () {
    return {
      agreeConf: {
        checked: true,
        name: 'agree0',
        size: 'lg',
        disabled: false,
        introduction: '选中状态'
      },
      agreeConf1: {
        checked: false,
        name: 'agree1',
        size: 'lg',
        disabled: false,
        introduction: '未选中状态'
      },
      isPickerShow0: false,
      pickerData0: simple,
      pickerValue0: ''
    }
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
    addAdd () {
      this.$router.push({
        path: '/addAdd'
      })
    },
    onPickerConfirm (index) {
      const values = this.$refs[`picker${index}`].getColumnValues()
      let res = ''
      values.forEach(value => {
        value && (res += `${value.text || value.label} `)
      })
      this[`pickerValue${index}`] = res
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

  .black>>>.md-field-item-title {
    color: #000;
    font-size: 0.28rem;
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
