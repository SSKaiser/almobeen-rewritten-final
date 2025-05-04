'use client'

import { ajza } from '../../lib/surat'
import { FileListFill, Juz, vazirmatn } from '../../lib/shared';
import { surahInfos } from '../../lib/hafs';

const listJuz = Object.keys(ajza).map(f => <Juz key={f} id={f}/>)

export default function Page() {
    return (
        <>
            <div className={`${vazirmatn.className} py-20 text-7xl font-semibold flex flex-row justify-center`}>الأجزاء</div>
            <div className={`bg-[#1f2024] text-center mb-20px pt-0 pr-10 pl-5 border-1 mx-5  border-white/10 rounded-[3px] text-[2em] hafs`} id="surahl">
                <p className={`t ${vazirmatn.className}`}><FileListFill />السور</p>
                <div className='inline-grid px-fit lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-y-2'>
                {listJuz}
                </div>
                
            </div>
        </>
    )
}
