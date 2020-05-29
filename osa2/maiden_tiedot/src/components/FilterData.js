const FilterData = (data, term) => {
    const filtered = data.filter(element => {
        return element.name.includes(term)
    })
    return filtered
}

export default FilterData