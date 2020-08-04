<template>
  <header>
    <!-- Tablet & PC -->
    <div class="hidden sm:block">
      <div class="flex bg-gray-800">
        <router-link to="/" class="px-3 py-3 text-gray-200 hover:text-gray-500">ホーム</router-link>
        <router-link to="/consonant" class="px-3 py-3 text-gray-200 hover:text-gray-500">子音アルファベット</router-link>
        <router-link to="/vowel" class="px-3 py-3 text-gray-200 hover:text-gray-500">母音アルファベット</router-link>
        <router-link to="/about" class="px-3 py-3 text-gray-200 hover:text-gray-500">作った目的</router-link>
      </div>
    </div>

    <!-- Smart Phone -->
    <div class="sm:hidden relative z-10">
      <div class="fixed inset-x-0 top-0 p-3 w-full bg-gray-800 text-gray-200 font-semibold sm:hidden"> {{ postTitle }} </div>
      <div class="fixed top-0 right-0 w-3/4">
        <div class="flex justify-end">
          <div v-if="!isOpen" class="px-2 py-3">
            <button @click="isOpen = !isOpen" type="button" class="text-gray-200 focus:outline-none">
              <svg class=" h-6 w-6 fill-current focus:outline-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div v-if="isOpen" class="px-2 py-3 bg-gray-400 flex justify-between items-center w-full">
            <span class="block text-left px-2 text-gray-800 font-semibold">ミャンマー語黒板</span>
            <button @click="isOpen = !isOpen" type="button" class="text-gray-800 focus:outline-none">
              <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
              </svg>
            </button>
          </div>
        </div>
        <div @click="isOpen = !isOpen">
          <div v-if="isOpen" class="px-2 min-h-screen right-0 bg-gray-200">
            <div class="py-4 text-center">
              <img class="h-20 w-20 m-auto" src="../../public/img/mamawawa.png" alt="Ma Ma Wa Wa Dance">
              <span class="pt-3 font-semibold text-gray-800">မမ ဝဝ ထထ က အက ပထမ</span>
            </div>
            <router-link to="/" class=" px-2 py-3 block text-right border-b border-gray-400 text-gray-700 ">ホーム</router-link>
            <router-link to="/consonant" class=" px-2 py-3 block text-right border-b border-gray-400 text-gray-700 ">子音アルファベット</router-link>
            <router-link to="/vowel" class=" px-2 py-3 block text-right border-b border-gray-400 text-gray-700 ">母音アルファベット</router-link>
            <router-link to="/about" class=" px-2 py-3 block text-right border-b border-gray-400 text-gray-700 ">作った目的</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default{ 
  data() {
    return {
      isOpen: false,
    }
  },
  props: ['postTitle'],
  created() {
    
  }
}
</script>