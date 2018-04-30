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
  create_student('m','ahmad', '2', ['react','node','javascript','php','laravel'] ,'beirut'),
  create_student('m','adam', '2', ['html','css','javascript'],'jounyeh'),
  create_student('m','ibrahim', 'available', ['php','css','html','laravel'],'jounyeh'),
  create_student('m','ali', 'available', ['node','javascript','react'],'sarafand'),
  create_student('m','amr', '1', ['html','css','wordpress','js','react'],'alay'),
  create_student('m','anas', '2', ['html', 'css', 'javascript', 'node', 'react', 'sql' ],'beirut'),
  create_student('m','anthony', 'available', ['php','wordpress','javascript','html','css'],'jounyeh'),
  create_student('f','bayan', '2', ['bootsrap','html','css','javascript'],'saida'),
  create_student('m','fadi', 'available', ['react','node'],'jbeil'),
  create_student('m','hampig', '3', ['html','css','javascript'],'jbeil'),
  create_student('m','jad', 'available', ['wordpress','html','css'],'jounyeh'),
  create_student('f','tereza', '1', ['react','wordpress'],'jbeil'),
  create_student('f','nagam', 'available', [ 'html', 'css', 'js', 'react', 'meteor'],'saida'),
  create_student('m','paul', '1', ['html','wordpress'],'jounyeh'),
  create_student('m','saleh', 'available', ['html','css','javascript'],'beirut'),
  create_student('f','souad', 'available', ['html','css','javascript','node','react','meator'],'jbeil'),
  create_student('f','mitza', '2', ['html','css','javascript','react','bootsrap'/*,'video edior'*/],'beirut'),
  create_student('m','gabi', '3', ['javascript','react','php','laravel','ios'],'jounyeh'),
  create_student('m','chriss', 'available', ['html','css','javascript','react'],'beirut'),
  create_student('m','samer', '3', ['html','css','javascript','react'],'saida'),
  create_student('m','kevin', '1', ['angular', 'wordpress', 'react', 'photoshop', 'illustrator'],'beirut'),
];

export default students;