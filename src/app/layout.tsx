import type { Metadata } from 'next'
import { Noto_Naskh_Arabic } from 'next/font/google'
import './globals.css'

const NotoNaskhArabic = Noto_Naskh_Arabic({ subsets: ['arabic', 'latin'], weight: 'variable', preload: true })

export const metadata: Metadata = {
  title: 'Arabic Tech Glossary - معجم المصطلحات التقنية',
  description: 'معجم تقني يحتوي على قائمة بالمصطلحات الهامة التي تتعلق بالتقنية والبرمجة',
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
