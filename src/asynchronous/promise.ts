export default function promiseSamples() {
    const url = 'https://api.github.com/users/taichi-de'

    type Profile = {
        login: string
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile: FetchProfile = () => {
        return new Promise((resolve, reject) => {
            return fetch(url)
            .then((res) => {
                res.json()
                    .then((json) => {
                        console.log("Asynchronous promise sample1:", json)
                        resolve(json)
                    })
                    .catch((error) => {
                        console.error(error)
                        reject(null)
                    })
                })
            .catch((error) => {
                console.error(error)
                reject(null)
            })
        })
    }

    fetchProfile()
        .then((profile: Profile | null) => {
            if(profile) {
                console.log("Asynchronous promise sample2:", profile)
            }
        })
        .catch
}