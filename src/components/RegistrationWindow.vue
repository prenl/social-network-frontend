<template>
<section class="vh-100 bg-image" style="background-image: url('https://wallpapershome.com/images/wallpapers/mountains-1920x1080-macos-4k-5k-sierra-sky-android-wallpaper-11473.jpg'); background-repeat: no-repeat; background-size: cover">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px; background: rgba(255, 255, 255,  0.8)">
                <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                <form>
                    <div class="form-outline mb-4">
                        <input  
                            type="text"  
                            id="form3Example1cg"  
                            class="form-control form-control-lg" 
                            @input="this.firstName = $event.target.value"
                            v-bind:value="firstName"
                        />
                        <label class="form-label" for="form3Example1cg">Your first name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input  
                            type="text"  
                            id="form3Example1cg"  
                            class="form-control form-control-lg" 
                            @input="this.lastName = $event.target.value"
                            v-bind:value="lastName"
                        />
                        <label class="form-label" for="form3Example1cg">Your last name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input 
                            type="text" 
                            id="form3Example1cg" 
                            class="form-control form-control-lg" 
                            @input="this.username = $event.target.value"
                            v-bind:value="username"
                        />
                        <label class="form-label" for="form3Example3cg">Your Login</label>
                    </div>

                    <div class="form-outline mb-4">
                    <input 
                        type="email" 
                        id="form3Example3cg" 
                        class="form-control form-control-lg" 
                        @input="this.email = $event.target.value"
                        v-bind:value="email"
                    />
                    <label class="form-label" for="form1Example3cg">Your Email</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input 
                            type="password" 
                            id="form3Example4cg" 
                            class="form-control form-control-lg" 
                            @input="this.password = $event.target.value"
                            v-bind:value="password"
                        />
                        <label class="form-label" for="form2Example4cg">Password</label>
                    </div>

                    <div class="form-outline mb-4" style="display: flex;">
                        <input 
                            type="checkbox" 
                            style="cursor: pointer;"
                            @click="acceptTerms"
                            v-bind:value="terms"
                        /> 
                        <div style="margin-left: 10px; display: flex">
                            <div class="">I agree with</div> <div  class="terms-of-service" style="margin-left: 0.5em;">terms of service</div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center">
                    <button type="button"
                        @click="registerUser"
                        class="btn btn-outline-success btn-lg">Register</button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                        class="fw-bold text-body"><router-link :to="{name: 'login'}" class="login-here">Login here</router-link></a></p>
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
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            terms: false
        }
    },
    methods: {
        async registerUser() {
            if (this.terms) {
                await axios.post('http://localhost:8889/api/auth/register',  {
                    "login": this.username,
                    "email": this.email,
                    "password": this.password
                })
                alert("Account has been registered!")
                this.$router.push('login')
            } else {
                alert('Accept terms!')
            }
        },
        acceptTerms() {
            if (this.terms) {
                this.terms = false
            } else {
                this.terms = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .terms-of-service {
        color: #111;
        color: blue;
        cursor: pointer;
    }

    .terms-of-service:hover {
        text-decoration: underline;
    }

    .login-here {
        color: #198754;
    }
</style>