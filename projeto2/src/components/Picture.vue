<template>
    <div>
        <img :src="avatar" :alt="descrição" />
    </div>
</template>

<script>
export default {
    name: "Picture",
    data() {
        return {
            avatar: "/img/avatar.png",
            descrição: "Matheus Henrique",
        };
    },
};
</script>
