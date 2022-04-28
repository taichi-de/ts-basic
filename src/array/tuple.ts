export default function tupleSample() {
    const response: [number, string] = [200, "OK"]
    // response = ["400", "Bad Request"]
    console.log("Array tuple sample1:", response)

    // rest parameters
    const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"]
    girlfriends.push("Misa")
    console.log("Array tuple sample2:", girlfriends)
}