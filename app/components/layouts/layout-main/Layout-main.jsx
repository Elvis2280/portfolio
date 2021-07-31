import Navbar from '../../elements/navBar/Navbar';
import Footer from '../../modules/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary font-fontDefault">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
