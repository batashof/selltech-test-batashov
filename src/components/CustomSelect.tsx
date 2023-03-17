import {Autocomplete, TextareaAutosize, TextField} from "@mui/material";

interface AutocompleteOption {
    label: string;
}

interface ICustomSelectProps {
    options: AutocompleteOption[],
    isTextArea?: boolean,
    multiple?: boolean
}

export const CustomSelect = (props: ICustomSelectProps) => {

  return (
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          multiple={props.multiple}
          options={props.options}
          sx={{ width: 300 }}
          renderInput={(params) => !props.isTextArea ? <TextField {...params} label="Movie" /> : <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 200 }}
              />}
      />
  )
}