import React from 'react'

// this is not a functional component, it's just a 
// normal javascript function which expects two args 
// which then returns a function which qualifies as a 
// functional component.
const withClasss = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClasss;