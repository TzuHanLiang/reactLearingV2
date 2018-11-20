const aux = (props) => props.children;

export default aux;

// this component might look useless because all it does
// is returning what's passed between the opening and 
// closing tag. 

// But, it's actually pretty cool because sometimes you
// don't want to introduce a seperate html element like 
// a wrapping div. if we don't need for styling reasons,
// it can even destroy your styling if you're using flexbox
// or sth like that.


// If your project uses React 16.2, you can now use a built-in "Aux" component - a so called fragment.

// It's actually not called Aux  but you simply use <>  - an empty JSX tag.

// So the following code

// <Aux>
//     <h1>First Element</h1>
//     <h1>Second Element</h1>
// </Aux>
// becomes

// <>
//     <h1>First Element</h1>
//     <h1>Second Element</h1>
// </>
// Behind the scenes, it does the same our Aux  component did.