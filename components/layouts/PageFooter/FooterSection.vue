<template>
  <section class="footer-section">
    <h2
      class="h4 footer-section__title"
      :class="`footer-section__title_theme_${theme}`"
    >
      {{ title }}
    </h2>
    <nav :class="{ 'footer-section__icons-group': iconsOnly }">
      <AppLink
        v-for="element in elements"
        :key="element.url"
        class="caption footer-section__link"
        :class="`footer-section__link_theme_${theme}`"
        v-bind="element"
        kind="secondary"
      >
        <component
          :is="element.icon"
          v-if="iconsOnly"
          :class="`footer-section__icon-link footer-section__icon-link_theme_${theme}`"
        />
        <span v-else>{{ element.label }}</span>
      </AppLink>
    </nav>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { NavLink } from '~/constants/menuLinks'

@Component
export default class FooterSection extends Vue {
  @Prop(String) title!: string
  @Prop(Array) elements!: NavLink[]
  @Prop({ type: Boolean, default: false }) iconsOnly!: boolean
  @Prop({ type: String, default: 'light' }) theme!: string
}
</script>

<style lang="scss" scoped>
.footer-section {
  &__title {
    margin-bottom: $spacing-06;

    &_theme_light {
      color: $text-color-lighter;
    }

    &_theme_dark {
      color: $text-color-white;
    }
  }

  &__link {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding-bottom: $spacing-03;

    &_theme_light {
      color: $text-color-lighter;

      &:active,
      &:visited,
      &:hover {
        color: $text-color-lighter;
      }
    }

    &_theme_dark {
      color: $text-color-white;

      &:active,
      &:visited,
      &:hover {
        color: $text-color-white;
      }
    }
  }

  &__icons-group {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 $spacing-05;
    justify-items: start;
  }

  &__icon-link {
    &_theme_light {
      color: $text-color-lighter;
    }

    &_theme_dark {
      color: $text-color-white;
    }
  }

}
</style>
