export const splitChannelsAndVideos = links => {
  const linkArray = Array.from(links);
  let channels = new Map(); // map of {channelName: numVideosWatched}
  let videos = new Map(); // map of {videoName: numTimesWatched}
  
  linkArray.forEach(link => {
    if (link.href.match(/channel*/)) {
      const channel = link.innerHTML;
      if (channels.has(channel)) {
        channels.set(channel, channels.get(channel) + 1);
      } else {
        channels.set(channel, 1)
      }
    } else if (link.href.match(/watch*/)) {
      const video = link.innerHTML;
      if (videos.has(video)) {
        videos.set(video, videos.get(video) + 1);
      } else {
        videos.set(video, 1)
      }
    }
  })

  return {
    channels: channels,
    videos: videos,
  }
}

export const sortTopResults = map => {
  return new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
}