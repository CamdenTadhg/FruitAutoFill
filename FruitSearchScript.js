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
	searchString = document.getElementById('fruit');
	showSuggestions(search(searchString));
}

function showSuggestions(results) {

	// TODO
}

function useSuggestion(e) {
	// TODO
}

//event listener to trigger when the user types
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


//write the search function that will trigger based on the event listener you created. The function will return a list called results
	//when the key comes up, collect the string from the input
//write the searchHandler function to bring together the other functions(?)
//write the showSuggestions function to take the list created in the previous step and show it in a drop down below the search bar
//add an event listener to trigger on hover. Write a function to highlight the suggestion and attach it to the event listener
//write the useSuggestion function to populate the search bar with the suggestion. 
//style the page. Both the background and the search bar should show the gradient. 
//see if I can figure out how to sort the results by their first index
//see if I can figure out how to pull an image from google of the fruit in question to happen on that click. 