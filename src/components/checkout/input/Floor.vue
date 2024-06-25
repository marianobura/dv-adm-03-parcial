<script setup>
    import { ref } from 'vue';

    let floor = ref('')
</script>

<template>
    <div class="form-group col">
        <label for="user-floor">Piso</label>

        <input 
            class="form-control"
            id="user-floor" 
            type="number" 
            placeholder="Ingrese su piso"
            v-model="floor"
        />
    </div>
</template>