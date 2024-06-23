<script setup>
    import { useRouter } from 'vue-router';
    import IconBack from './icons/IconBack.vue'

    defineProps ({
        viewTitle: String,
    })

    const router = useRouter();

    const goBack = () => {
        router.back();
    }
</script>

<template>
    <nav class="container">
        <div class="h-nav d-flex align-items-center">
            <div class="d-flex p-1 rounded bg-opacity">
                <IconBack @click="goBack()" />
            </div>
            <div class="title">
                <h1 class="fs-4 m-0">{{ viewTitle }}</h1>
            </div>
        </div>
    </nav>
</template>

<style>
.title {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
}
</style>