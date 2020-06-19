/*window.onload=function(){
    
}*/

$(document).ready(function(){
    $("input").click(function(){
       let numberOfListItem = $("#choices li").length;
       let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
       $("#random-result").text($("#choices li").eq(randomChildNumber).text());
       randomChildNumber = randomChildNumber + 1;
       $("#random-pic").attr("src" , "elephant/image/" + randomChildNumber + ".jpg");
    });
});

var player;//Youtube播放器
var currentPlay = 0;//紀錄目前播到第幾首歌
//當Youtube API準備好時
function onYouTubeIframeAPIReady(){ 

    player = new YT.Player("player",
        {
            height:"390",
            width:"640",
            videoId:playList[currentPlay],
            playerVars:{
                "autoplay":0,
                "controls":0,
                "start":playTime[currentPlay][0],
                "end":playTime[currentPlay][1],
                "showinfo":0,
                "rel":0,
                "iv_load_policy":3
        },
        events:{
                "onReady":onPlayerReady,
                "onStateChange":onPlayerStateChange
            }
        }
    );
}
//當Youtube播放器準備好時
function onPlayerReady(event) { 
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
function onPlayerStateChange(event){
    //當目前播放秒數與預期播放結束秒數相同時，去播下一首
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{//已經播到最後一首後，就將第一首準備好，並且停止播放
            currentPlay = 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }//影片開始時抓取影片標題顯示
    if(player.getVideoLoadedFraction()>0){
        $("h2").text(player.getVideoData().title);
    }
}
