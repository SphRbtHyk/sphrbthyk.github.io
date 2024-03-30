<template>
    <BRow class="text-center">
        <BCol>
            <h3>Events I am organizing 🎉</h3>
        </BCol>
    </BRow>
    <BRow>
        <EventItem v-for="event in events" :name="event.name" :description="event.description" :link="event.link" :date="event.date" :location="event.location"/>
    </BRow>
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