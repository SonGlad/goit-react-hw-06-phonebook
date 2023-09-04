import PropTypes from 'prop-types';
import { FilterStyle } from "./Filter.styled";



export const Filter = ({filter, onFilterChange}) => {
    return(
        <FilterStyle>
            <label className='label' htmlFor="filter">
                <input className="input"
                    type="text"
                    name="filter"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder=''
                    value={filter}
                    onChange={onFilterChange}></input>
            </label>
        </FilterStyle>
    )
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};