<template>
  <button
    class="group cursor-pointer outline-none fixed bottom-4 right-4" 
    title="Add New"
  >
    <svg 
      class="stroke-white fill-apple-500 group-active:stroke-white" 
      viewBox="0 0 24 24" 
      height="50px"
      width="50px" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Circle with apple-500 fill -->
      <path
        stroke-width="1.5"
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      ></path>
      <!-- Horizontal line of the plus sign -->
      <path stroke-width="1.5" d="M8 12H16" class="stroke-white"></path>
      <!-- Vertical line of the plus sign -->
      <path stroke-width="1.5" d="M12 16V8" class="stroke-white"></path>
    </svg>
  </button>
</template>
