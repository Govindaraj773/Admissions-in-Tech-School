
document.querySelector("form").addEventListener("Submit", FormFunc);

function FormFunc(event){
   event.preventDefault();

   let studentObj={
      name:document.querySelector("#name").value,
      email:document.querySelector("#mail").value,
      number:document.querySelector("#numb").value,
      gender:document.querySelector("#gender").value,
      course:document.querySelector("#course").value,
   };
   console.log(studentObj);
}