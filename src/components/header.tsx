import useDebouncedCallback from '@/hooks/useDebouncedCallback'
import useStore from '@/store'
import Image from 'next/image'
import { memo } from 'react'
import Input from './input'

// wrapped in React.memo to prevent logo re-renders
const HeaderLogo = memo(() => (
  <Image src="/logo.svg" width={236} height={40} alt="Techionary Logo" priority unoptimized />
))
HeaderLogo.displayName = 'HeaderLogo'

// wrapped in React.memo to prevent input re-renders
const SearchInput = memo(() => {
  const setQuery = useStore((state) => state.setQuery)
  const changeHandler = useDebouncedCallback((ev: { target: { value: string | null } }) => {
    setQuery(ev.target.value)
  }, 750)

  return <Input onChange={changeHandler} placeholder="ابحث عن مصطلح..." aria-label="ابحث عن مصطلح" className="w-full sm:w-72" />
})
SearchInput.displayName = 'SearchInput'

const Header = memo(() => (
  <header className="flex flex-col gap-5 border-b border-[#D7DCE2] pb-8 sm:flex-row sm:items-center sm:justify-between">
    <HeaderLogo />
    <SearchInput />
  </header>
))
Header.displayName = 'Header'
export default Header
