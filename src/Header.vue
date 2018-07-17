<template>
  <div id="header">
    <x-header :left-options="{showBack: false}">
      小竹活动中心<a slot="right" href="#" style="text-decoration:none;">
        <div v-model="username">{{ username }}</div></a>
    </x-header>
  </div>
</template>
<script>
  import { XHeader } from 'vux'

  export default {
    name: 'Header',

    components: {
      XHeader
    },

    data() {
      return {
        username: 'randomer'
      }
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}


</style>
