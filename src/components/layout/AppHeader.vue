<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import defaultNavigation from '@/data/navigation.json'
import epkNavigation from '@/data/epkNavigation.json'
import logo from '/logos/lyle_christine_logo.png'
import AppSideMenu from '@/components/layout/AppSideMenu.vue'

const { mobile } = useDisplay()

const router = useRouter()
const route = useRoute()

const navigation = ref(defaultNavigation)

const showDialog = ref(false)

const isExternalLink = (link: string) => {
  return link.startsWith('http://') || link.startsWith('https://')
}

const isActive = (link: string) => {
  return !isExternalLink(link) && route.path === link
}

const handleNavigation = (item: { name: string; link: string }) => {
  if (isExternalLink(item.link)) {
    window.open(item.link, '_blank', 'noopener')
    return
  }

  if (route.path === '/epk') {
    router.push({ path: '/epk', hash: item.link })
  } else {
    router.push({ name: item.name })
  }
}

const updateNavigationLinks = () => {
  if (route.path === '/epk') {
    navigation.value = epkNavigation
  } else {
    navigation.value = defaultNavigation
  }
}

watch(route, () => {
  updateNavigationLinks()
})

onMounted(() => {
  updateNavigationLinks()
})
</script>

<template>
  <v-app-bar
      elevation="0"
      color="brown-lighten-5"
      :scroll-behavior="route.path === '/' ? 'hide' : 'none'"
      scroll-threshold="100"
      class="pa-2 pa-md-0"
      :height="mobile ? 58 : 75"
  >
    <v-container class="d-flex justify-space-between align-center px-4">
      <div>
        <v-img
            :src="logo"
            :width="250"
            cursor-pointer
            eager
            alt="Lyle Christine logo"
            @click="router.push({ name: 'Homepage' })"
        />
      </div>

      <div class="d-none d-md-flex">
        <v-list-item
            v-for="item in navigation"
            :key="item.name"
            link
            height="80"
            class="d-flex justify-center text-lowercase"
            :class="{ 'active font-weight-bold': isActive(item.link) }"
            @click="handleNavigation(item)"
        >
          {{ item.name }}
        </v-list-item>
      </div>

      <v-app-bar-nav-icon
          id="appsidemenu-activator"
          icon="fas fa-bars"
          size="32px"
          variant="text"
          color="dark"
          class="d-flex d-md-none"
      />
      <v-dialog
          v-model="showDialog"
          activator="#appsidemenu-activator"
          fullscreen
          content-class="ma-0"
          location="left"
          class="justify-start"
          transition="slide-x-transition"
      >
        <v-card height="100%" class="d-flex justify-center py-2 bg-brown-lighten-5" rounded="0">
          <AppSideMenu :Snav-links="navigation" @close="showDialog = false" />
        </v-card>
      </v-dialog>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-app-bar {
  border-bottom: solid 5px;
  @media screen and (max-width: 959px) {
    border-image: url('/backgrounds/small/pattern-sm.avif') 20 round;
  }
  @media screen and (min-width: 960px) and (max-width: 1279px) {
    border-image: url('/backgrounds/medium/pattern-md.avif') 40 round;
  }
  @media screen and (min-width: 1280px) {
    border-image: url('/backgrounds/large/pattern-lg.avif') 50 round;
  }
}
.v-img {
  cursor: pointer;
  transition: filter 0.2s ease, transform 0.2s ease;

  &:hover {
    filter: contrast(1.15) brightness(2.05);
    transform: scale(1.02);
  }
}
.active {
  text-decoration: underline !important;
  text-underline-offset: 2px !important;
}
.v-list-item {
  &:hover {
    text-decoration: underline !important;
    text-underline-offset: 2px !important;
    text-decoration-style: dotted !important;
  }
}
:deep(.v-list-item__overlay),
:deep(.v-ripple__container) {
  opacity: 0 !important;
}
.v-card {
  border: solid 10px;
  animation: animatedBorder 3s ease-in-out infinite alternate;
  border-image: url('/backgrounds/medium/pattern-md.avif') 100 round;
}
@keyframes animatedBorder {
  from {
    border-image: url('/backgrounds/medium/pattern-md.avif') 20;
  }
  to {
    border-image: url('/backgrounds/medium/pattern-md.avif') 5;
  }
}
</style>
