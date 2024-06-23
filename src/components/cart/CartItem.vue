<script setup>
    import { ref, watch } from 'vue';
    import IconPlus from '@/components/icons/IconPlus.vue';
    import IconMinus from '@/components/icons/IconMinus.vue';

    const props = defineProps({
        item: Object
    });

    const emit = defineEmits(['remove-item']);

    const counter = ref(props.item.quantity);

    const increment = () => {
        counter.value++;
        updateCart();
    }

    const decrement = () => {
        if (counter.value > 0) {
            counter.value--;
            updateCart();
        }
    }

    const updateCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = cart.findIndex(item => item.id === props.item.id);

        if (product !== -1) {
            if (counter.value === 0) {
                cart.splice(product, 1);
                emit('remove-item', props.item.id);
            } else {
                cart[product].quantity = counter.value;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    watch(counter, (val) => {
        if (val === 0) {
            updateCart();
        }
    });
</script>

<template>
    <div class="w-100 cart-card p-2 d-flex justify-content-between rounded">
        <div class="d-flex align-items-center">
            <div class="h-img">
                <img class="card-img-cart" :src="item.image" :alt="'Imagen del ' + item.title">
            </div>
            <div class="d-flex flex-column align-items-start">
                <div>
                    <h2 class="fs-4 text-truncate">{{ item.title }}</h2>
                </div>
                <div>
                    <p class="m-0 fs-6 blue-color">${{ item.price }}</p>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column justify-content-between align-items-center bg-quantity rounded px-1">
            <div class="fs-5">
                <button @click="increment"><IconPlus /></button>
            </div>
            <div class="fs-4 blue-color">
                {{ counter }}
            </div>
            <div class="fs-5">
                <button @click="decrement"><IconMinus /></button>
            </div>
        </div>
    </div>
</template>

<style>
button {
    border: none;
    background-color: inherit;
}
</style>