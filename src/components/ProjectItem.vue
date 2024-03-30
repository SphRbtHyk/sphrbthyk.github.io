<template>
    <BCol>
        <BCard style="min-height: 100%;">
            <BCardHeader>
                <h4>{{ name }}</h4>
            </BCardHeader>
            <BCardBody>
                <BCardText>{{ description }}</BCardText>
                <b-badge variant="info" class="m-1">{{ funding }}</b-badge>
                <b-badge variant="success" class="m-1">{{ duration }}</b-badge>
            </BCardBody>
        </BCard>
    </BCol>
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