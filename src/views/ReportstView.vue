<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive, ref } from "vue";



interface IReport {
  id: string;
  make: string;
  year: number;
  price: number;
  approved: boolean;
}

interface IState {
  reports: IReport[]
}

const reportsState = reactive<IState>({
  reports: [],
})

onMounted( async () => {
  const res = await axios.get("http://localhost:5000/reports");
  console.log(res.data)
  reportsState.reports = res.data
})
</script>

<template>
  <main>
    <div v-for="report in reportsState.reports" :key="report.id">
      <p>Title: {{ report.make }}</p>
      <p>Price: {{ report.price }}</p>
      <p>Year: {{ report.year }}</p>
    </div>
    <button></button>
  </main>
</template>
