<template>
<div>
  <form class="mt-3" @submit.prevent="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card bg-light">
            <div class="card-body">
              <h3 class="font-weight-light mb-3">Log in</h3>
              <section class="form-group">
                <div class="col-12 alert alert-danger px-3" v-if="error">
                  {{ error }}
                </div>
                <label class="form-control-label sr-only" for="Email">Email</label>
                <input
                  required
                  class="form-control"
                  type="email"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                />
              </section>
              <section class="form-group">
                <input
                  required
                  class="form-control"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </section>
              <div class="form-group text-right mb-0">
                <button class="btn btn-primary" type="submit">Log in</button>
              </div>
            </div>
            <p>Don't have an account. <router-link :user="user" to="/register">Register here</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </form>  
    <div class="submit" style="margin-top: 15px;">
      <button @click="signInWithgoogle" class="googlebtn">
        Sign in with Google
      </button>
    </div>
</div>
</template>

<script>
import swal from 'sweetalert';
import Firebase  from 'firebase'
import signInWithGoogle  from 'firebase'
export default {
  data: function() {
    return {
      email: null,
      password: null,
      error: null
    }
  },
  methods: {
    login: function() {
      const info = {
        email: this.email,
        password: this.password,
      }
      Firebase.auth()
      .signInWithEmailAndPassword(info.email, info.password)
      .then(
        () => {
          this.$router.push('/')
        },
        error => {
          this.error = error.message
        }
      )
    },
    async signInWithgoogle() {
      try {
        signInWithGoogle().then(() =>
          swal({
            title: `Welcome!`,
            text: "You've successfully signed in!",
            icon: "success",
            button: "Continue",
          })
        );
        this.$router.replace({ name: "Home" });
      } catch (error) {
        swal({
          title: "Login Failed!",
          text:
            "Please, input the correct login details or check your internet connection and try again!",
          // icon: "warning",
          button: "OK",
          dangerMode: true,
        });
      }
    }
  }
}
</script>
