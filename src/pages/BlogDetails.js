import { useParams } from "react-router-dom";
import useFetch from "../hooks/uesFetch";
import Loading from "../components/Loading";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuther] = useState("");

  const blogData = { title, body, author };
  const {
    data: blog,
    isLoading,
    error,
    setTrigger,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = (id) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/blogs/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    }).then(() => {
      setTrigger((prev) => !prev);
    });
  };
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setBody(blog.body);
      setAuther(blog.author);
    }
  }, [blog]);
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <Loading />}
      {blog && (
        <>
          {" "}
          <article>
            <button onClick={() => handleClick(blog?.id)}>X</button>
            <h2>{blog?.title}</h2>
            <p>Written by: {blog?.author}</p>
            <div>{blog?.body}</div>
          </article>
          <div className="create">
            <h2>update blog</h2>

            <form onSubmit={handleSubmit}>
              <label>Blog title:</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Blog body:</label>
              <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
              <label>Blog auther:</label>
              <select
                value={author}
                onChange={(e) => setAuther(e.target.value)}
              >
                <option value="mario">mario</option>
                <option value="abbas">abbas</option>
              </select>
              <button>Add Blog</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
