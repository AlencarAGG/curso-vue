<template>
    <div>
        <Header />
        <FirstComponent />
        <p>oque eu estou fazendo é: {{ testando }}</p>
        <LifeCycle />
        <Pessoa1 />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import FirstComponent from "./components/FirstComponent.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Pessoa1 from "./components/Pessoa1.vue";

export default {
    name: "App",
    components: {
        Header,
        FirstComponent,
        LifeCycle,
        Pessoa1,
    },
    data() {
        return {
            testando: "teste",
        };
    },
};
</script>

<style>
    body {
        background-color: black;
        color:aqua
    }

    p {
        color: white;
    }

    a{
        color: red;
    }
</style>
