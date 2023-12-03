<template>
  <div>
    <el-divider content-position="left"></el-divider>
    <h1>Search The Course</h1>
    <el-divider content-position="right"></el-divider>

    <table>
      <thead>
        <tr align="center" valign="bottom">
          <th>College</th>
          <th>Dept</th>
          <th>Course number</th>
        </tr>
      </thead>
      <tbody>
        <tr align="center" valign="bottom">
          <td>
            <el-select
              v-model="value"
              class="m-4"
              placeholder="Select"
              size="small"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </td>
          <td>
            <input v-model="Dept" placeholder="Type here" />
          </td>
          <td>
            <input v-model="Course" placeholder="Type here" />
          </td>
        </tr>
      </tbody>
    </table>

    <el-row class="mb-4" style="justify-content: flex-end;">
      <el-button @click="SEARCH" round>Search</el-button>
    </el-row>

    <el-table
      v-show="ShowTable"
      :data="classInfo"
      style="width: 100%"
      :row-key="row => row.id"
    >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="class" label="Class"></el-table-column>
    <el-table-column prop="instructor" label="Instructor"></el-table-column>
    <el-table-column prop="openSeat" label="Open Seat"></el-table-column>
    <el-table-column prop="credits" label="Credits"></el-table-column>
    <el-table-column prop="days" label="Days"></el-table-column>
    <el-table-column prop="time" label="Time"></el-table-column>
    <el-table-column prop="notification" label="Vacancy Alert">
      <template #default = "{row}">
        <el-button type="info" :icon="Message" circle />
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
table td 
{
  vertical-align: middle;
}
</style>


<script lang="ts" setup>
import { ref } from "vue";
import {
  Message
} from '@element-plus/icons-vue'

const value = ref("");
const ShowTable = ref(false);

const options = [
  {
    value: "Option1",
    label: "CAS",
  },
  {
    value: "Option2",
    label: "ENG",
  },
  {
    value: "Option3",
    label: "QST",
  },
  {
    value: "Option4",
    label: "COM",
  },
  {
    value: "Option5",
    label: "CGS",
  },
];
const input = ref("");
const Dept = ref("");
const Course = ref("");

const classInfo = ref([
  {
    id: 1,
    class: "ENGEC327A1",
    instructor: "Coskun",
    openSeat: 0,
    credits: 4.0,
    days: "Mon,Wed",
    time: "--",
    notification: "Email",
  }
]);

const SEARCH = () =>
{
  ShowTable.value = true;
};
</script>



