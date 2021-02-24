<template>
  <v-container>
    <v-form>
      <v-row class="rowInput">
         <v-col
          class="d-flex"
          cols="12"
          sm="2"
        >
          <v-text-field 
            label="Add a new task"
            v-model="currentTasks" 
            @keyup.enter="getAddTask"
            class="input">
          </v-text-field>
        </v-col>
        <v-col
          class="d-flex"
          cols="12"
          sm="2"
        >
         <v-select
            :items="optionsForSelected"
            label="Select a list"
            outlined
            class="selectedInput"
            v-model="selected"
            v-bind:value="optionsForSelected.value">{{optionsForSelected.name}}
          ></v-select>
        </v-col>
        <v-col
          class="d-flex"
          cols="12"
          sm="1"
        >
        <v-btn
          depressed
          color="red"
          v-on:click="getAddTask"
        >
          ADD
        </v-btn>
        </v-col>
      </v-row>
 </v-form>
      <v-simple-table class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">
              TASKS
            </th>
            <th class="text-center">
              CATEGORIES
            </th>
            <th class="text-left">
              STATUS
            </th>
            <th class="text-left">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
             v-for="(item, index) in todoList"
            :key="item.task"
          >
            <td class="text-center" v-bind:class="{ completed: item.completed}">{{ item.task }}</td>
            <td class="text-center" v-bind:class="{ completed: item.completed}">{{ item.list }}</td>
            <td>
              <v-checkbox
                  v-model="item.completed"
              ></v-checkbox></td>
            <td>
              <v-btn
              v-on:click="getDeleteTask(index)"
              class="deleteCross"
              >X</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
   
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created() {
    this.optionsForSelected = this.options.map((o) => {
      return {"value": o.id, "text": o.name}
    })
  },
  data(){
      return{
          optionsForSelected: [],
          currentTasks: "",
          selected: "",
      }
  },
  computed: {
      ...mapGetters([
      'todoList',
      'options',
      'tasks', 
    ])
  },    
  
  methods: {
    ...mapActions([
      'addTask',
      'deleteTask'
    ]), 
    getAddTask: function() {
      let data = {
        currentTasks: this.currentTasks,
        list: this.selected,
      }
      if(this.currentTasks !== ""){
        this.addTask(data);
        this.currentTasks = "";
      } else {
        alert('Enter a new task !');
      }
    },
    getDeleteTask: function(index) {
        this.deleteTask(index);
      }
      
  }
};
</script>
<style>

.completed{
    text-decoration: line-through;
    opacity: 0.50;
}
.deleteCross{
    color: red;
}
.rowInput{
  justify-content: center;
} 
.table{
  width: 800px;
  margin: auto;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
}

</style>