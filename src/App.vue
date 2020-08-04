<template>
  <div id="app" class="">
    <Navbar :post-title="title" />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    title: 'Home'
  }),
  watch: {
    '$route' (to) {
        this.title = to.meta.title
    }
  },
  mounted() {
    this.title = this.$route.meta.title
  }
}
</script>

<style src="./assets/tailwind.css"></style>
