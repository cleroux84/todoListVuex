<template>
   <div>
      <v-toolbar dark>  
        <v-toolbar-title>
            <router-link 
            style="text-decoration: none; color: inherit;"
            to="/">
            Accueil
            </router-link>
          </v-toolbar-title>
        <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down" v-for="option in options" :key="option.path">
            <v-btn text><router-link :to="{path: option.path}"
            style="text-decoration: none; color: inherit;"
            > 
            {{option.id}} 
            </router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
</template>
<script>

export default {
    computed: {
      options(){
              return this.$store.state.options;
            }, 
  }, 
}
</script>
