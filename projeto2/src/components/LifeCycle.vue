<template>
    <h1>Meu nome é : {{ nome }}</h1>
</template>

<script>
export default {
    name: "LyfeCycle",
    data() {
        return {
            nome: "ainda nao sei",
        };
    },
    created() {
        setTimeout(() => {
            this.nome = "donald";
        }, 1000);
    },
    mounted() {
        setTimeout(() => {
            this.nome = "trump";
        }, 3000);
    },
};
</script>
