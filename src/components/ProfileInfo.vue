<template>
    <OverlayList
        :isActive="followersOverlay"
        @close="closeFollowersOverlay"
    >
        <div class="box__list" v-if="user_followers.length > 0">
            <div 
                v-for="user in user_followers"
                :key="user.id"
                class="box__list__item"
            >
                <router-link :to="{name: 'profile', params: {id: user.id}}">
                    <img src="@/assets/images/avatar-placeholder.jpeg" alt="" class="box__list__item__image">     
                    <div class="box__list__item__username">
                        {{ user.login }}
                    </div>
                </router-link>
                <div class="box__list__item__inner">
                    <div class="box__list__item__inner__followers">
                        Followers: {{ user.followersCounter }}
                    </div>
                    <div class="box__list__item__inner__posts">
                        Posts: {{ user.postsCounter }}
                    </div>
                </div>           
                {{ i }}
            </div>
        </div>
        <div class="" v-else>Loading...</div>
    </OverlayList>
    <OverlayList
        :isActive="followingsOverlay"
        @close="closeFollowingsOverlay"
    >
        <div class="box__list" v-if="user_followings.length > 0">
            <div 
                v-for="user in user_followings"
                :key="user.id"
                class="box__list__item"
            >
                <img src="@/assets/images/avatar-placeholder.jpeg" alt="" class="box__list__item__image">     
                <router-link :to="{name: 'profile', params: {id: user.id}}">
                    <img src="@/assets/images/avatar-placeholder.jpeg" alt="" class="box__list__item__image">     
                    <div class="box__list__item__username">
                        {{ user.login }}
                    </div>
                </router-link>
                <div class="box__list__item__inner">
                    <div class="box__list__item__inner__followers">
                        Followers: {{ user.followersCounter }}
                    </div>
                    <div class="box__list__item__inner__posts">
                        Posts: {{ user.postsCounter }}
                    </div>
                </div>           
                {{ i }}
            </div>
        </div>
        <div class="" v-else>Loading...</div>
    </OverlayList>
    <div v-if="user_data == undefined">
    user not found
    </div>
    <div v-else class="">
        <section class="h-100 gradient-custom-2">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-9 col-xl-7">
                  <div class="card">
                        <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
                            <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
                                <img 
                                    v-if="user_data.image != undefined"
                                    :src="user_data.image"
                                    alt="Generic placeholder image" 
                                    class="img-fluid img-thumbnail mt-4 mb-2" 
                                    style="width: 150px; z-index: 1"
                                >
                                <img
                                    v-else 
                                    src="@/assets/images/avatar-placeholder.jpeg"
                                    alt="Generic placeholder image" 
                                    class="img-fluid img-thumbnail mt-4 mb-2" 
                                    style="width: 150px; z-index: 1"
                                >
                                <button 
                                    type="button" 
                                    class="btn btn-outline-dark" 
                                    data-mdb-ripple-color="dark"
                                    style="z-index: 1;"
                                    v-if="storage.userId == $route.params.id"
                                >
                                    Edit profile
                                </button>
                                <button 
                                    type="button" 
                                    class="btn btn-outline-dark btn-follow" 
                                    data-mdb-ripple-color="dark"
                                    style="z-index: 1;"
                                    v-else
                                >
                                    Follow
                                </button>
                            </div>
                            <div class="ms-3" style="margin-top: 130px;">
                                <h5>{{ user_data.login }}</h5>
                                <p>{{ user_data.status }}</p>
                            </div>
                        </div>
                        <div class="p-4 text-black" style="background-color: #f8f9fa;">
                            <div class="d-flex justify-content-end text-center py-1">
                                <div style="cursor: pointer">
                                    <p class="mb-1 h5">{{ user_data.postsCounter }}</p>
                                    <p class="small text-muted mb-0">Posts</p>
                                </div>
                                <div class="px-3">
                                    <div style="cursor: pointer" @click="showFollowersOverlay">
                                        <p class="mb-1 h5">{{ user_data.followersCounter }}</p>
                                        <p class="small text-muted mb-0">Followers</p>
                                    </div>
                                </div>
                                <div  style="cursor: pointer" @click="showFollowingsOverlay">
                                    <p class="mb-1 h5">{{ user_data.followingsCounter }}</p>
                                    <p class="small text-muted mb-0">Following</p>
                                </div>
                            </div>
                        </div>
                            <div class="card-body p-4 text-black">
                                <div class="mb-5">
                                    <p class="lead fw-normal mb-1">About</p>
                                    <div class="p-4" style="background-color: #f8f9fa;">
                                        <p class="font-italic mb-1">{{ user_data.info }}</p>
                                    </div>
                                </div>
                                <div 
                                    class="form-outline mb-4" 
                                    style="display: flex; flex-direction: column"
                                    v-if="storage.userId == user_data.id"
                                >
                                    <input 
                                        type="text"
                                        class="form-control-lg post-title" 
                                        placeholder="Post Title"
                                        @input="this.newPostTitle = $event.target.value"
                                        v-bind:value="newPostTitle"
                                    />
                                    <textarea 
                                        type="text"
                                        class="form-control-lg post-content" 
                                        placeholder="Post Title"
                                        rows="4"
                                        @input="this.newPostContent = $event.target.value"
                                        v-bind:value="newPostContent"
                                    />
                                    <button class="btn btn-outline-success" @click="sendNewPost">Send post</button>
                                </div>
                                <hr style="margin-bottom: 10px;">
                                <div v-if="user_posts.length > 0" class="d-flex justify-content-between align-items-center mb-4">
                                    <p class="lead fw-normal mb-0">Recent posts</p>
                                    <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
                                </div>
                                <PostItem
                                    v-for="i in user_posts.length"
                                    :key="i"
                                    :post_data="user_posts[i-1]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
      <!-- {{ getUserById($route.params.id) }}
      {{ users.find(user => user.id == $route.params.id) }} -->

