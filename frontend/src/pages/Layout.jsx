import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-50">
      <Navbar />

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-[auto_1fr] gap-6 mt-6">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
