import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () =>
{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuther] = useState('');
    const history = useHistory();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() =>
        {
           // history.go(-1);
            history.push('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            
            <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            />
            <label>Blog auther:</label>
            <select
                value={author}
                onChange={(e)=>setAuther(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="abbas">abbas</option>
            </select>
            <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;