<script>
import PostItem from '@/components/PostItem.vue'
import OverlayList from './OverlayList.vue';
import { api } from '@/api'

export default {
    components: { PostItem, OverlayList },
    data() {
        return {
            user_data: {},
            currentUserId: Number,
            user_followers: [],
            user_followings: [],
            user_posts: [],
            storage: {},
            followersOverlay: false,
            followingsOverlay: false,
            newPostTitle: "",
            newPostContent: ""
        }
    },
    watch: {
        "$route.params.id": {
            handler(value) {
                // console.log(value)
                this.fetchUser(value)
                this.closeFollowersOverlay()
                this.closeFollowingsOverlay()
            },
            immediate: true
        }
    },
    methods: {
        showFollowersOverlay() {
            this.followersOverlay = true
        },
        showFollowingsOverlay() {
            this.followingsOverlay = true
        },
        closeFollowersOverlay() {
            this.followersOverlay = false
        },
        closeFollowingsOverlay() {
            this.followingsOverlay = false
        },
        async fetchUser(id) {
            // if (!this.users.length) {
            //     const usersStore = useUsersStore();
            //     usersStore.fetchUsers();
            // }
        
            const [ userResponse, postsResponse, userFollowersResponse, userFollowingsResponse ] = await Promise.all([
                // axios.get(`http://localhost:8889/api/users/${id}`),
                api.fetchUser(id),
                api.fetchUserPosts(id),
                api.fetchUserFollowers(id),
                api.fetchUserFollowings(id)
            ])

            this.user_followings = userFollowersResponse.data
            this.user_followers = userFollowingsResponse.data
            this.user_data = userResponse.data
            this.user_posts = postsResponse.data

            console.log(this.user_posts)

            // axios.get('http://localhost:8889/api/users/' + this.$route.params.id).then(response => this.user_data = response.data)
            // axios.get('http://localhost:8889/api/posts/postsBy' + this.$route.params.id).then(response => this.user_posts = response.data)
        },
        async sendNewPost() {
            if (this.newPostTitle.length >= 4) {
                if (this.newPostContent.length >= 4) {
                    await api.sendPost(this.newPostTitle, this.newPostContent, localStorage.userId)
                    this.newPostTitle = "",
                    this.newPostContent = ""
                } else {
                    alert("Post content should be longer than 4")
                }
            } else {
                alert("Post title should be longer than 4!")
            }
            this.$router.go()
        }
    },
    mounted() {
        this.storage = localStorage
    }
}
</script>

<style lang="scss">
.box {
    &__list {
        overflow: scroll;
        overflow-x: hidden;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        position: absolute;
        top: 5%;
        left: 5%;
        width: 90%;
        height: 90%;
        background-color: rgba(0, 0, 0, 0.175);

        border: 1px solid #198754;
        border-radius: 5px;

        &__item {
            display: block;
            background-color: white;
            min-height: 60px;
            max-height: 60px;

            border: 1px solid #111;
            box-shadow: none;
            border-radius: 5px;
            width: 96%;

            margin: 2% 0 2% 2%;

            &__username {
                cursor: pointer;
                font-weight: 500;
                position: relative;
                color: #111;
                left: 70px;
                top: 5px;
            }

            &__inner {
                margin-left: 70px;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: left;
            }

            &__inner div {
                margin-right: 10px;
            }

            &__inner div:last-child {
                margin-right: 0;
            }
        
            &__image {
                margin-left: 4px;
                margin-top: 4px;
                position: absolute;
                width: 50px;
                border-radius: 5px;
            }

        }

    }
}
.btn-follow {
    border: 1px solid rgb(255, 138, 168);
    background-color: rgb(255, 138, 168);
    color: white;

    transition: .1s linear;
}

.btn-follow:hover {
    border: 1px solid rgb(255, 138, 168);
    color: rgb(255, 138, 168);
    background-color: white;
}

.post-title {
    font-weight: 700;
    font-size: 18px;
}

.post-content {
    font-weight: 400;
    font-size: 18px;
    
}
</style>