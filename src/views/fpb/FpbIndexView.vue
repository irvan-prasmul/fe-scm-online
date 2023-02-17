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
            <!-- <EasyDataTable
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
            </EasyDataTable> -->

            <!-- <v-data-table
              v-model:items-per-page="tableOptions.data.rowsPerPage"
              :headers="tableHeaders"
              :items="tableDataList"
              class="elevation-1"
              density="compact"
              :items-length="totalRow"
              :loading="isLoading"
              @update:options="getTableData"
            ></v-data-table> -->

            <v-data-table-server
              :headers="headers"
              :items="desserts"
              :items-length="totalDesserts"
              :loading="loading"
              :items-per-page="2"
              item-value="name"
              show-select
              show-expand
              class="elevation-1"
              @update:options="options = $event"
            >
              <template #header="{}">
                <thead>
                  <tr>
                    <th
                      v-for="(h, i) in headers"
                      :key="i"
                      :rowspan="h.children ? 1 : 2"
                      :colspan="h.children ? h.children.length : 1"
                    >
                      {{ h.text }}
                    </th>
                  </tr>
                  <tr>
                    <th v-for="(h1, i1) in getSubHeader(headers)" :key="i1">
                      {{ h1.text }}
                    </th>
                  </tr>
                </thead>
              </template>
              <template #item="props">
                <tr>
                  <td v-for="(c, ci) in getRows(props.item)" :key="ci">
                    {{ c }}
                  </td>
                </tr>
              </template>
              <template v-slot:expanded-row> This is an expanded row </template>
            </v-data-table-server>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { onMounted, reactive, ref, watch } from "vue";
import { HeaderItemClassNameFunction } from "vue3-easy-data-table";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import _ from "lodash";

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
const tableHeaders = ref<any>([
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

// TEST DATA TABLE
const totalDesserts = ref(0);
const desserts = ref([]);
const loading = ref(true);
const options = ref<any>({});
const headers = ref<any>([
  {
    title: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Calories", key: "calories" },
  { title: "Fat (g)", key: "fat" },
  { title: "Carbs (g)", key: "carbs" },
  { title: "Protein (g)", key: "protein" },
  {
    title: "Iron (%)",
    key: "iron",
    children: [{ text: "1" }, { text: "2" }, { text: "3" }],
  },
]);

watch(
  options,
  () => {
    getDataFromApi();
    // transitionDur.value = data.routerTransitionDuration;
  },
  { deep: true }
);

const getRows = (rows: any) => {
  const result: any = {};
  _.forEach(rows, (i, key) => {
    if (i.children) {
      _.forEach(i.children, (i1, key1) => {
        result["c" + key1] = i1;
      });
    } else result[key] = i;
  });
  return result;
};

const getSubHeader = (headers: any[]) => {
  let result: any[] = [];
  headers
    .filter((i: { children: any }) => i.children)
    .forEach((v: { children: any }) => {
      result = result.concat(v.children);
    });
  return result;
};

const getDataFromApi = () => {
  loading.value = true;
  fakeApiCall().then((data: any) => {
    desserts.value = data.items;
    totalDesserts.value = data.total;
    loading.value = false;
  });
};
/**
 * In a real application this would be a call to fetch() or axios.get()
 */
const fakeApiCall = () => {
  return new Promise((resolve, reject) => {
    const { sortBy = [], page, itemsPerPage } = options;

    let items = getDesserts();
    const total = items.length;

    if (sortBy.length) {
      items = items.sort((a, b) => {
        const sortA = a["name"];
        const sortB = b["name"];

        if (sortBy[0].order) {
          if (sortA < sortB) return 1;
          if (sortA > sortB) return -1;
          return 0;
        } else {
          if (sortA < sortB) return -1;
          if (sortA > sortB) return 1;
          return 0;
        }
      });
    }

    if (itemsPerPage > 0) {
      items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }

    setTimeout(() => {
      resolve({
        items,
        total,
      });
    }, 1000);
  });
};
const getDesserts = () => {
  return [
    {
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: {
        children: {
          1: "123",
          2: "456",
          3: "789",
        },
      },
    },
  ];
};

// UNUSED
// const headerItemClassNameFunction: HeaderItemClassNameFunction = (): string => {
//   return "table-header";
// };
</script>

<style lang="scss">
.table-header {
  --easy-table-header-background-color: grey;
  --easy-table-header-font-color: #fff;
  text-transform: uppercase;
}
</style>
