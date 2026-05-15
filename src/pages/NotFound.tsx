import * as React from "react"; // Adicione o * as React
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  // Use React.useEffect em vez de apenas useEffect
  React.useEffect(() => {
    console.error(
      "404 Error: User tried to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.25rem' }}>Página não encontrada</p>
        <a href="/" style={{ marginTop: '1rem', display: 'block', color: 'blue', textDecoration: 'underline' }}>
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;