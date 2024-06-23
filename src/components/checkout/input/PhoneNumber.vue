<script setup>
    import { ref } from 'vue';

    let phoneNumber = defineModel()
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = phoneNumber.value.length < 1
    }
</script>

<template>
    <div>
        <label for="user-phonenumber">Número de teléfono</label>

        <input 
            id="user-phonenumber" 
            type="number" 
            placeholder="Ingrese su número de teléfono"
            v-model="phoneNumber"
            @input="handleInput"
        />

        <p v-if="isValid">Número de teléfono requerido</p>
    </div>
</template>