import React, { useState } from 'react';
import './FilterableGalleryStyled.css'; // Import the CSS file
import galleryData from '../../pages/gallary/galleryData';

const SearchableFilterableGallery = () => {
    const [galleryItems, setGalleryItems] = useState(galleryData);
    const [searchTerm, setSearchTerm] = useState('');
    const [isActive, setIsActive] = useState(0);

    const uniqueList = [
        'all',
        ...new Set(
            galleryData.map((currValue) => {
                return currValue.category;
            })
        )
    ];

    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        filterAndSearchItems(term, isActive);
    };

    const filterAndSearchItems = (searchTerm, activeIndex) => {
        const category = uniqueList[activeIndex];
        let filteredData = galleryData;

        if (category !== 'all') {
            filteredData = galleryData.filter((currValue) => currValue.category === category);
        }

        if (searchTerm) {
            filteredData = filteredData.filter((currValue) => currValue.title.toLowerCase().includes(searchTerm));
        }

        setGalleryItems(filteredData);
    };

    const filterItem = (category, index) => {
        setIsActive(index);
        filterAndSearchItems(searchTerm, index);
    };

    return (
        <div className="container">
            <div className="search-field">
                <input
                    type="search"
                    onChange={handleSearchChange}
                />
            </div>

            <ul className="filter-list">
                {uniqueList.map((currValue, index) => {
                    return (
                        <li
                            key={index}
                            className={isActive === index ? 'active' : ''}
                            onClick={() => filterItem(currValue, index)}
                        >
                            {currValue}
                        </li>
                    );
                })}
            </ul>

            {galleryItems.length === 0 ? (
                <h2>Sorry, no data found.</h2>
            ) : (
                <div className="gallery-wrapper">
                    {galleryItems.map((currValue) => {
                        const { id, img, title } = currValue;
                        return (
                            <div className='gallery-item mt-3' key={id}>
                                <div>
                                    <img src={img} alt='gallery-img' className='gallery-item-image' />
                                </div>
                                <div className='gallery-item-info'>
                                    <p className='d-flex justify-content-center mt-2'>{title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchableFilterableGallery;
