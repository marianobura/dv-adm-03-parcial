<script setup>
    import { ref, onMounted, computed } from 'vue';
    import CartItem from './CartItem.vue';

    const cart = ref([]);

    onMounted(() => {
        loadCart();
    });

    const loadCart = () => {
        const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
        cart.value = cartStorage;
    };

    const total = computed(() => {
        return cart.value.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
    });

    const removeItem = (itemId) => {
        cart.value = cart.value.filter(item => item.id !== itemId);
        updateCart();
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value));
    };
</script>

<template>
    <div class="w-100 text-center">
        <p>Productos en el carrito: <span class="text-weight-bold">{{ cart.length }}</span></p>
    </div>
    <hr>
    <div class="container">
        <div class="d-flex flex-column gap-3">
            <CartItem v-for="item in cart" :key="item.id" :item="item" @remove-item="removeItem" />
        </div>
    </div>
    <hr>
    <div class="container d-flex justify-content-between align-items-center m-button">
        <div>
            <h3 class="m-0 text-muted fs-6">Total</h3>
        </div>
        <div>
            <p class="m-0 fs-3 fw-700 blue-color">${{ total }}</p>
        </div>
    </div>
</template>

