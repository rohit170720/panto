import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <ErrorBoundary showDetails={true}>
          <Landing />
        </ErrorBoundary>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
