<template>
  <header class="flex h-14 items-center justify-between border-b px-2">
    <a class="text-logo-main font-bold uppercase dark:text-purple-500" href="#">SearchStax</a>
    <nav class="hidden items-center md:flex">
      <ul class="inline-flex items-center">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
      </ul>
      <ul class="inline-flex items-center">
        <li>
          <HeaderButton>Login</HeaderButton>
        </li>
        <li>
          <HeaderButton>Register</HeaderButton>
        </li>
      </ul>
    </nav>
    <button class="inline-block text-gray-600 md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </header>
</template>

<script setup>
import NavLink from '@/components/NavLink/NavLink.vue'
import HeaderButton from '@/components/HeaderButton/HeaderButton.vue'
</script>

<style scoped lang="scss"></style>
