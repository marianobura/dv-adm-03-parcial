<script setup>
    import { ref } from 'vue';

    let cvv = ref('')
    let isValid = ref(false)

    const cvvPattern = /^\d{3,4}$/;

    const handleInput = () => {
        isValid.value = !cvvPattern.test(cvv.value);
    }
</script>

<template>
    <div class="form-group col">
        <label for="card-cvv">CVV <span>*</span></label>

        <input 
            class="form-control"
            id="card-cvv" 
            type="number" 
            placeholder="CVV"
            v-model="cvv"
            @input="handleInput"
        />

        <p class="form-error" v-if="isValid">CVV requerido</p>
    </div>
</template>