<template>
    <div>
        <h1>Olá Vue</h1>
        <P>Meu Nome é {{ nome }} e trabalho como {{ profissao }}</P>
    </div>
</template>

<script>
export default {
    name: "FirstComponent",
    data() {
        return {
            nome: "Matheus",
            profissao: "Programador",
        };
    },
};
</script>
