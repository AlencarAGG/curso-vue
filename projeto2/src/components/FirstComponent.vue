<template>
    <div>
        <h1>Olá Vue</h1>
        <P>Meu Nome é {{ nome }} e trabalho como {{ profissao }}</P>
    </div>
    <MultiplosEventos/>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";

export default {
    name: "FirstComponent",
    components: {
        MultiplosEventos,
    },
    data() {
        return {
            nome: "Matheus",
            profissao: "Programador",
        };
    },
};
</script>
