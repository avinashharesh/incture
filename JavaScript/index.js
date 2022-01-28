class record
{
    constructor(fname,lname,gender,age,spec,exp,achv)
    {
        this.fname=fname;
        this.lname=lname;
        this.gender=gender;
        this.age=age;
        this.spec=spec;
        this.exp=exp;
        this.achv=achv;
    }
}
let count=0;
let r=[];
function submit()
{
    let a=document.getElementById("fn").value;
    let b=document.getElementById("ln").value;
    let c=document.getElementById("g").value;
    let d=document.getElementById("ag").value;
    let e=document.getElementById("s").value;
    let f=document.getElementById("ex").value;
    let g=document.getElementById("ac").value;
    r[count]=new record(a,b,c,d,e,f,g);
    let table=document.getElementById("myTable");
    let row=table.insertRow(1);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    let cell5=row.insertCell(4);
    let cell6=row.insertCell(5);
    let cell7=row.insertCell(6);
    cell1.innerText=a;
    cell2.innerText=b;
    cell3.innerText=c;
    cell4.innerText=d;
    cell5.innerText=e;
    cell6.innerText=f;
    cell7.innerText=g;
    count++;


}