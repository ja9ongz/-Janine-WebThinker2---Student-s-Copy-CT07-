let calculateBMI = (height, weight) => {
   const bmi = weight / (height ** 2);
   return bmi;
};

/*let onCalcBMIPress = () => {
  let height = document.getElementById("height-m").value;
  let weight = document.getElementById("weight-m").value;
  let bmi = calculateBMI(height,weight);
  console.log(bmi);
  document.getElementById("results").innerHTML = "Your BMI is: " + bmi;
};*/

let onCalcBMIPress = () => {
   let height = $("#height-m").val();
   let weight = $("#weight-m").val();
   let bmi = calculateBMI(height, weight);

   $("#results").empty();
   $("#results").append("<p class='mb-0'>Your BMI is: " + bmi.toFixed(1) + "</p>");
   
   if (bmi < 18.5) {
      $("#results").append("Hello Skinny, eat more to grow").addClass("bg-danger");
   }
   else if (bmi < 25) {
      $("#results").append("Hello healthy, you are doing well").addClass("bg-success");
   }
   else if (bmi < 39) {
      $("#results").append("You should start shaking off with workout").addClass("bg-warning");
   }
   else {
      $("#results").append("Shake it off for a healthier and longer life").addClass("bg-danger");
   }
};




