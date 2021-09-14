import moment from "moment";
import { createContext, ReactElement, useContext, useState } from "react";
import Note from "../model/Note";
import useTopics from "./TopicContext";

type Props = {
  children: ReactElement[] | ReactElement
}

type NoteContext = {
  notes: Note[],
  addNote: (note: string) => void
};

const defaultNotes = {
  notes: [],
  addNote: (note: String) => {}
} as NoteContext;

const NotesContext = createContext<NoteContext>(defaultNotes);

const useNotes = () => useContext(NotesContext);

export const NotesContextProvider = (props: Props) => {
  const [notes, setNotes] = useState([] as Note[]);
  const { topic } = useTopics();
  
  const addNote = (note: string) => { setNotes(notes.concat(new Note(moment(), topic, note))) };

  return(<NotesContext.Provider value={ { notes: notes, addNote: addNote } as NoteContext }>
    {props.children}
  </NotesContext.Provider>)
};

export default useNotes;