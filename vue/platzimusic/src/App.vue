<template lang="pug">
  #app
    img(src='https://glopzvega.github.io/Curso-Javascript-Platzi/vue/platzimusic/dist/logo.png')
    h1 {{ titulo }}
    h2 {{ subtitulo }}
    select(v-model="selectedCountry")
      option(v-for="pais in paises", v-bind:pais="pais", v-bind:value="pais.value") {{ pais.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist")
      //- li(v-for="artist in artists") {{ artist.name }}
    
</template>

<script>

import Artist from "./components/Artist.vue"
import Spinner from "./components/Spinner.vue"
import getArtist from "./api"

export default {
  name: 'app',
  
  data () {
    return {
      titulo : "Platzimusic",
      subtitulo : "Consumo de API LastFM con Vue.JS",
      artists : [],
      selectedCountry : "mexico",
      loading : true,
      paises : [
        {
          value : "mexico",
          name : "México"
        },
        {
          value : "spain",
          name : "España"
        },
        {
          value : "colombia",
          name : "Colombia"
        }
      ]
    }
  },

  watch : { // Observar un modelo / elemento en particular cuando haya un cambio
    "selectedCountry" : function(){
      this.refreshArtist();
    }
  },

  methods : {
    "refreshArtist" : function(){
      const self = this;
      self.loading = true;
      getArtist(self.selectedCountry)
        .then(function(artists){
          self.artists = artists
          self.loading = false
        })
    }
  },

  components : {
    Artist,
    Spinner 
  },

  mounted : function(){
    this.refreshArtist()
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  /*color red !important*/
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
