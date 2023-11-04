const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

document.addEventListener('DOMContentLoaded', () => {
	input.focus();
})

//added simple function to make words that begin with the search string appear first. 
function search(str) {
	let results = [];
	//search the string against each item
	for (let fruit of fruits){
		//match the string against the fruit array
		if (fruit.toLowerCase().includes(str.toLowerCase())){
			let index = fruit.toLowerCase().indexOf(str.toLowerCase());
			console.log('fruit is' + fruit + 'index is' + index);
			//if the item starts with the string, return it first
			if (index === 0){
				results.splice(0, 0, fruit);
			} else{
			//if the item includes the string, add it to the end of the results
				results.push(fruit);
			}
		}
	}
	return results;
}

function searchHandler() {
	suggestions.innerHTML = '';
	//pull the value from the input field and run a search on it. 
	searchString = input.value;
	if (searchString !== ''){
		showSuggestions(search(searchString));
	}
}

function showSuggestions(results) {
	for (let result of results){
		const resultLi = document.createElement('li');
		resultLi.innerText = result;
		suggestions.append(resultLi);
	}
}

//populate the search bar with the suggestion
function useSuggestion(event) {
	input.value = event.target.innerText;
	searchHandler();
	//locate the cursor so the user can easily press enter to search
	input.focus();
}

//event listener to trigger when the user types
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);




//see if I can figure out how to sort the results by their first index
	//determine the index of the search string in the result fruit
	//determine a counter of how many matching values there have been
	// splice the fruit in at the index and counter combined
//see if I can figure out how to pull an image from google of the fruit in question to happen on that click. 