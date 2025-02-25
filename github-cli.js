#!/usr/bin/env node
console.log('github cli implemented')
const userName = process.argv[2]
console.log(userName)




const fetchDataForUser = async(userNameHere) => {
    if(userNameHere === '' || typeof userNameHere !== String) {
        console.log('Invalid username provided', userNameHere)
        return;
    }
    const data = await fetch(`https://api.github.com/users/${userNameHere}/events`)
    const response = await data.json()
    console.log(response)
}

fetchDataForUser(userName)


