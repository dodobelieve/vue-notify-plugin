<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <button v-on:click="showNotify">click here to show notify</button>
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
