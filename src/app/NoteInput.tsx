import { Button, Grid, Input, TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { ChangeEvent, Ref, useEffect, useLayoutEffect, useRef, useState } from "react";
import useNotes from "../command/NoteContext";
import useTopics from "../command/TopicContext";

const NoteInputComponent = styled(Grid)({
  maxWidth: "50%",
  verticalAlign: "centre",
  alignContent: "centre"
  })

const NoteInput = () => {
  const { addNote } = useNotes();
  const { setTopic } = useTopics();
  const [ newNote, setNewNote ] = useState("");
 
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputElement.current?.focus()
  }, []);

  const handleClick = (event: React.FormEvent<HTMLFormElement>): boolean => {
    if (!newNote) return false;
    if (newNote.startsWith("!t ")) setTopic(newNote.substr(2))
      else addNote(newNote);
    return false;
  };

  return(
    <NoteInputComponent>
      <form onSubmit={handleClick}>
        <Input inputRef={inputElement} placeholder="Add Note" onChange={(e) => setNewNote(e.target.value)}/>
        <Button type="submit">Add Note</Button>
      </form>
    </NoteInputComponent>
  )
};

export default NoteInput;