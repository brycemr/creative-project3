<template>
<div>
  <ul>
    <div class="item" v-for="item in listItems" :key="item.description">
      <li>{{item.quantity}} - {{item.description}}</li><br>
    </div>
  </ul>
</div>
</template>

<script>
export default {
  name: 'IncludedList',
  props: {
    listItems: Array
  },
  methods:{

  }
}
</script>

<style>
  .box{
    border: 3px solid black;
  }
  li{
    text-align: start;
  }
</style>
