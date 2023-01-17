//src/routes/register.svelte
<script lang="ts">
  import { register } from '$root/services/auth';

  let name = '';
  let email = '';
  let password = '';
  let error = '';

  function handleSubmit() {
    register(name, email, password)
      .then(() => {
        // Redirect to login page
        window.location.href = '/login';
      })
      .catch((err) => {
        error = err.message;
      });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Name:
    <input type="text" bind:value={name} />
  </label>
  <label>
    Email:
    <input type="email" bind:value={email} />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>
  {#if error}
    <p>{error}</p>
  {/if}
  <button type="submit">Register</button>
</form>
