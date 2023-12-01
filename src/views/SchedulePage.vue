<template>
  <div>
    <div v-if="userStore.isLogin">Hello, {{ userStore.user.email }}</div>
    <div v-else>Please sign in first!</div>
    <div>
      <el-checkbox v-model="checked1" label="Option 1" size="large" />
      <el-checkbox v-model="checked2" label="Option 2" size="large" />
    </div>
    <el-table :data="tableData" style="width: 80%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useUserStore } from "@/stores/user.store";
const userStore = useUserStore();

const checked1 = ref(true);
const checked2 = ref(false);

const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);

watch(
  () => checked1.value,
  () => {
    console.log(checked1.value);
    if (checked1.value) {
      tableData.value[0].name = "WZA";
    } else {
      tableData.value[0].name = "DJ";
    }
  }
);
</script>
