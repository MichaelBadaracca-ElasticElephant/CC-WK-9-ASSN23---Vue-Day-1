var mainAppVm = new Vue({
    el: '#app',
    data: {
        initialCaffieneInMg: 95,
        currentCaffieneInMg: 95,
        timeOfConsumption: new Date(),
        caffieneHalfLifeInHrs: 10
    },

    computed: {
        timeElapsed: function () {
            console.log(this.timeOfConsumption.getTime());
            console.log(Date.now());
            //return  Date.now() - this.timeOfConsumption.UTC();
        },

        //calculateCaffieneLevel: function () {
        //    //get decay rate
        //    //calculate time elasped
        //    //subtract time elapsed times the decay rate from the initial caffiene level

        //    var timeElapsed = Date - timeOfConsumption;



        //    //Half life is when half of the substance is gone - give mg/hr
        //    var rateOfDecay = initialCaffieneInMg / caffieneHalfLifeInHrs / 2;
        //    currentCaffieneInMg 
        //}
    },
    methods: {

    }
})