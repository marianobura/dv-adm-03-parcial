<script setup>
    import { ref } from 'vue';

    let floor = ref('')
</script>

<template>
    <div>
        <label for="user-floor">Piso</label>

        <input 
            id="user-floor" 
            type="number" 
            placeholder="Ingrese su piso"
            v-model="floor"
        />
    </div>
</template>