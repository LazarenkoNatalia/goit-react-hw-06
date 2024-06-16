import stylSearch from "./SearchBox.module.css"

export default function SearchBox({value, onSearch}) {
  return (
      <div>
          <p className={stylSearch.text}>Find contacts by name</p>
          <input type="text" className={stylSearch.text} value={value} onChange={(event) => onSearch(event.target.value)} />
    </div>
  )
}

