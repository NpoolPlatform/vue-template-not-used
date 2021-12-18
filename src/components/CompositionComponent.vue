<template>
  <div class="q-pa-md">
    <q-table title="Users" :rows="users" :columns="columns" row-key="name" :loading="loading" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'src/store'
import { ActionTypes } from 'src/store/users/action-types'
import { MutationTypes } from 'src/store/users/mutation-types'
import { computed, onMounted, onUnmounted } from 'vue'
const columns = [
  { name: 'userId', align: 'left', required: false, label: 'UserID', field: 'userId' },
  { name: 'id', align: 'left', required: false, label: 'ID', field: 'id' },
  { name: 'title', align: 'left', required: false, label: 'Title', field: 'title' },
  { name: 'body', align: 'left', required: false, label: 'Body', field: 'body' }
]

const store = useStore()
const users = computed(() => store.getters.getUserInfos)
const loading = computed(() => store.getters.getUserLoading)

onMounted(() => {
  store.dispatch(ActionTypes.GetUsers)
})

onUnmounted(() => {
  store.commit(MutationTypes.Reset)
})
</script>
