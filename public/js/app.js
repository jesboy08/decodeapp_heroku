"use strict";

class App{
  constructor(){
    this.brand = [
      {
        "id": 1,
        "name": "Utan",
        "description": "Adidas Originals",
                        
         "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
                                       
        "photo": "images/adidas.jpg",
        
          
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "yields": "4-5 servings",
        "procedure": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },


      {
        "id": 2,
        "name": "Tolang Bisaya",
        "description": "Bench",
        "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,

        "photo": "images/bench.jpg",
        
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "yields": "4-5 servings",
        "procedure": [
          "Place all ingredients in a casserole except fish.",
          "Bring to a boil.",
          "Add the fish and boil again until the fish is cooked.",
          "Serve hot."
        ]
      },


      {

        "id": 3,
        "name": "Pork Humba Bisaya",
        "description": "Fubu",
       "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/fubu.jpg",
        
        "preparationtime": "10 minutes",
        "cookingtime": "1 hours, 30 minutes",
        "yields": "6-8 servings",
        "procedure": [
          "Rinse meat thoroughly under cold running water and pat dry with paper towels.",
          "In a non-stick skillet over medium heat, arrange pork belly slices in one layer and pan-fry until most of the oil comes out. If you use a smaller pan, you may do this in two batches.",
          "Once the meat turns brown and most of the fat has rendered, remove from heat and transfer to a cooking pot.",
          "Add the rest of the ingredients into the pot and bring to a boil. Lower heat to medium low and simmer for an hour until pork has become tender and sauce has thickened.",
          "Serve with rice."
        ]
      },


      {
        "id": 4,
        "name": "Manok Adobo Sa Gata",
        "description": "Nike",
        "style": `Trefoil T-Shirt`,
         "gender": `Mens & Womens`,
         "color": `White / Black`,
        "photo": "images/nike.jpg",
        
        "preparationtime": "10 minutes",
        "cookingtime": "1 hours, 30 minutes",
        "yields": "6-8 servings",
        "procedure": [
          "Igisa ang sibuyas, bawang at luya papulahin kunti",
          "Ilagay ang manok, patis paminta at laurel, hayaan ng 5 minuto na kumukulo at ilagay na rin ang tanglad at suka.  Takpan.",
          "Kapag tapos na itong pakuluan ng 5 minuto, ilagay ang pangalawang gata kasabay ang luyang dilaw na hiniwa-hiwa ng maliliit.  Hayaang kumulo ng mga  10 minuto.",
          "Puwede nang isabay ang papaya na hiniwa ng slanting o ayon sa gusto mong sukat",
          "Kapag luto na, ilagay na ang panghuling gata, kasabay ng siling pamaksiw at siling labuyo (tantyahin lamang ang gusto mong anghang).",
          "Timplahin ng asin at magic sarap, ilagay ang bell pepper o siling pokingan.",
          "Pakuluan ng dahan dahan hanggang sa ito ay lumapot.  Mas masarap kapag lumabas ang sariling mantika ng niyog ng kunti.",
          "Ihain na mainit kasabay ng mainit din na kanin."
        ]
      }     
    ];
    
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createMovie(){
	}

	deleteMovie(key){		
	}

	updateMovie(key){
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
            <a href="#" onclick="component.brandLayout()" class="brand-logo">&nbsp;&nbsp;T-shirt Merchandise</a>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="#" onclick="component.brandList()"><i class="material-icons left">view_list</i>Brand List</a></li>
              <li><a href="#" onclick="component.brandCreate()"><i class="material-icons left">note_add</i>Create</a></li>
            </ul>
            <ul class="side-nav" id="mobile-demo">
              <li><a href="#" onclick="component.brandList()"><i class="material-icons left">assignment</i>brands</a></li>
              <li><a href="#" onclick="component.brandCreate()"><i class="material-icons left">note_add</i>Create</a></li>
            </ul>
          </div>

        </nav>




        <div id="brandRecent"></div>
        <div id="brandView"></div>
        <div id="brandList"></div>
        <div id="brandCreate"></div>

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
                      <img class="right" src="img/decode.png" style="margin-top:6px;" />

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
      <h5 class="center-align">Product</h5>
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
            <div class="card-content">
              <p>${r[i].description}</p>
              <p>${r[i].style}</p>
               <p>${r[i].gender}</p>
               <p>${r[i].color}</p>
            </div>
            <div class="card-action">
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
    let r = this.findbrandByID(id);

    let html = `

      <h5 class="center-align">${r.name}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal small">
            <div class="card-image">
              <img src="${r.photo}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${r.description}</p>
              </div>
              <div class="card-action small">               
                <span onclick="component.deletebrand(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
                <span onclick="component.brandLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
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
  }
   deletebrand(key){
    let r = this.recipe;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.recipe.splice(i,1);
        break;
      }
    }   
    this.recipeLayout();
  }

  brandList(){
    let html = `
      <br/>
        <nav>
          <div class="nav-wrapper white">
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
            <div class="card-content">
              <p>${r[i].description}</p>
              <p>${r[i].style}</p>
               <p>${r[i].gender}</p>
               <p>${r[i].color}</p>
               
            </div>
            <div class="card-action">
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
  }
brandListItems(name){
    let html = ``;
    let r = this.findbrandByName(name);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].photo}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].description}</p>

            </div>
            <div class="card-action">
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
  }
  
  brandCreate(){
    let html = `
      <div class="row">
        <form class="col s12">
        <h5 class="center-align">Create New brand</h5>
        <button onclick="component.createbrand()" class="btn waves-effect waves-light">Save</button>
          <div class="row">
            <div class="input-field col s6">
              <input disabled value="${this.brand.length+1}" id="brand_id" type="text" class="validate">
            </div>
            <div class="input-field col s6">
              <input id="brand_name" type="text" class="validate">
              <label for="brand_name">NAME</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="brand_description" type="text" class="validate">
              <label for="brand_description">DESCRIPTION</label>
            </div>
            <div class="input-field col s6">
              <input id="brand_photo" type="text" class="validate">
              <label for="brand_photo">PHOTO</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <input id="brand_preparationtime" type="text" class="validate">
              <label for="brand_preparationtime">PREPARATION TIME</label>
            </div>
            <div class="input-field col s4">
              <input id="brand_cookingtime" type="text" class="validate">
              <label for="brand_cookingtime">COOKING TIME</label>
            </div>
            <div class="input-field col s4">
              <input id="brand_yields" type="text" class="validate">
              <label for="brand_yields">YIELDS</label>
            </div>
          </div>


                
    `;

    this.reRender(`
      ${html}
      `,document.getElementById("brandCreate"));
    $('#brandCreate').show();
    $('#brandList').hide();
    $('#brandView').hide();
    $('#brandRecent').hide();
    this.state[0].bind.procedures = [];   
    this.state[0].bind.ingredients_qty = [];    
    this.state[0].bind.ingredients_name = [];   
  }
}
let component = new Component();
component.brandLayout();
// component.movieCreate();