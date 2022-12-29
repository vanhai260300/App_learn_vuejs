<script setup lang="ts">
defineProps<{
  msg: string;
}>();

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>This is child component</h3>
    <button type="submit" @click="$emit('add', 1)"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">Button
      in child</button>
  </div>
</template>
