var ch = () => {
    document.querySelectorAll("a#video-title-link").forEach(handler) // Home Page
    document.querySelectorAll("a#video-title").forEach(handler) // serarch page
    document.querySelectorAll("a[class='yt-simple-endpoint style-scope ytd-compact-video-renderer']").forEach(handler) // watch 
}
var handler = (i) => {
    try {
        if(i.href.indexOf('youtube.com') < 1) return;
        i.href = i.href = 'https://www.youtube-nocookie.com/embed/' + i.href.split('=')[1]
    } catch (e) {
        console.error(e)
    }
}

window.addEventListener('load', ch);
window.addEventListener('wheel', ch);