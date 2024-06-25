<script setup>
    import NavInfo from '../components/NavInfo.vue'
    import CartInfo from '../components/cart/CartInfo.vue'
    import ButtonFixed from '../components/ButtonFixed.vue'
</script>

<template>
    <NavInfo
    :viewTitle = "'Carrito de Compras'"
    />
    <CartInfo />
    <RouterLink to="/checkout">
        <ButtonFixed 
        :textContent = "'VERIFICAR EL PAGO'"
        />
    </RouterLink>
</template>