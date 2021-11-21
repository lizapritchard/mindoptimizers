
Vue.component('daily-goals', {
    props: ["username"], 
    data: function () {
      return {
        goals: [
            {
                title: "Water Intake", 
                iconClass: "water-icon fa-tint", 
                target: null, 
                units: "ounces"
            }, 
            {
                title: "Time Outdoors", 
                iconClass: "sun-icon fa-sun", 
                target: null,
                units: "minutes"
            }, 
            {
                title: "Sleep", 
                iconClass: "moon-icon fa-moon", 
                target: null, 
                units: "hours"
            }, 
        ], 
        modal: null
      }
    },
    methods: {
        openDailyGoalsModal() {
            this.modal = new bootstrap.Modal(this.$refs.modal); 
            this.modal.show();
        }
    }, 
    template: `
        <div>
            <div ref="modal" id="intro-modal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Hi {{username}}! Let's set some self-care goals today!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul>
                                <li v-for="goal in goals">
                                    <i :class="goal.iconClass" class="fas"></i> 
                                    <div>
                                        <div> {{goal.title}}: </div>
                                        <div>
                                            <input type="text" v-model="goal.target"></input>
                                            {{goal.units}}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="openDailyGoalsModal()">
                <h2>Self Care Goals</h2>
                <ul>
                    <li v-for="goal in goals">
                        <i :class="goal.iconClass" class="fas"></i> 
                        <div>
                            <div> {{goal.title}}: </div>
                            <div v-if="goal.target != null">{{goal.target}} {{goal.units}} </div>
                            <a v-else class="link-highlight">Set your {{goal.title}} goal!</a>
                        </div>
                    </li>
                </ul>
            </div>
        <div>
    `, 
}); 