<template>
  <AppCard
    class="event-card"
    :image="image"
    :title="title"
    :tags="types"
    :to="to"
    :cta-label="ctaLabel"
    :segment="segment"
    :vertical-layout="verticalLayout"
  >
    <div class="event-card__description">
      <slot v-if="$slots.default" />
    </div>
    <div>
      <div class="event-card__detail">
        <Map20 class="event-card__icon" />
        {{ location }}
      </div>
      <div class="event-card__detail">
        <Calendar20 class="event-card__icon" />
        <time>{{ date }}</time>
      </div>
      <div v-if="time" class="event-card__detail">
        <Time20 class="event-card__icon" />
        <time>{{ time }}</time>
      </div>
      <div v-if="institution" class="event-card__detail">
        <Education20 class="event-card__icon" />
        {{ institution }}
      </div>
    </div>
  </AppCard>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

@Component
export default class EventCard extends Vue {
  @Prop({ type: Array, default: () => [] }) types!: string[]
  @Prop(String) title!: string
  @Prop(String) image!: string
  @Prop({ type: String, default: '' }) institution!: string
  @Prop(String) location!: string
  @Prop(String) date!: string
  @Prop(String) time!: string
  @Prop(String) to!: string
  @Prop({ type: String, default: 'Join the event' }) ctaLabel!: string
  @Prop({ type: Object, required: false }) segment: CtaClickedEventProp | undefined
  @Prop({ type: Boolean, default: false }) verticalLayout!: Boolean
}
</script>

<style lang="scss" scoped>
.event-card {
  &__description {
    margin-bottom: $spacing-06;
  }

  &__detail {
    display: flex;
    align-items: center;
    margin-bottom: $spacing-03;

    &:last-child {
      margin-bottom: initial;
    }
  }

  &__icon {
    margin-right: $spacing-03;
    fill: currentColor;
  }
}
</style>
