import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.profile.created = ()=>{
  console.log("Created the profile template");
}

Template.profile.rendered = ()=>{
  console.log("Rendered the profile template");
}

Template.profile.helpers({

  exampleHelper: () => {
    return "string returned by exampleHelper";
},

profileList: ()=>{
  return [
        {
            name: "Juan Rodríguez", age: 25
        },
        {
            name: "María Gómez", age: 30
        },
        {
            name: "Esteban Martínez", age: 15
        },
        {
            name: "Luisa Sánchez", age: 19
        }
    ] 
},
  passingData: (myString1, myString2) => {
    console.log(`These are the strings ${myString1} ${myString2}`);
  },
  /*other helpers*/
  randomHelper: () => {
    return Session.get("randomNumber");
},
  profilesCollection: () => {
      return Profiles.find({});
  }
});

Template.profile.events({
    'click button': (e, i) => {
        console.log("Button clicked");
        Session.set("randomNumber", Math.random(0, 99));
    }
});


Template.crearEvento.helpers({
  'submit form': (event) => {
    event.preventDefault();
    const target = event.target;
    const nombre = target.nombre.value;
    const edad = target.edad.value;
    console.log("Siiiii");
    Profiles.insert({name:nombre, age:edad});
    target.name.value = "";
    target.edad.value ="";
  }
});

Template.crearEvento.created = ()=>{
  console.log("Created the crearEvento template");
}

Template.crearEvento.rendered = ()=>{
  console.log("Rendered the crearEvento template");
}