import Navigation from "../organismos/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{ children }</main>
    </>
  );
};

export default Layout;
