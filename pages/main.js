var player='myvideo'

function load( url ){
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
