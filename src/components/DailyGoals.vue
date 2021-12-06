<template>
    <div>
        <b-modal ref="daily-goals-modal" id="daily-goals-modal">
            <template #modal-title>
                <h5 class="modal-title">Hi {{username}}! Let's set some self-care goals today!</h5>
            </template>
            <ul>
                <li v-for="goal in goals" :key="goal.title">
                    <font-awesome-icon :icon="goal.icon" class="daily-goals-icon" :class="goal.iconClass"/> 
                    <div>
                        <div> {{goal.title}}: </div>
                        <div>
                            <input type="text" v-model="goal.target" @input="validateValues()"/>
                            {{goal.units}}
                        </div>
                    </div>
                </li>
            </ul>
            <template #modal-footer>
                <div class="flex">
                    <div id="error-msg">{{errorMsg}}</div>
                    <b-button variant="primary" block @click="closeDailyGoalsModal()">Submit</b-button>
                </div>
            </template>
        </b-modal>
        <div>
            <h2>Self Care Goals</h2>
            <ul>
                <li v-for="goal in goals" :key="goal.title">
                    <font-awesome-icon :icon="goal.icon" class="daily-goals-icon" :class="goal.iconClass"/>
                    <div class="flex">
                        <div>
                            <div> {{goal.title}}: </div>
                            <div v-if="goal.target != null">{{goal.target}} {{goal.units}} </div>
                            <a v-else class="link-highlight" @click="openDailyGoalsModal()">Set your {{goal.title}} goal!</a>
                        </div>
                        <input v-show="goal.target" type="checkbox" class="goals-check"/>
                    </div>
                </li>
            </ul>
            <div class="right-align">
                <button @click="openDailyGoalsModal()" class="btn btn-primary">Edit Goals</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ["username"],
    data() {
        return {
            errorMsg: "", 
            goals: [
                {   
                    title: "Water Intake", 
                    icon: "tint", 
                    iconClass: "water-icon",
                    target: null, 
                    units: "ounces"
                }, 
                {
                    title: "Time Outdoors", 
                    icon: "sun", 
                    iconClass: "sun-icon",
                    target: null,
                    units: "minutes"
                }, 
                {
                    title: "Sleep", 
                    icon: "moon",
                    iconClass: "moon-icon", 
                    target: null, 
                    units: "hours"
                }, 
            ], 
            modal: null
        }
    },
    methods: {
        openDailyGoalsModal() {
            this.$refs['daily-goals-modal'].show()
        },
        closeDailyGoalsModal() {
            this.$refs['daily-goals-modal'].hide()
        },
        validateValues() {
            let errorMsg = ""
            this.goals.forEach(goal => {
                if (Number(goal.target) < 0) {
                    errorMsg = "Please set a positive goal.";
                }
                else if (isNaN(goal.target)) {
                    errorMsg = "Please use a number for your goals.";
                }
            });
            this.errorMsg = errorMsg
        }
    }, 
    name: 'DailyGoals', 
  }
</script>

<style scoped>
    /* TODO: figure out a better way to line these up  */
    .water-icon {
        padding-left: 5px;
        color: #2AAAE1;
    }

    .sun-icon {
        color: #F9BA45; 
    }

    .moon-icon {
        color: #8E01FF
    }

    .daily-goals-icon {
        font-size: 2rem;
        margin: 1rem;
        width: 32px;
    }

    li {
        display: flex;
        align-items: center;
    }

    #daily-goals h2 {
        padding: 1rem;
        text-decoration: underline;
    }

    .link-highlight {
        font-weight: 700;
        color: rgb(3, 138, 192);
        text-decoration: none;
    }
    .flex {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #error-msg {
        color: red;
    }

    .goals-check {
        margin-right: 2rem;
        width: 1.5rem;
        height: 1.5rem;
    }

    .right-align {
        display: flex;
        justify-content: flex-end;
    }
</style>