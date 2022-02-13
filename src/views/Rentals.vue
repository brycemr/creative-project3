<template>
<div>
  <HobbyList :hobbies="hobbies" />
  <div id="currentRental"><h2>{{viewHobby.name}} Rental - {{viewHobby.price}}</h2></div>
  <div class="row" id="hobbyInfo">
    <div class="col">
      <img class="image" :src="'/images/'+viewHobby.image">
    </div>
    <div class="col">
      <h4>Included Items</h4> <hr>
      <IncludedList :listItems="viewHobby.included" />
    </div>
    <div class="col">
      <h4>Additional Items</h4> <hr>
      <AdditionalList :listItems="viewHobby.additional" />
    </div>
  </div>
  <div class="row">
      <div class="col">
        <router-link id="button" to="/tutorials">VIEW TUTORIAL</router-link>
      </div>
      <div class="col">
        <router-link id="button" to="/rentals">RENT PACKAGE</router-link>
      </div>
  </div>
  <hr>
  <h2 id="policy">RENTAL POLICY</h2>
  <p id="policy">Rentals are available at 1pm on the first reserved day. They can be returned anytime from 9am - 9pm.
  Each 24 hour period after 1pm on the first reserved day will be counted as an additional rented day and
   will be charged to your account. We will drop-off and pick-up the rental kit for an additional fee. Any
    damaged items will be charged to you account and returned to you as if you purchased the item outright.</p>
</div>
</template>

<script>
import HobbyList from "../components/HobbyList.vue"
import IncludedList from "../components/IncludedList.vue"
import AdditionalList from "../components/AdditionalList.vue"
export default {
  name: 'Tutorials',
  components: {
    HobbyList,
    IncludedList,
    AdditionalList
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
</style>
