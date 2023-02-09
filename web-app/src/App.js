import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import route from "./routes";
import store from "./stores";
import { Theme } from "react-daisyui";

function App() {
  return (
    <Theme dataTheme="pastel">
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </Theme>
  );
}

export default App;
