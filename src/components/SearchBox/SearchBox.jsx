import { useDispatch, useSelector } from 'react-redux'
import css from './SearchBox.module.css'
import {changeFilter} from '../../redux/filtersSlice'


export default function SearchBox() {

    const dispatch = useDispatch()
    const value = useSelector((state) => state.filter.name)

    const handleSearch = (e) => {
        dispatch(changeFilter(e.target.value))
    }

    return (
        <div className={css.searchBox}>
            <label className={css.searchLabel} htmlFor="searchInput">Find contacts by name</label>
            <input className={css.searchInput} type="text" name="searchInput" id="searchInput"
            value={value} onChange={handleSearch}
            />
        </div>
)
}