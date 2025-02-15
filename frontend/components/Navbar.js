import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">GOAT Storytelling Agent</a>
        </Link>
        <div className="navbar-links">
          <Link href="/config">
            <a>Config</a>
          </Link>
          <Link href="/generation">
            <a>Generation</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background-color: #0070f3;
          padding: 10px 20px;
          color: white;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .navbar-links a {
          margin-left: 20px;
          color: white;
          text-decoration: none;
        }
        .navbar-links a:hover {
          color: #ccc;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
