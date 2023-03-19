<template>
    <div class="container" style="max-width: 1200px;">
        <div class="list" v-if="users.length > 0">
            <UsersItem
                v-for="user in users"
                :key="user.id"
                :user="user"
            />
        </div>
        <div class="loading" v-else>Loading...</div>
    </div>
</template>

<script>
    import UsersItem from './UsersItem.vue';  
    import { api } from '@/api'

    export default {
        components: {
            UsersItem
        },
        data() {
            return {
                users: []
            }
        },
        async mounted() {
            const response = await api.fetchUsers()
            this.users = response.data
            // axios.get('http://localhost:8889/api/users').then(response => this.users = response.data)
            // console.log(this.users)
        }
    }

</script>

<style lang="scss" scoped>

    .list {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        column-gap: 77px;
        row-gap: 20px;
    }

    .users-list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .users-list-enter-active, .users-list-leave-active {
        transition: all 1s;
    }

    .users-list-enter, .users-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

</style>