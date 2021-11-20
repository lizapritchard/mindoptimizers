Vue.component('daily-goals', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
        <div>
            <h2>Daily Goals</h2>
            <ul>
                <li>
                    <i class="water-icon fas fa-tint"></i>
                    <div>
                        <div>Water Intake: </div>
                        <div>120 ounces</div>
                    </div>
                </li>
                <li>
                    <i class="sun-icon fas fa-sun"></i>
                    <div>
                        <div>Time Outdoors: </div>
                        <div>30 minutes</div>
                    </div>
                </li>
                <li>
                    <i class="moon-icon fas fa-moon"></i>
                    <div>
                        <div>Sleep: </div>
                        <div>8 hours</div>
                    </div>
                </li>
            </ul>
        <div>
    `, 
}); 