<script setup>
    import NavInfo from '@/components/NavInfo.vue';
    import CheckoutForm from '../components/checkout/CheckoutForm.vue'
    import ButtonFixed from '@/components/ButtonFixed.vue';
</script>

<template>
    <NavInfo 
        viewTitle="Información de envío"
    />
    <CheckoutForm />
    <RouterLink to="/payment">
        <ButtonFixed
            textContent="MÉTODOS DE PAGO"
        />
    </RouterLink>
</template>