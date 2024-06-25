<script setup>
    import { ref } from 'vue';

    let locality = ref('')
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = locality.value.length < 4
    }
</script>

<template>
    <div>
        <label for="user-locality">Localidad</label>

        <input 
            id="user-locality" 
            type="text" 
            placeholder="Ingrese su localidad"
            v-model="locality"
            @input="handleInput"
        />

        <p v-if="isValid">Localidad requerido</p>
    </div>
</template>