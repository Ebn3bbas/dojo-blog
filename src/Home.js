import BlogList from './BlogList';
import Loading from './Loading';
import useFetch from './uesFetch';
const Home = () => {

    // const handleDelete = (id) =>
    // {
    //     const newBlogs = blogs.filter((blog) => blog.id != id);
    //     setBlogs(newBlogs);
    // }

    const { data:blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{ error }</div> }
            {isLoading && <Loading/>}
            {(blogs && <BlogList blogs={blogs} title="All Blogs" />)}
            {/*<BlogList blogs={blogs.filter(blog => blog.auther === 'abdo')} title="Abdo`s Blogs" handleDelete={handleDelete}/>*/}
        </div>
     );
}
 
export default Home;