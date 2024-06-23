<script setup>
    defineProps({
        textContent: String,
        buttonClass: Object,
        onClick: Function
    })
</script>

<template>
    <div class="position-fixed bottom-0">
        <button :class="['rounded', 'btn-normal', buttonClass]" @click="onClick">{{ textContent }}</button>
    </div>
</template>

<style>
.btn-normal {
    background-color: var(--blue-color-01);
    color: #FFFFFF;
    height: 50px;
    width: 100%;
    border: none;
    font-weight: 400;
}
</style>