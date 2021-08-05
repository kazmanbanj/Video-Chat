<template>
  <div class="home">
    <h1>Home page</h1>
    <p>Welcome {{ user }}</p>
  </div>
</template>

<script>
import db from '../db.js'
export default {
  name: 'Home',
  data() {
    return {
      user: null
    }
  },
  mounted() {
    db.collection('users')
    .doc('nm6oG41I9ndSpxCWYTlu')
    .get()
    .then(
      snapshot => {
        this.user = snapshot.data().name
      }
    )
  }
}
</script>
