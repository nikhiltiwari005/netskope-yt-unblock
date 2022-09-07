var ch = () => {
    document.querySelectorAll("a#video-title-link").forEach(handler) // Home page
    document.querySelectorAll("a#video-title").forEach(handler) // Search page
    document.querySelectorAll("a[class='yt-simple-endpoint style-scope ytd-compact-video-renderer']").forEach(handler) // Watch page 
    document.querySelectorAll('a.ytp-videowall-still').forEach(handler)
}

var handler = (i) => {
    try {
        if(i.href.indexOf('youtube.com') < 1) return;
        v =  i.href.split('=')[1];
        if(v.indexOf('&')) v =  v.split('&')[0];
        i.href = `https://www.youtube-nocookie.com/embed/${v}?autoplay=1`;
    } catch (e) {
        console.error(e)
    }
}

['mousemove'].forEach( e => window.addEventListener(e, ch))
