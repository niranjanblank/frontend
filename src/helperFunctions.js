import moment from "moment";

export const getFormattedDate = (dateString) => {
    const date = new Date(dateString)
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}