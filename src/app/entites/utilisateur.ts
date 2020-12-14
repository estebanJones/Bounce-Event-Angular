export class Utilisateur {
	id: number;
	nom: string;
	prenom: string;
	email: string;
	password: string;
	roles: string[];

	constructor(params: any) {
		Object.assign(this, params);
	}

	estAnonyme() : boolean {
		return this.email === undefined;
	}
}
