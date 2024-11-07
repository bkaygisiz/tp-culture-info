<!-- Home.svelte -->
<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import axios from "axios";
    const dispatch = createEventDispatcher()
    let username = "";
    let password = "";
    let isLogin = true;
  
    // Switch between login and register forms
    function toggleForm() {
      isLogin = !isLogin;
    }
  
    // Handle form submission
    function handleSubmit() {
      if (isLogin) {
        dispatch('submit')
      } else {
        // Perform registration
        console.log("Registering with:", { username, password });
        axios.post('http://localhost:3000/register', {
            username,
            password
        }).then((response) => {
            dispatch('submit')
        }).catch((error) => {
            console.log(error.status)
        })
      }
    }
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <div class="w-full max-w-xs bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center mb-6">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input
            type="text"
            id="username"
            bind:value={username}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            type="password"
            id="password"
            bind:value={password}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <button
        on:click={toggleForm}
        class="mt-4 text-blue-500 hover:underline text-sm text-center w-full"
      >
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </button>
    </div>
  </div>
  