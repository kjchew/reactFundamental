const ENDPOINT = 'http://localhost:3000/profiles'

export function getProfiles(){
    return fetch(ENDPOINT)
    .then(data => data.json())
    .catch(err => console.error(err))
}

export function postProfiles(){
    return fetch(ENDPOINT)
    .then(data => data.json())
    .catch(err => console.error(err))
}