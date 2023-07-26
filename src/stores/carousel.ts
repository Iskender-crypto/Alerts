import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {ICarouselCard} from "@/interfaces/icarousel";

export const useCarouselStore = defineStore('carousel', () => {
    // const devideToRow = (arr: ICarouselCard[], rowNum:number)=>{
    //     const rowLength = Math.floor(arr.length/3);
    //     if (rowNum==1){
    //         let resArr = arr.slice(0,rowLength) as ICarouselCard[];
    //         return resArr
    //     }else if(rowNum==2){
    //         let resArr = arr.slice(rowLength,rowLength*2);
    //         return resArr
    //     }else {
    //         let resArr = arr.slice(rowLength*2,rowLength);
    //         return resArr
    //     }
    // }

    return {  }
})
