import React from 'react';

const SearchBox = ({ searchChange, displayChange, displayNone }) => {
    return (
        <div className='pa1'>
            <input
                className='ba pa2 b--light-gray'
                type='search'
                placeholder='Traži...'
                onChange={searchChange}
                onFocus={displayChange}
                onBlur={displayNone}
            />
        </div>
    );
}

export default SearchBox;