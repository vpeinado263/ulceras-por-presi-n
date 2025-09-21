const Header = () => {
  return (
    <>
      <header className="header">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="title">Bienvenido</h1>
          <p className="subtitle">ÚLCERAS POR PRESIÓN</p>
        </div>
      </header>

      <style jsx>{`
        .header {
          position: relative;
          width: 100%;
          min-height: 120px;
          background-color: #333; /* fondo neutro */
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .content {
          position: relative;
          z-index: 2;
        }
        .title {
          font-size: 2rem;
          font-weight: bold;
        }
        .subtitle {
          font-size: 1rem;
          margin-top: 5px;
        }
      `}</style>
    </>
  );
};

export default Header;
