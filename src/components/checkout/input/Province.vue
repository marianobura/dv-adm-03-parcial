<script setup>
    import { onMounted, ref } from 'vue';

    const provinces = ref([]);
    let province = ref('')
    let isValid = ref(false)

    const provincesAPI = async () => {
        const response = await fetch("https://apis.datos.gob.ar/georef/api/provincias");
        const data = await response.json();
        provinces.value = data.provincias;
    };

    onMounted(() => {
        provincesAPI();
    });

    const handleInput = () => {
        isValid.value = province.value !== ''
    }
</script>

<template>
    <div class="form-group">
        <label for="user-province">Provincia <span>*</span></label>

        <select class="form-control" id="user-province" v-model="province" @change="handleInput">
            <option value="" disabled selected>Elige una provincia</option>
            <option v-for="province in provinces" :key="province.id" :value="province.nombre">
                {{ province.nombre }}
            </option>
        </select>

        <p v-if="!isValid">Provincia requerido</p>
    </div>
</template>