<template>
    <div class="radio">
        <h2>Radio</h2>
        <button @click="sendMessage">Envoyer un message</button>
        <p>{{ day }} - {{ month }} - {{ cYear }}</p>
        <p>{{ formattedDate }}</p>
        <button @click="incrementDay">Day++</button><br />
        <button @click="incrementMonth">Month++</button><br />
        <button @click="increaseCount">COUNT +</button>
        {{ count }}
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: "Radio",
    methods: {
        sendMessage() {
            this.$emit('message-sent', {
                message: "Un messagio"
            })
        },
        incrementDay() {
            this.$store.commit('INCREMENT_DAY')
        },
        increaseCount() {
            this.$store.commit('INCREASE_COUNT', 2)
        },
        // sans mapAction :
        // incrementMonth() {
        //     // STORE : ACTION : dispatch
        //     this.$store.dispatch('incrementMonth')
        // },
        ...mapActions(['incrementMonth'])
    },

    computed: {
        // ...mapState(['year','month', 'day'])


        ...mapState({
            cYear: 'year',
            month: 'month',
            day: 'day',
            count: 'count'
        }),

        ...mapGetters(['formattedDate'])
    }
}
</script>

<style scoped>
.radio {
    margin-bottom: 15px;
}
</style>
