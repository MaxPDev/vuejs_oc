<template>
  <div class="about">
    <h1>This is an about page</h1>

    <receiver />
  </div>
</template>

<script>
import Receiver from '../components/Receiver.vue'

export default {
  name: "About",
  components: {
    Receiver,
  }
}
</script>

