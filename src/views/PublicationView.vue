<template>
    <BRow class="text-center">
    <h3>
    Selected publications &#x270d;
</h3>
</BRow>
<BRow>
<BCol>
    <PublicationItem v-for="publication in publications" :title="publication.title" :authors="publication.authors" :venue="publication.venue" :year="publication.year" :category="publication.category"/>
</BCol>
</BRow>
</template>

<script>
import PublicationItem from "../components/PublicationItem.vue";
import publications from "../assets/data/publications.json";


console.log(publications)
export default {
    name: 'PublicationView',
    components: {
        PublicationItem
    },
    data() {
        return {
            publications: publications.sort(function(a, b) {return  parseFloat(b.year) -  parseFloat(a.year)})
        }
    }
}

</script>
