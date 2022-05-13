<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>
      <router-link to="/">Go to Home</router-link><br>
      <router-link to="/about">Go to About</router-link><br>
      <router-link to="/axios">Axios test</router-link><br>
      <router-view></router-view>
    </p>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
