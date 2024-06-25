<script setup>
    import { ref } from 'vue';

    let phoneNumber = ref('');
    let isValid = ref(false);

    const phonePattern = /^(?:\+54)?(?:9)?(?:\d{2,4})\d{6,8}$/;

    const handleInput = () => {
        isValid.value = !phonePattern.test(phoneNumber.value);
    }
</script>

<template>
    <div class="form-group">
        <label for="user-phonenumber">Número de teléfono <span>*</span></label>

        <input
            class="form-control"
            id="user-phonenumber" 
            type="number" 
            placeholder="Ingrese su número de teléfono" 
            v-model="phoneNumber"
            @input="handleInput"
        />

        <p v-if="isValid">Número de teléfono inválido</p>
    </div>
</template>
