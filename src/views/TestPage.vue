<template>
  <el-row :gutter="10">
    <el-col :span="12"
      ><div class="grid-content ep-bg-purple" />
      <el-button type="primary">Primary</el-button>
    </el-col>
    <el-col :span="12"
      ><div class="grid-content ep-bg-purple" />
      <el-button type="primary">Primary</el-button>
    </el-col>
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
