<template>
    <div v-if="isActive" class="overlay" @click="$emit('close')">
        <div class="box" @click.stop>
            <div class="box__close">
                <i class="fa-solid fa-xmark fa-2xl" style="cursor: pointer;" @click="$emit('close')"></i>
            </div>
            <slot></slot>
            <!--  -->
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isActive: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .overlay {
        position: fixed;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
        cursor: pointer; /* Add a pointer on hover */
    }

    .box {
        cursor: default;
        position: absolute;
        top: 10%;
        left: 700px;
        display: block;
        background-color: rgb(248, 249, 250);
        width: 500px;
        height: 80%;

        border-radius: 5px;
        box-shadow: -5px 5px 0 0 rgba(0, 0, 0, 0.1);
    
        &__close {
            position: absolute;
            right: 2%;
            top: 1%;
        }

    }

</style>