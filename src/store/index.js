import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   selected: 'shopping',
    options: [
            {name : 'shopping', id: 'shopping', path: '/shopping'},
            {name: 'for home', id: 'home', path: '/forhome'},
            {name: 'work', id: 'work', path: '/work'}
            ],
    todoList: [
              {task : 'item1', list : 'shopping'},
              {task : 'item4', list : 'shopping'},
              {task : 'item2', list : 'work'},
              {task : 'item5', list : 'work'},
              {task : 'item3', list : 'home'},
              {task : 'item6', list : 'home'},
              ], 
    tasks: '',
    optionsForSelected: [],
    shoppingList: [],
 
        }, 
        
      
  getters: {
    todoList: state => {
      return state.todoList;
    },  
    options: state => {
      return state.options;
    },
    selected: state => {
      return state.selected;
    },
    tasks: state => {
      return state.tasks;
    },
    shoppingList: state => {
      return state.todoList.filter(
        todoList => todoList.list == 'shopping'
      )
    },
    workList: state => {
      return state.todoList.filter(
        todoList => todoList.list == 'work'
      )
    },
    homeList: state => {
      return state.todoList.filter(
        todoList => todoList.list == 'home'
      )
    },
        
  },
  mutations: {
    
   addTask (state, data) {
        state.todoList.push({
          task : data.currentTasks,
          list : data.list,
          completed : false,
        })
    },
    deleteTask (state, index){
      let item = state.todoList;
      item.splice(index, 1); 
    },   
  },
  actions: {
    addTask ({ commit }, data) {
      commit('addTask', data);
    },
    deleteTask ({ commit }, index) {
      commit('deleteTask', index);
    }
  },
  modules: {
  }
})
