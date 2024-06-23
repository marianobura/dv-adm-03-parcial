<script setup>
    import { useRouter } from 'vue-router';
    import Item from './Item.vue'
    import products from '@/assets/products.json'

    const router = useRouter()

    const goToProductPage = (id) => {
        router.push({name: 'ProductDetails', params: {id}})
    }
</script>

<template>
    <div class="container mt-4 m-60">
        <h2 class="fs-4">Productos destacados</h2>
        <div class="row m-auto gap-2">
            <Item
                v-for="product in products"
                :alt="'Imagen del drone'"
                :image="product.image"
                :title="product.title"
                :price="product.price"
                :key="product.id"
                @click="goToProductPage(product.id)"
            />
        </div>
    </div>
</template>

<style>
.m-60 {
    margin-bottom: 60px;
}
</style>