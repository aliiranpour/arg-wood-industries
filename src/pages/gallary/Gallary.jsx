import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './FilterableGalleryStyled.css'; 
import galleryData from '../../pages/gallary/galleryData';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchableFilterableGallery = () => {
  const location = useLocation();
  const initialCategory = location.state?.selectedCategory || 'همه محصولات';

  const [galleryItems, setGalleryItems] = useState(galleryData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const uniqueList = [
    'همه محصولات',
    ...new Set(
      galleryData.map((currValue) => currValue.category)
    )
  ];

  useEffect(() => {
    const categoryIndex = uniqueList.indexOf(initialCategory);
    setIsActive(categoryIndex);
    filterAndSearchItems(searchTerm, categoryIndex);
  }, [initialCategory]);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterAndSearchItems(term, isActive);
  };

  const filterAndSearchItems = (searchTerm, activeIndex) => {
    const category = uniqueList[activeIndex];
    let filteredData = galleryData;

    if (category !== 'همه محصولات') {
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

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <div className="filter-section">
            <div className="search-field">
              <input
                type="search"
                placeholder="جست و جو ..."
                onChange={handleSearchChange}
              />
            </div>


            <ul className="filter-list">
              {uniqueList.map((currValue, index) => (
                <li
                  key={index}
                  className={isActive === index ? 'active' : ''}
                  onClick={() => filterItem(currValue, index)}
                >
                  {currValue}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-9">
            <div className='d-md-none border-bottom pb-3'>
                <Button className=' w-50 rounded-3' variant='danger' onClick={handleModalShow}>فیلتر</Button>
            </div>
          {galleryItems.length === 0 ? (
            <h2>متاسفم هیچ محصولی یافت نشد.</h2>
          ) : (
            <div className="gallery-wrapper">
              {galleryItems.map((currValue) => {
                const { id, img, title } = currValue;
                return (
                  <Link to={`/products/${id}`} className='gallery-item mt-3 mx-3 text-decoration-none text-black' key={id}>
                    <div>
                      <img src={img} alt='gallery-img' className='gallery-item-image' />
                    </div>
                    <div className='gallery-item-info mt-4'>
                      <p className='d-flex justify-content-center mt-2'>{title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Modal show={showModal} onHide={handleModalClose} dir='rtl'>
        <Modal.Header className="justify-content-between">
            <div>
                <Modal.Title>فیلتر محصولات</Modal.Title>
            </div>
            <div>
                <Button variant="close" aria-label="Close" onClick={handleModalClose}></Button>
            </div>
        </Modal.Header>
        <Modal.Body>
          <div className="search-field">
            <input
              type="search"
              placeholder="جست و جو ..."
              onChange={handleSearchChange}
            />
          </div>

          <ul className="filter-list">
            {uniqueList.map((currValue, index) => (
              <li
                key={index}
                className={isActive === index ? 'active' : ''}
                onClick={() => filterItem(currValue, index)}
              >
                {currValue}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            انصراف
          </Button>
          <Button variant="danger" onClick={handleModalClose}>
            نمایش محصولات
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchableFilterableGallery;
