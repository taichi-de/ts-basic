export default function genericsBasicSample() {
    const stringReduce = (array: string[], initialValue: string): string => {
        let result = initialValue
        for(let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log("Generics basic sample1:", stringReduce(["dog", "cat", "elephant", "sneak"] ,""))

    const numberReduce = (array: number[], initialValue: number): number => {
        let result = initialValue
        for(let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log("Generics basic sample2:", numberReduce([10, 20, 30, 40] ,0))

    type GenericReduce<T> = {
        (array: T[], initialValue: T): T
    }

    const genericStringReduce: GenericReduce<string> = (array, initialValue: string) => {
        let result = initialValue
        for(let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log("Generics basic sample3:", genericStringReduce(["dog", "cat", "elephant", "sneak"] ,""))

}