function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth() + 1).toString();
  var dd = date.getDate().toString();

  var mmChars = mm.split("");
  var ddChars = dd.split("");

  return (
    yyyy +
    "-" +
    (mmChars[1] ? mm : "0" + mmChars[0]) +
    "-" +
    (ddChars[1] ? dd : "0" + ddChars[0])
  );
}

const day = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];

function getDateOfWeek(ISOweek) {
  const y = parseInt(ISOweek.substring(0, 4)); // 2023
  const w = parseInt(ISOweek.substring(6, 8)); // 08

  const simpleDate = new Date(y, 0, 1 + (w - 1) * 7); //2023, 0, 50
  const dayOfWeek = simpleDate.getDay(); //
  const ISOweekStart = simpleDate; //2023, 01, 1

  if (dayOfWeek <= 4) {
    ISOweekStart.setDate(simpleDate.getDate() - simpleDate.getDay() + 1);
  } else {
    ISOweekStart.setDate(simpleDate.getDate() + 8 - simpleDate.getDay());
  }
  const firstDate = convertDate(ISOweekStart);

  const day = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
  const weeklyDate = [firstDate+day[0]];

  for (let i = 0; i < 6; i++) {
    let date = ISOweekStart;
    const changedDate = new Date(date.setDate(date.getDate() + 1));
    const formattedDate = convertDate(changedDate);
    const dateAndDay = formattedDate + day[i+1];
    weeklyDate.push(dateAndDay);
  }
  return weeklyDate;
}

export default getDateOfWeek;
