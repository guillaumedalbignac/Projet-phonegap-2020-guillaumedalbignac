class VueAjouterObjet{
	constructor(){
		this.html = document.getElementById("html-vue-ajouter-objet").innerHTML;
		this.actionAjouterCadeau = null;
	}
	initialiserActionAjouterObjet(actionAjouterCadeau){
		this.actionAjouterCadeau = actionAjouterCadeau;
	}
	afficher(){
		document.getElementsByTagName("body")[0].innerHTML = this.html;
		document.getElementById("formulaire-ajouter").addEventListener("submit",
																		evenement =>this.enregistrer(evenement));
	}
	enregistrer(evenement){
		evenement.preventDefault();

		let nom = document.getElementById("objet-nom").value;
		let marque = document.getElementById("objet-marque").value;
		let description = document.getElementById("objet-description").value;

		this.actionAjouterCadeau(new Objet(nom, marque, description, null)); 
	}
}