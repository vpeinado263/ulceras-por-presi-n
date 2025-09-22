const HomeHero = () => {
  return (
    <header className="home-hero">
    <div className="content">
      <h1 className="title">Úlceras Por Presión</h1>
    </div>

    <style jsx>{`
      .home-hero {
        position: relative;
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
      }
      .content {
        position: relative;
        z-index: 2;
      }
      .title {
        font-size: 3rem;
        font-weight: bold;
      }
    `}</style>
  </header>
  );
};

export default HomeHero;
