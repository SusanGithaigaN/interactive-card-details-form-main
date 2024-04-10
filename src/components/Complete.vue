<script setup></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="w-full md:w-1/2 lg:w-1/2 bg-bgactive bg-cover">Image</div>
    <!-- form -->
    <div class="form md:min-w-320 w-full md:w-1/2 lg:w-1/2">
      <form class="px-6 md:px-0 lg:px-0">
        <h2 class="font-semibold text-4xl tracking-widest uppercase py-4">Thank you!</h2>
        <p class="py-4 font-semibold items-center">We've added your card details</p>
        <button
          type="submit"
          class="violet text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-80 px-5 py-2.5 text-center"
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
