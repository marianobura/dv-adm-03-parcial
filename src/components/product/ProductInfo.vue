<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import ProductHeader from './ProductHeader.vue'
import ProductSpecs from './ProductSpecs.vue'
import IconRating from '@/components/icons/IconRating.vue'
import ButtonFixed from '@/components/ButtonFixed.vue'
import products from '@/assets/products.json'

const route = useRoute();

const product = computed(() => {
    return products.find((item) => item.id === Number(route.params.id));
});

const isInCart = ref(false);

const checkCartStatus = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    isInCart.value = !!cart.find(item => item.id === product.value.id);
};

const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productInCart = cart.find(item => item.id === product.value.id);

    if (productInCart) {
        cart.splice(cart.indexOf(productInCart), 1);
        isInCart.value = false;
    } else {
        cart.push({ ...product.value, quantity: 1 });
        isInCart.value = true;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};

checkCartStatus();
</script>

<template>
    <ProductHeader 
        :image="product.image"
        :title="product.title"
        alt="Imagen del drone"
    />
    <div class="container">
        <div class="mt-3 d-flex align-items-center justify-content-between w-100">
            <div class="d-contents">
                <h2 class="m-0 fs-4 text-truncate">{{ product.title }}</h2>
            </div>
            <div>
                <p class="m-0 fs-2 fw-700 blue-color">${{ product.price }}</p>
            </div>
        </div>
        <div class="d-flex align-items-center gap-2">
            <div class="d-flex">
                <IconRating />
            </div>
            <p class="fs-s m-0 text-muted">{{ product.ratings.average_rating }}</p>
        </div>
        <div class="product-description">
            <p>{{ product.description }}
            </p>
        </div>
    </div>
    <ProductSpecs 
        title="Especificaciones técnicas" 
        :specs="product.specs"
    />
    <ButtonFixed
        :onClick="addToCart"
        :textContent="isInCart ? 'ELIMINAR DEL CARRITO' : 'AGREGAR AL CARRITO'"
        :buttonClass="{'btn-cart': isInCart, 'btn-normal': !isInCart}"
    />
</template>

<style>
.product-description > p {
    margin-top: 10px;
    margin-bottom: 32px;
    font-size: 14px;
}

.d-contents {
    display: contents;
}

.btn-cart {
    background-color: var(--red-color);
}
</style>
