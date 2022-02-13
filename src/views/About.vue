<template>
<div>
<div class="rental"><h2>CONTACT US</h2></div>
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-md col-lg">
      <img id="image" src="/images/contact.jpg">
    </div>
    <div class="col-12 col-md col-lg">
      <strong>HAVE SOME QUESTIONS OR SUGGESTIONS?</strong><br> We want to hear from you! We can reached
      at help@hobbyshop.com<br><br>
      <strong>WANT TO PARTNER WITH US?</strong><br>
      We are always looking for new tutorial creators to partner with, to find out
      more about our partnership program please contact alex@hobbyshop.com<br>
    </div>
  </div>
</div>
<h3>Leave Us Feedback</h3>
      <form v-on:submit.prevent="addFeedback">
        <textarea v-model="addedFeedback"></textarea>
        <br />
        <button type="">Submit</button>
      </form>
</div>
</template>

<script>
//remove text area and say thank you for review if they submit
export default{
  data() {
    return{
    addedFeedback: '',
    addedName: ''
    }
  },
  methods: {
    addFeedback() {

    }
  }
}
</script>

<style>
#image{
  height: 300px;
  width: 300px;
  object-fit: cover;
  padding: 2px;
  border: 2px solid grey;
}
</style>
