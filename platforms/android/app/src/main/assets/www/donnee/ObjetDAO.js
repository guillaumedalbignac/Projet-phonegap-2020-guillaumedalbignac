class ObjetDAO{
	constructor(){
		/*
		this.listeObjet = [
		{nom:"Peigne", marque:"Carrefour", description:"Permet d'avoir la meilleur coupe", id:0},
		{nom:"Serviette de plage", marque:"Auchan", description:"Fini le sable dans les orteils", id:1},
		{nom:"Gel douche", marque:"Adidas", description:"Pour se sentir bien propre", id:2} ]
		*/

		this.listeObjet = [];
	}
	lister(){
		if(localStorage['objet']){
			this.listeObjet = JSON.parse(localStorage['objet']);
		}

		for(let position in this.listeObjet){
			let objet = new Objet(this.listeObjet[position].nom,
								  this.listeObjet[position].marque,
								  this.listeObjet[position].description,
								  this.listeObjet[position].id);

			this.listeObjet[objet.id] = objet;
		}
		return this.listeObjet;
	}
	ajouter(objet){
		//il faut ici attribuer un id à l'objet
		if(this.listeObjet.length > 0)
			objet.id = this.listeObjet[this.listeObjet.length-1].id + 1;
		else
			objet.id = 0;

		this.listeObjet[objet.id] = objet;	

		localStorage['objet'] = JSON.stringify(this.listeObjet);
		console.log("JSON.stringify(this.listeObjet) : " + 
		JSON.stringify(this.listeObjet));
	}
}