import { Link } from 'react-router-dom';

const Navbar = () =>
{
    return (  
        <nav className="navbar">
            <h1>Dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: 'var(--base-color--)',
                    borderRadius: '8px'
                }}>New</Link>

            </div>
        </nav>
    );
} 
 
export default Navbar;