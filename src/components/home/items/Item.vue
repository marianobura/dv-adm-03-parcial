<script setup>
    defineProps ({
        image : String,
        title : String,
        price : Number,
        alt : String,
    })
</script>

<template>
    <div class="col-6 card p-2">
        <div class="card-body p-0">
            <div class="h-img">
                <img class="card-img-top" :src="`${image}`" :alt="`${alt} ${title}`">
            </div>
            <h1 class="text-center fs-5 text-truncate">{{ title }}</h1>
            <p class="m-0 text-center fs-5 blue-color text-weight-bold">${{ price }}</p>
        </div>
    </div>
</template>

<style>
.card {
    cursor: pointer;
}
.card:hover {
    background-color: var(--blue-color-03);
}
</style>