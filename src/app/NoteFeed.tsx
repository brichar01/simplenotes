import { styled, TextField } from "@material-ui/core";

type Props = {
    
};

const NoteFeed = (props: Props) => {
    const TextFieldComponent = styled(TextField)({
        minWidth: "40%"
    })
    return(
        <TextFieldComponent 
            multiline 
            variant="outlined" 
            label="Add Note"
            onSubmit={onConfirm}/>
    )
};

export default NoteFeed;