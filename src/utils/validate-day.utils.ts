import dayjs from "dayjs";
export const isPastDay = (value: string, isEdit: boolean | undefined) => {
  if (isEdit) return true;
  const isPast = value ? dayjs(value).isBefore(dayjs(), "day") : false;
  if (isPast) {
    return "Please select a future date.";
  }
};
