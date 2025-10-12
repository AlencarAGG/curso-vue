const MyNameApp = {
    data(){
        return {
            name: "Nyak",
            BecksFumados: "0",
            input_name: ""
        }
    },
    methods:{
        submitForm(e) {

            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");