import { styled, Container } from "@material-ui/core";
import NoteFeed from "./app/NoteFeed";

const AppComponent = styled(Container)({
    textAlign: "center",
    backgroundColor: "#bdf5f2",
    minWidth: "100%",
});

function App() {
  return (
    <AppComponent>
      <NoteFeed />
    </AppComponent>
  );
}

export default App;
