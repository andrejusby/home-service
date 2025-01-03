import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MaterialUICalendarProps } from "./types";

const MaterialUiCalendar = ({ value, onChange }: MaterialUICalendarProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DateCalendar value={value} onChange={onChange} views={["day"]} />
      </div>
    </LocalizationProvider>
  );
};

export default MaterialUiCalendar;
