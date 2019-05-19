<template>
  <div class="yd-notify" :class="classes" v-html="mes"></div>
</template>

<script type="text/babel">
export default {
  /* eslint-disable */
  data() {
    return {
      classes: ""
    };
  },
  props: {
    mes: String,
    timeout: Number,
    /**
     * 默认关闭回调
     */
    callback: Function,
    /**
     * 手动点击关闭回调
     */
    clickCallback: Function
  }
};
</script>

<style scoped>
.yd-notify {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  right: 0;
  background-color: rgba(40, 40, 40, 0.85);
  line-height: 14.000000000000002px;
  font-size: 13px;
  color: #fff;
  padding: 20px 12px 15px;
  -webkit-animation: yd-kf-down-in 0.2s linear forwards;
  animation: yd-kf-down-in 0.2s linear forwards;
  word-break: break-all;
  text-align: center;
  z-index: 2000;
}
.yd-notify-out {
  -webkit-animation: yd-kf-up-out 0.15s linear forwards;
  animation: yd-kf-up-out 0.15s linear forwards;
}
</style>
