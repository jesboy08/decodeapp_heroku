"use strict";

class App{
  constructor(){
    this.brand = [
      {
        "id": 1,
        "name": "ADIDAS",
        "brandName": "Adidas Originals",
                        
         "style": "Trefoil T-Shirt",
         "gender": "Mens & Women",
         "color": "White / Black",
                                       
        "photo": "images/adidas.jpg"
      
        
      },


      {
        "id": 2,
        "name": "BENCH",
        "brandName": "Bench",
        "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/bench.jpg"
        
      
        
      },


      {

        "id": 3,
        "name": "FUBU",
        "brandName": "Fubu",
       "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/fubu.jpg"
        
      
      },


      {
        "id": 4,
        "name": "NIKE",
        "brandName": "Nike",
        "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/nike.jpg"
        
        
      }, 


      {
        "id": 5,
        "name": "VAN HEUSEN",
        "brandName": "Van Heusen",
        "style": `POLO T`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/van.jpg"

      },

       {
        "id": 6,
        "name": "PUMA",
        "brandName": "Nike",
        "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/puma.jpg"
        
        
      }, 

       {
        "id": 7,
        "name": "LEE",
        "brandName": "Lee",
        "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/Lee.jpg"
        
        
      },  

       {
        "id": 8,
        "name": "LEVI's",
        "brandName": "Levi's",
        "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/levi.jpg"
        
        
      }, 

       {
        "id": 9,
        "name": "JOHN PLAYERS",
        "brandName": "John Players",
        "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/johnyplayers.jpg"
 
        
      }, 


    ];
    
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

  showLandingPage(){
    $('#brandLayout').show();
    $('#brandRecent').show();
        $('#createbrand').hide();
     $('#updateBrandShirt').hide();
    
  }
}


class Component extends App{
	constructor(){
		super();
	}
	brandLayout(){
		let html = `

       <div id="brandLayout" class="container">
       <nav>
    <div class="nav-wrapper">
     <a href="#" onclick="component.showLandingPage()" class="brand-logo center">&nbsp;&nbsp;T-shirt Merchandise</a>
      <ul class="right hide-on-med-and-down">
            
              <li><a href="#" onclick="component.brandList()"><i class="material-icons left">assignment</i>Brand List</a></li>
              <li><a href="#" onclick="component.brandCreate()"><i class="material-icons left active">note_add</i>Create</a></li>
            </ul>
            <ul class="left hide-on-med-and-down">
            <li><a href="#" onclick="component.showLandingPage()"><i class="material-icons left">view_list</i>HOME</a></li>
     </ul>
    </div>





        <div id="brandRecent"></div>
        <div id="brandView"></div>
        <div id="brandList"></div>
        <div id="brandCreate"></div>
              <div id="updateBrandShirt"></div>

        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">brand App</h5>
                <p class="grey-text text-lighten-4">Another decode demo app for students in web dev't and oop. A bisaya inspired brand app that promotes native food and culture.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#" onclick="component.brandLayout()">
                      <!-- <i class="material-icons left">dashboard</i> -->
                      Home</a></li>
                      <li><a class="grey-text text-lighten-3" href="#" onclick="component.brandList()">
                        <!-- <i class="material-icons left">assignment</i> -->
                        brands</a></li>
                        <li><a class="grey-text text-lighten-3" href="#" onclick="component.brandCreate()">
                          <!-- <i class="material-icons left">dashboard</i> -->
                          Create</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="footer-copyright">
                    <div class="container">
                      © 2016-2017 Copyright Text
                      <img class="right" src="images/logo.jpg" style="margin-top:6px;" />

                    </div>
                  </div>
                </footer> 
</div>
             
  `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.brandRecent();    
  }

brandRecent(){
    
    let html = `

  </br>
<hr>
  </br>
  </br>
   <div class="slider">
    <ul class="slides">
      <li>
        <img src="images/adidas.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="images/nike.jpg"> <!-- random image -->
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="images/fubu.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="images/bench.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>
   </br>
  </br>

<hr>  
      <h5 class="center-align black-text">Product</h5>
      <div class="row">
    `;

    let r = this.brand;
    let count = 0;

    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 4)break;
      html+= `


       <div class="card-border col s6  m6 ">
          <div class="card small hoverable ">
            <div class="card-image">
              <img src="${r[i].photo}">
           
            </div>
            <div class="card-content #c5e1a5 light-green lighten-3 ">
              
              <p>${r[i].style}</p>
               <p>${r[i].gender}</p>
               <p>${r[i].color}</p>
            </div>
            <div class="card-action #00897b teal darken-1">
              <a href="#" onclick="component.brandList()">More</a>
            </div>
          </div>
        </div>
    
     
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("brandRecent"));
  }

  brandView(id){
    let r = this.findBrandByID(id);

    let html = `

