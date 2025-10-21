// Instala y configura Mongoose
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Crea un modelo
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model("Person", personSchema);

// Crea y guarda un registro de un modelo
const createAndSavePerson = (done) => {
  const juanRoman = new Person({
    name: "Juan Róman",
    age: 47,
    favoriteFoods: ["Asado", "Ñoquis", "Nabos"],
  });
  juanRoman.save((err, data) => {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

// Crea muchos registros con model.create()
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

// Usa model.find() para buscar en tu base de datos
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

// Usa model.findOne() para devolver un único documento coincidente de tu base de datos
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

// Usa model.findById() para buscar en tu base de datos por _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

// Realiza las actualizaciones clásicas ejecutando "find", "edit" y "save"
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, foundPerson) => {
    if (err) {
      return done(err);
    }
    foundPerson.favoriteFoods.push(foodToAdd);
    foundPerson.save((err, updatedPerson) => {
      if (err) {
        return done(err);
      }
      done(null, updatedPerson);
    });
  });
};

// Realiza nuevas actualizaciones en un documento usando model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { $set: { age: ageToSet } },
    { new: true },
    (err, data) => {
      if (err) {
        return done(err);
      }
      done(null, data);
    },
  );
};

// Elimina un documento usando el método model.findByIdAndRemove
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, data) => {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

// Elimina muchos documentos con model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.deleteMany({ name: nameToRemove }, (err, data) => {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

// Auxiliares de consulta de búsqueda en cadena para restringir los resultados de búsqueda
const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({ favoriteFoods: foodToSearch }) // Busca personas que les guste el burrito
    .sort({ name: 1 }) // Ordena el resultado por nombre en orden ascendente
    .limit(2) // Limita el resultado a dos documentos
    .select("-age") // Oculta la edad del resultado
    .exec((err, data) => {
      // Ejecuta la consulta
      if (err) {
        return done(err);
      }
      done(null, data);
    });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
