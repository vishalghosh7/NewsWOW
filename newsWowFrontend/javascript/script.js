// const saveAs = require("./filesaver");

// gsap animation
gsap.from('.jumbotron', {opacity: 0, duration: 1.2, y: 30});
gsap.from('.readButton', {opacity: 0, duration: 1, y: -30});
gsap.from('.learn', {opacity: 0, duration: 1, y: -30});
gsap.from('.card1', {opacity: 0, duration: 1, x: -50});
gsap.from('.card2', {opacity: 0, duration: 1, x: 50});
ScrollOut({
    // once: true,
    threshold: 0.5
});


// scrollToTop
const btnTop = document.querySelector(".scrollToTop");

window.onload = ()=>{
    btnTop.setAttribute("style", "display: none")  
}

window.onscroll = ()=>{
    if(document.documentElement.scrollTop<60){
        btnTop.setAttribute("style", "display: none")
    }
    
    else{
        btnTop.setAttribute("style", "display: block")
        btnTop.addEventListener("click", function(){
            window.scrollTo(0, 0)
        });
    }
}

// extraction functions
let numWarn = document.querySelector("#numWarning");
let fieldWarn = document.querySelector("#fieldWarning");

let extractBtn = document.querySelector(".extract");
let extraction = document.querySelector(".extraction");
let downloadBtn = document.querySelector(".download");
let spin = document.querySelector(".spin");

let keyword = document.querySelector("#keyword");
let timingArr = document.getElementsByName("gridRadios");
let timing="days";
let num = document.querySelector("#number");

let success = document.querySelector(".extractSuccess");
let fail = document.querySelector(".extractFail");

var resp=undefined

// checking if keyword and/or number inputs are not present
keyword.addEventListener('input', validate);
num.addEventListener('input', validate);
extractBtn.disabled = true;

function validate(e){
    if(keyword.value==="" || num.value===""){
        fieldWarn.setAttribute("style", "display: block;");
        extractBtn.disabled=true;
    }
    else{
        fieldWarn.setAttribute("style", "display: none;");
        if(isNaN(num.value)){
            numWarn.setAttribute("style", "display: block;");
        }
        else{
            numWarn.setAttribute("style", "display: none;");
            extractBtn.disabled=false;
        }
    }
}


// fetching data from API as a JSON response
extractBtn.addEventListener("click", ()=>{

    downloadBtn.setAttribute("style", "display: none;");
    fail.setAttribute("style", "display: none;");
    success.setAttribute("style", "display: none;");


    extractBtn.style.display="none";
    extraction.style.display="inline-block";

    if(timingArr[1].checked){
        timing="hours";
    }
    else{
        timing="days";
    }

    let extract_val = {
        "keyword": keyword.value,
        "timing": timing,
        "num": num.value
    };

    let startTime = Date.now()
    fetch("http://13.232.152.254/", {
        method: "POST",
        body: JSON.stringify(extract_val),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })
    .then(function(response) {
        if(response.ok){
            response.json().then(data=>{
                resp=data;
                // changeResp(data)
            })
            return response.status;
        }
        else{
            throw new Error('Server not started or under maintainence.');
        }
    })
    .then(respStatus=>{
        extraction.style.display="none";
        extractBtn.style.display="inline-block";
        totalTime = `${(((Date.now()-startTime)/1000)/60).toFixed(2)} mins`;
        if(respStatus !== 200){
            console.log("Response code not 200")
            fail.setAttribute("style", "display: block;");
            downloadBtn.setAttribute("style", "display: none;");
            return;
        }

        else {
            downloadBtn.setAttribute("style", "display: block;");
            document.querySelector("#dispTime").innerHTML = totalTime
            success.setAttribute("style", "display: block;");
        }
    })
    .catch(err=>{
        extractBtn.style.display="inline-block";
        extraction.style.display="none";
        fail.setAttribute("style", "display: block;");
    })
})

// function to download the excel file
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


// function changeResp(res){
//     resp=res;
// }

downloadBtn.addEventListener("click", ()=>{
    const worksheet = XLSX.utils.json_to_sheet(resp);
    const workbook = {
        Sheets:{
            'data':worksheet
        },
        SheetNames:['data']
    };
    const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    saveAsExcel(excelBuffer, keyword.value);
});

function saveAsExcel(buffer, filename){
    const data = new Blob([buffer], {type:EXCEL_TYPE});
    saveAs(data, filename+"_news"+EXCEL_EXTENSION);
}



