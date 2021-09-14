import { styled, Container } from "@material-ui/core";
import { NotesContextProvider } from "./command/NoteContext";
import NoteFeed from "./app/NoteFeed";
import { TopicContextProvider } from "./command/TopicContext";

const AppComponent = styled(Container)({
    textAlign: "center",
    backgroundColor: "#bdf5f2",
    minWidth: "100%",
});

function App() {
  return (
    <AppComponent>
      <TopicContextProvider>
        <NotesContextProvider>
          <NoteFeed />
        </NotesContextProvider>
      </TopicContextProvider>
    </AppComponent>
  );
}

export default App;
