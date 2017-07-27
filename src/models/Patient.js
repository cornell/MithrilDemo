var Patient = {
  prenom: '',
  nom: '',

  init (prenom, nom) {
    this.prenom = prenom
    this.nom = nom
  },
  NomComplet: function () {
    return this.prenom + ' ' + this.nom
  }
}

var p1 = Object.create(Patient)
p1.init('amandine', 'Lemière')

var p2 = Object.create(Patient)
p2.init('sébastien', 'Mazurais')

console.log(p1.NomComplet())
console.log(p2.NomComplet())
/*
var mangoFruit = {
  color: 'yellow',
  sweetness: 8,
  fruitName: 'Mango',
  nativeToLand: ['South America', 'Central America'],
  showName: function () {
    console.log('This is ' + this.fruitName)
  },
  nativeTo: function () {
    this.nativeToLand.forEach(function (country) {
      console.log('Grown in:' + country)
    })
  }
}

function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {
  this.color = theColor
  this.sweetness = theSweetness
  this.fruitName = theFruitName
  this.nativeToLand = theNativeToLand
  this.showName = function () {
    console.log('This is a ' + this.fruitName)
  }
  this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry) {
      console.log('Grown in:' + eachCountry)
    })
  }
}
*/
