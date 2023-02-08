import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import route from "./routes";
import store from "./stores";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  );
}

export default App;
