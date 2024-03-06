function* idGenerator() {
  let id = 1;

  while (true) {
    yield id;
    id++;
  }
}

function videoLength() {
  const toMultiply = idGenerator();
  const time1 = Math.round(Math.random() * toMultiply.next().value);
  const time2 = Math.round(time1 / Math.random());
  const time3 = Math.round(Math.random() * toMultiply.next().value);
  const time4 = Math.round(time1 / Math.random());

  if (time1 === 0 && time2 === 0 && time3 === 0 && time4 === 0) {
    return "01:00"
  }

  if (time1 <= 6 && time2 <= 9 && time3 <= 5 && time4 <= 9) {
    return `${time1}${time2}:${time3}${time4}`
  } else {
    return "01:12"
  }
}

function isVisible() {
  const random = Math.round(Math.random() * 10);

  return random > 5;
}

function noOfPlays() {
  const random = Math.round(Math.random() * 10);

  if (random < 3) {
    return random * 3
  }
  if (random <= 7) {
    return `${random * 2}K`
  }
  if (random <= 10) {
    return `${random}M`
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

export const FAKE_SIDE_SUGGESTIONS = [
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 1",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/0/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 2",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/10/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 3",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/20/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 4",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/30/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 4",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/40/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 4",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/50/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 4",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/60/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 2",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/70/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 3",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/80/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 4",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/90/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 4",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/100/168/94",
  },
  {
    id: id.next().value,
    title: "V Rising: Original Soundtrack - Full Album - OST 4",
    length: videoLength(),
    isVisible: isVisible(),
    userName: "Axel",
    noOfPlays: `${noOfPlays()} views`,
    publishedAgo: calculateDateFrom(),
    picture: 	"https://picsum.photos/id/110/168/94",
  }
]

export const FAKE_VIDEO = {
  id: id.next().value,
  title: "V Rising: Original Soundtrack - Full Album - OST 4",
  length: videoLength(),
  isVisible: isVisible(),
  userName: "Axel",
  noOfPlays: `${noOfPlays()} views`,
  publishedAgo: calculateDateFrom(),
  picture: 	"https://picsum.photos/id/120/168/94",
}