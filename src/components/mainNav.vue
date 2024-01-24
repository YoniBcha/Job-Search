<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link to="/" class="flex items-center h-full text-xl"
          >Bobo Careers</router-link
        >
      </div>
    </div>
    <router-view />
  </header>
</template>
<script>
export default {
  name: "MainNav",
};
</script>
<style></style>
