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
    getLocations () {
        return apiClient.get('/locations')
    },

    getLocation(postcode) {
        return apiClient.get('/locations')
            .then(({data}) => {
                return data.find(location => {
                    return location.postcode === String(postcode).toUpperCase()
                })
            })
            .catch(e => {
                console.error('There was an issue with finding your entered postcode')
                throw new Error(e);
            })

    }
}
