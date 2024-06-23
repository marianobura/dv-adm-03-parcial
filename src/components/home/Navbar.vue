<script setup>
    import IconHome from '../icons/IconHome.vue'
    import IconSearch from '../icons/IconSearch.vue';
    import IconCart from '../icons/IconCart.vue';
</script>

<template>
    <div class="d-flex align-items-center justify-content-evenly navbar-container position-fixed bottom-0">
        <div>
            <RouterLink to="/"><IconHome /></RouterLink>
        </div>
        <div>
            <RouterLink to="/search"><IconSearch /></RouterLink>
        </div>
        <div>
            <RouterLink to="/cart"><IconCart /></RouterLink>
        </div>
    </div>
</template>

<style>
.navbar-container {
    background-color: #FFFFFF;
    height: 60px;
    width: 100%;
}
</style>