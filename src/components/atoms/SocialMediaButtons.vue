<script lang="ts" setup>
import socialMedia from '@/data/socialMedia.json'

type SocialMediaItem = {
  name: string
  link: string
  icon?: string
}

const items = socialMedia as SocialMediaItem[]

const props = defineProps({
  color: {
    type: String,
    default: 'text-dark'
  }
})
</script>

<template>
  <v-btn
    v-for="(social, index) in items"
    icon
    variant="text"
    :class="props.color"
    :key="index"
    :href="social.link"
    target="_blank"
  >
    <img
        v-if="social.name === 'Linktree'"
        src="/icons/linktree.svg"
        alt="Linktree"
        class="social-icon"
    />

    <v-icon :icon="`fab fa-${social.icon ?? social.name}`" />
  </v-btn>
</template>
