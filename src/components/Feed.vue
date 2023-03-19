<template>
    <div class="feeder">
        <p>Your feed:</p>
    </div>
    <PostsItem
        v-for="post in posts_list"
        :post_data="post"
        :key="post.id"
    />
</template>

<script>
import PostsItem from '@/components/PostsItem.vue'
import { api } from '@/api'

export default {
    components: { PostsItem },
    data() {
        return {
            posts_list: []
        }
    },
    async mounted() {
        const response = await api.fetchFeed(localStorage.userId)
        this.posts_list = response.data
    }
}
</script>

<style lang="scss" scoped>
    .feeder {
        font-weight: 700;
        color: #111;
        font-size: 30px;
        margin: 0 auto;
        width: 1200px;
        padding-top: 10px;
    }
</style>