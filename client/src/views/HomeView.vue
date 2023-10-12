<script setup lang="ts">
import { ref } from 'vue';
//import confetti from 'canvas-confetti'; // Import the canvas-confetti library

const newTask = ref('');
const tasks = ref<{ task: string; completed: boolean }[]>([]);

function addTask() {
  tasks.value.push({ task: newTask.value, completed: false });
  newTask.value = '';
}

function removeCompletedTasks() {
  // Create a confetti explosion effect
  const duration = 5000; // Duration of the confetti explosion (in milliseconds)
  const { clientWidth, clientHeight } = document.documentElement;

  /*confetti({
    particleCount: 100, // Number of confetti particles
    spread: 160, // Spread of the confetti particles
    origin: { y: 0.6 }, // Start from the top
    colors: ['#FFD700', '#FFA07A', '#00FF00'], // Color options
  });
  */
  // Remove completed tasks from the array
  tasks.value = tasks.value.filter((task) => !task.completed);
}
</script>

<template>
  <main>
    <h1>Home</h1>
    <nav class="columns"></nav>
    <div class="columns is-centered">
      <div class="column is-4-desktop is-6-tablet is-12-mobile">
        <nav class="panel">
          <p class="panel-heading">
            To-Do
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="What do you want to do?"
                @keypress.enter="addTask"
                v-model="newTask"
              />
              <span class="icon is-left">
                <i class="fas fa-plus" aria-hidden="true"></i>
              </span>
            </p>
          </div>

          <label class="panel-block" v-for="(task, index) in tasks" :key="index">
            <input type="checkbox" v-model="task.completed" />
            <span :class="{ 'completed-task': task.completed }">{{ task.task }}</span>
          </label>
          <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth" @click="removeCompletedTasks">
              Remove completed tasks
            </button>
          </div>
        </nav>
      </div>
    </div>
  </main>
</template>

<style scoped>
.completed-task {
  text-decoration: line-through;
}
</style>
