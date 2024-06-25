<script setup>
    import { ref } from 'vue';

    let zipCode = ref('');
    let isValid = ref(false);

    const zipCodePattern = /^\d{4}$|^[A-Z]\d{4}$|^[A-Z]\d{4}[A-Z]{3}$/;

    const handleInput = () => {
        isValid.value = !zipCodePattern.test(zipCode.value);
    }
</script>

<template>
    <div class="form-group col">
        <label for="user-zipcode">Código postal <span>*</span></label>

        <input 
            class="form-control"
            id="user-zipcode" 
            type="text" 
            placeholder="Ingrese su código postal"
            v-model="zipCode"
            @input="handleInput"
        />

        <p v-if="isValid">Código postal requerido</p>
    </div>
</template>