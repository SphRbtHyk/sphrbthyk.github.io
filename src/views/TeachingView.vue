<template>
    <BRow class="text-center">
        <BCol>
            <h3>Courses I currently teach 👩‍🏫</h3>
        </BCol>
    </BRow>
    <BRow>
        <TeachingItem v-for="teaching in teachings" :level="teaching.level" :course="teaching.course" :description="teaching.description" :link="teaching.link" :university="teaching.university"/>
    </BRow>

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