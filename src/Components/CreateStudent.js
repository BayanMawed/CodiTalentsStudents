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
  create_student('m','ahmad', 'in less than 2 months', ['react','node','javascript','php','laravel','html','css'] ,'beirut'),
  create_student('m','adam', 'in less than 2 months', ['html','css','javascript'],'jounyeh'),
  create_student('m','ibrahim', 'available', ['php','css','html','laravel'],'jounyeh'),
  create_student('m','ali', 'available', ['node','javascript','react'],'sarafand'),
  create_student('m','amr', 'in less than 1 month', ['html','css','wordpress','js','react'],'alay'),
  create_student('m','anas', 'in less than 2 months', ['html', 'css', 'javascript', 'node', 'react', 'sql' ],'beirut'),
  create_student('m','anthony', 'available', ['php','wordpress','javascript','html','css'],'jounyeh'),
  create_student('f','bayan', 'in less than 2 months', ['bootsrap','html','css','javascript'],'saida'),
  create_student('m','fadi', 'available', ['react','node'],'jbeil'),
  create_student('m','hampig', '3 months or more', ['html','css','javascript'],'jbeil'),
  create_student('m','jad', 'available', ['wordpress','html','css'],'jounyeh'),
  create_student('f','tereza', 'in less than 1 month', ['react','wordpress'],'jbeil'),
  create_student('f','nagam', 'available', [ 'html', 'css', 'js', 'react', 'meteor'],'saida'),
  create_student('m','paul', 'in less than 1 month', ['html','wordpress'],'jounyeh'),
  create_student('m','saleh', 'available', ['html','css','javascript'],'beirut'),
  create_student('f','souad', 'available', ['html','css','javascript','node','react','meator'],'jbeil'),
  create_student('f','mitza', 'in less than 2 months', ['video editor','adobe premiere','html','css','javascript','react'],'beirut'),
  create_student('m','gabi', '3 months or more', ['javascript','react','php','laravel','ios'],'jounyeh'),
  create_student('m','chriss', 'available', ['html','css','javascript','react'],'beirut'),
  create_student('m','samer', '3 months or more', ['html','css','javascript','react'],'saida'),
  create_student('m','kevin', 'not available', ['angular', 'wordpress', 'react', 'photoshop', 'illustrator'],'beirut'),
];

export default students;