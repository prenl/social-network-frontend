<template>
    <div v-if="posts_list.length > 0">
        <div class="feeder">
            <p>Your feed:</p>
        </div>
        <PostItem
            v-for="post in posts_list"
            :post_data="post"
            :key="post.id"
        />
    </div>
    <div v-else>
        <div class="feeder">
            <p>Your feed is empty</p>
        </div>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import { api } from '@/api'

export default {
    components: { PostItem },
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