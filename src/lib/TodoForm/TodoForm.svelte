<script>
  let todo = '';
  import { addTodo } from '../../stores/todoStore.js';

  function handleSubmitTodo() {
    addTodo(todo);
    todo = '';
  }
</script>

<main class="w-11/12 my-0 mx-auto md:w-1/4">
  <form class="my-6" on:submit|preventDefault={handleSubmitTodo}>
    <div class="flex flex-col text-base mb-2">
      <label class="font-bold mb-2 text-gray-800" for="todo">Todo</label>
      <input
        bind:value={todo}
        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
        type="text"
        name="todo"
        placeholder="What's the next task?"
      />
    </div>

    <button
      type="submit"
      class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
    >
      Submit
    </button>
  </form>
</main>
