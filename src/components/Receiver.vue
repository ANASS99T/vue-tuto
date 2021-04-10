<template>
    <div>
        <h1> Receiver </h1>
        <Radio @new-message='updateMessge' />
        <p> {{ messageText }} </p>
    </div>
</template>

<script>

import Radio from './Radio.vue'

export default {
    name : 'Receiver',
    components: {
        Radio
    },
    data: () => ({
        messageText : 'No messages'
    }),
    methods: {
            updateMessge (payload) {
                this.messageText = payload.message
            }
        }
}
</script>