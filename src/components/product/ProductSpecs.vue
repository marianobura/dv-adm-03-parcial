<script setup>
    defineProps({
        title: String,
        specs: Object
    });

    const specInfo = {
        weight_grams: {
            title: "Peso"
        },
        battery_life_minutes: {
            title: "Autonomía de la batería"
        },
        camera_resolution: {
            title: "Resolución de la cámara"
        },
        range_km: {
            title: "Rango de alcance"
        },
        max_speed_kph: {
            title: "Velocidad máxima"
        },
        gps: {
            title: "GPS"
        }
    };
</script>

<template>
    <div class="container m-button">
        <div class="d-flex justify-content-between mb-3">
            <div>
                <h3 class="spec-title fs-5 m-0">{{ title }}</h3>
            </div>
        </div>
        <div class="d-flex gap-2 w-100 row m-auto">
            <div v-for="(value, key) in specs" class="spec-card col-6 p-2">
                <h4 class="fs-6 text-truncate">{{ specInfo[key].title }}</h4>
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<style>
p {
    margin: 0;
}

.spec-title {
    padding-bottom: 6px;
    border-bottom: 2px solid var(--blue-color-01);
}
</style>
