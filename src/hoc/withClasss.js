import React from 'react'

// this is not a functional component, it's just a 
// normal javascript function which expects two args 
// which then returns a function which qualifies as a 
// functional component.
const withClasss = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
         {/* both this.props.title (in App.js) and the props in person.js
        would expect are missing because these components are
        now wrapped inside this WrappedComponent */}
            <WrappedComponent />

        {/* keep in mind that props are just an object of
        key and value pairs, we can output some dynamic
        content on this WrappedComponent with {...props}.
        it simply means pass on the props as you get them, */}
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClasss;

