
<template>
    <div> 
    </div>
</template>

<script>
  import axios from 'axios';
    
  export default {
    el: '#app',

    mounted: function(){
        this.getQuote() //method1 will execute at pageload
        console.log("getQuote on page load");
        console.log("here is the quote after page load: ");
        console.log(this.quote);
    },

    data: {
        //   token: '07c2bf361b2c688675ecf32141cdc1f9d4c857c4',
          quote: 'this is the quote',
          author: 'this is the author',
        //   data: null,
    },

    methods: {
        getQuote: function() {
              console.log("getting quote of the day...");
              axios
                .get('https://quotes.rest/qod?category=inspire&language=en', {
                })
                .then(response => {

                    this.quote = response.data.contents.quotes[0].quote;
                    this.author = response.data.contents.quotes[0].author;

                    console.log(this.quote);
                    console.log(this.author);

                    this.$parent.setQuote(this.quote);
                    this.$parent.setAuthor(this.author);

                })
        },
    },

    name: 'InspoQuote',

  }
</script>
