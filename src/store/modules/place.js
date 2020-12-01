import axios from 'axios'

const API_KEY = 'AIzaSyBouFPwLmPCen4qxUFBRcMMAFEPq2NyL34',
state = {
    placePhoto: null,
    places: []
},
getters = {
    foundPlaces: state => state.places,
    foundPlacePhoto: state => state.placePhoto
},
actions = {
    // getNearbyPlacesByType({ commit }, { lat, long, search }){
    //     console.log(lat, long, search);
    //     axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=${search}&key=${API_KEY}`)
    //     .then(response => {
    //         console.log(response.data.results);
    //         commit('getNearbyPlacesByType', response.data.results);
    //     })
    // },
    getNearbyPlacesByText({ commit }, { lat, long, search }){
        console.log(search)
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?location=${lat},${long}&radius=1500&query=${search}&key=${API_KEY}`)
        .then(response => {
            console.log(JSON.stringify(response.data.results));
            commit('getNearbyPlacesByText', response.data.results);
        }).catch(() => commit('getNearbyPlacesByText', false))
    },
    getPlacePhoto({ commit }, { photoString }){
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoString}&key=${API_KEY}`)
        .then(response => {
            commit('getPlacePhoto', response.data);
        })
    }
},
mutations = {
    getNearbyPlacesByText: (state, data) => state.places = data,
    getPlacePhoto: (state, data) => state.placePhoto = data,
}

export default {
    state,
    actions,
    getters,
    mutations
}