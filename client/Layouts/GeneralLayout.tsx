import React from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import apiRequest from '../../common/axios/axios.init';
import NavBar from '../components/reusable/Nav/NavBar';

const GeneralLayout = ({ children }) => {
    return (
        <>
            <NavBar  />
            <ToastContainer />
            {React.isValidElement(children) && children}
        </>
    );
};


GeneralLayout.propTypes = {
    children: PropTypes.element
};


export default GeneralLayout;
