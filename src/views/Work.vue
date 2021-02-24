<template>
  <div>
    <Header/>
    <v-container>
      <h1>WORK LIST</h1>
        <v-form>
          <v-row class="rowInput">
            <v-col
              class="d-flex"
              cols="12"
              sm="2">
              <v-text-field 
                  label="Add a new shopping task"
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
                v-for="(workItem) in workList"
              :key="workItem.task"
            >
              <td class="text-center" v-bind:class="{ completed: workItem.completed}">{{ workItem.task }}</td>
              <td>
                <v-checkbox
                    v-model="workItem.completed"
                ></v-checkbox>
                </td>
              <td>
                <v-btn
                v-on:click="getDeleteWorkTask(workItem)"
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
      'workList'
    ]),
 },
 methods: {
    ...mapActions([
      'addTask',
      'deleteTask'
    ]), 
      getDeleteWorkTask: function(workItem) {
        let index = this.todoList.findIndex(todoList => todoList.task === workItem.task);
        this.deleteTask(index);
      },
      getAddTask: function() {
        let data = {
        currentTasks: this.currentTasks,
        list: "work",
      }
      if(this.currentTasks !== "") {
        this.addTask(data);
        this.currentTasks = "";
        } else {
          alert ('Enter a new shopping task !');
        }
      }
  }
  
}
</script>