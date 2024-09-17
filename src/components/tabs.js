import axios from "axios";

const Tabs = (topics) => {
	const topic = document.createElement("div");
	const jsTab = document.createElement("div");
	const bootTab = document.createElement("div");
	const techTab = document.createElement("div");
	const jqueryTab = document.createElement("div");
	const nodeTab = document.createElement("div");

	topic.appendChild(jsTab);
	topic.appendChild(bootTab);
	topic.appendChild(techTab);
	topic.appendChild(jqueryTab);
	topic.appendChild(nodeTab);

	topic.classList.add("topics");
	jsTab.classList.add("tab");
	bootTab.classList.add("tab");
	techTab.classList.add("tab");
	jqueryTab.classList.add("tab");
	nodeTab.classList.add("tab");

	jsTab.textContent = topics[0];
	bootTab.textContent = topics[1];
	techTab.textContent = topics[2];
	jqueryTab.textContent = topics[3];
	nodeTab.textContent = topics[4];
	// TASK 3
	// ---------------------
	// Implement this function which takes an array of strings ("topics") as its only argument.
	// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
	// then the function returns the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	// <div class="topics">
	//   <div class="tab">javascript</div>
	//   <div class="tab">bootstrap</div>
	//   <div class="tab">technology</div>
	// </div>
	//
	return topic;
};

const tabsAppender = (selector) => {
	axios
		.get("https://lambda-times-api.herokuapp.com/topics")
		.then((res) => {
			const topics = res.data;
			console.log(topics);
			const tabCont = document.querySelector(selector);
			const newTab = Tabs(topics.topics);
			tabCont.appendChild(newTab);
			console.log(tabCont);
		})
		.catch((err) => {
			console.log(err), [];
		});
	// TASK 4
	// ---------------------
	// Implement this function which takes a css selector as its only argument.
	// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
	// Find the array of topics inside the response, and create the tabs using the Tabs component.
	// Append the tabs to the element in the DOM that matches the selector passed to the function.
	//
};

export { Tabs, tabsAppender };
