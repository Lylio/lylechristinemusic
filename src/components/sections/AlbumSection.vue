<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import epkData from '@/data/epkData.json'

import cover_lg from '/album_covers/large/funraiser-lg.avif'
import cover_sm from '/album_covers/small/benthos_fromnothing_cover-sm.avif'
import fromnothing_mockups_lg from '/images/fromnothing_mockups-lg.png'
import fromnothing_mockups_sm from '/images/fromnothing_mockups-sm.png'
import flaky_records from '/logos/flaky_records.png'

const props = defineProps({
  overline: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})

const { mobile, mdAndDown } = useDisplay()

const navigateToUrl = (url: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div class="bg-fromnothing text-primary">
    <v-lazy transition="fade-transition">
      <v-container class="d-flex flex-column align-center py-16">
        <div class="px-10 px-md-16" :style="{ gap: '24px' }">
          <div class="text-center">
            <p class="text-overline">{{ props.overline }}</p>
            <h1 class="text-md-h1 text-h2">{{ props.title }}</h1>
            <p class="text-h3">{{ props.subtitle }}</p>
          </div>
        </div>

        <v-btn
          variant="flat"
          class="bg-green-lighten-2 text-body-2 text-md-body-1 mr-4 w-50 w-md-25 mt-6 mb-8"
          :size="mobile ? 'large' : 'x-large'"
          :href="'https://lylechristine.bandcamp.com/album/funraiser'"
          target="_blank"
        >
          STREAM / BUY
        </v-btn>

        <v-row class="w-100 d-flex justify-center">
          <v-col cols="12" md="5" class="d-flex flex-column">
            <p class="text-h4">tracklist</p>

            <p
              v-for="(track, index) in epkData.albumTrackList"
              :key="index"
              class="text-body-2 text-md-body-1 mt-2"
            >
              <span style="opacity: 0.5"> {{ (index + 1).toString().padStart(2, '0') }}. </span>
              <span class="font-weight-bold">{{ track.songTitle }}</span>
              <span style="opacity: 0.5"> ({{ track.length }}) </span>
            </p>
          </v-col>

          <v-col cols="12" md="5" class="order-first order-md-last">
            <v-img :src="mdAndDown ? cover_sm : cover_lg" alt="Lyle Christine - Funraiser" eager />
          </v-col>
        </v-row>

        <v-img
          :src="mdAndDown ? fromnothing_mockups_sm : fromnothing_mockups_lg"
          :class="[mdAndDown ? 'px-4' : '', 'cursor-pointer mt-6']"
          @click="navigateToUrl('https://ffm.bio/benthos')"
          alt="Lyle Christine - From Nothing"
          :width="mdAndDown ? '100%' : '80%'"
          eager
        />

        <footer class="d-flex flex-column justify-center align-center opacity-70 mt-6">
          <a
              href="https://www.flakyrecords.com"
              target="_blank"
              rel="noopener noreferrer"
              style="cursor: pointer"
          >
            <v-img
                :src="flaky_records"
                :width="200"
                alt="Flaky Records"
                class="flaky-logo"
            />
          </a>
        </footer>
      </v-container>
    </v-lazy>
  </div>
</template>

<style lang="scss" scoped>
.v-btn .v-img {
  filter: grayscale(100%) !important;
}
.flaky-logo {
  transition: filter 0.2s ease, opacity 0.2s ease;

  &:hover {
    filter: brightness(0.85);
    opacity: 0.9;
  }
}
</style>
