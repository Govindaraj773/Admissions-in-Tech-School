// All the Code for All Students Page Goes Here

let studentsData=JSON.parse(localStorage.getItem("admission"));
// console.log(studentsData)
let admitted=JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejected=JSON.parse(localStorage.getItem("admission-rejected")) || [];

function handlechange(){
    let selected=document.querySelector("#filter").value;
    // console.log(selected);
    if(selected === "all"){
        displayData(studentsData);
    }else{
        let filteredData=studentsData.filter(function(el){
            return el.course===selected;
        });
        displayData(filteredData);
        // console.log(filteredData);
    }
}

function displayData(studentsData){
    document.querySelector("tbody").innerHTML="";
    studentsData.forEach((ele,i) => {
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=ele.name;
        let td2=document.createElement("td");
        td2.innerText=ele.email; 
        let td3=document.createElement("td");
        td3.innerText=ele.course; 
        let td4=document.createElement("td");
        td4.innerText=ele.gender;
        let td5=document.createElement("td");
        td5.innerText=ele.phone; 
        let td6=document.createElement("td");
        td6.innerText="Admitted";
        td6.style.backgroundColor="green";
        td6.style.color="white";
        td6.addEventListener("click",function(){
            admittedFun(ele,i);
        });
        let td7=document.createElement("td");
        td7.innerText="Rejected";
        td7.addEventListener("click",function(){
            rejectedFun(ele,i);
        });
        td7.style.backgroundColor="red";
        td7.style.color="white";


        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
    });
}

displayData(studentsData);

function admittedFun(ele,i){
    // console.log(ele);
    studentsData.splice(i,1);
    localStorage.setItem("admission",JSON.stringify(studentsData));
    window.location.reload();

    admitted.push(ele);
    localStorage.setItem("admission-accepted",JSON.stringify(admitted));

}

function rejectedFun(ele,i){

    studentsData.splice(i,1);
    localStorage.setItem("admission",JSON.stringify(studentsData));
    window.location.reload();

    rejected.push(ele);
    localStorage.setItem("admission-rejected", JSON.stringify(rejected));

}