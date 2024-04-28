<template>
    <v-row class="text-center">
        <v-col>
            <h1>Courses I currently teach 👩‍🏫</h1>
        </v-col>
    </v-row>

    <v-row align="center" justify="center" class="m-auto">
        <TeachingItem v-for="teaching in teachings" :level="teaching.level" :course="teaching.course" :description="teaching.description" :link="teaching.link" :university="teaching.university" :hours="teaching.hours"/>
    </v-row>

</template>

<script>
import TeachingItem from "../components/TeachingItem.vue";
import teachings from "../assets/data/teaching.json";

export default {
    name: 'TeachingView',
    components: {
        TeachingItem
    },
    data() {
        return {
            teachings: teachings
        }
    }
}
</script>