<template>
    <div>
        <h1>Essa é a descrição da pessoa : {{ nome }}</h1>
        <Info />
        <Form />
    </div>
</template>

<script>
import Info from "./Info.vue";
import Form from "./Form.vue";

export default {
    name: "Pessoa1",
    components: {
        Info,
        Form,
    },
    data() {
        return {
            nome: "Donald Trump",
        };
    },
};
</script>
