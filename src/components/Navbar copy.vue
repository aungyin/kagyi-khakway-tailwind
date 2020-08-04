<template>
  <header>
    <!-- Tablet & PC -->
    <div class="hidden sm:block">
      <div class="flex">
        <router-link to="/" class="px-3 py-2 inline-block hover:text-gray-600">ホーム</router-link>
        <router-link to="/consonant" class="px-3 py-2 inline-block hover:text-gray-600">子音アルファベット</router-link>
        <router-link to="/vowel" class="px-3 py-2 inline-block hover:text-gray-600">母音アルファベット</router-link>
        <router-link to="/about" class="px-3 py-2 inline-block hover:text-gray-600">作った目的</router-link>
      </div>
    </div>

    <!-- Smart Phone -->
    <div class="sm:hidden">
      <div>
        <div class="flex justify-end">
          <div :class="!isOpen ? 'block' : 'hidden'">
            <button @click="isOpen = !isOpen" type="button" class=" p-2 block text-gray-600">
              <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div :class="isOpen ? 'block' : 'hidden'" class="w-3/4 bg-gray-300 flex justify-between">
            <span class="inline-block text-left px-2 py-2 text-gray-600">ミャンマー語黒板</span>
            <button @click="isOpen = !isOpen" type="button" class=" p-2 block text-gray-600">
              <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
              </svg>
            </button>
          </div>
        </div>
        <div @click="isOpen = !isOpen" class="relative">
          <div v-if="isOpen" class="px-2 fixed min-h-screen w-3/4 right-0 bg-gray-100 bg-opacity-75">
            <div class="py-4 text-center">
              <img class="h-20 w-20 m-auto" src="../assets/img/mamawawa.png" alt="Ma Ma Wa Wa Dance">
              <span class="pt-3 font-semibold">မမ ဝဝ ထထ က အက ပထမ</span>
            </div>
            <router-link to="/" class=" px-2 py-2 block text-right border-b border-gray-400 text-gray-700 ">ホーム</router-link>
            <router-link to="/consonant" class=" px-2 py-2 block text-right border-b border-gray-400 text-gray-700 ">子音アルファベット</router-link>
            <router-link to="/vowel" class=" px-2 py-2 block text-right border-b border-gray-400 text-gray-700 ">母音アルファベット</router-link>
            <router-link to="/about" class=" px-2 py-2 block text-right border-b border-gray-400 text-gray-700 ">作った目的</router-link>
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
  }
}
</script>