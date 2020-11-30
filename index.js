var empty = [];
fetch("https://api-of-cars.herokuapp.com")
  // fetch("http://localhost:3000")
  .then(response => response.json())
  .then(json => {

    document.getElementById("myBtn").addEventListener("click", function () {
      document.getElementById("myBtn").disabled = true;
      document.getElementById("show").disabled = true;
      var data = document.getElementById("input").value;
      const result = json.filter(function (word) {
        var cond = word.name.toLowerCase();
        return cond.includes(data.toLowerCase());
      });
      getData(result);
      console.log(result);
    });
    document.getElementById("reset").addEventListener("click", function () {
      document.getElementById("myBtn").disabled = false;
      document.getElementById("show").disabled = true;
      location.reload();
    });
    document.getElementById("show").addEventListener("click", function () {
      document.getElementById("myBtn").disabled = true;

      getData(json)


    });
  });





// location.reload();


















































// getData(json);
// document.getElementById("myBtn").addEventListener("click", function () {
//   var data = document.getElementById("input").value;
//   const result = json.filter(function (word) {
//     var cond = word.name.toLowerCase();
//     return cond.includes(data.toLowerCase());
//   });
//   console.log(result);
// });




// getData(json);
// document.getElementById("myBtn").addEventListener("click", function () {
//   var data = document.getElementById("input").value;
//   if (String(data).length == 0) {
//     console.log("search field is rmpty");
//     getData(json)
//   } else {
//     var data = document.getElementById("input").value;
//     const result = json.filter(function (word) {
//       var cond = word.name.toLowerCase();
//       return cond.includes(data.toLowerCase());
//     });
//     if (result.count >> 0) {
//       getData(result)
//     } else {
//       getData(json);
//       alert(`nothing about ${data}`)
//     }
//   }
// });




























































function getData(json) {
  json.forEach(jsonElement => {
    var item = document.createElement("div");
    var content =
      `
          <br><br>
          <center>
          <div class="card" style="width:400px">
          <img class="card-img-top" style="width:80px;height:60px" src="companyLogo" alt="Card image">
          <div class="card-body">
          <h4 class="card-title">companyName</h4>
          <div class="row">
          <div class="col-lg-12">
          from name : <img class="card-img-top" style="height:40px;width:40px;border-radius:200px;" src="countryFlag" alt="Card image">
          <br><br>
          </div>
          <div class="col-lg-12">
          <a href="companyLink" class="btn btn-danger">directedLink</a>
          </div>
          </div>
          </div>
          </div>
          </center><br><br>
        `
    var test = content.replace("countryFlag", jsonElement.natioanlity[0].flag);
    test = test.replace("companyName", jsonElement.name);
    test = test.replace("companyLogo", jsonElement.logo);
    test = test.replace("companyLink", jsonElement.link);
    test = test.replace("name", jsonElement.natioanlity[0].country);
    test = test.replace("directedLink", `${jsonElement.name} website`);


    item.innerHTML = test;
    item.className = "col-lg-6 col-sm-12";
    document.getElementById("list").appendChild(item);


  });
};



























// fetch("http://localhost:3000")
//   .then(response => response.json())
//   .then(json => {
//     json.forEach(jsonElement => {
//       var item = document.createElement("div");

//       var content =
//         `
//         <br><br>
//         <center>
//         <div class="card" style="width:400px">
//         <img class="card-img-top" style="width:80px;height:60px" src="companyLogo" alt="Card image">
//         <div class="card-body">
//         <h4 class="card-title">companyName</h4>
//         <div class="row">
//         <div class="col-lg-12">
//         from name : <img class="card-img-top" style="height:40px;width:40px;border-radius:200px;" src="countryFlag" alt="Card image">
//         <br><br>
//         </div>
//         <div class="col-lg-12">
//         <a href="companyLink" class="btn btn-danger">directedLink</a>
//         </div>
//         </div>
//         </div>
//         </div>
//         </center><br><br>
//       `
//       var test = content.replace("countryFlag", jsonElement.natioanlity[0].flag);
//       test = test.replace("companyName", jsonElement.name);
//       test = test.replace("companyLogo", jsonElement.logo);
//       test = test.replace("companyLink", jsonElement.link);
//       test = test.replace("name", jsonElement.natioanlity[0].country);
//       test = test.replace("directedLink", `${jsonElement.name} website`);


//       item.innerHTML = test;
//       item.className = "col-lg-6 col-sm-12";
//       document.getElementById("list").appendChild(item);

//     })
//   });

// document.getElementById("myBtn").addEventListener("click", function () {
//   var data = document.getElementById("input").value;
//   alert(data)
// });







//good code

// document.getElementById("myBtn").addEventListener("click", function () {
//   var data = document.getElementById("input").value;
//   // const result = json.filter(function (word) {
//   //   var cond = word.name
//   //   return cond.includes(data);
//   // });
//   // console.log(result);
//   console.log(json.filter(function(item){
//     return item.name == data;         
// }));
// })



 //   console.log(json.filter(function(item){
    //     return (item.name).toLowerCase() == data.toLowerCase();         
    // }));
    // var filteredData = json.filter(function(item){
    //   return (item.name).toLowerCase() == data.toLowerCase();
    // });
    // console.log(filteredData);