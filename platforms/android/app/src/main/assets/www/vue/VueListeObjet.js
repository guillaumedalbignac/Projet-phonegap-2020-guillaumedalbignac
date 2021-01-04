class VueListeObjet{
	constructor(){
		this.html = document.getElementById("html-vue-liste-objet").innerHTML;
		this.listeObjetDonnee = null;
	}
	initialiserListeObjet(listeObjetDonnee){
		this.listeObjetDonnee = listeObjetDonnee;
	}
	afficher(){
		document.getElementsByTagName("body")[0].innerHTML = this.html;

		let listeObjet = document.getElementById("liste-objet");
		const listeObjetItemHTML = listeObjet.innerHTML;
		let listeObjetHTMLRemplacement = " ";

		for(var numeroObjet in this.listeObjetDonnee){
			let listeObjetItemHTMLRemplacement = listeObjetItemHTML;
			listeObjetItemHTMLRemplacement = 
			listeObjetItemHTMLRemplacement.replace("{Objet.id}", this.listeObjetDonnee[numeroObjet].id);
			listeObjetItemHTMLRemplacement = 
			listeObjetItemHTMLRemplacement.replace("{Objet.nom}", this.listeObjetDonnee[numeroObjet].nom);
			listeObjetHTMLRemplacement += listeObjetItemHTMLRemplacement;
		}
			
		listeObjet.innerHTML = listeObjetHTMLRemplacement;
	}
}

