// optional parameters
export const isUserSignedIn = (userId: string, username?: string): boolean => {
    if(userId === 'ABC') {
        console.log('Function parameters sample 1: User is signed in! Username is:', username)
        return true
    }else{
        console.log('Function parameters sample 1: User is not signed in.')
        return false
    }
}

//default parameters
export const isUserSignedIn2 = (userId: string, username: "NO NAME"): boolean => {
    if(userId === 'ABC') {
        console.log('Function parameters sample 2: User is signed in! Username is:', username)
        return true
    }else{
        console.log('Function parameters sample 2: User is not signed in.')
        return false
    }
}

// rest parameters
export const sumProductsPrice = (...productsPrice: number[]): number => {
    return productsPrice.reduce((prevTotal, productPrice) => {
        return prevTotal + productPrice
    }, 0)
}