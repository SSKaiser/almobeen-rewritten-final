'use client'

import { hafs } from "@/app/lib/hafs"
import { Basmala, toAr } from "@/app/lib/shared";
import React from "react";


export default function PageJ({ params }) {
    const {juz} = React.use<any>(params);
    let pages = []
    let BasmalaAt = []
    
    let firstPage = hafs.find(f=>f.jozz == juz)?.page
    for (let i of hafs.filter(f => f.jozz == juz)) {
        let pageIndex = i.page - firstPage
        let firstAyahOfPage = hafs.find(f=>f.page == i.page)?.id
        let indexInPage = i.id - firstAyahOfPage
        if (pages[pageIndex] == undefined) {
            pages[pageIndex] = [i.aya_text]
        } else {
            pages[i.page - firstPage].push(i.aya_text)
        }
        if (i.aya_no == 1 && i.sura_no !== 9 && i.sura_no !== 1) {
            BasmalaAt.push([pageIndex, indexInPage, i.sura_no])
        }
        
        
    }
    console.log(BasmalaAt);
    let render = [];
    for (const [index, page] of pages.entries()) {
        let ayat = page.map((f, i) => (<>
                {BasmalaAt.filter(f => f[0] == index && f[1] == i).length>0 ? <>
                    <p className='text-center mt-5 text-5xl font-[Hafs] mb-4'
                    >سورة {hafs.find(f => f.sura_no==BasmalaAt.find(f => f[0] == index && f[1] == i)[2])?.sura_name_ar}</p>
                    <Basmala />
                </> : <></>}
                    <p className='hafs QuranText text-[2.2em]'>
                        
                        {f}
                    </p></>))
       
            
        
        
        render.push(<div key={index} className='text-center sm:text-justify mx-5 mt-[50px] bg-[#1f2024] mb-[20px] rounded-[3px] p-5 border-1 border-white/10 page max-w-[50rem] mx-auto'>{ayat}<p className='pageNum'></p><p className='pageNum'>{toAr(firstPage+index)}</p></div>)
    }
    return (render)
}