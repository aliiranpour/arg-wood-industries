import { Route, Routes } from "react-router-dom";
import Gallary from "../pages/gallary/Gallary";
import About_us from "../pages/about us/About us";
import Call_us from "../pages/call us/Call_us";
import SharedLayout from "../components/Shared_layout/Sared_layout";
import Home from "../pages/home/Home";
import ProductDetails from "../pages/Single-product/Single-product";


const Webroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Gallary />} />
                <Route path="products/:productId" element={<ProductDetails />} /> 
                <Route path="about-us" element={<About_us />} />
                <Route path="call-us" element={<Call_us />} />
            </Route>
            <Route path="*" element={<div>This page does not exist.</div>} />
        </Routes>
    );
};

export default Webroutes;
