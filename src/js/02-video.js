
    import Player from '@vimeo/player';
    import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    
    const STORAGE_KEY = 'videoplayer-current-time';
    
    const onPlay = data => {
        const playingTime = data.seconds;
        localStorage.setItem(STORAGE_KEY, playingTime)
    };

    player.on('timeupdate', throttle(onPlay, 1000))
     if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}
 