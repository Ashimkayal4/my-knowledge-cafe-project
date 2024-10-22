import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h1>{bookmark.title }</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;