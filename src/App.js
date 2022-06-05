import "./index.css";
import store from "./lib/store";

import { Provider } from "react-redux";
import InboxScreen from "./screens/InboxScreen";

const App = () => {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
};

export default App;
