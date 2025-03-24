import React from 'react'

const FilterOptions = ({setQuery}) => {
    return (
        <div>
    <select className="filter-by-region" onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                <option hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default FilterOptions