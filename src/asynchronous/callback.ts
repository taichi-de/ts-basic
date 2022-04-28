export default function callbackSample() {
    const url = 'https://api.github.com/users/taichi-de'

    const fetchProfile = () => {
        return fetch(url)
            .then((res) => {
                res.json()
                    .then((json) => {
                        console.log("Asynchronous Callback sample1:", json)
                        return json
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
        .catch((error) => {
            console.error(error)
        })
    }

    const profile = fetchProfile()
    console.log("Asynchronous Callback sample2:", profile)
}