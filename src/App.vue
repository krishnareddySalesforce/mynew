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
  font-family: "Inter";
  font-display: swap;
  src: url(./assets/fonts/Inter-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Inter";
  font-display: swap;
  src: url(./assets/fonts/Inter-Bold.ttf) format("truetype");
  font-weight: bold;
}
.blurred-background{
  filter: blur(6px);
  pointer-events: none;
}
</style>
