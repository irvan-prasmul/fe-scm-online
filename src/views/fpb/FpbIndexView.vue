<template>
  <div>
    <v-card class="main-card">
      <v-card-title class="text-start">
        <v-icon class="pb-1">mdi-cart</v-icon>
        FPB Dashboard (Non-Stock)
      </v-card-title>
      <v-card-item>
        <v-row>
          <v-col md="1" sm="12" align-self="center" class="text-start">
            <h4>FPB</h4>
          </v-col>
          <v-col cols="auto">
            <v-btn color="primary">
              <v-icon class="pr-2">mdi-plus</v-icon>
              Create new
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="1" sm="12" align-self="center" class="text-start">
            <h4>Status</h4>
          </v-col>
          <v-col>
            <v-select
              label="Select"
              :items="[
                'All',
                'Waiting for Approval',
                'Approved',
                'Rejected',
                'Canceled',
              ]"
              hide-details
              density="compact"
              variant="outlined"
              style="width: 300px !important"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto" align-self="center" class="pr-1">
            <v-btn @click="refreshTable" :loading="isLoading" color="secondary">
              <v-icon class="pr-1"> mdi-refresh </v-icon>
              Refresh Table
            </v-btn>
          </v-col>
          <v-col align-self="center" class="pl-0">
            <v-text-field
              v-model="tableSearch"
              variant="outlined"
              min="1"
              hide-details
              label="Search table:"
              clearable
              density="compact"
              :loading="isLoading"
              @keyup.enter="getTableData"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-alert v-model="isError" :closable="true" type="error">
            {{ errorMessage }}
          </v-alert>
        </v-row>
        <v-row class="pt-0 mt-0">
          <v-col cols="12">
            <EasyDataTable
              v-model:server-options="tableOptions.data"
              :headers="tableHeaders"
              :items="tableDataList"
              :loading="isLoading"
              alternating
              buttons-pagination
              :server-items-length="totalRow"
              :rows-items="[10, 25, 50, 100]"
              :header-item-class-name="headerItemClassNameFunction"
            >
              <template #expand="item">
                <div style="padding: 15px">
                  <p v-if="item.user_email">User: {{ item.user_email }}</p>
                  {{ item.result }}
                </div>
              </template>

              <template #header-sender_name>
                <th colspan="3">colspan</th>
              </template>
              <template #header-email_to="header">
                <div class="customize-header">
                  {{ header.text }}
                </div>
              </template>
            </EasyDataTable>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { onMounted, reactive, ref } from "vue";
import { HeaderItemClassNameFunction } from "vue3-easy-data-table";

const isLoading = ref(false);
const isError = ref(false);
const errorMessage = ref("");

interface tableData {
  id: number;
  template_name: string;
  email_subject: string;
  sender_name: string;
  email_to: string;
  status: string;
  result: string;
  user_email: string | null;
}

const tableDataList = ref<Array<tableData>>([]);
const tableHeaders = ref([
  { text: "#", value: "id", sortable: true },
  { text: "Created", value: "template_name", sortable: true },
  { text: "FPB Number", value: "email_subject", sortable: true },
  { text: "PTA", value: "sender_name", sortable: true },
  { text: "IO", value: "email_to", sortable: true },
  { text: "Other", value: "status", sortable: true },
]);
const totalRow = ref(0);
const tableSearch = ref("");
const tableOptions = reactive({
  data: {
    page: 1,
    sortBy: "id",
    sortType: "desc",
    rowsPerPage: 10,
  },
});

onMounted(() => {
  getTableData();
});

const refreshTable = () => {
  console.log("refresh table");
};
const getTableData = () => {
  console.log("getTableData");
};

const headerItemClassNameFunction: HeaderItemClassNameFunction = (): string => {
  return "table-header";
};
</script>

<style lang="scss">
.table-header {
  --easy-table-header-background-color: grey;
  --easy-table-header-font-color: #fff;
  text-transform: uppercase;
}
</style>
