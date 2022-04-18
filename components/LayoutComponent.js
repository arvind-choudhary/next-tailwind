import React from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import apiRequest from '../axios/axios.init';

const Layoutcomponent = ({ children }) => {

    apiRequest({ url: '/geye'})

    return (
        <div>
            <main>
                <ToastContainer />
                {React.isValidElement(children) && children}
            </main>
        </div>
    );
};


Layoutcomponent.propTypes = {
    children: PropTypes.element
};


export default Layoutcomponent;
