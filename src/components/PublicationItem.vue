<template>
    <v-col>
            <v-chip :color=analyzeCategory(category) class="mr-2">{{ category }}</v-chip> 
            <b>{{ title }}</b>
            <br> 
            <i>{{ authors
                }}</i>, 
            <br>{{ venue }}
            <br>
            {{ year }}.
    </v-col>
</template>

<script>
export default {
    name: "PublicationItem",
    template: "#publication-item",
    props: {
        title: {
            type: String,
            required: true
        },
        authors: {
            type: String,
            required: true
        },
        venue: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    methods: {
        analyzeCategory(category) {
            if (category == "Proceedings") {
                return "warning"
            } else if (category == "Journal") {
                return "info"
            } else if (category=="Collective volume")  {
                return "success"
            }
            else if (category=="Patent")  {
                return "danger"
            }
            else {
                return "primary"
            }
        }
    }
}

</script>