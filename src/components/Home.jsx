
import { useState } from 'react'
import Search from './Search'
import FilterOptions from './FilterOptions'
import CountryList from './CountryList'
import { useOutletContext } from 'react-router-dom'


export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useOutletContext()

  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <Search setQuery={setQuery} />
        <FilterOptions />
      </div>
      {query === 'unmount' ? '' : <CountryList query={query} />}
    </main>
  )
}
