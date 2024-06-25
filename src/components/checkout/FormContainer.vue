<script setup>
    import FullName from './input/FullName.vue'
    import PhoneNumber from './input/PhoneNumber.vue';
    import Locality from './input/Locality.vue';
    import Address from './input/Address.vue';
    import Floor from './input/Floor.vue';
    import ZipCode from './input/ZipCode.vue';
    import Province from './input/Province.vue';
    import NavInfo from '../NavInfo.vue';

</script>

<template>
    <NavInfo 
        viewTitle="Proceso de compra"
    />
    <form method="post" autocomplete="false">
        <h1>Información personal</h1>
        <FullName />
        <PhoneNumber />
        <h1>Dirección de envío</h1>
        <Province />
        <Locality />
        <Address />
        <Floor />
        <ZipCode />
        <!-- <button :disabled="!isValid">Continuar</button> -->
    </form>
</template>