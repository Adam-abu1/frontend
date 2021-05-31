<template>
    <v-card width="800" class="mx-auto mt-5">
        <v-card-title>
            <h1>Weather Data</h1>
        </v-card-title>
        <v-card-text>

        </v-card-text>
    </v-card>
</template>
<script>
    // import WeatherService from "../services/WeatherService";
    import {eventBus} from "../main";

    export default {
        name: 'WeatherData',
        data: () => ({
            LocationData: {}
        }),
        mounted() {
            eventBus.$on('foundLocationObject', (event) => {
                this.LocationData = event
            })
        }
    }
</script>
