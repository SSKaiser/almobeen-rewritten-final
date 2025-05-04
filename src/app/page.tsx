'use client'

import { surat } from './lib/surat'
import { BookOpen20Solid, Surah, vazirmatn } from './lib/shared';
import { surahInfos } from './lib/hafs';

const listSurahName = surahInfos.map(f => f[0] as string)
const listSurah = surat.map(f => <Surah key={f.id} id={f.id as number} name={listSurahName[f.id - 1]} />)

export default function Page() {
    return (
        <>
            <div className={`${vazirmatn.className} py-20 text-7xl font-semibold flex flex-row justify-center`}>السور</div>
            <div className={`block  bg-[#1f2024] mb-20px pt-0 mx-5 pr-10 px-5 border-1 border-white/10 rounded-[3px] text-[2em] hafs`} id="surahl">
                <p className={`t ${vazirmatn.className}`}><BookOpen20Solid />السور</p>
                <div className='flex flex-row flex-wrap lg:w-10/12 mx-auto justify-center'>
                {listSurah}
                </div>
                
            </div>
        </>
    )
}
