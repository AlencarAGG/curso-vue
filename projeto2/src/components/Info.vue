<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades.</p>
        <p>Uso as seguintes tecnologias para Frontend:</p>
        <ul>
            <li v-for="(technology, index) in Frontend_tecnologies" :key="index">{{ technology }}</li>
        </ul>
        <p>Uso as seguintes tecnologias para Backend:</p>
        <ul>
            <li v-for="technology in Backend_tecnologies" :key="technology.id">{{ technology.language }}</li>
        </ul>
        <div>
            <button @click="showEmail">{{texto_botao}}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>para acessar meu portfólio <a :href="meu_link" target="_blank">basta clicar aqui</a></p>
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
            mostrar_email: false,
            meu_link: "https://testemeupai.com.br",
            texto_botao: "mostrar Email",
            Frontend_tecnologies: ["HTML","CSS","VUE"],
            Backend_tecnologies: [
              {id: 1, language: "PHP"},
              {id: 2, language: "LARAVEL"},
              {id: 3, language: "JAVASCRIPT"}, 
            ],

        };
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.texto_botao = "Mostrar email"
            }else {
                this.texto_botao = "Esconder Email"
            }
        }
    }
};
</script>
