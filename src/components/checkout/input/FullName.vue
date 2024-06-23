<script setup>
    import { ref } from 'vue';

    let fullName = defineModel()
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = fullName.value.length < 1
    }
</script>

<template>
    <div>
        <label for="user-fullname">Nombre completo</label>

        <input 
            id="user-fullname" 
            type="text" 
            placeholder="Ingrese su nombre completo"
            v-model="fullName"
            @input="handleInput"
        />

        <p v-if="isValid">Nombre completo requerido</p>
    </div>
</template>