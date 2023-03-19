<template>
    <div class="card post">
        <div class="card-body">
            <div class="d-flex flex-start align-items-center">
                <img 
                    class="shadow-1-strong me-3 avatar" 
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="60"
                    height="60" 
                    @click="reloadPage"
                />
                <div>
                    <h6 class="mb-1">
                        <router-link 
                            :to="{
                                name:'profile', 
                                params: {id: user_data.id}
                            }"
                            class="post__author"
                        >{{ user_data.username }} ({{ user_data.firstName }} {{ user_data.lastName }})</router-link>
                    </h6>
                    <p class="text-muted small mb-0">{{ this.post_data.dateOfCreated }}</p>
                </div>
            </div>

            <div class="post__inner">
                <p class="post__inner__title">
                    {{ post_data.title }}
                </p>
                <p class="post__inner__content">
                    {{ post_data.content }}
                </p>
            </div>
            
            <div class="small d-flex justify-content-start">
                <a href="#!" class="d-flex align-items-center me-1 particle particle-like" style="text-decoration: none; position: relative">
                    <i class="fa-solid fa-heart"></i>&nbsp;{{ post_data.likes }}
                </a>
                    <div class="liked-by" v-if="liked_users.length == 0">
                        No likes
                    </div>
                    <div class="liked-by" v-else-if="liked_users.length <= 4">
                        Liked by: <b v-for="user in liked_users" :key="user.id"><br>{{ user.username }}</b>
                    </div>
                    <div class="liked-by" v-else-if="liked_users.length > 4">
                        Liked by: <b v-for="i in 4" :key="liked_users[i-1].id"><br>{{ liked_users[i-1].username }}</b>
                        <br>and others
                    </div>
                <a href="#!" class="d-flex align-items-center me-1 particle" style="text-decoration: none;">
                    <i class="fa-solid fa-comment"></i>&nbsp;{{ post_data.commentaries }}
                </a>
                <a href="#!" class="d-flex align-items-center me-1 particle" style="text-decoration: none;">
                    <i class="fa-solid fa-share"></i>&nbsp;{{ post_data.shares }}
                </a>
            </div>
        </div>

        <!-- <div class="card-footer py-3 border-0" style="background-color: #f8f9fa;">
            <div class="d-flex flex-start w-100">
                <img class="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                    height="40" />
                <div class="form-outline w-100">
                    <textarea 
                        class="form-control" 
                        id="textAreaExample" 
                        rows="1"
                        style="background: #fff;"
                        placeholder="Comment"
                    ></textarea>
                </div>
            </div>
            <div class="float-end mt-2 pt-1">
                <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
            </div>
        </div>  -->

    </div>
</template>

<script>
    // import axios from 'axios';

import axios from 'axios'

    export default {
        props: {
            post_data: {
                type: Object,
                required: true
            }
        },
        methods: {},
        data() {
            return {
                user_data: {
                    id: 1,
                    firstName: "Yelka",
                    lastName: "Abdrakhmanov",
                    username: "prenl",
                },
                userId: Number,
                post_time: Date,
                liked_users: []
            }
        },
        mounted() {
            // axios.get('http://localhost:8889/api/posts/getuser' + this.post_data.id).then(response => this.userId = response.data)
            // axios.get('http://localhost:8889/api/users/' + this.userId).then(response => this.user_data = response.data)
            axios.get('http://localhost:8889/api/posts/' + this.$route.params.id + '/likedUsers').then(response => this.liked_users = response.data)
        }
    }
</script>

<style lang="scss" scoped>
    .post {
        max-width: 1200px;
        margin: 0 auto;

        &__inner {
            margin: 10px 0;

            &__title {
                font-weight: 700;
            }
            &__title::after {
                margin-top: 10px;
                content: "";
                display: block;
                height: 2px;
                width: inherit;
                background-color: rgba(0, 0, 0, 0.175);
            }
        }

        &__author {
            text-decoration: none;
            font-weight: 700;
            color: #198754;
            transition: .2s linear;
        }

        &__author:hover {
            color: #157347;
        }
    }

    .particle {
        color: white;
        padding: 5px 10px;
        border: 1px solid #198754;
        background-color: #198754;
        border-radius: 5px;
        align-items: center;
        z-index: 0;
    }

    .particle:hover {
        background-color: #157347;
    }

    .particle-like:hover ~ .liked-by {
        opacity: 1;
    }

    .card {
        margin-bottom: 10px;
    }

    .avatar {
        border-radius: 5px;
        cursor: pointer;
    }

    .liked-by {
        position: absolute;
        top: 210px;
        z-index: 222;
        max-width: 200px;
        display: block;
        opacity: 0;
        background-color: rgb(248, 249, 250);
        border: 1px solid rgba(0, 0, 0, 0.175);
        border-radius: 5px;
        padding: 5px;
        transition: .1s linear;
        user-select: none;
    }
</style>