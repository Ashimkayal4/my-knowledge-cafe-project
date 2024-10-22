import PropTypes from "prop-types";
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 mt-3">
            <h1 className="flex justify-center text-2xl font-bold">Bookmarked Blog : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark=><Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object
}
export default Bookmarks;