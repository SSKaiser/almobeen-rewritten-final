'use client'

import { SeverityInfo, vazirmatn } from "@/app/lib/shared"

export default function Page() {
    return (
        <>
            <div className={`${vazirmatn.className} py-20 text-7xl font-semibold flex flex-row justify-center`}>هام</div>
            <div className={`text-center bg-[#1f2024] mb-20px pt-0 pr-10 px-5 border-1 border-white/10 rounded-[3px] mx-5 ${vazirmatn.className}`} id="surahl">
                <p className="t"><SeverityInfo />حفظ الموقع</p>
                <p className='text-right font-[Vazirmatn] text-1.5xl my-5'>لا تنسى حفظ الموقع ومشاركته.</p>
                </div>
                
        </>
    )
}