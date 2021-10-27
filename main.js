const JSON_USERS = JSON.stringify([
    {
        "_id": "605acace4ab389d8ed54c496",
        "age": 35,
        "name": {
            "last": "Hensley",
            "first": "Dollie"
        },
        "email": "dollie.hensley@undefined.org",
        "index": 0,
        "phone": "+1 (904) 421-3160",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaceed1f0e1cfa1eee67",
        "age": 21,
        "name": {
            "last": "Hunt",
            "first": "Dolores"
        },
        "email": "dolores.hunt@undefined.com",
        "index": 1,
        "phone": "+1 (967) 432-2905",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acacefedd0fe77874d78f",
        "age": 28,
        "name": {
            "last": "Pennington",
            "first": "Milagros"
        },
        "email": "milagros.pennington@undefined.net",
        "index": 2,
        "phone": "+1 (922) 492-2085",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace6d3f84fc9b40849f",
        "age": 32,
        "name": {
            "last": "Anderson",
            "first": "Myrtle"
        },
        "email": "myrtle.anderson@undefined.biz",
        "index": 3,
        "phone": "+1 (858) 404-3273",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace06d24518b6419d23",
        "age": 29,
        "name": {
            "last": "York",
            "first": "Terry"
        },
        "email": "terry.york@undefined.co.uk",
        "index": 4,
        "phone": "+1 (816) 492-3475",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace46f0669738455d6b",
        "age": 38,
        "name": {
            "last": "Bridges",
            "first": "Effie"
        },
        "email": "effie.bridges@undefined.info",
        "index": 5,
        "phone": "+1 (856) 423-3786",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace5ab5217354268532",
        "age": 26,
        "name": {
            "last": "Walter",
            "first": "Krista"
        },
        "email": "krista.walter@undefined.me",
        "index": 6,
        "phone": "+1 (849) 513-2888",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaced68677a5dca08a9b",
        "age": 20,
        "name": {
            "last": "Buchanan",
            "first": "Gomez"
        },
        "email": "gomez.buchanan@undefined.biz",
        "index": 7,
        "phone": "+1 (888) 494-2462",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaceb7ece55cb38e546a",
        "age": 20,
        "name": {
            "last": "Potter",
            "first": "Caitlin"
        },
        "email": "caitlin.potter@undefined.io",
        "index": 8,
        "phone": "+1 (801) 514-3055",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace98de45687c4c6279",
        "age": 26,
        "name": {
            "last": "Dillon",
            "first": "Guzman"
        },
        "email": "guzman.dillon@undefined.ca",
        "index": 9,
        "phone": "+1 (857) 407-2403",
        "picture": "http://placehold.it/32x32"
    }
]);

const OBJ_USERS = JSON.parse(JSON_USERS);

// **********************************___1___************************************
const getArray = (json) => {
    return new Promise((resolve, reject) => {
        OBJ_USERS.length > 0 ? resolve(OBJ_USERS) : reject({ "massage": "error" });
    })
}
//! getArray(JSON_USERS)
//!     .then((res)=>{console.log(res);})
//!     .catch((rej)=>{console.log(rej);})

const getArrayAsync = async (json) => {
    try {
        showGif();
        return await getArray(json)
    }
    catch (err) {
        return err;
    }
}
//! getArrayAsync(JSON_USERS)
//!     .then((res) => { console.log(res); })
//!     .catch((rej) => { console.log(rej); })
// **********************************___1___************************************



// **********************************___2___************************************
const getByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let item of OBJ_USERS) {
                if (item._id == userId) resolve(item);
            }
            reject({ "massage": "no user with that id" })
        }, 2000)
    })
}
//! getByUserId("605acace5ab5217354268532")
//!     .then((res) => { console.log(res); })
//!     .catch((rej) => { console.log(rej); });

const getByUserIdAsync = async (userId) => {
    try {
        showGif();
        return await getByUserId(userId)
    }
    catch (err) {
        return err
    }
}
//! getByUserIdAsync("605acace5ab5217354268532")
//!     .then((res) => { console.log(res); })
//!     .catch((rej) => { console.log(rej); });
// **********************************___2___************************************



// **********************************___3___************************************
const getByUserEmail = (userEmail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let item of OBJ_USERS) {
                if (item.email == userEmail) resolve(item);
            }
            reject({ "massage": "no user with that email" })
        }, 3000)
    })
}
//! getByUserEmail("terry.york@undefined.co.uk")
//!     .then((res) => { console.log(res); })
//!     .catch((rej) => { console.log(rej); });

const getByUserEmailAsync = async (userEmail) => {
    try {
        showGif();
        return await getByUserEmail(userEmail);
    }
    catch (err) {
        return err;
    }
}
//! getByUserEmailAsync("terry.york@undefined.co.uk")
//!     .then((res) => { console.log(res); })
//!     .catch((rej) => { console.log(rej); })
// **********************************___3___************************************



// **********************************___4___************************************
const getOldUsers = (age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const oldUsersArray = [];
            for (let item of OBJ_USERS) {
                if (item.age > age) oldUsersArray.push(item);
            }
            oldUsersArray.length > 0 ? resolve(oldUsersArray) : reject({ "massage": "no users older than that" });
        }, 1000)
    })
}
//! getOldUsers(30)
//!     .then((res)=>{console.log(res);})
//!     .catch((rej)=>{console.log(rej);})

const getOldUsersAsync = async (age) => {
    try {
        showGif();
        return await getOldUsers(age);
    } catch (err) {
        return err;
    }
}
//! getOldUsersAsync(30)
//!     .then((res) => { console.log(res); })
//!     .catch((rej) => { console.log(rej); })
// **********************************___4___************************************



// **********************************___5___************************************
const getSameName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sameNameArray = [];
            for (let item of OBJ_USERS) {
                if (item.name.first == name) sameNameArray.push(item);
            }
            sameNameArray.length > 0 ? resolve(sameNameArray) : reject({ "massage": "no user with that name" })
        }, 4000)
    })
}
//! getSameName("Effie")
//!     .then((res)=>{console.log(res);})
//!     .catch((rej)=>{console.log(rej);})

const getSameNameAsync = async (name) => {
    try {
        showGif()
        return await getSameName(name);
    }
    catch (err) {
        return err;
    }
}
//! getSameNameAsync("Effie")
//!     .then((res) => { console.log(res); })
//!     .catch((rej) => { console.log(rej); });
// **********************************___5___************************************



// **********************************___6___************************************

const showGif = () => {
    searchDiv.innerHTML = `<img id="spinnerGif" src="./spinner-icon-gif.jpg" alt="">`;
}
const stopGif = () => {
    spinnerGif.style.display = "none";
}
const printInfo = (obj) => {
    for (let key in obj) {
        searchDiv.innerHTML += `<p>${key} - ${obj[key]}</p>`
    }
}

searchBtn.onclick = () => {
    switch (searchSelect.value) {
        case "idSelect":
            getByUserIdAsync(searchInput.value)
                .then((res) => { printInfo(res) })
                .catch((rej) => { console.log(rej); })
                .finally(() => { stopGif() })
            break;
        case "nameSelect":
            getSameNameAsync(searchInput.value)
                .then((res) => { printInfo(res); })
                .catch((rej) => { console.log(rej); })
                .finally(() => { stopGif() })
            break;
        case "emailSelect":
            getByUserEmailAsync(searchInput.value)
                .then((res) => { printInfo(res); })
                .catch((rej) => { console.log(rej); })
                .finally(() => { stopGif() })
            break;
        default:
            break;
    }
}
