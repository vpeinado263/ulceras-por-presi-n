import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link href="/">Home</Link>
        <Link href="/productos">Insumos</Link>
        <Link href="/cuidados">Cuidados</Link>
      </nav>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          z-index: 100;
        }

        .navigation :global(a) {
          color: #0d6efd;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 6px;
          font-weight: 500;
          transition: background 0.3s, color 0.3s;
        }

        .navigation :global(a:hover) {
          background-color: #0d6efd;
          color: white;
        }

        @media (max-width: 768px) {
          .navigation {
            gap: 20px;
          }
          .navigation :global(a) {
            padding: 10px 14px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;

