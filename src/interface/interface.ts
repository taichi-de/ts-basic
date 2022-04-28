interface Bread {
    calories: number
    type: string
}

const francePan: Bread = {
    calories: 300,
    type: 'hard'
}

// alias
type MaboDofu = {
    calories: number
    spicyLevel: number
}

type Rice = {
    calories: number
    gram: number
}

type MaboDon = MaboDofu & Rice // union

const maboDon: MaboDon = {
    calories: 500,
    spicyLevel: 10,
    gram: 350
}

interface Book {
    page: number
    title: string
}

interface Magazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly'
}

const jump: Magazine = {
    page: 300,
    title: '週刊少年ジャンプ',
    cycle: 'weekly'
}

// interface implements
class Comic implements Book {
    page: number
    title: string

    constructor(page: number, title: string, private publishYear: string) {
        this.page = page,
        this.title = title
    }

    getPublishYear() {
        return this.title + "is published in " + this.publishYear
    }

}
const popularComic = new Comic(200, "鬼滅の刃", "2021")
console.log(popularComic.getPublishYear())