<script setup>
    import { ref } from 'vue';

    let address = ref('')
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = address.value.length < 1
    }
</script>

<template>
    <div>
        <label for="user-address">Dirección</label>

        <input 
            id="user-address" 
            type="text" 
            placeholder="Ingrese su dirección"
            v-model="address"
            @input="handleInput"
        />

        <p v-if="isValid">Dirección requerido</p>
    </div>
</template>