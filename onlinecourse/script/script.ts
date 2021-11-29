export{}
class userdetails{
    username:string;
    userage:number;
    usermnum:number;

    constructor(name:string,age:number,mnum:number){
        this.username=name;
        this.userage=age;
        this.usermnum=mnum;

    }
    
}



function login(){
    let str:string;
    let num:number;
    num=1001;
    str='c';

    alert("Your Generated userid:" +str+num);
    num++;
    
    let maindiv=document.getElementById('maindiv') as HTMLDivElement;
    let confirm=document.getElementById('confirm') as HTMLDivElement;
    maindiv.style.display="none";
    confirm.style.display="block";

}
function coursedetails(){
    alert("The userid is accessble to purshace the course!");
    let confirm=document.getElementById('confirm') as HTMLDivElement;
    let coursedetails=document.getElementById('coursedetails') as HTMLDivElement;
    confirm.style.display="none";
    coursedetails.style.display="block";
}
function availablecourses(){

    

    let coursedetails=document.getElementById('coursedetails') as HTMLDivElement;
    let availablecourses=document.getElementById('availablecourses') as HTMLDivElement;
    coursedetails.style.display="none";
    availablecourses.style.display="block";
    
}
function enrollementlist(){
    let coursedetails=document.getElementById('coursedetails') as HTMLDivElement;
    let enrollementlist=document.getElementById('enrollementlist') as HTMLDivElement;
    coursedetails.style.display="none";
    enrollementlist.style.display="block";
}
function course(){
   // let courses=document.getElementById("selectbox");
  //  alert(selectbox.value);
  alert("If you want to select another course?choose available course")
  let maindiv=document.getElementById('maindiv') as HTMLDivElement;
    maindiv.style.display="none";
    let coursedetails=document.getElementById('coursedetails') as HTMLDivElement;
    coursedetails.style.display="block";
    let availablecourses=document.getElementById('availablecourses') as HTMLDivElement;
    availablecourses.style.display="none";
    
}