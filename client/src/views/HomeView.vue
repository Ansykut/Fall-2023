<script setup lang="ts">
import { ref } from 'vue';


const newTask = ref('');
const tasks = ref<string[]>([])

function addTask() {
  tasks.value.push(newTask.value);
  newTask.value = '';
};

</script>

<template>
  <main>
    <h1>Home</h1>
    <nav class="panel">
      <p class="panel-heading">
        To-Do
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="What do you want to do?"
          @keypress.enter="addTask"
          v-model="newTask">
          <span class="icon is-left">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      
      <label class="panel-block" v-for="task in tasks">
        <input type="checkbox">
        <span>{{ task }}</span>
      </label>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth"
          @click = "tasks=[]">
          Reset all filters
        </button>
      </div>
    </nav>


  </main>
</template>
