<script setup>
    import { ref } from 'vue';

    let cnumber = ref('')
    let isValid = ref(false)

    const numberPattern = /^\d{16}$/;

    const handleInput = () => {
        isValid.value = !numberPattern.test(cnumber.value);
    }
</script>

<template>
    <div class="form-group">
        <label for="card-cnumber">Número de tarjeta <span>*</span></label>

        <input 
            class="form-control"
            id="card-cnumber" 
            type="number" 
            placeholder="Número de tarjeta"
            v-model="cnumber"
            @input="handleInput"
        />

        <p class="form-error" v-if="isValid">Número de tarjeta requerido</p>
    </div>
</template>