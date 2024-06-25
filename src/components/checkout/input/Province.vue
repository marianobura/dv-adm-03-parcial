<script setup>
    import { ref } from 'vue';

    let province = ref('')
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = province.value.length < 4
    }
</script>

<template>
    <div>
        <label for="user-province">Provincia</label>

        <input 
            id="user-province" 
            type="text" 
            placeholder="Ingrese su provincia"
            v-model="province"
            @input="handleInput"
        />

        <p v-if="isValid">Provincia requerido</p>
    </div>
</template>