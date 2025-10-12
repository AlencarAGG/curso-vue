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
            avatar: "/src/assets/avatar.png",
            descrição: "Matheus Henrique",
        };
    },
};
</script>
