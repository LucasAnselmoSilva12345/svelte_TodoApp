<script>
  let todo = '';
  import { addTodo } from '../../stores/todoStore.js';
  import { ALERT_TYPE, displayAlert } from '../../stores/alertStore.js';

  function handleSubmitTodo() {
    addTodo(todo);
    todo = '';
  }

  function displayAlertMessage() {
    displayAlert('Task added', ALERT_TYPE.SUCCESS, 2000);
  }
</script>

<main class="w-11/12 my-0 mx-auto md:w-1/4">
  <form class="my-6" on:submit|preventDefault={handleSubmitTodo}>
    <div class="flex flex-col text-base mb-2">
      <label class="font-bold mb-2 text-gray-800" for="todo"
        >What's the next task?</label
      >
      <input
        bind:value={todo}
        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
        type="text"
        name="todo"
        placeholder="buy a new t-shirt..."
      />
    </div>

    <button
      on:click={displayAlertMessage}
      type="submit"
      class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 flex items-center justify-center gap-2"
    >
      Send
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    </button>
  </form>
</main>
