import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="header">
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
          <p className="sbtitle">ULCERAS POR PRESIÓN</p>
        </div>
      </header>

      <style jsx>{`
        .header {
          position: relative;
          width: 100%;
          height: 400px;
          background-image: url("/post.png");
          background-size: cover;
          background-position: center;
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
          background-color: rgba(
            0,
            0,
            0,
            0.5
          ); /* Oscurece la imagen de fondo */
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
    </>
  );
};

export default Header;
