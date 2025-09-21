const HomeHero = () => {
  return (
    <header className="home-hero">
    <Image
      src="/post.png"
      alt="Fondo"
      width={200}
      height={150}
      layout="responsive"
    />
    <div className="overlay"></div>
    <div className="content">
      <h1 className="title">Bienvenido</h1>
      <p className="subtitle">Úlceras Por Presión</p>
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
        font-size: 3rem;
        font-weight: bold;
      }
      .subtitle {
        font-size: 1.5rem;
        margin-top: 10px;
      }
    `}</style>
  </header>
  );
};

export default HomeHero;
