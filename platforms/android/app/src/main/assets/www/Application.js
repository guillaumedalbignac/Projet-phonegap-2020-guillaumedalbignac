class Application{
	constructor(window, objetDAO, vueListeObjet, vueAjouterObjet, vueObjet, vueModifierObjet){
		this.window = window;
		this.objetDAO = objetDAO;

		this.vueListeObjet = vueListeObjet;

		this.vueAjouterObjet = vueAjouterObjet;
		//C'est l'équivalent de funtion(objet){this.actionAjouterObjet(objet)}
		this.vueAjouterObjet.initialiserActionAjouterObjet(objet =>this.actionAjouterObjet(objet));

		this.vueModifierObjet = vueModifierObjet;

		this.vueObjet = vueObjet;

		//c'est l'équivalent de function(){this.naviguer()}
		this.window.addEventListener("hashchange", () =>this.naviguer());

        document.addEventListener('deviceready', () =>this.initialiserNavigation(), false);
	}

	initialiserNavigation(){
	    console.log("Application-->initialiserNavigation()");
	    //C'est l'équivalent de function(){this;naviguer()}
	    this.window.addEventListener("hashchange", () =>this.naviguer());

	    setTimeout(() =>this.naviguer(), 3000);
	    //this.naviguer();
	}

	naviguer(){
		let hash = window.location.hash;

		if(!hash){
			this.vueListeObjet.initialiserListeObjet(this.objetDAO.lister());
			this.vueListeObjet.afficher();
		}
		else if(hash.match(/^#ajouter-objet/)){

			this.vueAjouterObjet.afficher();

		}else if(hash.match(/^#modifier\/{Objet.id}/)){  

			///^#modifier\/([0-9]+)/
			//let navigation = hash.match(/^#modifier\/([0-9]+)/);
			//let idObjet = navigation[1];

			this.vueModifierObjet.initialiserObjet(this.objetDAO.lister(), this.objetDAO.lister()[0]);
			this.vueModifierObjet.afficher();

		}else if(hash.match(/^#objet\/([0-9]+)/)){

			let navigation = hash.match(/^#objet\/([0-9]+)/);
			let idObjet = navigation[1];

			this.vueObjet.initialiserObjet(this.objetDAO.lister()[idObjet]);
			this.vueObjet.afficher();

		}else{

			this.vueListeObjet.initialiserListeObjet(this.objetDAO.lister());
			this.vueListeObjet.afficher();

		}

	}
	actionAjouterObjet(objet){
		this.objetDAO.ajouter(objet);
		this.window.location.hash = "#";
	}
}

new Application(window, new ObjetDAO(), new VueListeObjet(), new VueAjouterObjet(), new VueObjet(), new VueModifierObjet());