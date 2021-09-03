<template>
    <div>
        <router-link to="/">Home</router-link> |

        <router-link to="/login" v-if="!user">Login</router-link> | 

        <router-link to="/register" v-if="!user">Register</router-link> |

        <router-link to="logout" v-if="user" @click="$emit('logout')">Logout</router-link> | 

        <p class="ml-5" v-if="!user">Hi, {{ user && user.displayName }}</p>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    props: ['user']
}
</script>