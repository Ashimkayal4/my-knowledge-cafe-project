import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
   const { author_img ,title,cover,author,posted_date,reading_time ,hashtags} = blog;
    return (
        <div className="border-2 p-2 m-2 rounded">
            <img className='rounded-sm' src={cover} alt={`cover picture of the title ${title}`} />
            <div className="md:flex md:justify-between items-center mt-4 mb-4">
                <div className="flex items-center gap-2">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date }</p>
                    </div>
                </div>
                <div>
                    <p>{ reading_time} min read</p>
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
 blog:PropTypes.object.isRequired
}
export default Blog;