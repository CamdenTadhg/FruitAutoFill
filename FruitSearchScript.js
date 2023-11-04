const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	//search the string against each item
	for (let fruit of fruits){
		//match the string against the fruit array
		if (fruit.toLowerCase().includes(str.toLowerCase())){
			//if the item includes the string, add it to the results array
			results.push(fruit);
		}
	}
	return results;
}

function searchHandler(e) {
	//pull the value from the input field and run a search on it. 
	searchString = document.getElementById('fruit').value;
	showSuggestions(search(searchString));
}

//The initial code showed two parameters for this function, but I didn't see the need for a second one, so I removed it.  
function showSuggestions(results) {
	for (let result of results){
		const resultLi = document.createElement('li');
		resultLi.innerText = result;
		suggestions.append(resultLi);
	}
}

function useSuggestion(e) {
	// TODO
}

//event listener to trigger when the user types
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);



//add an event listener to trigger on hover. Write a function to highlight the suggestion and attach it to the event listener
//write the useSuggestion function to populate the search bar with the suggestion. 
//style the page. Both the background and the search bar should show the gradient. 
//see if I can figure out how to sort the results by their first index
//see if I can figure out how to pull an image from google of the fruit in question to happen on that click. 