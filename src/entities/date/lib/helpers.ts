import moment from "moment";

export const getFormatedDate = (timestamp: number, pattern: string) =>
	moment.unix(timestamp).format(pattern);
