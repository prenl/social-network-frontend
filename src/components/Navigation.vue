<template>
    <div class="p-3 text-bg-dark">
        <div class="container" style="max-width: 1200px">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            </a>
    
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 text-white">Posts</a></li>
              <li><router-link :to="{name: 'users'}" class="nav-link px-2 text-white">Users</router-link></li>
              <li><a href="#" class="nav-link px-2 text-white">Messenger</a></li>
            </ul>
    
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
            </form>
    
            <div class="text-end">
                <div class="btn-group">
                    <router-link  v-if="currentUser.id" :to="{ name: 'profile', params: { id: currentUser.id } }" class="btn btn-success" type="button">
                      {{ currentUser.login }}
                    </router-link>
                    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only"></span>
                    </button>
                    <div class="dropdown-menu">
                        <router-link v-if="currentUser.id" :to="{name: 'profile', params: {id: currentUser.id }}" class="dropdown-item" href="#">Profile</router-link>
                        <a class="dropdown-item" href="#">Settings</a>
                        <a class="dropdown-item" href="#">Support</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" @click="logout">Log Out</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import { api } from '@/api'

  export default {
    data() {
      return {
        currentUser: {}
      }
    },
    methods: {
      logout() {
        if (localStorage.role) {
          localStorage.removeItem('role')
        }
        if (localStorage.token) {
          localStorage.removeItem('token')
        }
        if (localStorage.userId) {
          localStorage.removeItem('userId')
        }
      }
    },
    async mounted() {
      if(localStorage.userId && localStorage.token) {
        const response = await api.fetchUsers()
        this.currentUser = response.data[0]
      } else {
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>

<style>
</style>