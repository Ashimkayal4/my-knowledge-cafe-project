
const Blog = ({ blog }) => {
   const { author_img, id } = blog;
    return (
        <div>
            <p>Id : {id}</p>  
            <img src={author_img} alt="" />
        </div>
    );
};

export default Blog;