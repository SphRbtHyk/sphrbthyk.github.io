<template>
    <v-row no-gutters align="center" justify="center" class="m-auto">
    <h1>
    Current research interests 🔬
    </h1>
    </v-row>

    <v-row fluid justify="center">
    <v-card
      v-for="interest in research_interests" :key="interest.name"
      subtitle=""
      :text=interest.description
      :title=interest.name
      class="mx-auto mb-10"
      width="400"
    >
</v-card>
    </v-row>
</template>

<script>
import research_interests from "../assets/data/research_interests.json"

export default {
    name: 'AboutView',
    data() {
        return {
            research_interests: research_interests
        }
    }
}
</script>