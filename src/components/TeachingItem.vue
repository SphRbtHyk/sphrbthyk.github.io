<template>

<v-col>
    <v-card height="300">
        <v-card-title>
            <h3>{{ course }}</h3>
        </v-card-title>
        <v-card-text>
            <p class="m-3">{{ description }}</p>
            <div class="m-3">
                <v-chip class="m-2" color="primary">{{ university }}</v-chip>
                <v-chip class="m-2" color="success">{{ level }}</v-chip>
                <v-chip class="m-2" color="warning">{{ hours }}h</v-chip>

            </div>
            <br>
            <v-spacer></v-spacer>
            <v-btn :href="link" class="btn btn-primary m-3">Go to course material</v-btn>
        </v-card-text>
    </v-card>
</v-col>
</template>

<script>
export default {
    name: 'TeachingItem',
    props: {
        course: String,
        description: String,
        link: String,
        university: String,
        level: String,
        hours: String
    }
}
</script>