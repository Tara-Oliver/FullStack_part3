const mongoose = require('mongoose')



const newName = process.argv[3]
const newNumber = process.argv[4]

// const url = ``;

mongoose.set('strictQuery', false)




const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 8,
    // validate: validator,
    required: true,
  },
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: newName,
  number: newNumber,
})

if (process.argv.length <= 3) {
  Person.find({}).then((result) => {
    console.log('phonebook:')
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else if (newName && newNumber) {
  person.save().then(() => {
    console.log(`added ${newName} number ${newNumber} to phonebook`)
    mongoose.connection.close()
  })
}

// DqONN4FEHZoWFqPK;
// node mongo.js DqONN4FEHZoWFqPK Anna 040-1234556
