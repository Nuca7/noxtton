import moment from "moment";

export function convertDate(date) {
  return moment(date).format("ll");
}

export function copyText(text) {
  navigator.clipboard.writeText(text);
}
