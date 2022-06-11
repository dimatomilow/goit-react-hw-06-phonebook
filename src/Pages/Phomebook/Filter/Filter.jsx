import { useDispatch } from 'react-redux';
import {updateFilter} from '../../../Component/redux/contactsSlice '

export const Filter = () => {
    const dispatch = useDispatch()


 const filterChange = (e) => {
     dispatch(updateFilter(e.currentTarget.value))
    };

    return (
        <label>Find contacts by me
            <input  name="filter"
                onChange={filterChange}
                placeholder="Input name to find">

            </input>
        </label>
    );
}

;