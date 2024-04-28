<template>

    <v-col>
    <v-card height="300">
            <v-card-title>
                <h4>{{ name }}</h4>
            </v-card-title>
            <v-card-text>
                <div class="mb-4">
                <v-chip color="info" class="m-1">{{ funding }}</v-chip>
                <v-chip color="success" class="m-1">{{ duration }}</v-chip>
            </div>
            <v-spacer></v-spacer>
                <p class="m-3">{{ description }}</p>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        name: String,
        description: String,
        funding: String,
        duration: String
    }
}
</script>