      <h5 class="center-align black-text text-darken-2">${r.name}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal small">
          
            <div class="card-image">
              <img src="${r.photo}">
            </div>
            <div class="card-stacked">
              <div class="card-content #6d4c41 brown darken-1">
              <span class="black-text text-darken-2">
                <p>Style: ${r.style}</p>
                <p> Gender:${r.gender}</p>
               <p> Color: ${r.color}</p></span>
              </div>
              <div class="card-action small">    
         
                    <a onclick="component.updateBrandShirt(${r.id})" class="waves-effect waves-light btn">Update</a>
                <a onclick="component.deletebrand(${r.id})" class="waves-effect waves-light btn">DELETE</a>
                <a onclick="component.brandList()" class="waves-effect waves-light btn">BACK TO BRAND LIST</a>

              </div>
            </div>          
          </div>        
        </div>      
      </div>

    `;

    

    html += `
          </ul>
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("brandView"));
    $('#brandView').show();
    $('#brandRecent').hide();
    $('#brandList').hide();
    $('#brandCreate').hide();
     $('#updateBrandShirt').hide();
  }

  

updateBrand(id){

  id = id+1;
  let brandummy = {
    "id" :  id,
    "name" : $('#name_1').val(),
    "style" : $('#style_1').val(),
    "gender" : $('#gender_1').val(),
    "color" : $('#color_1').val(),
    "photo" : $('#photo_1').val()
  }

  let r = this.brand;
  for(let i=0;i<r.length;i++){
    if(r[i].id == id){
      r[i] = brandummy;
      break;
    }
  }

  this.brandList();
}

  brandSearch(){
    let m = this.brand;
    let value = $('#search1').val();
    let html = `
      <ul class="collection">
    `;    
    for(let i=0;i<m.length;i++){
      let expr1 = (m[i].style.toUpperCase().indexOf > -1);
      if(expr1){
        html += `       
          <li class="collection-item avatar">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">${this.brand[i].style}</span>
            <p>
              ${this.brand[i].gender}
            </p>
            <a onclick="component.updateBrand(${this.brand[i].id})" href="#!" class="secondary-content"><i class="material-icons">mode_edit</i></a>
          </li>       
        `;  
      }     
    }

    html += `
      </ul>
    `;

  this.reRender(html,document.getElementById("searchPageBrandList"));
  }



   deletebrand(key){
    let r = this.brand;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.brand.splice(i,1);
        break;
      }
    }   
    this.brandList();
  }

findBrandByID(id){
    let r = this.brand;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 
  brandList(){
    let html = `
      <br/>
        <nav>
          <div class="nav-wrapper red">
          <form>
            <div class="input-field">       
              <input onkeyup="component.brandListItems(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br/>
    `;

    html += `
      <div class="row" id="brandListItems">
    `;
    let r = this.brand;
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].photo}">
             
            </div>
            <div class="card-content #c5e1a5 light-green lighten-3">
               <span class="black-text text-darken-2 center html">
              <p>${r[i].name}</p>
               <p>${r[i].gender}</p>
               <p>${r[i].color}</p></span>
               
            </div>
            <div class="card-action #8bc34a light-green" >
              <a href="#" onclick="component.brandView(${r[i].id})">More</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("brandList"));
    $('#brandList').show();
    $('#brandView').hide();
    $('#brandRecent').hide();
    $('#brandCreate').hide(); 
     $('#updateBrandShirt').hide();   
  }
