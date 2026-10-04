<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import media from '@/data/media.json'
import PageHeader from '@/components/layout/PageHeader.vue'

const { mdAndDown } = useDisplay()
</script>

<template>
  <div class="bg-black-grain py-16 h-100 mb-8">
    <v-container class="d-flex flex-column justify-center text-brown-lighten-5 px-6">
      <PageHeader :title="'Media'" :color="'brown-lighten-5'" />

      <section
          v-for="(item, index) in media"
          :key="index"
          class="d-flex flex-column"
      >
        <v-fade-transition appear>
          <div>
            <h3
                class="text-body-1 text-center font-weight-bold"
                :style="{ fontSize: '18px !important' }"
            >
              {{ 'Lyle Christine - ' + item.title }}
            </h3>

            <p class="text-overline text-center opacity-70 mt-2 mb-8">
              {{ item.releaseDate }}
            </p>
          </div>
        </v-fade-transition>

        <v-fade-transition appear>
          <a
              :href="item.url"
              class="media-thumbnail"
              target="_blank"
              rel="noopener noreferrer"
          >
            <img
                :src="mdAndDown ? item.coverSm : item.coverLg"
                :alt="`Thumbnail for Lyle Christine - ${item.title}`"
                class="image-responsive opacity-90 rounded-lg flat-shadow"
            />
          </a>
        </v-fade-transition>

        <v-divider
            v-if="index !== media.length - 1"
            color="brown-lighten-5"
            class="border-opacity-25 mt-12 pb-12"
        />
      </section>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.hover {
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
}

a:link,
a:visited,
a:active {
  color: rgb(var(--v-theme-red-darken-2)) !important;
}

a:hover {
  color: rgb(var(--v-theme-red-darken-2)) !important;
}

.media-thumbnail {
  position: relative;
  display: block;
  cursor: pointer;
}

.image-responsive {
  display: block;
  width: 100%;
  height: auto;
}
</style>
