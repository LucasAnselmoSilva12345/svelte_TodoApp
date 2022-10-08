<script>
  import Header from './lib/Header/Header.svelte';
  import TodoForm from './lib/TodoForm/TodoForm.svelte';
  import { todos } from './stores/todoStore.js';
  import Todo from './lib/Todo/Todo.svelte';
  import Alert from './lib/Alert/Alert.svelte';
</script>

<slot>
  <Header />
  <TodoForm />
  <Alert />
  {#each $todos as todo}
    <Todo {todo} />
  {/each}
</slot>
