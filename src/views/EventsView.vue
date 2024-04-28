<template>

    <v-row class="text-center">
        <v-col>
            <h1>Events I am organizing 🎉</h1>
        </v-col>
    </v-row>
    <v-row align="center" justify="center" class="m-auto">
        <EventItem v-for="event in events" :name="event.name" :description="event.description" :link="event.link" :date="event.date" :location="event.location"/>
    </v-row>
</template>

<script>
import EventItem from "../components/EventItem.vue";
import events from "../assets/data/events.json";

export default {
    name: 'EventsView',
    components: {
        EventItem
    },
    data() {
        return {
            events: events
        }
    }
}
</script>