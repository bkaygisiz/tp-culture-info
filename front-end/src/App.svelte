<script lang="ts">
  import type { Message } from "./types/types";
  import axios from "axios";

  // Store messages and input value
  let messages: Message[] = [];
  let inputMessage = '';

  // Function to handle sending messages
  function sendMessage() {
    if (inputMessage.trim()) {
      // Add user message
      axios.post('http://localhost:3000/chat', {
        message: inputMessage
      }).then((response) => {
        const botMessage = response.data.message
        messages = [...messages, { text: botMessage, timestamp: new Date(), sender: 'bot' }];
      })
      messages = [...messages, { text: inputMessage, timestamp: new Date(), sender: 'user' }];
      inputMessage = '';
    }
  }
</script>

<!-- Main chat container -->
<div class="flex flex-col h-screen max-w-md mx-auto bg-gray-100 p-4 shadow-lg">
  <!-- Chat Messages Display Area -->
  <div class="flex-1 overflow-y-auto mb-4 p-4 bg-white rounded-lg shadow-inner">
    {#each messages as message (message.timestamp)}
      <div class="my-2 flex {message.sender === 'user' ? 'justify-start' : 'justify-end'}">
        <p
          class="rounded-md px-4 py-2 inline-block max-w-xs text-white"
          class:bg-blue-500={message.sender === 'user'}
          class:bg-green-500={message.sender === 'bot'}>
          {message.text}
        </p>
        <p class="text-xs text-gray-400 ml-2">
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    {/each}
  </div>

  <!-- Input Field and Send Button -->
  <div class="flex items-center">
    <input
      type="text"
      bind:value={inputMessage}
      on:keydown={(e) => e.key === 'Enter' && sendMessage()}
      placeholder="Type a message..."
      class="flex-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-400"
    />
    <button
      on:click={sendMessage}
      class="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-400">
      Send
    </button>
  </div>
</div>

<style>
  /* Optional: Smooth scrolling for messages */
  .overflow-y-auto {
    scroll-behavior: smooth;
  }
</style>

