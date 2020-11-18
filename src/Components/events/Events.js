
const events = [
    {
        title: "sport", // Тим мероприятия
        start: getDate("YEAR-MONTH-01")},
    {
        title: "sport",
        start: getDate("2020-11-01T10:30:00"),
        type: 'sport'
    },
    {
        title: "sport",
        start: getDate("YEAR-MONTH-07"), // Дата начала
        end: getDate("YEAR-MONTH-10") // Дата окончания
    },
    {
        title: "sport",
        start: getDate("YEAR-10-07"), // Дата начала
        end: getDate("YEAR-MONTH-10") // Дата окончания
    },
    {
        title: "sport",
        start: getDate("YEAR-MONTH-09T16:00:00"),
        type: 'sport'
    },
    {
        title: "sport",
        start: getDate("YEAR-MONTH-16T16:00:00"),
        type: 'sport'
    },
    {
        title: "sport",
        start: getDate("YEAR-MONTH-17"),
        end: getDate("YEAR-MONTH-19T16:00:00"),
        type: 'sport'
    },
    {
        title: "sport",
        start: getDate("YEAR-MONTH-18T10:30:00"),
        end: getDate("YEAR-MONTH-18T12:30:00"),
        type: 'sport'
    },
    {
        title: "sport",
        start: getDate("YEAR-MONTH-18T12:00:00")
    },
    {
        title: "sport",
        start: getDate("YEAR-MONTH-19T07:00:00")
    }
    ];
function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}
export default events