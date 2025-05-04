import Navbar from "./lib/navbar";
import './globals.css'
 export default function layout({ children }: {children: React.ReactNode} ) {
    return (
        <html lang="en">
            <body dir="rtl" className="bg-[#161616]">
                <div className="body">
                    <Navbar/>
                    <div className="px-5">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
 }