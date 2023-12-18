import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.css";

const App = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
