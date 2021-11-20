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
            <li><span>Water Intake: </span>120 ounces</li>
            <li><span>Time Outdoors: </span>30 minutes</li>
            <li><span>Sleep: </span>8 hours</li>
            </ul>
        <div>
    `, 
}); 