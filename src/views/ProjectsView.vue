<template>

    <v-row class="text-center">
        <v-col>
            <h1>Grants and funding 🚀</h1>
        </v-col>
    </v-row>
    
    <v-row align="center" justify="center" class="mx-auto">
        <ProjectItem v-for="project in projects" :name="project.name" :description="project.description" :funding="project.funding" :duration="project.duration"/>
    </v-row>
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