//document.getElementById('id01').style.display='none'" 

//const button = function button();

const baseUrl = 'http://localhost/8080';

const getEspaces = function(){
	const espaceUri = '/all'; // là je mets mon endpoint
	axios.get(baseUrl+espaceUri)
   // on rajoute l'uri à la base qui sera toujours la même
   //http://localhost/8080/all/
  	.then(function (response) {
    	// Ici je vais récuprer tous les espaces
    	console.log('response :', response);
  	})
  	.catch(function (error) {
    	// La je vais gerer s'il y a une erreur
    	console.log('erreur :', error);
  	})
  	.then(function () {
    	// cette partie va s'exécuter dans tous les cas
  	});

    //une fois que je recupere les objets
    //faut afficher avec jquery
};

