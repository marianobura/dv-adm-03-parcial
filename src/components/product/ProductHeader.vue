<script setup>
    import NavInfo from '@/components/NavInfo.vue'
    defineProps({
        image: String,
        title: String,
        alt: String,
    })
</script>

<template>
    <div class="product-bg">
        <NavInfo 
            :viewTitle="'Detalles del Producto'"
        />
        <header class="container h-100 h-img">
            <img class="card-img-product" :src="`${image}`" :alt="`${alt} ${title}`">
        </header>
    </div>
</template>

<style>
.product-bg {
    background-color: var(--bg-color-01);
    width: 100%;
    height: 260px;
    border-radius: 0 0 20px 20px;
}

.product-img-container {
    padding-top: 80px;
}
</style>