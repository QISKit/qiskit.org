<template>
  <component
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    :style="hasLink && 'cursor:pointer'"
    :rel="isExternal && 'noopener'"
    :target="isExternal && '_blank'"
    @click="handleClick"
    @mouseenter="$emit('mouseenter')"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

@Component
export default class BasicLink extends Vue {
  @Prop({ type: String, default: '' }) url!: string
  @Prop({ type: Object, required: false }) segment: CtaClickedEventProp | undefined
  @Prop({ type: Boolean, default: false }) isStatic!: boolean

  handleClick () {
    this.$emit('click')
    this.segment && this.$trackClickEvent(this.segment.cta, this.segment.location)
  }

  static isExternal (url: string): boolean {
    return !!url && url.startsWith('http')
  }

  static isMail (url: string): boolean {
    return !!url && url.startsWith('mailto')
  }

  static isIdAnchor (url: string): boolean {
    return !!url && url.startsWith('#')
  }

  get hasLink (): boolean {
    return !!this.url
  }

  get isAnchor (): boolean {
    const url = this.url
    return BasicLink.isExternal(url) ||
      BasicLink.isMail(url) ||
      BasicLink.isIdAnchor(url) ||
      this.isStatic
  }

  get isExternal (): boolean {
    return BasicLink.isExternal(this.url)
  }

  get isNuxtLink (): boolean {
    return !this.isAnchor
  }
}
</script>
