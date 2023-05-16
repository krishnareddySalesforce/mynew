<template>
  <div @click="closeSideNavigation">
    <header-component />
    <div :class="{'blurred-background': getSideNav === true}">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderComponent from './components/CommonComponents/Header/Header'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { HeaderComponent },
  name: 'App',
  methods: {
    ...mapActions(['closeSideNav']),
    closeSideNavigation () {
      this.closeSideNav(false)
    }
  },
  computed: {
    ...mapGetters(['getSideNav'])
  }
}
</script>
<style>
@font-face {
  font-family: "Montserrat", sans-serif;
  font-display: swap;
  src: url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700&display=swap) format("truetype");
}
@font-face {
  font-family: "Montserrat", sans-serif;
  font-display: swap;
  src: url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700&display=swap) format("truetype");
  font-weight: bold;
}
.blurred-background{
  filter: blur(6px);
  pointer-events: none;
}
</style>
