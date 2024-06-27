<script setup>
    import FullName from './input/FullName.vue'
    import PhoneNumber from './input/PhoneNumber.vue';
    import Address from './input/Address.vue';
    import Floor from './input/Floor.vue';
    import ZipCode from './input/ZipCode.vue';
    import Province from './input/Province.vue';
</script>

<template>
    <div class="container m-60">
        <form method="post" autocomplete="false">
            <h2 class="fs-5">Información personal</h2>
            <FullName />
            <PhoneNumber />
            <h2 class="fs-5 mt-4">Dirección de envío</h2>
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