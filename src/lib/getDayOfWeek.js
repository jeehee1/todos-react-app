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

function getDateOfWeek(date) {
  const days = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
  let numDay = new Date(date).getDay() - 1;
  if (numDay < 0) numDay = 7;
  const setOfDate = [];
  const selectedDate = new Date(date);

  for (let i = 0; i < 7; i++) {
    let newDate = new Date(
      selectedDate.getTime() + (i - numDay) * 24 * 60 * 60 * 1000
    );
    let formattedDate = convertDate(newDate);
    formattedDate += days[i];
    setOfDate.push(formattedDate);
  }
  return setOfDate;
}

export default getDateOfWeek;
