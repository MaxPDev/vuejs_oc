<template>
    <button class="button">{{ text }}</button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        text: {
            type: String,
            // required: true, //obligé l'utilisation de la prop
            default: "A Buttun"
        }
    }
}
</script>

<style>
    .button {
        background-color: blue;
        color: white;
        border-radius: 10px;
/* 
        width: 1em;
        height: 1em; */
    }
</style>