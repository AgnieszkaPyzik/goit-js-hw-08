!function(){"use strict";var e="videoplayer-current-time",t=document.querySelector("iframe"),o=new Vimeo(t);o.on("loaded",(function(){var t=localStorage.getItem(e)||0;o.setCurrentTime(t)})),o.on("timeupdate",throttle((function(t){var o=t.seconds;localStorage.setItem(e,o)}),1e3))}();
//# sourceMappingURL=02-video.4e0fa184.js.map
