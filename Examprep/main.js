$(function(){
 createForm();
})

function createForm(){
let my_name= $('<lable>').text('Country: ')
$('body').append(my_name);
let country = $('<select> <option>USA<option><option>ETH<option></select><br>');
$('body').append("<br>");
$('body').append(country);
$('body').append("<br>");
let my_room= $('<lable>').text('Room: ')
$('body').append(my_room);
let room = $('<select multiple> <option>Single<option><option>Shared<option></select><br>');
$('body').append(room);
$('body').append("<br>");
let male = $('<lable>Male</lable><input type="radio">')
$('body').append(male);
let female = $('<lable>Female</lable><input type="radio"><br>')
$('body').append(female);
$('body').append("<br>");
let vegan = $('<lable>Vegan</lable><input>').attr('type','checkbox');
$('body').append(vegan)
let not_allergy = $('<lable>Nut Allergy</lable><input>').attr('type','checkbox')
$('body').append(not_allergy);
$('body').append("<br>");
$('body').append("<br>");
let button_x = $('<button></button>').text('My Button')
$('body').append(button_x);


}