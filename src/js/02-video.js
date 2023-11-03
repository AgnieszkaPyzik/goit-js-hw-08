'use strict';

const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

player.on('loaded', () => {
  const currentTime = localStorage.getItem(KEY) || 0;
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(KEY, seconds);
  }, 1000)
);
