// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

let formHTML = document.getElementById('fields');
// let input = document.createElement('input');
// formHTML.appendChild(input);

formData.forEach(function(e){
  if(e.type === 'select'){
    let selectWheel = document.createElement('select');
    let firstOption = document.createElement('option');
    firstOption.setAttribute('label', "Select Language...");
    selectWheel.appendChild(firstOption);
    e.options.forEach(function(f){
      let newSelector= document.createElement('option');
      newSelector.setAttribute('value', f.value);
      newSelector.setAttribute('label', f.label);
      selectWheel.appendChild(newSelector);
    });
    selectWheel.setAttribute('type', e.type);
    selectWheel.setAttribute('label', e.label);
    selectWheel.id = e.id;
    formHTML.appendChild(selectWheel);
  }
  else if(e.type === 'textarea'){
    let newText = document.createElement('textarea')
    newText.setAttribute('type', e.type);
    newText.setAttribute('label', e.label);
    newText.id = e.id;
    newText.placeholder = e.label;
    formHTML.appendChild(newText);
  }
  else{
    let newInput = document.createElement('input');
    formHTML.appendChild(newInput);
    newInput.setAttribute('type', e.type);
    newInput.setAttribute('label', e.label);
    newInput.id = e.id;
    newInput.placeholder = e.label;
    let newIcon = document.createElement('i');
    newIcon.className = "fa " + e.icon;
    newInput.appendChild(newIcon);
  }
});
