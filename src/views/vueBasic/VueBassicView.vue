<script setup lang='ts'>
import { ref, computed } from 'vue';
import ChildComp from './ChildComponents/ChildComp.vue';

const REGEX_NUMBER = /^([+-]?[1-9]\d*|0)$/

let contentVtext = 'contentVtext';
let contentVhtml = '<b>contentVhtml</b>';
let isDisabled = ref(false);
let status = "text-red-500";
let count = ref(0);
let numberX: number = 1;

const checkNumber = () => {
  if (REGEX_NUMBER.test(numberX.toString().trim()))
    isDisabled.value = false;
  else
    isDisabled.value = true;
}

const increatement = () => {
  count.value += Number(numberX);
}
const reduction = () => {
  count.value -= Number(numberX);
}

let user = ref({firstName: '', lastName: ''});
const userName = computed(() =>
  user.value.firstName + ' ' + user.value.lastName
)


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
      <button :disabled="isDisabled" @click="reduction" class="px-4 py-2 bg-rose-500 rounded-lg text-blue-50">reduction</button>
      <input type="text" v-model="numberX" v-on:keyup="checkNumber" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <button :disabled="isDisabled" @click="increatement" class="ml-2 px-4 py-2 bg-lime-500 rounded-lg text-blue-50">increatement</button>
    </div>

    <div class="py-4">
      <input v-model="user.firstName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First name">
      <input v-model="user.lastName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last name">
      <p>User Name: {{ userName }}</p>
    </div>
    <RouterLink to="/vuebasic/vuebasic1">Vue Basic</RouterLink>

    <RouterView />

    <ChildComp msg="Parent to child!" @add="(i) => count += i " />


  </main>
</template>

<style>

</style>
