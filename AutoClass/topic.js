let topic = [
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "123123"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1, startDay);
    //時間先忽略，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}


function setMD(event){
    var eventSeparate = event.target.value.split("-");
    setMonthAndDay(eventSeparate[1],eventSeparate[2]);
    a();
}

/*
//先在程式碼中直接指定社團課程第一天
setMonthAndDay(2,19);*/

