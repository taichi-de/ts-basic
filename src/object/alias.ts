export default function typeAliasSample() {
    type Country = {
        capital: string
        language: string
        name: string
    }

    const japan: Country = {
        capital: "Tokyo",
        language: "Japanese",
        name: "Japan"
    }
    console.log("Object alias sample1:", japan)

    const america: Country = {
        capital: "Washington, D.C",
        language: "English",
        name: "USA"
    }
    console.log("Object alias sample2:", america)

    // Union & Intersection
    type Knight = {
        hp: number
        sp: number
        weapon: string
        swordSkill: string
    }

    type Wizard = {
        hp: number
        mp: number
        weapon: string
        magicSkill: string
    }

    type Adventurer = Knight | Wizard // Union

    type Paladin = Knight & Wizard // Intersection

    const adventurer1: Adventurer = { // like Knight
        hp: 100,
        sp: 30,
        weapon: "Fire Sword",
        swordSkill: "Flame Slash",
    }

    const adventurer2: Adventurer = { // like Wizard
        hp: 100,
        mp: 30,
        weapon: "wood stick",
        magicSkill: "Fire ball",
    }

    console.log("Object alias sample3:", adventurer1)
    console.log("Object alias sample4:", adventurer2)

    const paradin: Paladin = {
        hp: 300,
        sp: 100,
        mp: 100,
        weapon: "Silver Sword",
        swordSkill: "Flame Slash",
        magicSkill: "Fire ball",
    }
    console.log("Object alias sample5:", paradin)

}