<template>
<div class = "casing">
    <div class = "prompt">
        {{prompt}}
    </div>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Today I..."
          rows="20"
        />
</div>
  
</template>

<script>
  export default {
    mounted: function(){
        this.promptGetter() //method1 will execute at pageload
        console.log("HELLO");
    },

    data() {
      return {
        text: '',
        prompt: 'laila'
      }
    },
    methods: {
        promptGetter: function(){
            const prompts = ["What are 6 things that you are grateful for today?", "What helps you slow down and feel more present?", "Whats a goal you want to accomplish today and why?", "What things in my life make me smile? How can I incorporate them into my life more?", "What things do I want to focus on today outside of school?", "When was the last time you really laughed? What did you laugh about?", "What is one thing I can commit to today that my future self will thank me for?"];
            this.prompt = prompts[Math.floor(Math.random()*prompts.length)];
            console.log(prompt);
        },
    },

    name: 'JournalEntry',
  }

</script>
<style scoped>

    .prompt {
        font-size: 1.5rem;
        color: black;
        padding-bottom: 10px;
    }
    .casing {
        padding: 20px;
        color: #2596be;
    }
</style>