<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="w-full md:w-1/2 lg:w-1/2 bg-bgactive bg-cover">Image</div>
    <!-- form -->
    <div class="form md:min-w-320 w-full md:w-1/2 lg:w-1/2">
      <form class="px-6 md:px-0 lg:px-0">
        <div class="mb-5">
          <label
            for="name"
            class="block mb-2 text-xsm tracking-widest uppercase font-bold"
            >cardholder name</label
          >
          <input
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-base rounded-lg block w-full p-1.5"
            placeholder="e.g. Jane Appleseed"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="number"
            class="block mb-2 text-xsm tracking-widest uppercase font-bold"
            >card number</label
          >
          <input
            type="text"
            id="number"
            class="bg-gray-50 border border-gray-300 text-base rounded-lg block w-full p-1.5"
            placeholder="e.g. 1234 5678 9123 0000"
            required
          />
        </div>
        <!-- exp date -->

        <div class="mb-5">
          <label
            for="expiry"
            class="block mb-2 text-xsm tracking-widest uppercase font-bold"
          >
            <span>Exp. date (mm/yy)</span>
            <span class="ml-9">cvc</span>
          </label>
          <div class="flex space-x-2">
            <!-- Month input -->
            <input
              type="text"
              id="expiry-month"
              name="expiry-month"
              class="w-1/5 px-2 py-1 border border-gray-300 rounded-md text-sm"
              placeholder="MM"
            />

            <!-- Year input -->
            <input
              type="text"
              id="expiry-year"
              name="expiry-year"
              class="w-1/5 px-2 py-1 border border-gray-300 rounded-md text-sm"
              placeholder="YY"
            />

            <!-- CVC input -->
            <input
              type="text"
              id="cvc"
              name="cvc"
              class="w-3/5 px-2 py-1 border border-gray-300 rounded-md text-sm"
              placeholder="e.g. 123"
            />
          </div>
        </div>

        <button
          type="submit"
          class="violet text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
/* Active state */

/* form */
.form {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

@media (max-width: 767px) {
  .form {
    margin: 0; /* Remove margin on smaller screens */
    justify-content: flex-start; /* Align items to the start on smaller screens */
    height: fit-content;
  }
}
</style>
