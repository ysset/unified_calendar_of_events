
const events = [
    {
        title: "Баскетбол", // Имя мероприятия
        start: getDate("YEAR-MONTH-01"),
        end: getDate("YEAR-MONTH-18T19:30:00"),
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Футбол",
        start: getDate("2020-11-01T10:30:00"),
        end: getDate("YEAR-MONTH-18T19:30:00"),
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Хоккей",
        start: getDate("YEAR-MONTH-07"), // Дата начала
        end: getDate("YEAR-MONTH-10"),// Дата окончания
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Футбол",
        start: getDate("YEAR-10-07"), // Дата начала
        end: getDate("YEAR-MONTH-10"),// Дата окончания
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Баскетбол",
        start: getDate("YEAR-MONTH-09T16:00:00"),
        end: getDate("YEAR-MONTH-18T19:30:00"),
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Футбол",
        start: getDate("YEAR-MONTH-16T16:00:00"),
        end: getDate("YEAR-MONTH-18T19:30:00"),
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Баскетбол",
        start: getDate("YEAR-MONTH-17"),
        end: getDate("YEAR-MONTH-19T16:00:00"),
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Футбол",
        start: getDate("YEAR-MONTH-18T10:30:00"),
        end: getDate("YEAR-MONTH-18T12:30:00"),
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Хоккей",
        start: getDate("YEAR-MONTH-18T12:00:00"),
        end: getDate("YEAR-MONTH-18T19:30:00"),
        type: 'sport',
        resourceId: 'sport'
    },,
    {
        title: "Хоккей",
        start: getDate("YEAR-MONTH-18T15:00:00"),
        end: getDate("YEAR-MONTH-18T19:30:00"),
        type: 'sport',
        resourceId: 'sport'
    },,
    {
        title: "Хоккей",
        start: getDate("YEAR-MONTH-18T1:00:00"),
        end: getDate("YEAR-MONTH-18T19:30:00"),
        type: 'sport',
        resourceId: 'sport'
    },
    {
        title: "Хоккей",
        start: getDate("YEAR-MONTH-19T07:00:00"),
        end: getDate("YEAR-MONTH-18T19:30:00"),
        type: 'sport',
        resourceId: 'sport'
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