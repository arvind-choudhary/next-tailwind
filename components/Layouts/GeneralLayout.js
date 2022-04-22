import React from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import apiRequest from '../../axios/axios.init';

const GeneralLayout = ({ children }) => {

    apiRequest({ url: '/geye'})

    return (
        <div>
            <main>
                <div>
                    General
                </div>
                <ToastContainer />
                {React.isValidElement(children) && children}
            </main>
        </div>
    );
};


GeneralLayout.propTypes = {
    children: PropTypes.element
};


export default GeneralLayout;
