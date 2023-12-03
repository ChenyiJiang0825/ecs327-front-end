<template>
  <div v-if="userStore.isLogin" align="left" class="ml-30px">
    Hello, {{ userStore.user.email }}

    <div>
      <h3 class="text-base font-semibold leading-7 text-gray-900">MyProfile</h3>
      <el-row class="demo-avatar demo-basic">
        <el-col :span="12">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="100" :src="circleUrl" />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-upload
        v-model:file-list="fileList"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="1"
        :on-exceed="handleExceed"
      >
        <div style="margin: 40px" />
        <el-button type="primary" :icon="Upload" size="small" />
        <template #tip>
          <div class="el-upload__tip">Click to upload your avatar</div>
        </template>
      </el-upload>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              Jian Dang
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              123@323.com
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Major</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              CE
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Minor</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              EE
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Academic Year
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              Junior
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <div v-else>
    <el-text class="mx-1" size="large" tag="b">Please Sign In First!</el-text>
    <div style="margin: 20px" />
    <h1 :class="titleClass">My Profile</h1>
    <el-row class="demo-avatar demo-basic">
      <el-col :span="24">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="100" :src="circleUrl" />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="1"
      :on-exceed="handleExceed"
    >
      <div style="margin: 20px" />
      <el-button type="primary" :icon="Upload" size="small" />
      <template #tip>
        <div class="el-upload__tip">Click to upload your avatar</div>
      </template>
    </el-upload>
    <el-radio-group v-model="labelPosition" label="label position">
    </el-radio-group>
    <div style="margin: 30px" />
    <el-form
      :label-position="labelPosition"
      label-width="300px"
      :model="formLabelAlign"
      style="max-width: 800px"
    >
      <el-form-item label="Last Name">
        <el-input v-model="formLabelAlign.LastName" />
      </el-form-item>
      <el-form-item label="First Name">
        <el-input v-model="formLabelAlign.FirstName" />
      </el-form-item>
      <el-form-item label="Email Address">
        <el-input v-model="formLabelAlign.EmailAddress" />
      </el-form-item>
      <el-form-item label="Major">
        <el-input v-model="formLabelAlign.Major" />
      </el-form-item>
      <el-form-item label="Minor">
        <el-input v-model="formLabelAlign.Minor" />
      </el-form-item>
      <el-form-item label="Current Academic Year">
        <el-input v-model="formLabelAlign.CurrentYear" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user.store";
const userStore = useUserStore();
userStore.getCurrentUserInfo();
import { reactive, ref, toRefs } from "vue";
import type { FormProps } from "element-plus";

const labelPosition = ref<FormProps["labelPosition"]>("right");

const formLabelAlign = reactive({
  LastName: "",
  FirstName: "",
  EmailAddress: "",
  Major: "",
  Minor: "",
  CurrentYear: "",
});

const state = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
  sizeList: ["large"] as const,
});
const titleClass = ref("title");
const { circleUrl, sizeList } = toRefs(state);
import { ElMessage, ElMessageBox } from "element-plus";

import type { UploadProps, UploadUserFile } from "element-plus";
import { Upload } from "@element-plus/icons-vue";
const fileList = ref<UploadUserFile[]>([
  {
    name: "",
    url: "",
  },
]);

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};
</script>
<style>
.title {
  color: rgb(0, 0, 0);
}
</style>
