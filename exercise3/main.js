var mainAppVm = new Vue({
    el: '#app',
    data: {
        color1: {
            red: 0,
            green: 0,
            blue: 0
        },
        color2: {
            red: 0,
            green: 0,
            blue: 0
        },
        averageColor: {
            red: 0,
            green: 0,
            blue: 0
        },
        testColor:"pink"
    },

    computed: {
        //take in color as rgb

        computeAverageColor: function () {
            this.averageColor.red = Math.round((this.color1.red + this.color2.red) / 2);
            this.averageColor.green = Math.round((this.color1.green + this.color2.green) / 2);
            this.averageColor.blue = Math.round((this.color1.blue + this.color2.blue) / 2);

            console.log(`rgb(${this.averageColor.red},${this.averageColor.green},${this.averageColor.blue})`);
            return `rgb(${this.averageColor.red},${this.averageColor.green},${this.averageColor.blue})`;

        },
        //displayColor: function (color) {
        //    console.log(color)

        //},
        computeTest: function () {
           //return "rgb(50,50,50)";
            return"rbg(25, 0, 0)"
        }
    },
    methods: {
        displayColor: function (color) {
            return `rgb(${color.red},${color.green},${color.blue})`;

        }
    }
})