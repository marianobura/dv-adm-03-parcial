<script setup>
    import FullName from './input/FullName.vue'
    import PhoneNumber from './input/PhoneNumber.vue';
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
    <div class="container m-60">
        <form method="post" autocomplete="false">
            <h1 class="fs-4">Información personal</h1>
            <FullName />
            <PhoneNumber />
            <h1 class="fs-4 mt-4">Dirección de envío</h1>
            <Province />
            <Address />
            <div class="form-row">
                <Floor />
                <ZipCode />
            </div>
        </form>
    </div>
</template>

<style>
    p {
        color: red;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: 6px 0 0 0;
    }

    span {
        color: red;
    }

    .form-row {
        display: flex;
        gap: 12px;
    }

    .form-group {
        padding-top: 12px;
    }

    .fs-4 {
        margin: 0;
    }
</style>