<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
       <img v-on:click="redirectToHome" class="folder" src="../assets/folder-regular.svg" width=100px height=100px alt="Kiwi standing on oval">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
    methods:{
       redirectToHome() {
      this.$router.push({ path: '/subfolder' });
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
