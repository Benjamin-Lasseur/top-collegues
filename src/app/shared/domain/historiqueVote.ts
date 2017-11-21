import { Collegue } from "./collegue";

export class HistoriqueVote {
    constructor(public id: number, public collegue: Collegue, public aimer: boolean) {
    }
}