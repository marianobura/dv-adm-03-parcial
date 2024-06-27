<script setup>
    import SearchBar from '../components/home/SearchBar.vue'
    import Carousel from '../components/home/Carousel.vue'
    import ProductItems from '../components/home/items/Container.vue'
    import Navbar from '../components/home/Navbar.vue'
</script>

<template>
    <RouterLink to="/search">
        <SearchBar />
    </RouterLink>
    <Carousel />
    <ProductItems />
    <Navbar />
</template>
