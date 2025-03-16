
import { useState ,useContext} from 'react'
import Search from './Search'
import FilterOptions from './FilterOptions'
import CountryList from './CountryList'
import { ThemeContext } from '../contexts/ThemeContext'


export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useContext(ThemeContext)

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
