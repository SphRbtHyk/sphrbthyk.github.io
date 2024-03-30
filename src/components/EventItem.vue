<template>
    <BCol md="6">
    <BCard style="min-height: 100%;">
        <BCardHeader>
            <h4>{{ name }}</h4>
        </BCardHeader>
        <BCardBody>
            <BCardText>{{ description }}</BCardText>
            <b-badge variant="info" class="m-1">{{ date }}</b-badge>
            <b-badge variant="success" class="m-1">{{ location }}</b-badge>
            <br>
            <a :href="link" class="btn btn-primary m-3">Go to event</a>
        </BCardBody>
    </BCard>
</BCol>
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