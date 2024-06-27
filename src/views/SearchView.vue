<script setup>
    import { ref } from 'vue';
    import SearchInput from '@/components/search/SearchInput.vue'
    import SearchResults from '@/components/search/SearchResults.vue'

    const searchValue = ref('');

    const updateSearchValue = (value) => {
        searchValue.value = value;
    };
</script>

<template>
    <SearchInput @update:searchValue="updateSearchValue" />
    <SearchResults :searchValue="searchValue" />
</template>