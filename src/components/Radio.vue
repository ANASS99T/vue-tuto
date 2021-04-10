<template>
    <div>
        <h2> Radio </h2>
        <input v-model="message" placeholder="send message to the receiver" />
        <p> {{ message }} </p>
        <button @click='emitChange'> Send message to receiver </button>        
    </div>
</template>

<script>
export default {
    name: 'Radio',
    data: () => ({
        message: ''
    }),
    methods: {
        emitChange(){
            this.$emit('new-message', {message : this.message})
        }
    },
}
</script>