import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
   const { author_img ,title,cover,author,posted_date,reading_time } = blog;
    return (
        <div className="border-2 p-2 m-2 rounded">
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className="md:flex md:justify-between items-center">
                <div className="flex items-center">
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
        </div>
    );
};

Blog.propTypes={
 blog:PropTypes.object.isRequired
}
export default Blog;