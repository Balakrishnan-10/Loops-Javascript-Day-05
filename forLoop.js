// Question No : 02
// For the Above JSON,iterate over all the loops.
// for loop:

var resume = {
   
  "Name": "Balakrishnan M",
  "Email": "krishnabala1495@gmail.com",
  "Phone": "6369216016",
  "Address": "5/3/121,East Street ,Palayampatti",
  "PostalCode": "626112",
  "City": "Aruppukottai,Virudhunagar",
  "Region": "Tamilnadu",
  "Network": "GitHub",
  "Username": "Balakrishnan-10",
  "URL": "https://github.com/Balakrishnan-10",
  "Company": "Tonglit Autogistic PVT LTD",
  "Position": "Quality Control",
  "Institution": "VSVN Polytechnic College",
  "Area": "Virudhunagar",
  "StartDate": "07.6.2013",
  "EndDate": "29.05.2016",
  "Percentage": "90%",
  "Course": "Diploma in Mechanical Enginerring",
  "Strength": "Self & quick leaner,Team worker",
  "Weakness": "Limited experience in a particular skill or software",
  "Program": "Javascript language",
  "Level": "beginners",
  "Write": "Tamil,English,Hindi",
  "Read": "Tamil,English,Hindi",
  "Speak": "Tamil,Englisg",
  "Hobbies": "football,reading books",

  }
 

const foo = Object.entries(resume);
// console.log(foo)

// Using for Loop:

for (var j = 0; j < foo.length; j++) {
  console.log(`${foo[j]}`);
 
}