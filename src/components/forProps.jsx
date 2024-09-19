import propTypes from 'prop-types'
function ForProps(props){

    return(
    <p>Hello {props.name}, your age is "{props.age}" </p>

    );

}

ForProps.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
}
ForProps.defaultProps = {
    name: "Guest",
    age: 0.
}
export default ForProps