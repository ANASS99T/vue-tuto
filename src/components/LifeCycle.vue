<template>
    <h1> I am a new component </h1>
</template>

<script>
    export default {
        name: 'Lifecycle',
        data : function() {
            return {
                msg: 'Hello from life cycle !',
            }
        },
        beforeCreate () {console.log('I have not been created yet !')},
        created () {console.log('I have just been created')},
        beforeMount() { console.log('I am about to be mounted to the DOM!') },
        mounted() { console.log('I am mounted to the DOM!') },
        beforeDestroy() { console.log('I am about to be removed from the DOM!') },
        destroyed() { console.log('I no longer exist...') }
    }
</script>