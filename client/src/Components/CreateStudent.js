import React from 'react';

export const create_student = (imagename,name, availability, skills,city,image) => 
{ return { 
    name, 
    availability,
    skills,
    city,
    imagename
  }
}



const students = [
  create_student('ahmad','Ahmad', 'in less than 2 months', ['react','node','javascript','php','laravel','html','css'] ,'beirut'),
  create_student('adam','adam', 'in less than 2 months', ['html','css','javascript'],'jounyeh'),
  create_student('ibrahim','ibrahim', 'available', ['php','css','html','laravel'],'jounyeh'),
  create_student('avatar','ali', 'available', ['node','javascript','react'],'sarafand'),
  create_student('amr','amr', 'in less than 1 month', ['html','css','wordpress','js','react'],'alay'),
  create_student('anas','anas', 'in less than 2 months', ['html', 'css', 'javascript', 'node', 'react', 'sql' ],'beirut'),
  create_student('anthony','anthony', 'available', ['php','wordpress','javascript','html','css'],'jounyeh'),
  create_student('avatar','bayan', 'in less than 2 months', ['bootsrap','html','css','javascript'],'saida'),
  create_student('fadi','fadi', 'available', ['react','node'],'jbeil'),
  create_student('avatar','hampig', '3 months or more', ['html','css','javascript'],'jbeil'),
  create_student('avatar','jad', 'available', ['wordpress','html','css'],'jounyeh'),
  create_student('avatar','tereza', 'in less than 1 month', ['react','wordpress'],'jbeil'),
  create_student('nagam','nagam', 'available', [ 'html', 'css', 'js', 'react', 'meteor'],'saida'),
  create_student('avatar','paul', 'in less than 1 month', ['html','wordpress'],'jounyeh'),
  create_student('avatar','saleh', 'available', ['html','css','javascript'],'beirut'),
  create_student('souad','souad', 'available', ['html','css','javascript','node','react','meator'],'jbeil'),
  create_student('mitza','mitza', 'in less than 2 months', ['video editor','adobe premiere','html','css','javascript','react'],'beirut'),
  create_student('avatar','gabi', '3 months or more', ['javascript','react','php','laravel','ios'],'jounyeh'),
  create_student('avatar','chriss', 'available', ['html','css','javascript','react'],'beirut'),
  create_student('avatar','samer', '3 months or more', ['html','css','javascript','react'],'saida'),
  create_student('kevin','kevin', 'not available', ['angular', 'wordpress', 'react', 'photoshop', 'illustrator'],'beirut'),
];

export default students;