<template>
    <BRow>
        <div>
            <b-badge :variant=analyzeCategory(category)>{{ category }}</b-badge> <b>{{ title }}</b>, <i>{{ authors
                }}</i>, {{ venue }}, {{ year }}.
        </div>
    </BRow>
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
            if (category == "Presentation") {
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