export default function objectSample(){
    const a: object = {
        name: 'tratra',
        age: 28
    }

    // object literal
    let country: {
        language: string
        name: string
    } = {
        language: "japanese",
        name: "Japan"
    }
    console.log("Object object sample 1:", country)

    country = {
        language: "English",
        name: "USA"
    }
    console.log("Object object sample 2:", country)

    //optional readonly
    const taichi: {
        age: number
        lastName: string
        readonly firstName: string
        hobby?: string
    } = {
        age: 26,
        lastName: "Tomi",
        firstName: "Taichi",
    }

    taichi.hobby = "reading"
    // taichi.firstName = "Joe"
    taichi.lastName = "Sato"
    console.log("Object object sample3:", taichi)


    // index signature
    const capitals: {
        [countryName: string]: string
    } = {
        Japan: "Japan",
        Korea: "Seoul"
    }

    capitals.China = "Beijing"
    capitals.Canada = "Ottawa"

    console.log("Object object sample4:", capitals)
}