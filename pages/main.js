var player='myvideo'

function load( url ){
    var p=videojs( player );
    p.src( url );
    p.pause();
}
