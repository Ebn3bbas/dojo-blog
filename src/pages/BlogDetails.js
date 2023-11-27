import { useParams } from "react-router-dom";
import useFetch from "../hooks/uesFetch";
import Loading from "../components/Loading";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <Loading />}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>X</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
