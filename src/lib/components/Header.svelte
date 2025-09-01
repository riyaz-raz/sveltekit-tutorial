<script lang="ts">
  import { goto } from "$app/navigation";

  const navItems = ["About", "Contact"];
</script>

<header class="bg-gray-800 text-white shadow-md">
  <div class="container mx-auto flex items-center justify-between px-4 py-3">
    <!-- Logo / Heading -->
    <a href="/">
      <h1 class="text-xl font-bold cursor-pointer">Demo App</h1>
    </a>
    <!-- Nav Links -->
    <nav>
      <ul class="flex space-x-6">
        {#each navItems as item (item)}
          <li>
            <button
              class="hover:text-gray-300"
              onclick={() => goto(`/${item.toLowerCase()}`)}
            >
              {item}
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
