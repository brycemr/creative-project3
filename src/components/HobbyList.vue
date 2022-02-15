<template>
<div class="wrapper">
  <div class="hobby" v-for="hobby in hobbies" :key="hobby.name">
    <div class="hobbiesButton">
      <button class="hobbiesButton" v-on:click="selectHobby($event)" :id="hobby.name">{{hobby.name}}</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HobbyList',
  props: {
    hobbies: Array
  },
  methods:{
    selectHobby:function(e){
      console.log(e.target.name)
      var index = this.$root.$data.hobbies.indexOf(this.$root.$data.hobbies.find(hobby => hobby.name === e.target.id));
      if(index > -1){
        this.$root.$data.currentHobby = this.$root.$data.hobbies.find(hobby => hobby.name === e.target.id);
      }
    }
  }
}
</script>
<style>
  .wrapper{
    width: 100%;
    background-color: #03989e;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  .hobbiesButton{
    height:100%;
  }
</style>
