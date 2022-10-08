<script>
  import Header from './lib/Header/Header.svelte';
  import TodoForm from './lib/TodoForm/TodoForm.svelte';
</script>

<slot>
  <Header />
  <TodoForm />
</slot>
