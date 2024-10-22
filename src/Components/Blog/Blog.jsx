import PropTypes from 'prop-types';
import {FaRegBookmark} from 'react-icons/fa';

const Blog = ({ blog , handleBookMark }) => {
   const { author_img ,title,cover,author,posted_date,reading_time ,hashtags} = blog;
    return (
        <div className="border-b p-2 m-2 rounded">
            <img className='rounded-sm w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className="md:flex md:justify-between items-center mt-4 mb-4">
                <div className="flex items-center gap-2">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date }</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleBookMark(blog)} className='ml-2 text-2xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>

            <p className='mt-2'> {
                hashtags.map((hash,idx) => <span key={idx} className='px-1'><a href=""> # {hash }</a></span>)
            }</p>

            <button className='border p-1 text-violet-700'>Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookMark:PropTypes.function
}
export default Blog;