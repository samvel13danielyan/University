import React, { useState } from 'react';
import './css.css'; // Import your CSS file
import search from "../assets/search.svg";

function SearchEvents() {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="frame">
            <div className="event-calendar-title">
                Իրադարձությունների օրացույց
            </div>
            <div className="search-box">
                <img src={search} alt="Logo" />
                <input
                    type="text"
                    className="search-input"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Որոնեք իրադարձություններ, հոդվածներ, կոնֆերանսներ"
                />
            </div>
        </div>
    );
}

export default SearchEvents;
