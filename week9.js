//quote array
var quotes = [
    'Without Education he lives within the narrow, dark and grimy walls of ignorance, ...Education, on the other hand, means emancipation. -Frederick Douglas',
    'To deny education to any people is one of the greatest crimes against human nature.-Frederick Douglas',
    'Oh, magic hour, when a child first knows she can read printed words! - Betty Smith',
    'I have a passion for teaching kids to become readers...Books should not be daunting,They should be funny, exciting, and wonderful. -Roald Dahl',
    'The more that you read, the more things you will know. The more that you learn, the more places you will go. -Dr, Seuss',
    'There is more treasure in books than in all the pirating loot on Treasure Island.–Walt Disney',
    'Ah, how good it is to be among people who are reading. –Rainer Maria Rilke',
    'If we encounter a man of rare intellect, we should ask him what books he reads.–Ralph Waldo Emerson',
    'Once you learn to read, you will be forever free. –Frederick Douglass',
    'Employ your time in improving yourself by other men’s writings so that you shall come easily by what others have labored hard for. –Socrates'
]
function newQuote() {
//multiply Math.random by the length of the quotes array.
var randomNumber = Math.floor(Math.random() * (quotes.length));

//putting the quote in the HTML quoteDisplay element.
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
