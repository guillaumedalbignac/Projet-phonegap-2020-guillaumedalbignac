class VueObjet{
	constructor(){
		this.html = document.getElementById("html-vue-objet").innerHTML;
		this.objet = null;
	}	
	initialiserObjet(objet){
		this.objet = objet;
	}
	afficher(){
		document.getElementsByTagName("body")[0].innerHTML = this.html;	

		document.getElementById("objet-nom").innerHTML = this.objet.nom;
		document.getElementById("objet-marque").innerHTML = this.objet.marque;
		document.getElementById("objet-description").innerHTML = this.objet.description;
	}
}