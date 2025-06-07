<!-- Keyboard.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function press(key) {
    dispatch('keyPress', key);
  }
</script>

<div class="keyboard">
  <button on:click={() => press('1')}>1</button>
  <button on:click={() => press('2')}>2</button>
  <button on:click={() => press('3')}>3</button>
  <button on:click={() => press('+')}>+</button>
  <br>
  <button on:click={() => press('4')}>4</button>
  <button on:click={() => press('5')}>5</button>
  <button on:click={() => press('6')}>6</button>
  <button on:click={() => press('-')}>-</button>
  <br>
  <button on:click={() => press('7')}>7</button>
  <button on:click={() => press('8')}>8</button>
  <button on:click={() => press('9')}>9</button>
  <button on:click={() => press('*')}>*</button>
  <br>
  <button on:click={() => press('=')}>=</button>
  <button on:click={() => press('0')}>0</button>
  <button on:click={() => press('C')}>C</button>
  <button on:click={() => press('/')}>/</button>
</div>

<style>
  .keyboard button {
    font-size: 35px;
    font-weight: bold;
    margin: 0.5rem;
    width: 80px;
    height: 80px;
    background-color: green;
    color: white;
    border-radius: 20px;

  }
</style>
