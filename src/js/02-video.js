import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('timePlay', data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('timePlay')) {
  player.setCurrentTime(localStorage.getItem('timePlay'));
}