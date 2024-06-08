import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        <Image
          src="/logo.svg"
          width={236}
          height={40}
          alt="Techionary Logo"
          unoptimized
        />
      </header>
    </>
  )
}
