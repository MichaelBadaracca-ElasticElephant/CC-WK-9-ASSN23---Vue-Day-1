var mainAppVm = new Vue({
    el: '#app',
    data: {
        number1:0,
        number2:0
    },

    computed: {
        product: function () {
            //return parseInt(this.number1) * parseInt(this.number2);
            //return this.number1 * this.number2;
            return this.number1 * this.number2;
        },
        sum: function () {
            //return parseInt(this.number1) + parseInt(this.number2);
            return this.number1 + this.number2;
        }
    },
    methods: {
    }
})