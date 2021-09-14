import Note from "../model/Note";

const NoteWrapper = (props: {note: Note}) => {
  return(<div>{props.note.topic} {props.note.content}</div>)
}

export default NoteWrapper;