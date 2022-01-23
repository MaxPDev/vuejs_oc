<script>
  import NavLink from './components/NavLink.vue'

  export default {
    name: 'App',
    components: {
      NavLink
    }
  }
</script>

<template>
  <div id="app">
    <nav>
      
      <nav-link url="/" text="Accueil" />
      <nav-link url="/about" text="About" />
      <nav-link url="/contact" text="Contact" />
    </nav>
  </div>
  
</template>


