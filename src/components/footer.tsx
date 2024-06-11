import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-t-[#D8DDE5] py-8">
      <h3 className="font-bold">
        قال رسول الله ﷺ &rdquo;من سَلَكَ طريقاً يلتمس به علماً؛ سهل الله به طريقاً إلى الجنة&ldquo;
      </h3>

      <Link
        target="_blank"
        href="https://github.com/6km/arabic-tech-glossary"
        className="font-medium text-[#0C87FA] hover:underline"
      >
        تحرير الصفحة على GitHub
      </Link>
    </footer>
  )
}
