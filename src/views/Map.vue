<template>
  <div id="listmap">
    <b-container fluid>
      <b-row>
        <b-col md>
          <gmap-map id="gmap" :center="center" :zoom="thezoom" class="mt-2">
            <gmap-marker
              v-for="(place, i) in foundPlaces"
              :key="i"
              :position="place.geometry.location"
            ></gmap-marker>
          </gmap-map>
        </b-col>
      </b-row>
    </b-container>
    <b-nav id="map-nav" align="center" pills>
      <b-nav-item>
        <b-input-group class="w-100 mb-3 mt-2">
          <b-input
            placeholder="Busque aqui"
            v-model.lazy="input_entry"
            @change="selected = null"
          >
          </b-input>
          <b-input-group-append>
            <b-form-select
              v-model="selected"
              @change="input_entry = ''"
              :options="options"
            ></b-form-select>
            <b-button type="submit" @click="search">Procurar</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-nav-item>
      <b-nav-item>
        <b-dropdown id="dropdown" text="Ordenar por" variant="dark" class="m-2">
          <b-dropdown-item @click="mostRatedPlaces"
            >Melhor avaliação</b-dropdown-item
          >
          <b-dropdown-item @click="worstRatedPlaces"
            >Pior avaliação</b-dropdown-item
          >
        </b-dropdown>
      </b-nav-item>
    </b-nav>
    <b-container fluid>
      <b-row>
        <b-col md>
          <b-alert
            variant="danger"
            fade
            v-show="!foundPlaces"
            :show="!foundPlaces"
          >
            Ocorreu um erro
          </b-alert>
          <div id="cards">
            <b-card
              v-for="(place, i) in foundPlaces"
              :key="i"
              no-body
              class="overflow-hidden m-2"
              style="max-width: 100%"
            >
              <b-row no-gutters>
                <b-col md="2">
                  <b-card-img
                    src="https://cdn.discordapp.com/attachments/418417396953382924/783469550909521960/unknown.png"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body :title="place.name">
                    <b-card-text>
                      {{ place.formatted_address }}
                    </b-card-text>
                    <b-form-rating
                      id="rating-5"
                      v-model="place.rating"
                      stars="5"
                      readonly
                    ></b-form-rating>
                    <b-button
                      href="#gmap"
                      variant="primary"
                      @click="
                        center = place.geometry.location;
                        thezoom = 16;
                      "
                      >Ver Local</b-button
                    >
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Map",
  data() {
    return {
      center: { lat: 0, lng: 0 },
      thezoom: 15,
      input_entry: null,
      selected: null,
      options: [
        { value: null, text: "Nenhum" },
        { value: "pontos+turisticos", text: "Pontos turísticos" },
        { value: "praias", text: "Praias" },
        { value: "hoteis", text: "Hoteis" },
        { value: "delegacias", text: "Delegacias" },
        { value: "hospitais", text: "Hospitais" },
      ],
    };
  },
  computed: {
    ...mapGetters(["foundPlaces"]),
    ...mapGetters(["foundPlacePhoto"]),
  },
  methods: {
    ...mapActions(["getNearbyPlacesByText"]),
    ...mapActions(["getPlacePhoto"]),
    mostRatedPlaces() {
      this.foundPlaces.sort((a, b) => b.rating - a.rating);
    },
    worstRatedPlaces() {
      this.foundPlaces.sort((a, b) => a.rating - b.rating);
    },
    search() {
      if (this.input_entry) {
        this.getNearbyPlacesByText({
          lat: this.center.lat,
          long: this.center.lng,
          search: this.input_entry.replaceAll(" ", "+").toLowerCase(),
        });
      } else {
        this.getNearbyPlacesByText({
          lat: this.center.lat,
          long: this.center.lng,
          search: this.selected,
        });
      }
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        },
        null,
        { enableHighAccuracy: true }
      );
    },
  },
  // watch: {
  //   center(){
  //     this.getPlaces({
  //       lat: this.center.lat,
  //       long: this.center.lng,
  //       search: "tourist_attraction",
  //     });
  //   }
  // },
  mounted() {
    this.geolocate();
  },
};
</script>