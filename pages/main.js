var player='myvideo'

function load( url ){
    reset(); // youtube and normal player has not compatibility with each other
    var p;
    if( url.indexOf("youtu") != -1 ){
        p=videojs( player, { "techOrder": ["youtube"], "src":url } );
    }
    else {
        p=videojs( player );
        p.src( url );
    }
    p.pause();
}

function reset(){
    // restore the original video tag
    var v='<video id="myvideo" class="video-js vjs-default-skin" controls width="600" height="300"> </video>'
    videojs( player ).dispose();
    document.getElementById( "player" ).innerHTML=v;
}
