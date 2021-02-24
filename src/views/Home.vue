<template>
  <div class="home">
       <Header/>
       <Todo/>
       <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Footer from '../components/Footer'
import Todo from '../components/Todo'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>
