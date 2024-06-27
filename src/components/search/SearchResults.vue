<script setup>
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';
    import Item from '@/components/home/items/Item.vue';
    import products from '@/assets/products.json';

    const router = useRouter()
    const props = defineProps({
        searchValue: String
    })

    const filteredProducts = computed(() => {
        const value = props.searchValue.toLowerCase();
        return products.filter(product =>
            product.title.toLowerCase().includes(value) ||
            product.brand.toLowerCase().includes(value)
        );
    });

    const goToProductPage = (id) => {
        router.push({name: 'ProductDetails', params: {id}})
    }
</script>

<template>
    <div class="container">
        <h2 class="fs-4">Resultados:</h2>
        <div class="row m-auto gap-2">
            <Item
                v-for="product in filteredProducts"
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