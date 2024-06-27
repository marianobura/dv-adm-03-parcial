<script setup>
    import { ref } from 'vue';

    let holder = ref('')
    let isValid = ref(false)

    const handleInput = () => {
        isValid.value = holder.value.length < 1
    }
</script>

<template>
    <div class="form-group">
        <label for="card-holder">Titular de la tarjeta <span>*</span></label>

        <input 
            class="form-control"
            id="card-holder" 
            type="text" 
            placeholder="Titular de la tarjeta"
            v-model="holder"
            @input="handleInput"
        />

        <p class="form-error" v-if="isValid">Titular de la tarjeta requerido</p>
    </div>
</template>