class VueModifierObjet{
	constructor(){
		this.html = document.getElementById("html-vue-modifier-objet").innerHTML;		
		this.objet = null;
		this.listeObjetDonnee = null;
	}
	initialiserObjet(listeObjetDonnee, objet){
		this.listeObjetDonnee = listeObjetDonnee;
		this.objet = objet;
	}
	afficher(objet){
		document.getElementsByTagName("body")[0].innerHTML = this.html;	

		this.listeObjetDonnee[objet] = JSON.parse(localStorage['objet']);
		console.log(this.listeObjetDonnee[objet]);

		let listeObjet = document.getElementById("liste-objet");
		const listeObjetItemHTML = listeObjet.innerHTML;
		let listeObjetHTMLRemplacement = " ";

		let listeObjetItemHTMLRemplacement = listeObjetItemHTML;
		listeObjetItemHTMLRemplacement = 
		listeObjetItemHTMLRemplacement.replace("{Objet.id}", this.listeObjetDonnee[0].id);
		listeObjetHTMLRemplacement = listeObjetItemHTMLRemplacement;
		console.log(listeObjetHTMLRemplacement);
		
		listeObjet.innerHTML = listeObjetHTMLRemplacement;
		console.log(listeObjet.innerHTML);

		document.getElementById("objet-nom").innerHTML = this.objet.nom;
		document.getElementById("objet-marque").innerHTML = this.objet.marque;
		document.getElementById("objet-description").innerHTML = this.objet.description;
		
	}
}