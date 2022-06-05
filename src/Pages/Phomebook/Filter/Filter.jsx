export const Filter = ({filter,filterChange}) => {

    return (
        <label>Find contacts by me
            <input  name="filter"
                        value={filter}
                        onChange={filterChange}>
            </input>
        </label>
    );
}

;