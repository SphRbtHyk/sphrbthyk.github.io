<template>
    <BRow class="text-center">
        <BCol>
            <h3>Grants 💰</h3>
        </BCol>
    </BRow>
    <BRow>
        <ProjectItem v-for="project in projects" :name="project.name" :description="project.description" :funding="project.funding" :duration="project.duration"/>
    </BRow>
</template>

<script>
import ProjectItem from "../components/ProjectItem.vue";
import projects from "../assets/data/projects.json";

export default {
    name: 'ProjectsView',
    components: {
        ProjectItem
    },
    data() {
        return {
            projects: projects
        }
    }
}

</script>