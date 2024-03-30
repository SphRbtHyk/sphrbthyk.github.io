<template>
    <BRow class="text-center">
        <BCol>
            <h3>Software I have developed 👩‍💻</h3>
        </BCol>
    </BRow>
    <BRow>
            <SoftwareItem v-for="software in softwares" :name="software.name" :description="software.description" :link="software.link" :technology="software.technology"/>
    </BRow>
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