<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue';

let contentVtext = 'contentVtext';
let contentVhtml = '<b>contentVhtml</b>';
let isDisabled = true;
let status = "text-red-500";
let count = ref(0);

const increatement = () => {
  count.value++;
}
const reduction = () => {
  count.value--;
}

let textD = ref('');
</script>

<template>
  <main>
    <div>
      <p v-text='contentVtext'></p>
      <p v-html='contentVhtml'></p>
    </div>
    <div>
      <button :disabled="isDisabled" class="px-4 py-2 bg-gray-200 rounded-lg">Submit</button>
    </div>
    <div>
      <p :class="status">{{ count }}</p>
      <button @click="reduction" class="px-4 py-2 bg-rose-500 rounded-lg text-blue-50">reduction</button>
      <button @click="increatement" class="ml-2 px-4 py-2 bg-lime-500 rounded-lg text-blue-50">increatement</button>
    </div>

    <div class="py-4">
      <input v-model="textD" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Type here">
      <p>{{ textD }}</p>
    </div>

  </main>
</template>

<style>

</style>
