var jsonData = [
    {
      "q" : "What is returned by SUBSTR?",
      "opt1": "tutorial",
      "opt2" : "tutorials",
      "opt3" : "none of these",
      "answer" : "tutorials"
    },
    {
      "q" : "Which of the following is not a group function?",
      "opt1": "SUM",
      "opt2" : "NVL",
      "opt3" : "none of these",
      "answer" : "NVL"
    },
    {
      "q" : " A transaction starts when",
      "opt1": " A COMMIT statement is issued",
      "opt2" : "A ROLLBACK statement is issued",
      "opt3" : "none of these",
      "answer" : ""
    },
    {
      "q" : "Which type of database management system represents relations using tables?",
      "opt1": "Network DBMS",
      "opt2" : "Relational DBMS",
      "opt3" : "none of these",
      "answer" : "Relational DBMS"
    },
    {
      "q" : "What does SQL stand for?",
      "opt1": "structured querry language",
      "opt2" : "strong querry language",
      "opt3" : "none of these",
      "answer" : "structured querry language"
    },
    {
      "q" : "Which SQL statement is used to update data in a database?",
      "opt1": "update",
      "opt2" : "save",
      "opt3" : "none of these",
      "answer" : "update"
    },
    {
      "q" : "Which SQL statement is used to create data in a database?",
      "opt1": "create",
      "opt2" : "save",
      "opt3" : "none of these",
      "answer" : "create"
    },
    {
      "q" : "Which SQL statement is used to insert data in a database?",
      "opt1": "insert",
      "opt2" : "update",
      "opt3" : "none of these",
      "answer" : "insert"
    },
    {
      "q" : "Which SQL statement is used to delete data in a database?",
      "opt1": "delete",
      "opt2" : "remove",
      "opt3" : "none of these",
      "answer" : "delete"
    },
    {
      "q" : "Which is the most commonly join?",
      "opt1": "inner join",
      "opt2" : "inside join",
      "opt3" : "none of these",
      "answer" : "inner join"
    },
    
  ];
  
  localStorage.setItem("question",JSON.stringify(jsonData)); 
  var retrivedobject = localStorage.getItem('question');
  console.log('retrivedobject: ', JSON.parse(retrievedobject));     
