<template>
    <div>
        <h1>récepteur</h1>
        <Radio @message-sent="updateMessage"/>
        {{ message }}
    </div>
</template>

<script>
import Radio from './Radio.vue'

export default {
    name: "Receiver",
    components: {
        Radio,
    },
    data: () => ({
        message: "Pas de message"
    }),
    methods: {
        updateMessage(payload) {
            this.message = payload.message
        }
    }
}
</script>
