<template>
    <BCol md="4">
    <BCard style="min-height: 100%;" class="m-1">
        <BCardHeader>
            <h4>{{ name }}</h4>
        </BCardHeader>
        <BCardBody>
            <BCardText>{{ description }}</BCardText>
            <b-badge v-for="tech in technology" variant="info" class="m-1">{{ tech }}</b-badge>
            <br>
            <a :href="link" class="btn btn-primary m-3">Go to project</a>
        </BCardBody>
    </BCard>
</BCol>
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