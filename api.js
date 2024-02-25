// import { Carousel, initMDB } from "mdb-ui-kit";
// initMDB({ Carousel });

fetch("popular.json")
.then(response => response.json())
.then( data => {
	const result = data.results;
	console.log(result)
	for (let i = 0; i < result.length; i++){
		let div = document.createElement("div");
		let img = document.createElement("img");
		let divforFlex = document.createElement("div")
		let linkforIcon = document.createElement("a");
		divforFlex.id = "flex"
		let p = document.createElement("p");
		p.innerHTML = result[i].vote_average;
		linkforIcon.innerHTML = "<i class='fa-solid fa-star'></i>";
		img.src = result[i].poster_path;
		div.id = "mydiv"
		let textNode = document.createElement("h5");
		textNode.innerHTML = result[i].title;
		div.appendChild(img);
		divforFlex.appendChild(linkforIcon)
		divforFlex.appendChild(p)
		div.appendChild(divforFlex)
		div.appendChild(textNode)
		document.querySelector(".content-loop").appendChild(div)
	}
} 

)




