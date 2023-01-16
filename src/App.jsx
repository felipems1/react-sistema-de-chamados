import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

import AuthProvider from "./contexts/auth";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
