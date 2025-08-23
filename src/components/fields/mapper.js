import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import DropdownInput from "./DropdownInput";
import CheckboxInput from "./CheckboxInput";
import TextAreaInput from "./TextAreaInput";
import DatePickerInput from "./DatePickerInput";

export const fieldsMapper = {
    text: TextInput,
    radio_buttons: RadioInput,
    drop_down: DropdownInput,
    multi_choice: CheckboxInput,
    text_area: TextAreaInput,
    date_picker: DatePickerInput,
}
