import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div>
        <nav className="navbar">
          <Link href="/">Inicio</Link>
          <Link href="/cuidados">Cuidado Integral de UPP</Link>
          <Link href="/productos">Productos Nesesarios</Link>
        </nav>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(139, 205, 222);
          padding: 1rem;
          width: 100%;
          border-radius: 1rem;
        }
        nav {
          display: flex;
          gap: 2rem;
          font-weight: bold;
          font-family: sans-serif;
        }
        nav :global(a) {
          color: #000;
          text-decoration: none;
          padding: 0.5rem;
          transition:
            color 0.3s,
            background-color 0.3s;
          border-radius: 4px;
        }
        nav :global(a:hover) {
          color: #fff;
          background-color: rgb(107, 174, 191);
        }
      `}</style>
    </>
  );
};

export default Navigation;
