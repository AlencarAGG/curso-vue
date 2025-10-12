<template>
    <div>
        <h1>Meu Formulario:</h1>
        <form action="">
            <div><InputText /></div>
            <div><InputText /></div>
            <div><InputSubmit /></div>
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
        return {};
    },
};
</script>
