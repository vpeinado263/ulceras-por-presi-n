import Link from "next/link"

const Navigation = () => {
  return (
    <>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/cuidados">Cuidado Integral de UPP</Link>
        <Link href="/productos">Productos Nesesarios</Link>
      </nav>
    </>
  )
}

export default Navigation
