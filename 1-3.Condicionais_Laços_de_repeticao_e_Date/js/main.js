let idade = prompt("qual sua idade");

if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}

let count = 0;

while(count < 5){
    console.log(count);
    count++;
}

console.log("\n\n") 

let num;

for(num = 0;num <= 5;num++){
    console.log(num);   
}

console.log("\n\n")

let data = new Date();
console.log(data)
console.log(data.getDay())
console.log(data.getHours())
console.log(data.getMinutes())
