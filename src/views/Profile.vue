<template>
    <div>
        <Header  :headerSize="`vh-50`"/>
        <h1>{{ user }}</h1>
        <!-- <h1>Bem vindo(a) {{ user.data.displayName }} !</h1> -->
    </div>
</template>

<script>
import Header from '../components/Header'
import { mapGetters } from 'vuex'

export default {
    name: 'Profile',
    components: {
        Header,
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>