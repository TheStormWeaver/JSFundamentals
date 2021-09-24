let Contact = require("./models/Contact")

let contacts = [
	{
		name: "Jhon",
		number: "+3591232153"
	},
	{
		name: "Max",
		number: "+3591232433"
	}
]

function getAll(){
	return contacts.slice()
}

function addContact(name, number){
	let contact = new Contact(name, number)

	contacts.push(contact)
}

module.exports = {
	getAll,
	addContact
}