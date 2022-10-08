<script>
  import { deleteTodo, toggleTodoCompleted } from '../../stores/todoStore.js';
  import { ALERT_TYPE, displayAlert } from '../../stores/alertStore.js';
  export let todo;

  function displayAlertMessage() {
    deleteTodo(todo.id);
    displayAlert('Task deleted', ALERT_TYPE.DELETE, 2000);
  }
</script>

<div class="w-11/12 my-0 mx-auto md:w-1/4">
  <ul>
    <li
      class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4"
    >
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        on:change={() => toggleTodoCompleted(todo.id)}
        class="mr-2 form-checkbox h-5 w-5"
      />
      <span
        class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.text}
      </span>
      <button
        on:click={displayAlertMessage}
        type="button"
        class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </li>
  </ul>
</div>
