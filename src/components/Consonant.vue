<template>
  <div id="consonant" class="mt-16 sm:mt-0">

    <!-- Body -->
    <div class="px-5 mx-auto">
      <div>
        <div class="mt-5 text-center">
          <p class=" text-gray-800 text-xs sm:text-lg">ミャンマー語黒板</p>
          <p class=" text-gray-800 text-md sm:text-4xl font-bold">ミャンマー子音３３アルファペット</p>
        </div>

        <!-- Display Block -->
        <div class=" mt-6 py-2 sm:mx-auto sm:w-3/4 text-center bg-gray-800 rounded">
          <div class=" text-gray-200 text-xl sm:text-3xl"> {{ phrase }} </div>
          <div class=" text-gray-200 text-xs sm:text-lg mt-3"> 発音 </div>
          <div class=" text-gray-200 text-lg sm:text-xl"> {{ pronunciation }} </div>
        </div>
      </div>

      <!-- Consonant Table -->
      <div class="mt-4 mx-auto sm:w-3/4">
        <div class="pb-12 flex flex-wrap justify-center -mx-2">
          <div class="w-1/5 px-1" v-for="item in items" :key="item.letter">
            <div @click="showPhrase(item)" :class="[item.color, {'bg-gray-200': selected == item.letter} ]"
              class="py-2 text-4xl text-center sm:text-6xl font-semibold border-gray-400 border hover:bg-gray-100"> {{ item.letter }} </div>
          </div>
        </div>
      </div>

      <!-- Learn More -->
      <div class="fixed bottom-0 inset-x-0 sm:hidden">
        <div v-if="isOpen" class="px-8">
          <ul>
            <a @click="isOpen = !isOpen" class="p-3 border border-gray-400 block bg-gray-700 text-gray-100 rounded-t-lg" href="#">子音アルファベット書き方</a>
            <a @click="isOpen = !isOpen" class="p-3 border border-gray-400 block bg-gray-700 text-gray-100" href="#">その他１</a>
            <a @click="isOpen = !isOpen" class="p-3 border border-gray-400 block bg-gray-700 text-gray-100" href="#">その他２</a>
          </ul>
        </div>
        <div class="px-6 py-1 bg-gray-100 leading-3">
          <button @click="isOpen = !isOpen" class="p-3 rounded-lg w-full bg-gray-700 text-gray-100" type="button">子音アルファベットについてもっと勉強</button>
        </div>
      </div>

    </div>
  </div>
</template>


<script>

