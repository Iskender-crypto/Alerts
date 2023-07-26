<template>
  <div class="index mt-3 pt-6 sm:pt-8 border-top-2 sm:border-top-none border-round-2xl border-white-alpha-60">
    <Title title="Be the first who Find Out Phone Number Change"/>
    <div class="container--carousel mt-8">
      <div class="overflow-auto">
        <Swiper
            :slidesPerView="3"
            :slidesPerGroup="3"
            :grid="{
          rows: 2,
          fill: 'row'
        }"
            :breakpoints="{
      '0': {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      '576': {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      '992':{
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
      }
    }"
            :spaceBetween="10"
            :pagination="{
          clickable: true,
        }"
            :modules="modules"
        >
          <SwiperSlide v-for="(carouselCard, index) in carouselCards" :key="index">
            <div class="card  h-9rem sm:h-13rem flex align-items-center justify-content-center">
              <img :src="carouselCard.img" :alt="carouselCard.alt" class="w-9 sm:w-8">
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <Title title="Powerful monitor of your dealer information"/>
    <div class="mb-8">
      <div class="slide  mb-3">
        <div class="slide-wrapper slide-1">
          <div class="slide-row">
            <div v-for="card in cardLine1" class="slide-col">
              <div class="card h-full flex justify-content-center align-items-center">
              <img :src="card.img" class="w-7 sm:w-8" :alt="card.alt">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide  mb-3">
        <div class="slide-wrapper slide-2">
          <div class="slide-row">
            <div v-for="card in cardLine2" class="slide-col">
              <div class="card h-full flex justify-content-center align-items-center">
              <img :src="card.img" class="w-7 sm:w-8" :alt="card.alt">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide  mb-3">
        <div class="slide-wrapper slide-3">
          <div class="slide-row">
            <div v-for="card in cardLine3" class="slide-col">
              <div class="card h-full flex justify-content-center align-items-center">
              <img :src="card.img" class="w-7 sm:w-8" :alt="card.alt">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Title title="Start Free today" class="px-7" style="padding: 0px 400px !important;"/>
    <div class="container--input mb-8" >
      <div class="flex flex-column mb-5">
        <label for="username" class="input-lable">Username:</label>
        <input type="text" id="username" placeholder="Type your username" class="input">
      </div>
      <div class="flex flex-column">
        <label for="password" class="input-lable">Password:</label>
        <input type="password" id="password" placeholder="password" class="input">
      </div>
    </div>
    <div class="result-circule result-circule--create cursor-pointer"
      @click="router.push('/login/register')">
        Create account
      </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination } from 'swiper/modules';
import {useRouter} from "vue-router";
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/grid';
import {ref} from "vue";
const modules = [Grid, Pagination];
const cardLine1 = ref([
  {
    img: '/img/image%201.svg',
    alt: 'Image 201',
  },{
    img: '/img/MID.svg',
    alt: 'Image 202',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 203',
  },{
    img: '/img/image%204.svg',
    alt: 'Image 204',
  },{
    img: '/img/image%205.svg',
    alt: 'Image 205',
  },{
    img: '/img/image%206.svg',
    alt: 'Image 206',
  },{
    img: '/img/image%207.svg',
    alt: 'Image 207',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 208',
  },{
    img: '/img/image%205.svg',
    alt: 'Image 205',
  },{
    img: '/img/image%206.svg',
    alt: 'Image 206',
  },{
    img: '/img/image%207.svg',
    alt: 'Image 207',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 208',
  }
])
const cardLine2 = ref([
  {
    img: '/img/MID.svg',
    alt: 'Image 202',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 203',
  },{
    img: '/img/image%204.svg',
    alt: 'Image 204',
  },{
    img: '/img/image%207.svg',
    alt: 'Image 207',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 208',
  },{
    img: '/img/image%209.svg',
    alt: 'Image 209',
  },{
    img: '/img/image%201.svg',
    alt: 'Image 201',
  },{
    img: '/img/MID.svg',
    alt: 'Image 202',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 203',
  },{
    img: '/img/image%204.svg',
    alt: 'Image 204',
  },{
    img: '/img/image%205.svg',
    alt: 'Image 205',
  },{
    img: '/img/image%207.svg',
    alt: 'Image 207',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 208',
  },{
    img: '/img/image%209.svg',
    alt: 'Image 209',
  },{
    img: '/img/image%201.svg',
    alt: 'Image 201',
  },{
    img: '/img/MID.svg',
    alt: 'Image 202',
  }
])
const cardLine3 = ref([
  {
    img: '/img/image%206.svg',
    alt: 'Image 206',
  },{
    img: '/img/image%207.svg',
    alt: 'Image 207',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 208',
  },{
    img: '/img/image%209.svg',
    alt: 'Image 209',
  },
  {
    img: '/img/image%206.svg',
    alt: 'Image 206',
  },{
    img: '/img/image%207.svg',
    alt: 'Image 207',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 208',
  },{
    img: '/img/image%209.svg',
    alt: 'Image 209',
  },{
    img: '/img/image%208.svg',
    alt: 'Image 208',
  },{
    img: '/img/image%209.svg',
    alt: 'Image 209',
  },
  {
    img: '/img/image%206.svg',
    alt: 'Image 206',
  },{
    img: '/img/image%207.svg',
    alt: 'Image 207',
  }
])
const carouselCards = [
  {
    img: '/img/MID.svg',
    alt: 'Image 1',
  },
  {
    img: '/img/01%20-%20Logo%20(Traced).svg',
    alt: 'Image 1',
  },
  {
    img: '/img/16logo.svg',
    alt: 'Image 1',
  },
  {
    img: '/img/Kenny%20Ross.svg',
    alt: 'Image 2',
  },
  {
    img: '/img/KOB%20logo.svg',
    alt: 'Image 3',
  },
  {
    img: '/img/Main%20logo.svg',
    alt: 'Image 4',
  },
  {
    img: '/img/MID.svg',
    alt: 'Image 5',
  },
  {
    img: '/img/01%20-%20Logo%20(Traced).svg',
    alt: 'Image 6',
  },
  {
    img: '/img/16logo.svg',
    alt: 'Image 7',
  },
  {
    img: '/img/Kenny%20Ross.svg',
    alt: 'Image 8',
  },
  {
    img: '/img/KOB%20logo.svg',
    alt: 'Image 9',
  },
  {
    img: '/img/Main%20logo.svg',
    alt: 'Image 10',
  },
  {
    img: '/img/MID.svg',
    alt: 'Image 11',
  },
  {
    img: '/img/01%20-%20Logo%20(Traced).svg',
    alt: 'Image 12',
  },
  {
    img: '/img/16logo.svg',
    alt: 'Image 13',
  },
  {
    img: '/img/Kenny%20Ross.svg',
    alt: 'Image 14',
  },
  {
    img: '/img/KOB%20logo.svg',
    alt: 'Image 15',
  },
  {
    img: '/img/Main%20logo.svg',
    alt: 'Image 16',
  },
  {
    img: '/img/MID.svg',
    alt: 'Image 17',
  },
  {
    img: '/img/01%20-%20Logo%20(Traced).svg',
    alt: 'Image 18',
  },
  {
    img: '/img/16logo.svg',
    alt: 'Image 19',
  },
  {
    img: '/img/Kenny%20Ross.svg',
    alt: 'Image 20',
  },
  {
    img: '/img/KOB%20logo.svg',
    alt: 'Image 21',
  },
  {
    img: '/img/Main%20logo.svg',
    alt: 'Image 22',
  }
  // ... (other carousel cards with unique images and alt text)
];
const router = useRouter();
</script>