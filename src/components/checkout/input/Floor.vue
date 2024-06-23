<script setup>
    import { ref } from 'vue';

    let floor = defineModel()
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = floor.value.length < 1
    }
</script>

<template>
    <div>
        <label for="user-floor">Piso</label>

        <input 
            id="user-floor" 
            type="text" 
            placeholder="Ingrese su piso"
            v-model="floor"
            @input="handleInput"
        />

        <p v-if="isValid">Piso requerido</p>
    </div>
</template>