const consonants = [
  { letter: 'က', phrase:'က - ကလေးငယ် ချစ်စဖွယ်', pronunciation:'ka_gyi - ka layy nge chit sa phwel', color: 'text-yellow-500' },
  { letter: 'ခ', phrase:'ခ - ခရေကုံး မလေးပြုံ', pronunciation:'kha_kwayy - kha yay kone ma layy pyone', color: 'text-green-500' },
  { letter: 'ဂ', phrase:'ဂ - ဂဏန်းသင် ပြုံးရွှင်ရွှင်', pronunciation:'ga_nge - gan nann thin pyone shwin shwin', color: 'text-gray-500' },
  { letter: 'ဃ', phrase:'ဃ - ', pronunciation:'ga_gyi - ', color: 'text-red-500' },
  { letter: 'င', phrase:'င - ငချိတ်ပေါင်း စားလို့ကောင်း', pronunciation:'nga -blue nga chate paung sarr lo kaung', color: 'text-blue-500' },
  { letter: 'စ', phrase:'စ - စခန်းသာ တောင်တန်းပြာ', pronunciation:'sa_lone - sa khann thar taung tan pyar', color: 'text-yellow-500' },
  { letter: 'ဆ', phrase:'ဆ - ဆရာမ ရိုသေကြ', pronunciation:'sa_lane - sa yar ma yo thay gya', color: 'text-green-500' },
  { letter: 'ဇ', phrase:'ဇ - ဇလပ်ဖြူသင်းကြူကြူ', pronunciation:'za_gwel - za lat phyu thinn kyu kyu', color: 'text-gray-500' },
  { letter: 'ဈ', phrase:'ဈ - ', pronunciation:'za_myin_zwe - ', color: 'text-red-500' },
  { letter: 'ည', phrase:'ည - ညနေခင်း ရေခပ်ဆင်း', pronunciation:'nya - nya nayblue khinn yay khat sinn', color: 'text-blue-500' },
  { letter: 'ဋ', phrase:'ဋ - ', pronunciation:'ta_talin_jate - ', color: 'text-yellow-500' },
  { letter: 'ဌ', phrase:'ဌ - ', pronunciation:'hta_win_be - ', color: 'text-green-500' },
  { letter: 'ဍ', phrase:'ဍ - ', pronunciation:'da_yin_gaute -', color: 'text-gray-500' },
  { letter: 'ဎ', phrase:'ဎ - ', pronunciation:'da_yin_mote -', color: 'text-red-500' },
  { letter: 'ဏ', phrase:'ဏ - ', pronunciation:'na_gyi -', color: 'text-blue-500' },
  { letter: 'တ', phrase:'တ - တမာပင် ရွာအဝင်', pronunciation:'ta_win_pu - ta mar pin ywar a win', color: 'text-yellow-500' },
  { letter: 'ထ', phrase:'ထ - ထမင်းပွဲ လက်ဆုံနွှဲ', pronunciation:'hta_sin_htoo - hta minn pwe lat sone hnwel', color: 'text-green-500' },
  { letter: 'ဒ', phrase:'ဒ - ဒရယ်ရုံ သားမျိုးစုံ', pronunciation:'da_dwayy - da yal yone tharr myo sone', color: 'text-gray-500' },
  { letter: 'ဓ', phrase:'ဓ - ဓနိတန်း ပင်လယ်ကမ်း', pronunciation:'da_wat_chite - da ni taw', color: 'text-red-500' },
  { letter: 'န', phrase:'န - နဖူးပြင် နံ့သာတင်', pronunciation:'na_nge - ', color: 'text-blue-500' },
  { letter: 'ပ', phrase:'ပ - ပလွေမှုတ် ကိုဖိုးတုတ်', pronunciation:'pa_saute - ', color: 'text-yellow-500' },
  { letter: 'ဖ', phrase:'ဖ - ဖရုံယို အလွန်ချို', pronunciation:'pha_wa_htoke - pha yone yo a lon cho', color: 'text-green-500' },
  { letter: 'ဗ', phrase:'ဗ - ဗလကြီး ဆင်ပြောင်စီး', pronunciation:'ba_lat_chite - ba la gyii sin pyaung see', color: 'text-gray-500' },
  { letter: 'ဘ', phrase:'ဘ - ဘဘိုးအို စီးလိုကြို', pronunciation:'ba_gone - ', color: 'text-red-500' },
  { letter: 'မ', phrase:'မ - မမလေး ဝလုံးရေး', pronunciation:'ma - ma ma layy wa loneblue yayy', color: 'text-blue-500' },
  { letter: 'ယ', phrase:'ယ - ယမင်းခင် ကကြိုးဆင်', pronunciation:'ya_pa_lat - ya minn khin ka kyo sin', color: 'text-yellow-500' },
  { letter: 'ရ', phrase:'ရ - ရထားကြီး ပျော်ပျော်စီး', pronunciation:'ya_gaute - ya htarr gyi pyaw pyaw see', color: 'text-green-500' },
  { letter: 'လ', phrase:'လ - လဝါဝါ ထိန်ထိန်သာ', pronunciation:'la - la war war htain htain thar', color: 'text-gray-500' },
  { letter: 'ဝ', phrase:'ဝ - ဝတုတ်တုတ် ဖိုး၀ရုပ်', pronunciation:'wa - ', color: 'text-red-500' },
  { letter: 'သ', phrase:'သ - သပြေညို အောင်ပွဲကြို', pronunciation:'tha - tha pyay nyo aungblue pwe kyo', color: 'text-blue-500' },
  { letter: 'ဟ', phrase:'ဟ - ဟ ဟာ ဟား ရယ်လိုက်ရ', pronunciation:'ha - ha ha ha yee lite ya', color: 'text-green-500' },
  { letter: 'ဠ', phrase:'ဠ - ', pronunciation:'la_gyi - ', color: 'text-gray-500' },
  { letter: 'အ', phrase:'အ - အမိမြေ ဒို့တိုင်းပြည် ငါတို့ချစ်တဲ့ မြေ', pronunciation:'a - a mi myay do tine pyay ngar do chit te myay', color: 'text-red-500' },
]

export default {
  data() {
    return {
      items: consonants,
      phrase: "က - ကလေးငယ် ချစ်စဖွယ်",
      pronunciation: "ka_gyi - ka layy nge chit sa phwel",
      selected: "က",
      isOpen: false
    }
  },
  methods: {
    showPhrase: function(consonant) {
      this.phrase = consonant.phrase
      this.pronunciation = consonant.pronunciation
      this.selected = consonant.letter
    }
  }
}
</script>