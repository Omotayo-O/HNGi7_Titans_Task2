var person = {
    name:  'Omotayo Adefolalu',
    HNG_ID: 'HNG-04348',
    email: 'omotayo.na@gmail.com',
    slack_id: 'omotayo',
    language: 'javascript'
  };

  function personinfo(person){
   return "Hello World, this is "+person.name+ " with HNGi7 ID " + person.HNG_ID + " and email " + person.email+ " using "+ person.language+" for stage 2 task";
  }


  console.log(personinfo(person));
