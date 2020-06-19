
function a(){
    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );
    let topicCount = topic.length;

    let oneDayMilliseconds = 24*60*60*1000;

    var Holiday = ["2020/1/1","2020/1/15","2020/2/19","2020/5/28","2020/7/4","2020/9/3","2020/10/8","2020/11/12","2020/11/22","2020/12/25"];
    


    function isHoliday(theDay){
        for(let i=0;i<Holiday.length;++i){
            if(theDay==Holiday[i]){
                return true;
            }
        }
        return false;
    }
    

    function noClass(num){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        if(isHoliday(thisDate.toLocaleDateString())){
            return ("<td class=topic_gray>"+ topic[num]+"</td>");
        }
        else{
            return ("<td>"+ topic[num]+"</td>");
        }
    }


    for(var x=0; x<topicCount; x++)
    {
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);

        $("#courseTable").append(
            "<tr>"+
            "<td >"+(x+1)+"</td>"+
            "<td>"+ thisDate.toLocaleDateString()+"</td>"+
            noClass(x)+
            "</tr>"    
        ) 
    }
}

$(document).ready(function(){
    a();
});
