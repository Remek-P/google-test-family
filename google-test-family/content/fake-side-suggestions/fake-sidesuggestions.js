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
}

function isVisible() {
  const random = Math.round(Math.random() * 10);

  return random > 5;
}

function noOfPlays() {
  const random = Math.round(Math.random() * 10);

  if (random === 0) {
    return Math.round(Math.random()) * 3
  }
  if (random <= 3) {
    return `${Math.round(Math.random()) * 3}K`
  }
  if (random <= 10) {
    return `${Math.round(Math.random()) * 3}M`
  }
}

export function generateRandomDate(
    from = new Date(2014, 0, 1),
    to = new Date(),
) {

  const a = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
  const b = a

  console.log(b)
}

const id = idGenerator();

export const FAKE_SIDE_SUGGESTIONS = [
  {
    id: id.next().value,
    length: videoLength(),
    badgeGrey: isVisible(),
    userName: "AAAA",
    noOfPlays: noOfPlays(),
    publishedAgo: 12,
  }
];
