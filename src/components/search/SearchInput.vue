<script setup>
    import { ref, watch, defineEmits } from 'vue';
    import { useRouter } from 'vue-router';
    import IconBack from '@/components/icons/IconBack.vue';
    import IconSearch from '@/components/icons/IconSearch.vue';

    const router = useRouter()
    const emit = defineEmits(['update:searchValue'])

    const goBack = () => {
        router.back();
    };

    const searchValue = ref('');

    const filterProducts = () => {
        searchValue.value = searchValue.value;
    };

    watch(searchValue, (value) => {
        emit('update:searchValue', value)
    });

    emit('update:searchValue', searchValue.value);
</script>

<template>
    <nav class="container">
        <div class="h-nav d-flex align-items-center justify-content-between gap-3">
            <div class="d-flex p-1 rounded bg-opacity">
                <IconBack @click="goBack()" />
            </div>
            <div class="input-box w-100 rounded">
                <input type="text" class="form-control" placeholder="Buscar un producto" v-model="searchValue" @input="filterProducts" />
                <IconSearch />
            </div>
        </div>
    </nav>
</template>