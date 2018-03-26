import React from 'react';

export const create_student = (gender,name, availability, skills,city,image) => 
{ return { 
    gender,
    name, 
    availability,
    skills,
    city
  }
}

const students = [
  create_student('M','Adam', '3', ['PHP','javascript'] ,'beirut'),
  create_student('M','mostafa', '1', ['HTML','LARAVEL'],'beirut'),
  create_student('M','ninja', '2', ['PHP','CSS','HTML'],'saida'),
  create_student('M','pirate', '3', ['PHP','WORDPRESS'],'jbeil')
];

export default students;