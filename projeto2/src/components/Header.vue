<template>
    <div>
        <ul>
            <li>Home</li>
            <li>Projetos</li>
            <li>Sobre</li>
        </ul>
    </div>
</template>

<script>
    import Header from "./Header.vue"

    export default {
        name: "Header",
        data() {
            return {
                
            }
        }
    }
    
</script>

<style scoped>
    div {
        background-color: aqua;
    }

    ul {
        display: flex;
        margin: 10px;
        list-style: none;
        color:rgb(151, 42, 165);
        align-content: left;
        align-items: left;
        justify-content: center;
        flex-wrap: wrap;
    }

    li{
        padding: 0px 10px;
    }

    a {
        color: green;
        text-decoration: none;
        border-radius: 5px;
        transition: .5;
    }
    a:hover {
        color: rgb(41, 6, 196);
        text-decoration: none;
        border-radius: 5px;
    }

</style>