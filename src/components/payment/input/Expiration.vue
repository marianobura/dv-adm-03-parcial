<script setup>
    import { ref } from 'vue';

    let expiration = ref('')
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = expiration.value.length < 1
    }
</script>

<template>
    <div class="form-group col">
        <label for="card-expiration">Vencimiento <span>*</span></label>

        <input 
            class="form-control"
            id="card-expiration" 
            type="date" 
            placeholder="Vencimiento"
            v-model="expiration"
            @input="handleInput"
        />

        <p class="form-error" v-if="isValid">Vencimiento requerido</p>
    </div>
</template>