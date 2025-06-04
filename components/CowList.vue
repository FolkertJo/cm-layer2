<template>
  <h1>Cowlist</h1>
  <div>
    <table class="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
      <thead class="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th
            class="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
            State</th>
          <th
            class="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
            City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Indiana</td>
          <td class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Indianapolis</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Ohio</td>
          <td class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Columbus</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Michigan</td>
          <td class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Detroit</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
      <h1>Event emitting</h1>
      <button @click="emit('event from CowLayer2')">Emit event</button>
    </div>
</template>

<script setup lang="ts">

const nuxtApp = useNuxtApp()

async function emit(message) {
  await nuxtApp.callHook('app:user:registered', {
    id: 1,
    name: message,
    status: false
  })
}

</script>