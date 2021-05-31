<template>
    <v-card width="800" class="mx-auto mt-5">
        <v-card-title>
            <h1>Weather Data</h1>
        </v-card-title>
        <v-card-text>
            {{ weatherDataToDisplay }}
        </v-card-text>
    </v-card>
</template>
<script>
    import WeatherService from "../services/WeatherService";
    import {eventBus} from "../main";

    export default {
        name: 'WeatherData',
        data: () => ({
            locationData: {},
            weatherDataToDisplay: ''
        }),
        methods: {
            async getLocationBasedWeatherInfo() {
                this.weatherDataToDisplay = await WeatherService.getLocationSpecificWeather(
                    this.locationData?.longitude,
                    this.locationData?.latitude
                )
            }
        },
        mounted() {
            eventBus.$on('foundLocationObject', (event) => {
                this.locationData = event
                this.getLocationBasedWeatherInfo()
            })
        }
    }
</script>
