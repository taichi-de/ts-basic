export default function arraySample() {
    const colors: string[] = ["red", "blue"]
    colors.push("yellow")
    console.log("Array array sample 1:", colors)

    const even: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9]
    even.push(12)

    // imutable array
    const commands: readonly string[] = ["git add", "git commit", "git push"]
    // commands.push("git fetch")
    console.log("Array array sample2:", commands)

}