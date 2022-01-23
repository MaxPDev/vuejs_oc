<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CustomButton text="Salut" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CustomButton
  }
}
</script>
