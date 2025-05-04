'use client'

import Link from "next/link"
import { vazirmatn, NavElem } from "./shared"
import { useState } from "react";
import { usePathname } from "next/navigation";

const elems: NavElem[] = [
    {
        'name': 'السور',
        'id': 0,
        'slug': ''
    },
    {
        'name': 'الأجزاء',
        'id': 1,
        'slug': 'j'
    },
    {
        'name': 'هام',
        'id': 2,
        'slug': 'i'
    }
]

export default function Navbar() {
    
    const pathname = usePathname();
    return (<div className='h-15 flex bg-[#0f0f0f] justify-center'>
        {elems.map(f => 
            <Elem elem={f} key={f.id} pathname={pathname}/>)
        }
    </div>)
}


function Elem({ elem, pathname }: { elem: NavElem, pathname: string }) {
    return <Link href={`/${elem.slug}`}><span className={`px-4 font-extrabold leading-14.5 py-[18px] ${vazirmatn.className} ${pathname.slice(1) == elem.slug || (+pathname.slice(1) <= 114 && elem.slug=='') || (pathname.startsWith('/j') && elem.slug=='j') ? "bg-[#fe4641]" : ""}`}>{elem.name}</span></Link>
}