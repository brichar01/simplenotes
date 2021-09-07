import { FormControl, TextField } from "@material-ui/core";

type Props = {

};

const NoteInput = (props: Props) => {
    return(
        <form>
            <TextField multiline label="Add Note"/>
        </form>
    )
};

export default NoteInput;