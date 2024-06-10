import useStore from '@/store'
import Image from 'next/image'
import { ChangeEventHandler, memo, useCallback } from 'react'
import Input from './input'

// wrapped in React.memo to prevent logo re-renders
const HeaderLogo = memo(() => (
  <Image src="/logo.svg" width={236} height={40} alt="Techionary Logo" priority unoptimized />
))
HeaderLogo.displayName = 'HeaderLogo'

// wrapped in React.memo to prevent input re-renders
const SearchInput = memo(() => {
  const setQuery = useStore((state) => state.setQuery)
  const handleQueryChange = useCallback<ChangeEventHandler<HTMLInputElement>>((ev) => {
    setQuery(ev.target.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Input onChange={handleQueryChange} placeholder="ابحث عن مصطلح..." />
})
SearchInput.displayName = 'SearchInput'

const Header = memo(() => (
  <header className="justify flex items-center justify-between border-b border-b-[#D8DDE5] pb-8">
    <HeaderLogo />
    <SearchInput />
  </header>
))
Header.displayName = 'Header'
export default Header
