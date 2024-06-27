<script setup>
    import { ref } from 'vue';

    let cdocument = ref('')
    let isValid = ref(false)

    const documentPattern = /^\d{2}\.\d{3}\.\d{3}$|^\d{8}$/

    const handleInput = () => {
        isValid.value = !documentPattern.test(cdocument.value);
    }
</script>

<template>
    <div class="form-group">
        <label for="card-cdocument">Documento <span>*</span></label>

        <input 
            class="form-control"
            id="card-cdocument" 
            type="number" 
            placeholder="Documento"
            v-model="cdocument"
            @input="handleInput"
        />

        <p class="form-error" v-if="isValid">Documento requerido</p>
    </div>
</template>