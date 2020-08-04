<template>
  <div id="vowel" class="mt-16 sm:mt-0">

    <!-- Body -->
    <div class="px-5 mx-auto">
      <div>
        <div class="mt-5 text-center">
          <p class=" text-gray-800 text-xs sm:text-lg">ミャンマー語黒板</p>
          <p class=" text-gray-800 text-md sm:text-4xl font-bold">ミャンマーカリキュラム母音１２アルファベット</p>
        </div>

        <!-- Display Block -->
        <div class=" mt-6 py-2 sm:mx-auto sm:w-3/4 text-center bg-gray-800 rounded">
          <div class=" text-gray-200 text-xl sm:text-3xl">
            <span class=" text-yellow-500">
              {{ phrase1 }}
            </span> →
            <span class=" text-yellow-500">
              {{ phrase2 }}
            </span> →
            <span class=" text-yellow-500">
              {{ phrase3 }}
            </span> 
          </div>
          <div class=" text-gray-200 text-xs sm:text-lg mt-3"> 発音 </div>
          <div class=" text-gray-200 text-lg sm:text-xl"> {{ pronunciation }} </div>
        </div>
      </div>

      <!-- Vowel Table -->
      <div class="mt-4 mx-auto sm:w-3/4">
        <div class="pb-12 flex flex-wrap sm:justify-center">
          <div class="w-1/2 sm:w-1/5" v-for="item in items" :key="item.word">
            <div @click="showPhrase(item)" :class="[item.color, {'bg-gray-200': selected == item.word} ]"
              class="py-4 text-center sm:text-3xl font-semibold border-gray-400 border hover:bg-gray-100">
              <div class="text-4xl"> {{ item.word }} </div>
              <div class="mt-1 h-4 font-normal text-xl"> {{ item.symbol }} </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Learn More -->
      <div class="fixed bottom-0 inset-x-0 sm:hidden">
        <div v-if="isOpen" class="px-8">
          <ul>
            <a @click="isOpen = !isOpen" class="p-3 border border-gray-400 block bg-gray-700 text-gray-100 rounded-t-lg" href="#">母音アルファベット書き方</a>
            <a @click="isOpen = !isOpen" class="p-3 border border-gray-400 block bg-gray-700 text-gray-100" href="#">その他１</a>
            <a @click="isOpen = !isOpen" class="p-3 border border-gray-400 block bg-gray-700 text-gray-100" href="#">その他２</a>
          </ul>
        </div>
        <div class="px-6 py-1 bg-gray-100 leading-3">
          <button @click="isOpen = !isOpen" class="p-3 rounded-lg w-full bg-gray-700 text-gray-100" type="button">母音アルファベットについてもっと勉強</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

const vowels = [
  { word: 'အ', pronunciation: 'ka + a  → ka', symbol: ' ' },
  { word: 'အာ', pronunciation: 'ka + ar  → kar',symbol: 'ာ' },
  { word: 'ဣ', pronunciation: 'ka + i  → ki',symbol: 'ိ' },
  { word: 'ဤ', pronunciation: 'ka + i-  → ki-',symbol:  'ီ' },
  { word: 'ဥ', pronunciation: 'ka + u  → ku',symbol: 'ု' },
  { word: 'ဦ', pronunciation: 'ka + u-  → ku-',symbol: 'ူ' },
  { word: 'ဧ', pronunciation: 'ka + ay  → kay',symbol: 'ေ' },
  { word: 'အဲ', pronunciation: 'ka + e  → ke',symbol: 'ဲ' },
  { word: 'ဩ', pronunciation: 'ka + aw  → kaw',symbol:  'ော' },
  { word: 'ဪ', pronunciation: 'ka + aww  → kaw-',symbol: 'ော်' },
  { word: 'အံ', pronunciation: 'ka + an  → kan',symbol: 'ံ' },
  { word: 'အား', pronunciation: 'karr + arr  → karr',symbol: 'ား' },
]

export default {
  data() {
    return {
      items: vowels,
      phrase1: "က + အ",
      phrase2: "က・",
      phrase3: "က",
      pronunciation: "ka + a  → ka",
      selected: 'အ',
      isOpen: false
    }
  },
  methods: {
    showPhrase: function(vowel) {
      this.phrase1 = "က + " + vowel.word
      this.phrase2 = "က・" + vowel.symbol
      this.phrase3 = "က" + vowel.symbol
      this.pronunciation = vowel.pronunciation
      this.selected = vowel.word
    }
  }
}
</script>