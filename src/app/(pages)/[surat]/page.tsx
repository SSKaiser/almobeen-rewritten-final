'use client'

import { hafs } from "@/app/lib/hafs"
import { Basmala, toAr } from "@/app/lib/shared";
import React from "react";

export default function PageS({ params }) {
    const { surat } = React.use<any>(params);
    let pages = []
    let firstPage = hafs.find(f=>f.sura_no.toString() == surat)?.page
    for (const i of hafs.filter(f => f.sura_no.toString() == surat)) {
        if (pages[i.page - firstPage] === undefined) {
            pages[i.page - firstPage] = [i.aya_text]
        } else {
            pages[i.page - firstPage].push(i.aya_text)
        }
        
        
    }
    let render = [];
    for (const [index, page] of pages.entries()) {
        let ayat = page.map(f => <p key={`${f}`} className='hafs text-[2.2em] QuranText'>{f}</p>)
        render.push(<>
        
        <div className='text-center sm:text-justify  bg-[#1f2024] mb-[20px] rounded-[3px] p-5 border-1 border-white/10 page max-w-[50rem] mx-auto text-[1.2em]'>
        {index===0?<p className='text-center text-5xl font-[Hafs] mb-4'>سورة {hafs.find(f => f.sura_no==surat)?.sura_name_ar}</p>:""}
        {surat != 1 && surat != 9 && index == 0 ?<Basmala /> : <></>}{ayat}<p className='pageNum'></p><p className='pageNum'>{toAr(firstPage+index)}</p></div></>)
    }
    return (<>
    <div className="pt-[50px]">
        {render}
    </div>

    </>)
}