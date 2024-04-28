<template>

<v-row no-gutters align="center" justify="center" class="m-auto">
    <h1>
        Selected publications in peer-reviewed journals and conferences &#x270d;
    </h1>
    </v-row>

    <v-row align="center" justify="center" class="m-auto">
<v-col>
    <PublicationItem v-for="publication in publications" :title="publication.title" :authors="publication.authors" :venue="publication.venue" :year="publication.year" :category="publication.category"/>
</v-col>
</v-row>
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
