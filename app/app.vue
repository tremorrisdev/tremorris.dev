<template>
  <UApp>
    <div class="h-lvh overflow-hidden flex flex-col">
      <header class="sticky top-0 w-full bg-default/75 backdrop-blur">
        <div class="flex justify-between h-full mx-4 py-2">
          <UDrawer
            direction="left"
            v-model:open="isMenuOpen"
          >
            <UButton
              icon="i-line-md-menu"
              class="mt-auto md:opacity-0 md:pointer-events-none"
            />
            <template #content>
              <div class="p-4">
                <div class="flex items-center">
                  <UButton
                    icon="i-line-md-menu-fold-left"
                    @click="isMenuOpen = false"
                  />
                  <p class="ml-4 text-2xl font-bold">Trevor Morris</p>
                </div>
                <USeparator class="my-2" />
                <Nav
                  direction="vertical"
                  @nav="isMenuOpen = false"
                />
              </div>
            </template>
          </UDrawer>
          <div class="flex flex-col justify-center text-center h-full pt-2">
            <p class="text-3xl sm:text-4xl font-bold">Trevor Morris</p>
            <p class="text-lg text-muted">Full-stack Software Engineer</p>
            <ClientOnly>
              <template #fallback>
                <div class="md:h-8"></div>
              </template>
              <Nav
                v-show="breakpoints.md.value"
                class="m-auto"
              />
            </ClientOnly>
          </div>
          <ClientOnly>
            <template #fallback>
              <div class="w-8 h-8"></div>
            </template>
            <UButton
              :icon="
                $colorMode.value === 'dark'
                  ? 'i-line-md-sunny-outline-loop'
                  : 'i-line-md-moon-loop'
              "
              class="mt-auto"
              @click="
                $colorMode.preference =
                  $colorMode.preference === 'system'
                    ? $colorMode.value === 'dark'
                      ? 'light'
                      : 'dark'
                    : $colorMode.preference === 'dark'
                      ? 'light'
                      : 'dark'
              "
            />
          </ClientOnly>
        </div>
        <USeparator />
      </header>
      <div class="grow overflow-y-scroll pt-4">
        <NuxtPage />
      </div>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import { ClientOnly } from '#components'
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMenuOpen = ref(false)
</script>
