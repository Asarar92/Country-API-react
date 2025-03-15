
import { useState } from 'react'
import Search from './Search'
import FilterOptions from './FilterOptions'
import CountryList from './CountryList'

export default function Home() {
  const [query, setQuery] = useState('')
  return (
    <main>
      <div className="search-filter-container">
        <Search setQuery={setQuery} />
        <FilterOptions />
      </div>
      {query === 'unmount' ? '' : <CountryList query={query} />}
    </main>
  )
}
