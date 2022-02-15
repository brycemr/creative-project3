<template>
<div>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-12 col-md-4">
      <img id="image" src="/images/contact.jpg">
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <strong>HAVE SOME QUESTIONS OR SUGGESTIONS?</strong><br> We want to hear from you! We can reached
          at help@hobbyshop.com<br><br>
          <strong>WANT TO PARTNER WITH US?</strong><br>
          We are always looking for new tutorial creators to partner with, to find out
          more about our partnership program please contact alex@hobbyshop.com<br>
        </div>
        <div class="col">
          <div v-if="feedback">
            <h3>Thank You for the Feedback!</h3>
          </div>
          <div v-else>
          <h3>Leave Us Feedback</h3>
            <form v-on:submit.prevent="addFeedback">
              <textarea v-model="addedFeedback"></textarea><br>
              <button type="">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br>
</div>
</template>

<script>
//remove text area and say thank you for review if they submit
export default{
  data() {
    return{
    addedFeedback: '',
    addedName: '',
    feedback: false
    }
  },
  methods: {
    addFeedback() {
      this.feedback = true;
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
</style>
