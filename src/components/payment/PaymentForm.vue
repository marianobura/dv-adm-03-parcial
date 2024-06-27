<script setup>
    import CardHolder from './input/Holder.vue'
    import CardNumber from './input/Number.vue'
    import CardExpiration from './input/Expiration.vue'
    import CardCVV from './input/CVV.vue'
    import CardDocument from './input/Document.vue'
</script>

<template>
    <div class="container m-60">
        <form method="post" autocomplete="false">
            <h2 class="fs-5">Pago</h2>
            <CardHolder />
            <CardNumber />
            <div class="form-row">
                <CardExpiration />
                <CardCVV />
            </div>
            <CardDocument />
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