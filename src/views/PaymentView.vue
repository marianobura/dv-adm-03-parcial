<script setup>
    import PaymentForm from '@/components/payment/PaymentForm.vue';
    import NavInfo from '@/components/NavInfo.vue';
    import ButtonFixed from '@/components/ButtonFixed.vue';
</script>

<template>
    <NavInfo 
        viewTitle="Información de pago"
    />
    <PaymentForm />
    <RouterLink to="/payment">
        <ButtonFixed
            textContent="CONFIRMAR COMPRA"
        />
    </RouterLink>
</template>