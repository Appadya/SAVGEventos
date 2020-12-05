<template>
    <div>
        <h1>Bem vindo(a) {{ user.data.displayName }} !</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Profile',
    computed: {
        ...mapGetters(['user'])
    }
}
</script>