<template>
    <BRow class="text-center">
    <h3>
    Current research interests 🔬
</h3>
</BRow>
    <BRow>
        <BCol v-for="interest in research_interests" :key="interest.name">
            <BCard class="m-3" :img-src="interest.img" img-top tag="article"
                style="max-width: 20rem;">
                <BCardHeader>
                    <h4>{{ interest.name }}</h4>
                </BCardHeader>
                <BCardText>
                    {{ interest.description }}
                </BCardText>
            </BCard>
        </BCol>

    </BRow>

</template>

<script>
import research_interests from "../assets/data/research_interests.json"

export default {
    name: 'AboutView',
    data() {
        return {
            research_interests: research_interests
        }
    }
}
</script>