<template>
    <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
            <h1 class="display-1">Weather App</h1>
        </v-card-title>
        <v-form>
            <v-card-text>
                <v-text-field
                    label="Postcode"
                    prepend-icon="mdi-map-marker"
                    type="text"
                    required
                    v-model="enteredPostcode"
                ></v-text-field>
            </v-card-text>
            <v-btn
                @click="searchForPostcode"
                dark
            >Submit</v-btn>
        </v-form>
    </v-card>
</template>
<script>
import LocationService from '@/services/LocationService'
    export default {
        name: 'PostcodeSearch',
        data: () => ({
            enteredPostcode: '',
            usableLocations: [],
            foundLocation: {}
        }),
        methods: {
            async searchForPostcode() {
                this.foundLocation = await LocationService.getLocation(this.enteredPostcode)
            }
        },
        mounted() {
            LocationService.getLocations()
                .then(
                    ({data}) => this.usableLocations = data
                )
        }
    };
</script>
