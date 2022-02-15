<template>
<div>
  <HobbyList :hobbies="hobbies" />
  <div class="row" id="hobbyInfo">
    <div class="col-sm-12 col-md">
      <iframe width=100% height="315" :src="viewHobby.videoURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="col">
      <h4>Introduction to {{viewHobby.name}}</h4> <hr>
      <p>{{viewHobby.tutorialDescription}}</p>
    </div>
    <div class="col">
      <div class="row">

        <div class="col-12" id="side">
          <router-link id="button" to="/rentals">VIEW RENTAL</router-link>
        </div>
        <div class="col-12" id="side">
          <router-link id="button" to="/tutorials">RENT PACKAGE</router-link>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <h2 id="policy">PARTNER WITH US</h2>
  <p id="policy">Want to have your art or tutorial featured here? Have requests
  for more tutorials or rentables? See our Contact Us page to get in touch!
  We want to hear from you!</p>
</div>
</template>

<script>
import HobbyList from "../components/HobbyList.vue"
export default {
  name: 'Rentals',
  components: {
    HobbyList,
  },
  data() {
    return{
    }
  },
  computed: {
    hobbies() {
      return this.$root.$data.hobbies;
    },
    viewHobby() {
      return this.$root.$data.currentHobby;
    }
  },
  methods: {

  }
}
</script>

<style>
  iframe{
    margin: 1em;
  }
  .image{
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 50px 0 100px 0;
    padding: 2px;
    border: 2px solid grey;
  }
  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li{
    padding: 0;
    margin: 0;
  }
  .list{
    justify-items: start;
  }
  #hobbyInfo {
    margin: 20px 0;
  }
  #policy{
    text-align: justify;
    text-justify: none;
    padding: 0 15px;
  }
  p{
    text-align: left;
  }
  #side{
    margin: 2em 0;
  }
</style>
