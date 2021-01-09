import moment from "moment";

export const sortTopResults = map => {
  return new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
}

const dateRegex = /(.*)(((Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}))(.*)/;

export const parseData = (domElements, yearMoment) => {
  const elements = Array.from(domElements);

  let channels = new Map(); // map of {channelName: numVideosWatched}
  let videos = new Map(); // map of {videoName: numTimesWatched}
  let months = new Map();  

  elements.forEach(elem => {
    let links = elem.getElementsByTagName("a");
    let linkArray = Array.from(links)
    // we know we have a link for a video and a channel
    if (linkArray && linkArray.length === 2) {
      let match = elem.innerHTML.match(dateRegex);
      if (match && match.length > 2) {
        const isWrappedYear = moment(yearMoment).isSame(moment(match[2]), 'year');
        if (isWrappedYear) {
          const month = moment(match[2]).format('MMMM');
          if (months.has(month)) {
            months.set(month, months.get(month) + 1);
          } else {
            months.set(month, 1)
          }

          const video = linkArray[0].innerHTML;
          if (videos.has(video)) {
            videos.set(video, videos.get(video) + 1);
          } else {
            videos.set(video, 1)
          }
          const channel = linkArray[1].innerHTML;
          if (channels.has(channel)) {
            channels.set(channel, channels.get(channel) + 1);
          } else {
            channels.set(channel, 1)
          }
        }
      }
    }
  })

  return {
    channels: channels,
    videos: videos,
    months: months,
  }
}