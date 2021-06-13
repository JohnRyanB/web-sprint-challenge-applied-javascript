const Header = (title, date, temp) => {
	const header = document.createElement("div");
	const dateSpan = document.createElement("span");
	const titleH1 = document.createElement("h1");
	const tempSpan = document.createElement("span");

	header.appendChild(dateSpan);
	header.appendChild(titleH1);
	header.appendChild(tempSpan);

	header.classList.add("header");
	dateSpan.classList.add("date");
	tempSpan.classList.add("temp");

	dateSpan.textContent = date;
	titleH1.textContent = title;
	tempSpan.textContent = temp;
	// TASK 1
	// ---------------------
	// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	//  <div class="header">
	//    <span class="date">{ date }</span>
	//    <h1>{ title }</h1>
	//    <span class="temp">{ temp }</span>
	//  </div>
	//
	console.log(header);
	return header;
};

const date = "January 6, 2021";
const title = "Lambda Times";
const temp = "26°";

const headerAppender = (selector) => {
	const entryPoint = document.querySelector(selector);
	const header = Header(title, date, temp);
	// console.log(Header(title, date, temp));
	console.log(header);
	entryPoint.appendChild(header);
	// TASK 2
	// ---------------------
	// Implement this function taking a css selector as its only argument.
	// It should create a header using the Header component above, passing arguments of your choosing.
	// It should append the header to the element in the DOM that matches the given selector.
	//
	// console.log(entryPoint);
};

export { Header, headerAppender };
