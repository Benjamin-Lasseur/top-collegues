export class Collegue {

    constructor(private _nom: string, private _urlImg: string, private _score:number) {
    }

    get nom(): string {
        return this._nom
    }

    get urlImg(): string {
        return this._urlImg
    }

    get score(): number {
        return this._score
    }

    set score(newScore:number){
        this._score=newScore
    }
}
