<template>

<v-col>
    <v-card height="300">
        <v-card-title>
            <h3>{{ name }}</h3>
        </v-card-title>
        <v-card-text>
            <p class="m-3">{{ description }}</p>
            <div class="m-3">
                <v-chip v-for="tech in technology" class="m-2" color="primary">{{ tech }}</v-chip>
            </div>
            <br>
            <v-spacer></v-spacer>
            <v-btn :href="link" class="btn btn-primary m-3">Go to project</v-btn>
        </v-card-text>
    </v-card>
</v-col>
</template>

<script>
export default {
    name: 'SoftwareView',
    template: '#software-item',
    props: {
        name: String,
        description: String,
        link: String,
        technology: Array[String]
    }
}
</script>