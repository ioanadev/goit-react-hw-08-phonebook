
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { findeContact } from "../../redux/filtersSlice";


export const Filter = () => {

  const filter = useSelector(getFilter)
  const dispatch = useDispatch();

const handleFilterChange = e =>{
  dispatch(findeContact(e.target.value));
};

  return (
    <>
      <h3 className="title">Find contacts by name</h3>
      <input
        className="input input-search"
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};
