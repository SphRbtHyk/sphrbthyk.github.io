<template>
    <v-row no-gutters align="center" justify="center" class="m-auto">
    <h1>
        Software I am working on 👩‍💻
    </h1>
    </v-row>

    <v-row align="center" justify="center" class="m-auto">
        <SoftwareItem v-for="software in softwares" :name="software.name" :description="software.description" :link="software.link" :technology="software.technology"/>
    </v-row>
</template>

<script>
import SoftwareItem from "../components/SoftwareItem.vue";
import softwares from "../assets/data/software.json";


export default {
    name: 'SoftwareView',
    components: {
        SoftwareItem
    },
    data() {
        return {
            softwares: softwares
        }
    }
}

</script>