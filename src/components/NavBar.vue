<template>
  <div class="flex justify-center nav">
    <div class="flex items-center justify-center h-16 w-72">
      <div class="text-center">
        <div id="nav">
          <router-link to="/"> Home </router-link>
          <router-link to="/post/create"> Create </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#nav a {
  @apply text-sm
          font-medium
          text-gray-500
          hover:bg-indigo-700 hover:bg-opacity-25
          hover:text-indigo-700
          p-2
          mx-1
          rounded-md;
}
#nav a.router-link-exact-active {
  @apply text-indigo-700;
}
</style>
