<script setup lang="ts">
import plungeStreamingLinks from '@/data/plungeStreamingLinks.json'
import cordycepsStreamingLinks from '@/data/cordycepsStreamingLinks.json'
import pureStreamingLinks from '@/data/pureStreamingLinks.json'
// import fossilStreamingLinks from '@/data/fossilStreamingLinks.json'
import HeroSection from '@/components/sections/HeroSection.vue'
import AlbumSection from '@/components/sections/AlbumSection.vue'
import MerchSection from '@/components/sections/MerchSection.vue'
// import MusicSection from '@/components/sections/MusicSection.vue'
import NewSingleSection from '@/components/sections/NewSingleSection.vue'
import TourDatesSection from '@/components/sections/TourDatesSection.vue'
// import LiveVideoSection from '@/components/sections/LiveVideoSection.vue'
import HighlightSection from '@/components/sections/HighlightSection.vue'
import NewsletterSection from '@/components/sections/NewsletterSection.vue'

import hero_lg from '/backgrounds/large/bg_hero-lg.avif'
import hero_sm from '/backgrounds/small/bg_hero-sm.avif'
</script>

<template>
  <HeroSection :hero-lg="hero_lg" :hero-sm="hero_sm" />
  <AlbumSection :overline="'The Current Album'" :title="'Funraiser'" :subtitle="'Out now'" />
  <NewSingleSection
      :overline="'Released August 16th, 2022'"
      :title="'Stanky'"
      :cover-image="'/images/artheart.avif'"
      :fan-link="'https://lylechristine.bandcamp.com/track/stanky'"
      :single-links="[
    { name: 'spotify', link: 'https://open.spotify.com/album/6syJX94oTEoknQZoAf1dOY' },
    { name: 'youtube', link: 'https://www.youtube.com/watch?v=rpAY7lHNs3c' },
    { name: 'apple_music', link: 'https://music.apple.com/us/album/stanky/1642510756?i=1642510757' },
    { name: 'amazon_music', link: 'https://music.amazon.com/albums/B0BCGB6W7Q' }
  ]"
      :video-link="'https://www.youtube.com/watch?v=rpAY7lHNs3c'"
  />
  <HighlightSection :image="'home'" />
  <MerchSection />
  <HighlightSection :image="'fossil'" />
  <NewSingleSection
      :overline="'November, 2024'"
      :title="'Lyle Distortion Sustainer'"
      :fan-link="'https://www.youtube.com/watch?v=DSHN2_OK-rE'"
      :single-links="[]"
      :video-link="'https://www.youtube.com/watch?v=DSHN2_OK-rE'"
  />
  <HighlightSection :image="'live'" />
  <TourDatesSection :show-header="true" />
  <NewsletterSection />
</template>
