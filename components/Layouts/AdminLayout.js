import React from 'react';
import PropTypes from 'prop-types';


const Adminlayout = ({ children }) => {
    return (
        <div>
            <h1>Admin Page</h1>
            {children}
        </div>
    );
};


Adminlayout.propTypes = {

};


export default Adminlayout;
