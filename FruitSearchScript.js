const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Cantaloupe',  'Cherry', 'Clementine', 'Coconut', 'Cranberry', 'Cucumber', 'Currant', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry','Honeydew', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mandarine', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Tangerine', 'Watermelon', 'Yuzu'];

document.addEventListener('DOMContentLoaded', () => {
	input.focus();
})

//added simple function to make words that begin with the search string appear first. 
function search(str) {
	let results = [];
	let counter = 0;
	//search the string against each item
	for (let fruit of fruits){
		//match the string against the fruit array
		if (fruit.toLowerCase().includes(str.toLowerCase())){
			results.push(fruit);
		}
	}
	sortResults(results, str);
	return results;
}

function sortResults(results, str){
	for (let i = 0; i < results.length; i++){
		let index = results[i].toLowerCase().indexOf(str.toLowerCase());
		let counter = 0;
		if (index === 0){
			results.splice(counter, 0, results[i]);
			results.splice(i + 1, 1);
			counter++;
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
		let searchStr = input.value.toLowerCase();
		let regex = new RegExp('(' + searchStr + ')', 'gi');
		resultLi.innerHTML = result.replace(regex, '<b>$1</b>');
		suggestions.append(resultLi);
	}
}

//populate the search bar with the suggestion
function useSuggestion(event) {
	input.value = event.target.innerText;
	suggestions.innerHTML = '';
	//locate the cursor so the user can easily press enter to search
	input.focus();
}

//event listeners to trigger when the user types and clicks
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


//bold the matching text
//pull image of fruit