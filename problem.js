const result = {
  A: [],
  B: [],
  C: [],
  D: [],
};

let vaxTrail = (arr) => {
    arr.filter((value,index)=>{
        if((value.age>=20 && value.age<=30) && (value.temperature<100)){
            result.A.push(value);
        }else if((value.age>=31 && value.age<=40)  && (value.temperature<100)){
            result.B.push(value);
        }else if((value.age>=41 && value.age<=50) && (value.temperature<100)){
            result.C.push(value);
        }else if((value.temperature>=100)){
            result.D.push(value);
        }
    });
};




vaxTrail([
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37,
    temperature: 99 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41,
    temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51,
    temperature: 101 }

]);

console.log(result);