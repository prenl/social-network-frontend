<template>
    <div class="card" style="max-width: 16rem;">
        <img v-if="user.image != undefined" src="" class="card-img-top" alt="...">
        <img v-else src="@/assets/images/avatar-placeholder.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ user.login }}</h5>
            <p 
                class="card-text" 
                style="margin: 0;"
                v-if="user.age < 0"
            >
                {{ user.age }} years old
            </p>
            <p class="card-text" style="margin: 0;">
                Posts: {{ user.postsCounter }}
            </p>
            <p class="card-text">
                Followers: {{ user.followersCounter }}
            </p>
            <div class="card__buttons">
                <router-link :to="{ name: 'profile', params: { id: user.id } }" class="btn btn-success">View Profile</router-link>
                <a href="#" class="btn btn-follow">Follow</a>
            </div>
        </div>
      </div>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .card:hover {
        box-shadow: 0 0 10px 0 rgb(25,135,84);
        border: 1px solid rgb(25,135,84);
    }
    
    .card:hover .card-body {
        border-top: 1px solid rgb(25,135,84);
    }

    .card {
        transition: .2s linear;
        &__buttons {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
    }

    .card-body {
        border-top: 1px solid rgba(0, 0, 0, 0.175);
        transition: .2s linear;
    }

    .btn-follow {
        background-color: rgb(255, 138, 168);
        color: white;

        transition: .1s linear;
    }

    .btn-follow:hover {
        color: white;
        background-color: rgb(255, 117, 140);
    }

</style>