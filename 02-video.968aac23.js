const e=document.querySelector("iframe"),t=new Vimeo(e);t.on("loaded",(()=>{const e=localStorage.getItem("videoplayer-current-time")||0;t.setCurrentTime(e)})),t.on("timeupdate",throttle((({seconds:e})=>{localStorage.setItem("videoplayer-current-time",e)}),1e3));
//# sourceMappingURL=02-video.968aac23.js.map
