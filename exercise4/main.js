var mainAppVm = new Vue({
    el: '#app',
    data: {
        pColor:"black"
    },

    computed: {
    },
    methods: {
        mouseOver: function () {
            this.pColor = "red"
        },
        mouseOut: function () {
            this.pColor = "black"
        }
    }
})