import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBoxContainer}>
      <p className={css.labelSearch}>Find contacts by name</p>
      <input
        type="text"
        className={css.searchInput}
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
