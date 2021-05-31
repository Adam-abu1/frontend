import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://localhost:3030`,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAllWeatherReports() {
        return apiClient.get('/weather')
    },

    getLocationSpecificWeather(longitude, latitude)  {
        return apiClient.get('/weather')
            .then(({data}) => {
                return data.find(weatherDatum => {
                    return ((Number(longitude.toFixed(2)) === weatherDatum?.coord?.lon)
                    && (Number(latitude.toFixed(2)) === weatherDatum?.coord?.lat))
                })
            })
    }
}
