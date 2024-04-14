<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchUsers } from '../services/userService';
import { User } from '../types/userType';

const users = ref<User[]>([]);

onMounted(async () => {
  users.value = await fetchUsers();
});
</script>

<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>