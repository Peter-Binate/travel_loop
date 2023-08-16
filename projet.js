var i = 0;
	var TousMesFonds = [];
	var time = 5000;			

	//Tableau contenant tous mes fonds
	var TousMesFonds = [
		'https://i.pinimg.com/474x/49/ba/64/49ba64b52cb2f1dfc042f458ad000e6d.jpg',
		'https://media.giphy.com/media/13UmyeIvLDUVmU/giphy.gif',
		'https://i.pinimg.com/originals/43/2d/5c/432d5c27dc56cf23c7d2b386bd57378e.gif',
		'https://media1.giphy.com/media/ZisNY4BVMK6Os/source.gif',
		'https://i.pinimg.com/564x/aa/f2/5d/aaf25d9d770be7f8391ae0920a1844cb.jpg',
		'https://media.giphy.com/media/MNYsZ7FuxSVUI/giphy.gif',
		'https://i.giphy.com/media/bRbE8pfiQkpkA/giphy.webp',
		'https://media.giphy.com/media/zJfzvccEqkAms/giphy.gif',
		'https://i.pinimg.com/originals/af/54/2d/af542d89a7722b3ba7d078247d3314fe.gif',
		'https://66.media.tumblr.com/645caf0df1fae12e7aedae1d7b904f98/tumblr_p5e9kvkEud1qciqqno6_640.png',
		'https://i.pinimg.com/originals/90/7e/28/907e28ad681d67a5b2139e7026ac1d78.gif',
		'https://cdn.wallpapersafari.com/17/41/5tYhJN.jpg',
		'https://media1.tenor.com/images/eae6f1495ce0806d5ad69c0b7b887d4d/tenor.gif?itemid=5695511',
		'https://wallpaperaccess.com/full/785498.gif',
		'https://thumbs.gfycat.com/HelplessPlainAsianporcupine-size_restricted.gif',
		'https://i.giphy.com/media/XtomTKA0337Ak/source.gif',
		'https://i.pinimg.com/564x/ef/a6/5c/efa65c6c037dff6385a433abe4fd9f20.jpg',
		'https://thumbs.gfycat.com/MatureTartAmericanbittern.webp',
		'http://8bit-videogames.socialtools.it/FOTO/VIDEOGAMES/decors-jeu-combat-028.gif',
		'https://i.gifer.com/2ddk.gif',
		'http://8bit-videogames.socialtools.it/FOTO/VIDEOGAMES/decors-jeu-combat-027.gif',
		'http://8bit-videogames.socialtools.it/FOTO/VIDEOGAMES/decors-jeu-combat-018.gif',
		'http://8bit-videogames.socialtools.it/FOTO/VIDEOGAMES/decors-jeu-combat-029.gif',
		'https://wallpaperaccess.com/full/785491.gif',
		'https://data.whicdn.com/images/318718780/original.gif',];

				function changerFond(){
					document.slide.src = TousMesFonds[i];
					if (i < TousMesFonds.length) {
						i++;
					}

					else{
						i = 0;
					}

					setTimeout("changerFond();", time);
				}

				function BougerSprite()
				{
					var elem = document.getElementById("perso");
					var pos = 0;
					var id = setInterval(frame, 5);
					
					function frame()
					{
						if (pos == 1000) // Si la position du perso atteind 350px alors:
						{
							clearInterval(id); //on stope l'animation du perso
						}

						else{ //Sinon
							pos++; //on incrémente la position
							elem.style.left = pos + "px"; //on modifie la position width dans le css du perso pour qu'il avance
						}
					}
					setTimeout("BougerSprite();", time);
				}

				changerFond();	
				BougerSprite();	
							


