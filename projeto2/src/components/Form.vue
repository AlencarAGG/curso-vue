<template>
    <div>
        <h1>Meu Formulario:</h1>
        <form action="" @submit="enviar_formulario($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <inputSubmit/>
            </div>
        </form>
    </div>
</template>

<script>
import InputText from "./Form/InputText.vue";
import InputSubmit from "./Form/InputSubmit.vue";

export default {
    name: "Form",
    components: {
        InputText,
        InputSubmit,
    },
    data() {
        return {
            name: "",
            email: "",
        };
    },
    methods: {
        enviar_formulario(e) {

            e.preventDefault();
            
            const name = this.name;
            const email = this.email;

            console.log("formulario enviado")
            console.log("meu nome é = " + name);
            console.log("meu email é = " + email);

            // ajax
            // inserir dados no banco
            
        }
    }
};
</script>
