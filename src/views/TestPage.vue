<template>
  <div>
    <el-divider content-position="left"></el-divider>
    <h1>Search The Course</h1>
    <el-divider content-position="right"></el-divider>
  </div>
  <table>
    <tbody>
      <tr align="center" valign="bottom">
        <td>College</td>
        <td>Dept</td>
        <td>Course number</td>
      </tr>
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
          <input v-model="text1" placeholder="Type here" />
          <p>{{ text1 }}</p>
        </td>
        <td>
          <input v-model="text2" placeholder="Type here" />
          <p>{{ text2 }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");

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
const text1 = ref("");
const text2 = ref("");
</script>
