import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import DropdownInput from "./DropdownInput";
import CheckboxInput from "./CheckboxInput";

export const fieldsMapper = {
    text: TextInput,
    radio_buttons: RadioInput,
    drop_down: DropdownInput,
    multi_choice: CheckboxInput,
}
