<template>
    <div>
        <h1>Olá Vue</h1>
        <P>Meu Nome é {{ nome }} e trabalho como {{ profissao }}</P>
    </div>
    <MultiplosEventos/>
    <Reutilizacao/>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";
import Reutilizacao from "./reutilizacao.vue";

export default {
    name: "FirstComponent",
    components: {
        MultiplosEventos,
        Reutilizacao,
    },
    data() {
        return {
            nome: "Matheus",
            profissao: "Programador",
        };
    },
};
</script>
