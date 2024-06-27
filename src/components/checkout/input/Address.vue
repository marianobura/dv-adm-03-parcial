<script setup>
    import { ref } from 'vue';

    let address = ref('')
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = address.value.length < 1
    }
</script>

<template>
    <div class="form-group">
        <label for="user-address">Dirección <span>*</span></label>

        <input 
            class="form-control"
            id="user-address" 
            type="text" 
            placeholder="Dirección"
            v-model="address"
            @input="handleInput"
        />

        <p class="form-error" v-if="isValid">Dirección requerido</p>
    </div>
</template>