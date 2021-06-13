import axios from "axios";

// axios
// 	.get("https://lambda-times-api.herokuapp.com/articles")
// 	.then((res) => {
// 		console.log(res.data.articles.bootstrap);
// 	})
// 	.catch((err) => console.log(err), []);

const Card = (article) => {
	const container = document.createElement("div");
	const headline = document.createElement("div");
	const author = document.createElement("div");
	const imgCont = document.createElement("div");
	const img = document.createElement("img");
	const by = document.createElement("span");

	container.classList.add("card");
	headline.classList.add("headline");
	author.classList.add("author");
	imgCont.classList.add("img-container");

	container.appendChild(headline);
	container.appendChild(author);
	author.appendChild(imgCont);
	imgCont.appendChild(img);
	author.appendChild(by);

	headline.textContent = article.headline;
	img.src = article.authorPhoto;
	by.textContent = `By ${article.authorName}`;

	container.addEventListener("click", () => {
		console.log(headline);
	});

	return container;

	// TASK 5
	// ---------------------
	// Implement this function, which should return the markup you see below.
	// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
	//
	// <div class="card">
	//   <div class="headline">{ headline }</div>
	//   <div class="author">
	//     <div class="img-container">
	//       <img src={ authorPhoto }>
	//     </div>
	//     <span>By { authorName }</span>
	//   </div>
	// </div>
	//
};
// console.log(Card);

// const entryPoint = document.querySelector(".cards-container");
// console.log(entryPoint);

const cardAppender = (selector) => {
	axios
		.get("https://lambda-times-api.herokuapp.com/articles")
		.then((res) => {
			res.data.articles.bootstrap.forEach((element) => {
				const cardData = element;
				console.log("cards in the axios call ====>", cardData);
				const newCard = Card(cardData);
				const entryPoint = document.querySelector(selector);
				entryPoint.appendChild(newCard);
				// console.log(newCard);
			});

			// console.log("all the data ====>", res.data.articles.bootstrap);
		})
		.catch((err) => console.log(err), []);
	// TASK 6
	// ---------------------
	// Implement this function that takes a css selector as its only argument.
	// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
	// However, the articles do not come organized in a single, neat array. Inspect the response closely!
	// Create a card from each and every article object in the response, using the Card component.
	// Append each card to the element in the DOM that matches the selector passed to the function.
	//
};

export { Card, cardAppender };
