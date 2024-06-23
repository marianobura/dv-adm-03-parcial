<script setup>
    import { ref } from 'vue';

    let zipCode = defineModel()
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = zipCode.value.length < 1
    }
</script>

<template>
    <div>
        <label for="user-zipcode">Código postal</label>

        <input 
            id="user-zipcode" 
            type="text" 
            placeholder="Ingrese su código postal"
            v-model="zipCode"
            @input="handleInput"
        />

        <p v-if="isValid">Código postal requerido</p>
    </div>
</template>