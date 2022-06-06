'use strict';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrameEl = document.querySelector('#vimeo-player');
const player = new Player(iFrameEl);

player.on('timeupdate', throttle(onTime, 1000));

function onTime({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));