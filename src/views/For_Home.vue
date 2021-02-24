<template>
  <div>
    <Header/>
    <v-container>
      <h1>LIST FOR HOME</h1>
        <v-form>
          <v-row class="rowInput">
            <v-col
              class="d-flex"
              cols="12"
              sm="2">
              <v-text-field 
                  label="Add a new task for home"
                  v-model="currentTasks" 
                  @keyup.enter="getAddTask"
                  >
              </v-text-field>
            </v-col>
            <v-col
                class="d-flex"
                cols="12"
                sm="2">
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
                Tasks
              </th>
              <th class="text-left">
                Done
              </th>
              <th class="text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
                v-for="(homeItem) in homeList"
              :key="homeItem.task"
            >
              <td class="text-center" v-bind:class="{ completed: homeItem.completed}">{{ homeItem.task }}</td>
              <td>
                <v-checkbox
                    v-model="homeItem.completed"
                ></v-checkbox>
                </td>
              <td>
                <v-btn
                v-on:click="getDeleteWorkTask(homeItem)"
                class="deleteCross"
                >X</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Footer from '../components/Footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Header,
    Footer,
  },
   data(){
      return{
          currentTasks: "",
      } 
  },
  computed: {
      ...mapGetters([
        'todoList',
        'homeList'
    ]),
 },
 methods: {
    ...mapActions([
      'addTask',
      'deleteTask'
    ]), 
      getDeleteWorkTask: function(homeItem) {
        let index = this.todoList.findIndex(todoList => todoList.task === homeItem.task);
        this.deleteTask(index);
      },
      getAddTask: function() {
        let data = {
        currentTasks: this.currentTasks,
        list: "home",
      }
      if(this.currentTasks !== "") {
        this.addTask(data);
        this.currentTasks = "";
        } else {
          alert ('Enter a new task for home !');
        }
      }
  }

}
</script>
