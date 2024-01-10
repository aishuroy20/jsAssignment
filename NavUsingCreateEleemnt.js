export default function navBar(){   // here we use use default because here we create only one function
    alert("heeeee");

    let createNewDiv=document.createElement("div");
   let createNewUl=document.createElement("ul");
   createNewDiv.appendChild(createNewUl);


    let createfirstLi=document.createElement("li");
    let setTextToHomeli=document.createTextNode("Home");
    createfirstLi.appendChild(setTextToHomeli);
    createNewUl.appendChild(createfirstLi);
    
    let createfirstLi2=document.createElement("li");
    let setTextContactli=document.createTextNode("Contact");
    createfirstLi2.appendChild(setTextContactli);
    createNewUl.appendChild(createfirstLi2);

    
    let createfirstLi3=document.createElement("li");
    let setTextAboutUsli=document.createTextNode("About US");
    createfirstLi3.appendChild(setTextAboutUsli);
    createNewUl.appendChild(createfirstLi3);
    
    let createfirstLi4=document.createElement("li");
    let setTextLoginli=document.createTextNode("Login");
    createfirstLi4.appendChild(setTextLoginli);
    createNewUl.appendChild(createfirstLi4);

    document.body.appendChild(createNewDiv);

    // document.body.appendChild(createfirstLi);
    // document.body.appendChild(createfirstLi2);
    // document.body.appendChild(createfirstLi3);
    // document.body.appendChild(createfirstLi4);

    document.appendChild(createNewUl);
 
   

 
    
    


}



{/* <div>

<ul>
    <li>Home</li>
    <li>Conatct</li>
    <li>About Us</li>
    <li>Login</li>
</ul>




</div> */}