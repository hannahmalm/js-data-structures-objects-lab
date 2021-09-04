// Write your solution in this file!

// create a constant driver as an empty object
const driver = {};
//function should take 3 arguments - driver, object, key, value
//function should not mutate the driver and should return a new driver that has an updated value for key
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]:value});
//asing the object a blank new object called driver with a new key value pair
}

//function should work the same as above but should mutate the driver parameter passed in 
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
//driver = object 
//object[key] = value
//return object    
driver[key] = value;
return driver;
}

//function should take in a driver object and  akey, it should delete key value pair for the key 
//Should not muteate the driver passed in - non destructive
//whenever doing non-destructive, assign a const newObj 
//Object.assign({}, driver)
function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}


//function should work the same as above but should mutate the driver
//this is destructive = aka just replacing the driver
function destructivelyDeleteFromDriverByKey(driver,key){
    delete driver[key];
    return driver;
}