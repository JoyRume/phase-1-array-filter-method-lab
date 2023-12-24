// Code your solution here


function findMatching(drivers,names){
 return drivers.filter(drivers=>drivers.toLowerCase()===names.toLowerCase())
}


//function fuzzyMatch(driver ,firstName){
   // return driver.filter(driver=>driver.firstName.startWith(firstName))

//}


const fuzzyMatch = (driver, firstName) =>{
    return driver.filter(driver => 
    driver.indexOf(firstName) === 0);
}

function matchName(driver,name ,homeTown){
    return driver.filter(driver=>driver.name===name && driver.homeTown===homeTown)

}
