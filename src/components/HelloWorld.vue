<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <button v-on:click="showNotify">click here to show notify</button>
    <div style="display:none;">
      <a href="https://info.flagcounter.com/SCAF">
        <img
          src="https://s01.flagcounter.com/count2/SCAF/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_1/pageviews_1/flags_0/percent_0/"
          alt="Flag Counter"
          border="0"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Demo for notify dialog."
    };
  },
  methods: {
    showNotify: function(event) {
      this.$notify({
        mes: "this is a notification.",
        timeout: 5000,
        clickCallback: () => {
          console.log("dialog clicked.");
        },
        callback: () => {
          console.log("dialog closed.");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
