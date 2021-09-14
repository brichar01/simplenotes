import { Container, styled } from "@material-ui/core";
import Note from "../model/Note";
import useNotes from "../command/NoteContext";
import NoteInput from "./NoteInput";
import NoteWrapper from "./NoteWrapper";

const MapNotes = (notes: Note[]) => {
  return notes.map((note: Note) => {
    return(<NoteWrapper key={note.timeStamp.toString()} note={note} />)
  });
};
  
const NoteFeed = () => {
  const {notes} = useNotes();

  const NoteFeedComponent = styled(Container)({
    minWidth: "50%"
  });

  return(
    <NoteFeedComponent>
        {MapNotes(notes)}
        <NoteInput />
    </NoteFeedComponent>
  )
};

export default NoteFeed;