<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades.</p>
        <p>Uso as seguintes a tecnologias:</p>
        <ul>
            <li>php</li>
            <li>laravel</li>
            <li>vue.js</li>
        </ul>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <Picture />
    </div>
</template>

<script>
import Picture from "./Picture.vue";

export default {
    name: "Info",
    components: {
        Picture,
    },
    data() {
        return {
            nome: "Alex",
            email: "teste@gmail.com",
            esta_trabalhando: false,
            mostrar_email: true,
        };
    },
};
</script>
