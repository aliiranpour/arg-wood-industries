import React from 'react';
import { Outlet } from 'react-router-dom';
import StickyHeader from '../sticky-header/StickyHeader/StickyHeader';
import Footer from '../footer/Footer';
import './Shared_layout.style.css'

const NewSharedLayout = () => {
  return (
    <div className="new-shared-layout">
      <StickyHeader />
      <div className="new-content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default NewSharedLayout;
