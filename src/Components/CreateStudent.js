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
  create_student('m','ahmad', '1', ['react','node','javascript','php','laravel'] ,'beirut'),
  create_student('m','adam', '2', ['html','css','javascript'],'jounyeh'),
  create_student('m','ibrahim', 'available', ['php','css','html','laravel'],'jounyeh'),
  create_student('m','ali', 'available', ['node','javascript','react'],'sarafand'),
  create_student('m','amr', '3', ['html','css','wordpress'],'beirut'),
  create_student('m','anas', 'available', ['javascript','react','html'],'beirut'),
  create_student('m','anthony', 'available', ['php','wordpress','javascript','html','css'],'jounyeh'),
  create_student('f','bayan', '3', ['html','css','javascript'],'tyre'),
  create_student('m','fadi', 'available', ['react','node'],'jbeil'),
  create_student('m','hampig', '3', ['html','css','javascript'],'jbeil'),
  create_student('m','jad', 'available', ['wordpress','html','css'],'jounyeh'),
  create_student('f','tereza', '1', ['react','wordpress'],'jbeil'),
  create_student('f','nagam', '2', ['drupal','wordpress','html'],'saida'),
  create_student('m','paul', '1', ['html','wordpress'],'jounyeh'),
  create_student('m','saleh', 'available', ['html','css','javascript'],'beirut'),
  create_student('f','soad', '2', ['html','css','javascript','node','react','meator'],'jbeil'),
  create_student('f','mitza', '1', ['node','html','css','javascript','react'],'beirut'),
];

export default students;