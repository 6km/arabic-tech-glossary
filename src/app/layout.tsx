import type { Metadata } from 'next'
import { Noto_Naskh_Arabic } from 'next/font/google'
import './globals.css'

const NotoNaskhArabic = Noto_Naskh_Arabic({ subsets: ['arabic', 'latin'], weight: 'variable', preload: true })

export const metadata: Metadata = {
  title: 'Techionary',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={NotoNaskhArabic.className}>
        <main className="mx-auto mt-24 max-w-[840px]">{children}</main>
      </body>
    </html>
  )
}
