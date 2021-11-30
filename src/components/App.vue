<template>
  <div id="app">
      <intro-modal/>
      <h1>Good Morning, {{username}}</h1>
        <div class="container-fluid">
            <div class="row">
                <section id="journal" class="col-5 white-box"></section>
                <div class="col-3">
                    <section id="quote" class="row white-box"> 
                      <inspo-quote/>
                      <div> <h2> <i> {{quote}} </i> <br> - {{author}} </h2> </div>
                    </section>
                    <section id="links" class="row white-box">
                      <links/>
                    </section>
                    <section class="row white-box"></section>
                </div>
                <div class="col-3">
                    <section id="daily-goals" class="row white-box">
                        <daily-goals :username="username"/>
                    </section>
                    <section class="row white-box"></section>
                </div>
            </div>
          </div>
  </div>
</template>

<script>
  import DailyGoals from './DailyGoals.vue'; 
  import IntroModal from './IntroModal.vue'; 
  import InspoQuote from './InspoQuote.vue';
  import Links from './Links.vue';

  export default {
    data () {
      return {
        username: null,
        quote: null,
        author: null,
      }
    },
    methods: {
      setUsername(val) {
          this.username = val; 
      },

      setQuote(val) {
        this.quote = val;
      },

      setAuthor(val) {
        this.author = val;
      }
    }, 
    components: {
      DailyGoals, 
      IntroModal,
      InspoQuote,
      Links,
    }, 
  }
</script>

<!-- FONTS -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap');
</style>

<!-- Global CSS -->
<style>
  body {
      background-image: url(../../static/cloud.jpeg);
      background-repeat: no-repeat;
      background-size: 100%;
      font-family: 'Open Sans', sans-serif;
  }
  ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  h1 {
      font-family: 'El Messiri', sans-serif;
      margin: 2rem;
      font-size: 5rem;
  }

  .white-box {
      background-color: white;
      border-radius: 10px;
      margin: 2rem;
      height: 20rem;
  }
</style>
