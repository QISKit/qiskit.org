<template>
  <section class="external-recommended-readings">
    <h2>
      External recommended readings
    </h2>
    <AppLink
      v-for="link in links"
      :key="link.label"
      class="external-recommended-readings__link"
      :segment="link.segment"
      :url="link.url"
    >
      {{ link.label }}
    </AppLink>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class ExternalRecommendedReadings extends Vue {
  @Prop({ type: Array, required: true }) links!: GeneralLink[]
}
</script>

<style lang="scss" scoped>
.external-recommended-readings {
  &__link {
    display: block;
    margin-bottom: $spacing-01;
    width: fit-content;
  }
}
</style>
