<template>
    <Navigation/>
    <div class="go-back">
        <p class="go-back__btn" @click="$router.go(-1)">← Back</p>
    </div>
    <div v-if="post.title">
        <PostItem
            :post_data="post"
            style="margin-bottom: 20px;"
        />
        <div v-if="commentaries.length > 0" style="margin: 0 auto; max-width: 1200px"><h1>Comments</h1></div>
            <div 
                style="margin-top: 10px;"
                class="card comment"
                v-for="comment in commentaries.reverse()"
                :key="comment.id"
            >
                <div class="d-flex flex-start align-items-center">
                    <img v-if="comment.author.image == undefined" 
                        class="shadow-1-strong me-3 avatar" 
                        src="@/assets/images/avatar-placeholder.jpeg" 
                        alt="avatar" 
                        width="60"
                        height="60"
                    />
                    <img 
                        v-else
                        class="shadow-1-strong me-3 avatar" 
                        style="border-radius: 5px;"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" 
                        alt="avatar" 
                        width="60"
                        height="60" 
                        @click="reloadPage"
                    />
                    <div>
                        <h6 class="mb-1">
                            <router-link 
                                :to="{
                                    name:'profile', 
                                    params: {id: comment.author.id}
                                }"
                                class="post__author"
                            >
                            {{ comment.author.username }} ({{ comment.author.firstName }} {{ comment.author.lastName }})
                            </router-link>
                        </h6>
                        <p class="text-muted small mb-0">{{ comment.dateOfCreated }}</p>
                    </div>
                </div>
                <p class="post__inner__content" style="margin-top: 10px;">
                    {{ comment.content }}
                </p>
            </div>
        </div>

</template>

<script>
import Navigation from './Navigation.vue';
import PostItem from '@/components/PostItem.vue'
import axios from 'axios';

export default {
    components: { Navigation, PostItem },
    data() {
        return {
            post: {},
            commentaries: []
        }
    },
    mounted() {
        axios.get('http://localhost:8889/api/posts/' + this.$route.params.id).then(response => this.post = response.data)
        axios.get('http://localhost:8889/api/posts/' + this.$route.params.id + '/commentaries').then(response => this.commentaries = response.data)
    }
}

</script>

<style lang="scss" scoped>
    .post__author {
        color: #198754;
    }

    .comment {
        border-radius: 5px;
        padding: 15px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .go-back {
        margin: 10px auto; 
        max-width: 1200px;

        &__btn {
            width: fit-content;
            cursor: pointer;
            transition: .1s linear;
        }
        &__btn:hover {
            color: #198754;
        }
    }

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