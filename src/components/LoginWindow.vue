<template>
    <section class="vh-100 bg-image" style="background-image: url('https://wallpapershome.com/images/wallpapers/macos-catalina-1920x1080-day-mountains-wwdc-2019-5k-21590.jpg'); background-repeat: no-repeat; background-size: cover">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px; background: rgba(255, 255, 255,  0.8)">
                    <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Login</h2>
                    <form>    
                        <div class="form-outline mb-4">
                        <input 
                            type="email" 
                            id="form3Example3cg" 
                            class="form-control form-control-lg" 
                            @input="this.email = $event.target.value"
                            v-bind:value="email"
                        />
                        <label class="form-label" for="form3Example3cg">Your Email</label>
                        </div>
    
                        <div class="form-outline mb-4">
                            <input 
                                type="password" 
                                id="form3Example4cg" 
                                class="form-control form-control-lg" 
                                @input="this.password = $event.target.value"
                                v-bind:value="password"
                            />
                            <label class="form-label" for="form3Example4cg">Password</label>
                        </div>
    
                        <div class="d-flex justify-content-center">
                            <button 
                                type="button"
                                @click="loginUser"
                                class="btn btn-outline-success btn-lg"
                            >
                                Login
                            </button>
                        </div>
    
                        <p class="text-center text-muted mt-5 mb-0">Don't have an account? <a href="#!"
                            class="fw-bold text-body"><router-link :to="{name:'registration'}" class="register-here">Register here</router-link></a></p>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            result: Object
        }
    },
    methods: {
        async loginUser() {
            await axios.post('http://localhost:8889/api/auth/authenticate',  {
                "email": this.email,
                "password": this.password
            }).then(response => this.result = response.data),
            
            localStorage.token = this.result.token,
            localStorage.userId = this.result.userId,
            localStorage.role = this.result.role
            alert("You are in!")
            this.$router.push({name: 'profile', params: {id: localStorage.userId}})
        }
    }
}
</script>

<style lang="scss">
    .register-here {
        color: #198754;
    }
</style>