
const today=new Date();
const event= new Date('August 15, 2023');
const day=event.getTime()-today.getTime();
//event.setDate(24);
console.log(`faltan ${Math.ceil(day/(24*60*60*1000))} dias`);

