<script setup>
    import IconSearch from '@/components/icons/IconSearch.vue'
</script>

<template>
    <nav class="container">
        <div class="h-nav d-flex align-items-center justify-content-between">
            <div class="input-box w-100 rounded">
                <input type="text" class="form-control" placeholder="Buscar un producto">
                <IconSearch />
            </div>
        </div>
    </nav>
</template>

<style>
.input-box {
    position: relative;
}

.input-box svg {
    position: absolute;
    right: 12px;
    top: 18px;
    fill: #666666;
    height: 16px;
    width: 16px;
}

.form-control {
    height: 50px;
}

.form-control:focus {
    background-color: var(--bg-color-01);
    box-shadow: none;
    border: 1px solid var(--bg-color-02);
}

.form-control::placeholder {
    color: #666666;
    font-size: 14px;
}
</style>