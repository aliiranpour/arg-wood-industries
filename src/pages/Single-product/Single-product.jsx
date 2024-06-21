import React from 'react';
import { useParams } from 'react-router-dom';
import galleryData from '../gallary/galleryData';
import './Single-product.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const product = galleryData.find((item) => item.id.toString() === productId);

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className='product-details-container mt-4'>
            <h2 className='product-details-title pb-4 pe-4 mb-5'>{product.title}</h2>
            <div className='product-details-content d-flex justify-content-between'>
                <div className='product-image-container w-100'>
                    <img src={product.img} alt={product.title} className='rounded-3 w-100 me-4 ' />
                </div>
                <div className='product-description '>
                    <p>{product.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
