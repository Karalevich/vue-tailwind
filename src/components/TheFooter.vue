<template>
  <footer class="mt-10 border-t px-2 py-10">
    <div class="md:flex">
      <FooterSection title="Company" class="mb-5 w-full md:w-2/5">
        <FooterLink to="/team">Team</FooterLink>
        <FooterLink to="/about">About Us</FooterLink>
      </FooterSection>

      <FooterSection title="Content" class="mb-5 w-full md:w-2/5">
        <FooterLink to="/block">Block</FooterLink>
        <FooterLink to="/policy">Policy</FooterLink>
        <FooterLink to="/docs">Documentation</FooterLink>
      </FooterSection>

      <FooterSection title="Contact Us" class="w-full md:w-1/5">
        <ul class="flex">
          <FooterLink to="#" class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </FooterLink>
          <FooterLink to="#" class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </FooterLink>
          <FooterLink to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </FooterLink>
        </ul>
      </FooterSection>
    </div>
  </footer>
</template>

<script setup>
import FooterSection from '@/components/FooterSection.vue'
import FooterLink from '@/components/FooterLink.vue'
</script>

<style lang="scss" scoped></style>
