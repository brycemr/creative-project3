<template>
<div>
  <div id="spacer"></div>
  <div id="center">
    <form v-on:submit.prevent="login" id="loginBox">
    <h3>Sign In</h3>
      <input v-model="username" placeholder="Username"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button>Sign In</button>
    </form>
  </div>
    <br><br>
</div>
</template>

<script>
//remove text area and say thank you for review if they submit
export default{
  data() {
    return{
    username: '',
    password: '',
    }
  },
  methods: {
    login() {

    }
  }
}
</script>

<style>
#image{
  width: 100%;
  object-fit: cover;
  padding: 2px;
  border: 2px solid grey;
}
#loginBox{
}
</style>
