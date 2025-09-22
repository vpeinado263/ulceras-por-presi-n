import Link from "next/link";

const Navigation = () => {
  return (
    <>
       <nav className="navigation">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/productos">Productos</Link></li>
          <li><Link href="/cuidados">Cuidados</Link></li>
        </ul>
      </nav>
      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background-color: #222;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        ul {
          display: flex;
          gap: 20px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        li {
          cursor: pointer;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Navigation;
