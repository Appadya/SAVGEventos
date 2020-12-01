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
    getNearbyPlacesByText({ commit }, { lat, long, search }){
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?location=${lat},${long}&radius=1500&query=${search}&key=${API_KEY}`)
        .then(response => {
            commit('getNearbyPlacesByText', response.data.results);
        }).catch(() => commit('getNearbyPlacesByText', false))
    },
    // Irei implementar se de tempo..
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