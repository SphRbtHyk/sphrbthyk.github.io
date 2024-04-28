<template>

<v-col>
    <v-card height="300">
        <v-card-title>
            <h3>{{ name }}</h3>
        </v-card-title>
        <v-card-text>
            <p class="mb-3">{{ description }}</p>
            <div class="mb-3">
                <v-chip color="info" class="m-1">{{ date }}</v-chip>
                <v-chip color="success" class="m-1">{{ location }}</v-chip>
            </div>
            <v-spacer></v-spacer>
            <v-btn :href="link" class="btn btn-primary m-3">Go to event</v-btn>
        </v-card-text>
    </v-card>
</v-col>
</template>

<script>
export default {
    name: 'EventItem',
    props: {
        name: String,
        description: String,
        link: String,
        date: String,
        location: String
    }
}
</script>