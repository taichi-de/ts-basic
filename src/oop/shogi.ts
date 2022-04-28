type Player = 'first' | 'second';
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

class Position {
    constructor(private suji: Suji, private dan: Dan) {}

    distanceFrom(position: Position, player: Player) {
        if(player === 'first') {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: Math.abs(Number(position.dan) - Number(this.dan))
            }
        } else {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: -Math.abs(Number(position.dan) - Number(this.dan))
            }
        }
    }
}

abstract class Piece {
    protected position: Position

    constructor(private readonly player: Player, suji: Suji, dan: Dan) {
        this.position = new Position(suji, dan)
    }

    moveTo(position: Position) {
        this.position = position
    }

    abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        return distance.suji < 2 && distance.dan < 2
    }
}

class Fu extends Piece {
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        return distance.suji === 0 && distance.dan === 1
    }
}

class NariKin extends Fu {
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        return (
            distance.suji < 2 &&
            distance.dan < 2 &&
            distance.suji !== 0 &&
            distance.dan === -1
        )
    }
}

class Game {
    private pieces = Game.makePieces()
    private static makePieces() {
        return [
            new Osho('first', 5, '1'),
            new Osho('second', 5, '9'),

            new Fu('first', 1, '3'),
            new Fu('first', 2, '3'),
            new Fu('first', 3, '3'),
            new Fu('first', 4, '3'),
            new Fu('first', 5, '3'),
            new Fu('first', 6, '3'),
            new Fu('first', 7, '3'),
            new Fu('first', 8, '3'),
            new Fu('first', 9, '3'),

            new Fu('second', 1, '7'),
            new Fu('second', 2, '7'),
            new Fu('second', 3, '7'),
            new Fu('second', 4, '7'),
            new Fu('second', 5, '7'),
            new Fu('second', 6, '7'),
            new Fu('second', 7, '7'),
            new Fu('second', 8, '7'),
            new Fu('second', 9, '7'),
        ]
    }
}

new Game()