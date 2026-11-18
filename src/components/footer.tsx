import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 border-t border-[#D7DCE2] py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-xl leading-7">
        قال رسول الله ﷺ «من سَلَكَ طريقاً يلتمس به علماً؛ سهل الله به طريقاً إلى الجنة»
      </p>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/6km/arabic-tech-glossary"
        className="font-medium text-[#0F172A] transition hover:underline"
      >
        تحرير الصفحة على GitHub
      </Link>
    </footer>
  )
}
