import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }/*props => {what attributes i need + i can pass fun}*/) =>
{
  //  const blogs = props.blogs;
 //   const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
        {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                 <h2>{blog.title}</h2>
                <p>Written by {blog.auther}</p>
                </Link>
               
                {/* <button onClick={() => handleDelete(blog.id)}>X</button> */}
                </div>
        ))}
        </div>
     );
}
 
export default BlogList;