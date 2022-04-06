// console.log('Hello World');
// const election = ['razzak', 'alomir', 'jayed', 'jayed', 'nepun', 'jayed']
// const eletion2 = {
//     razzak = 1,
//     alomir = 1,
//     jashim = 1,
//     jayed = 4
// }
let db = {};
const addToDb = item => {
    // db[item] = 1;
    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }
    // console.log(db);
    localStorage.setItem('learn web', JSON.stringify(db));

    // local storage liker niyom
    /* 
        1. localStorage.setItem(key, value);
        2. object store korte caile tkn
        sorasori object store kora jabe nh tar jonno
        localStroage.setItem(key, JSON.stringify(object name))
        eita tkn string hisabe takbe r dakabe oita k object korar jonno
        3.JSON.parse(localStroage.setItem(key, JSON.stringify(object name)))
        4. localStorge take data nite caile
        localStorage.getItem('key name');
    */
}
// Add to data
const storedTracker = localStorage.getItem('learn web');
if(storedTracker){
    db = JSON.parse(storedTracker);
}
// remove item
const removeItem = item => {
    const storeTrackerRemove = localStorage.getItem('learn web');
    if(storeTrackerRemove){
        const storedObject = JSON.parse(storeTrackerRemove);
        delete storedObject[item];
        localStorage.setItem('learn web', JSON.stringify(storedObject))
    }
}