brandListItems(name){
    let html = ``;
    let r = this.findBrandByName(name);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].photo}">
             
            </div>
            <div class="card-content #c5e1a5 light-green lighten-3">
               <span class="black-text text-darken-2 center">
              <p>${r[i].name}</p>
               <p>${r[i].gender}</p>
               <p>${r[i].color}</p></span>
               
            </div>
            <div class="card-action #8bc34a light-green" >
              <a href="#" onclick="component.brandView(${r[i].id})">More</a>
            </div>
          </div>
        </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("brandListItems"));
    $('#brandList').show();
    $('#brandView').hide();
    $('#brandRecent').hide();  
    $('#brandCreate').hide();
     $('#updateBrandShirt').hide();
  }
  
   findBrandByName(name){
    let objects = [];
    let r = this.brand;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
      // console.log(name," vs ",r[i].name," = ",expr);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }

  brandCreate(){
    let html = `<center>
    <div class="form-style-3">
    <div class="row">
      <fieldset>
    <center><h1>Create Shirts</h1></center>
    <center><label for="brand_id">Shirt Stocks<span><span class="required"></span></span><input disabled value="${this.brand.length+1}" id="brand_id" type="text" ></label></center>
    <center> <span>Enter Name</span><input type="email" id="brand_name"/> </label></center>
    <center>  <span>Enter Picture</span><input type="email" id="brand_photo"/> </label></center>
     <center>  <span>Enter Brand</span><input type="email" id="brand_style"/> </label></center>
    <center>  <span>Enter Gender</span><input type="email" id="brand_gender"/> </label></center>
        <center> <span>Enter Color</span><input type="email" id="brand_color"/> </label></center>


    <div class="center-align">
    <button onclick="component.brandList()" class="btn waves-effect waves-light">Back to Brand List</button>
    <button onclick="component.createbrand()" class="btn waves-effect waves-light">Save</button>

    </div>
    </div>

</fieldset>
    </div>
    </center>


         
       
             
   
          


                
    `;

    this.reRender(`
      ${html}
      `,document.getElementById("brandCreate"));
    $('#brandCreate').show();
    $('#brandList').hide();
    $('#brandView').hide();
    $('#brandRecent').hide();
      $('#updateBrandShirt').hide();
    
  }


   createbrand(){
    let id = document.getElementById('brand_id');
    let name = document.getElementById('brand_name'); 
    let photo = document.getElementById('brand_photo');
    let style = document.getElementById('brand_style');
    let gender  = document.getElementById('brand_gender');
    let color = document.getElementById('brand_color');
    

    let brands = {      
      "id": id.value,
      "name": name.value,
       "style": style.value,
      "photo": photo.value,
      "gender": gender.value,
      "color": color.value
 
    
    };


    this.brand.push(brands);

    
    id.value = name.value = style.value = photo.value  = gender.value = color.value =''; 
  } 

  
    updateBrandShirt(id){

    id = id - 1;
    let html = `
    


    <center>
    <div class="form-style-3">
    <div class="row">
    <fieldset>
    <center><h1>Update Shirts</h1></center>
    <center><span >T-Shirt Stocks<span class="required">*</span></span><input disabled value="${this.brand.length+1}" id="brand_id" type="text" ></label></center>
    <center><span>Update Name</span><input type="email" id="name_1"value="${this.brand[id].name}"/> </label></center>
    <center><span>Update Style</span><input type="email" id="style_1"value="${this.brand[id].style}"/> </label></center>
    <center><span>Update Gender</span><input type="email" id="gender_1"value="${this.brand[id].gender}"/> </label></center>
    <center><span>Update Color</span><input type="email" id="color_1"value="${this.brand[id].color}"/> </label></center>
	<center> <span>Update Photo</span><input type="email" id="photo_1"value="${this.brand[id].photo} "/> </label></center>
 

    <div class="center-align">
    <button onclick="component.brandList()" class="btn waves-effect waves-light">Back</button>
    <a onclick="component.updateBrand(${id})" class="waves-effect blue waves-light btn">Update</a>
    </div>
    </div>
</fieldset>

    </div>
    </center>






    `;  
    this.reRender(`

      ${html}

      `,document.getElementById("updateBrandShirt"));   
 $('#brandCreate').hide();
    $('#brandList').hide();
    $('#brandView').hide();
    $('#brandRecent').hide();
      $('#updateBrandShirt').show();
    
    
    
    
  }
  


}


let component = new Component();
component.brandLayout();
