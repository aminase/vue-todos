<script></script>

<template>
  <div class="about">
    <h1 class="title">View Todos</h1>
    <p class="about-msg">
      Todo App created in Vue 3 is CRUD app.
      <br />
      Track your daily tasks's using this todo tracker with abilities to save, complete, edit &
      delete todos.
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.about-msg {
  margin-top: 6px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  text-align: center;
}
.title {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>
