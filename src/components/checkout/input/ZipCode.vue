<script setup>
    import { ref } from 'vue';

    let zipCode = ref('');
    let isValid = ref(false);

    const zipCodePattern = /^\d{4}$|^[A-Za-z]\d{4}$|^[A-Za-z]\d{4}[A-Za-z]{3}$/;

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
            placeholder="Código postal"
            v-model="zipCode"
            @input="handleInput"
        />

        <p class="form-error" v-if="isValid">Código postal requerido</p>
    </div>
</template>