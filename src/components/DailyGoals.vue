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
                            <input type="text" v-model="goal.target"/>
                            {{goal.units}}
                        </div>
                    </div>
                </li>
            </ul>
            <template #modal-footer>
                <b-button variant="primary" block @click="closeDailyGoalsModal()">Submit</b-button>
            </template>
        </b-modal>
        <!-- <div ref="modal" id="intro-modal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Hi {{username}}! Let's set some self-care goals today!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li v-for="goal in goals" :key="goal.title">
                                <i :class="goal.iconClass" class="fas"></i> 
                                <div>
                                    <div> {{goal.title}}: </div>
                                    <div>
                                        <input type="text" v-model="goal.target"/>
                                        {{goal.units}}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> -->
        <div @click="openDailyGoalsModal()">
            <h2>Self Care Goals</h2>
            <ul>
                <li v-for="goal in goals" :key="goal.title">
                    <font-awesome-icon :icon="goal.icon" class="daily-goals-icon" :class="goal.iconClass"/>
                    <div>
                        <div> {{goal.title}}: </div>
                        <div v-if="goal.target != null">{{goal.target}} {{goal.units}} </div>
                        <a v-else class="link-highlight">Set your {{goal.title}} goal!</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    props: ["username"],
    data() {
        return {
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
</style>