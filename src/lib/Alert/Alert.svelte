<script>
  import {
    alertMessage,
    alertType,
    ALERT_TYPE,
  } from '../../stores/alertStore.js';

  $: bgClass = () => {
    if ($alertType === ALERT_TYPE.SUCCESS) {
      return 'bg-green-100';
    } else if ($alertType === ALERT_TYPE.DELETE) {
      return 'bg-red-100';
    } else {
      return 'bg-blue-100';
    }
  };
</script>

<div class="w-11/12 mx-auto my-6 text-center md:w-1/4">
  {#if $alertMessage}
    <span class={`text-gray-900 text-center rounded-md p-4 ${bgClass()}`}
      >{$alertMessage}
    </span>
  {/if}
</div>
