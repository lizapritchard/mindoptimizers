<template>
<div class = "casing">
    <div class = "prompt">
        {{prompt}}
    </div>
    <b-form-textarea
      v-show="editing"
      id="textarea"
      v-model="text"
      placeholder="Today I..."
      rows="20"
    />
    <p v-show="!editing">{{text}}</p>
    <div class="actions">
      <button class="btn btn-primary" @click="submitJournal()" v-show="editing">Submit</button>
      <button class="btn btn-success" @click="promptGetter()">New Prompt ></button>
    </div>
</div>
  
</template>

<script>
  export default {
    mounted: function(){
        this.promptGetter() //method1 will execute at pageload
    },

    data() {
      return {
        text: '',
        prompt: '', 
        editing: true
      }
    },
    methods: {
      submitJournal() {
        this.editing = false;
      },
        promptGetter: function(){
            const prompts = ["What are 6 things that you are grateful for today?", "What helps you slow down and feel more present?", "Whats a goal you want to accomplish today and why?", "What things in my life make me smile? How can I incorporate them into my life more?", "What things do I want to focus on today outside of school?", "When was the last time you really laughed? What did you laugh about?", "What is one thing I can commit to today that my future self will thank me for?"];
            this.prompt = prompts[Math.floor(Math.random()*prompts.length)];
            this.editing = true;
            this.text = ""
        },
    },

    name: 'JournalEntry',
  }

</script>
<style scoped>
  button {
    margin: 1rem 0;
  }
  .actions {
    text-align: right;
  }

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