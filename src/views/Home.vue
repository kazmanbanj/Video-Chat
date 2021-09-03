<template>
  <div class="mt-3">
    <div class="text-center">
      Welcome <span class="font-weight-bold text-info">{{ user && user.displayName }}</span>
      <router-link @click="$emit('logout')">Logout</router-link>
    </div>
    <br>
    <div class="justify-content-center">
      <h3 class="text-primary mt-2">Video Chat App</h3>
      <router-link to="/login" v-if="!user">Login</router-link> | 
      <router-link to="/register" v-if="!user" logout="/register">Register</router-link>

        <!-- <button @click="debug">Console</button> -->
    </div>

    <br>
  </div>
</template>

<script>
// import firebase from './db.js'
export default {
  name: 'Home',
  props: ['user'],
  // methods: {
  //   debug: function() {
  //     console.log(this.user.displayName)
  //   }
  // }
}
</script>
