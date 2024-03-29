function generateEngineerCard(engineer) {
    return `
     <div class="col">
      <div class="card">
       <div class="card-body">
         <h5 class="card-title">${engineer.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
            <p class="card-text">ID: ${engineer.id}</p>
            <p>Github: <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a> </p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a> </p>                 
       </div>
      </div>
     </div>
         `
 }

 function generateInternCard(intern) {
    return `
    <div class="col">
    <div class="card">
     <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
        <p class="card-text">ID: ${intern.id}</p>
        <p class="card-text">School: ${intern.school}</p>
        <p class="card-text">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a> </p>                  
      </div>
     </div>
    </div> `
 }
 
function generateManager(manager) {
 return `
  <div class="col">
    <div class="card">
     <div class="card-body">
      <h5 class="card-title"> ${manager.name} </h5>
         <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Office Number: ${manager.officeNum}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></p>                   
     </div>
    </div>
  </div> `
 }

 function generateHTML(data) {
    const teamcardsArray = [];
    for (var i=0; i < data.length; i++ ) {
       const employee = data[i];
       const role = employee.getRole();
       if (role === 'Manager') {
          const managerCard = generateManager(employee);
          teamcardsArray.push(managerCard);
       }
       if (role === 'Intern') {
          const internCard = generateInternCard(employee);
          teamcardsArray.push(internCard);
       }
       if (role === 'Engineer') {
          const engineerCard = generateEngineerCard(employee);
          teamcardsArray.push(engineerCard);
       }
    }
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Team Profile</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        </head>
        <body>
        <nav class="navbar navbar-dark bg-danger justify-content-center">
        <h1 class="navbar-brand" style="font-size: 40px;" justify-content-center>Team A</h1>
       </nav>
        <div class="container mt-2">
          <div class="row row-cols-1 row-cols-sm-3 g-4">
            ${teamcardsArray.join(' ')}    
            </div>
            </div>      
        </body>
    </html>`
 }
 module.exports = generateHTML