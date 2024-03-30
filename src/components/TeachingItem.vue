<template>
    <BCol md="4">
    <BCard style="min-height: 100%;" class="m-1">
        <BCardHeader>
            <h4>{{ course }}</h4>
        </BCardHeader>
        <BCardBody>
            <b-badge variant="success">{{ university }}</b-badge>
            <b-badge variant="info">{{ level }}</b-badge>

            <BCardText>{{ description }}</BCardText>

            <a :href="link" class="btn btn-primary m-3">Go to course material</a>
        </BCardBody>
    </BCard>
</BCol>
</template>

<script>
export default {
    name: 'TeachingItem',
    props: {
        course: String,
        description: String,
        link: String,
        university: String,
        level: String
    }
}
</script>