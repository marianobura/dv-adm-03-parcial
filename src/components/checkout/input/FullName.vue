<script setup>
    import { ref } from 'vue';

    let fullName = ref('');
    let isValid = ref(false);

    const fullNamePattern = /^[a-zA-Z ]+$/;

    const handleInput = () => {
        isValid.value = !fullNamePattern.test(fullName.value);
    }
</script>

<template>
    <div class="form-group">
        <label for="user-fullname">Nombre completo <span>*</span></label>

        <input
            class="form-control"
            id="user-fullname" 
            type="text" 
            placeholder="Nombre completo"
            v-model="fullName"
            @input="handleInput"
        />

        <p class="form-error" v-if="isValid">Nombre completo requerido</p>
    </div>
</template>