function* idGenerator() {
  let id = 1;

  while (true) {
    yield id;
    id++;
  }
}

export function videoLength() {
  const toMultiply = idGenerator();
  const time1 = Math.round(Math.random() * toMultiply.next().value);
  const time2 = Math.round(time1 / Math.random());
  const time3 = Math.round(Math.random() * toMultiply.next().value);
  const time4 = Math.round(time1 / Math.random());

  if (time1 === 0 && time2 === 0 && time3 === 0 && time4 === 0) {
    return "01:00"
  }

  if(time1 < 7 && time2 < 10 && time3 < 6 && time4 < 10) {
    return `${time1}${time2}:${time3}${time4}`
  }

  if (time1 >= 7 || time2 >= 10 || time3 >= 7 || time4 < 10) {
    return "01:12"
  }
  return "00:56"
}

function isVisible() {
  const random = Math.round(Math.random() * 10);

  return random > 5;
}

function noOfPlays() {
  const random = Math.round(Math.random() * 10);

  if (random < 1) {
    return random * 3
  }
  if (random <= 3) {
    return `${random * 3}K`
  }
  if (random <= 10) {
    return `${random * 3}M`
  }
}

function calculateDateFrom(
    from = new Date(2014, 0, 1),
    to = new Date(),
) {

  const randomDateIn = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
  const today = new Date();
  const dateDiffIn_mSeconds = today.getTime() - randomDateIn.getTime();

  const yearDiff = today.getFullYear() - randomDateIn.getFullYear() - 1;

  const monthDiff = today.getMonth() - randomDateIn.getMonth() + (12 * (today.getFullYear() - randomDateIn.getFullYear()));

  const oneDay = 24 * 60 * 60 * 1000;
  const dayDiff = Math.floor(dateDiffIn_mSeconds / oneDay);

  const oneHour = 60 * 60 * 1000;
  const hourDiff = Math.floor(dateDiffIn_mSeconds / oneHour);

  let value;
  let unit;

  if (yearDiff !== 0) {
    value = yearDiff;
    unit = "year"
  }
  if (yearDiff === 0) {
    value = monthDiff;
    unit = "month";
  }
  if (monthDiff === 0) {
    value = dayDiff;
    unit = "day";
  }
  if (dayDiff === 0) {
    value = hourDiff;
    unit = "hour";
  }

  const formatter = new Intl.RelativeTimeFormat(undefined);

  return formatter.format(-value, unit);
}

const id = idGenerator();

export const FAKE_SIDE_SUGGESTIONS =
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 2",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "AAAA",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
  }
