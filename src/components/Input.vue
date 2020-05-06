<template>
  <v-card class='fill-height'>
    <v-card-text>Inputs</v-card-text>
    <v-divider></v-divider>
    <input type='file' id='json_file' accept='.json'  @change='loadJSON($event)'>
  </v-card>
</template>

<script>

export default {
  name: 'inputs',
  data(){

  },
  methods: {
    loadJSON(e){
      var that = this;
      if(window.FileReader){
        var reader = new FileReader();

        reader.readAsText(e.target.files[0]);

        reader.onload = function(event){
           // var jsonData = event.target.result;
          var jsonObj = JSON.parse(event.target.result);    //convert into JSON object

          //storing all variables at global state
          that.$store.dispatch('setUnits', jsonObj['Units']);  // Store the Units 
          
          that.$store.dispatch('setDispLines', jsonObj['Displacement Lines']);     //Store the Displacement Lines  

          that.$store.dispatch('setSpecBuildings', jsonObj['Specific Buildings']); //Specific buildings data

          that.$store.dispatch('setSpecUtilities', jsonObj['Specific Utilities']); // storing Specific Utilities

        };
        
        
      
      }
    }
  }

};

</script>

<style scoped>
input {
  padding: 10px;
 /*  background-color: #008CBA; */
}

</style>