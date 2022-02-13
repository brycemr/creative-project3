<template>
<div>
  <ul>
    <div class="item" v-for="item in listItems" :key="item.description">
      <li>{{item.description}} : {{item.price}}</li><br>
    </div>
  </ul>
</div>
</template>

<script>
export default {
  name: 'AdditionalList',
  props: {
    listItems: Array
  },
  methods:{

  }
}
</script>
