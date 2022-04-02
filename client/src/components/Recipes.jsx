import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () =>{
    //STATE
  const [APILOADED, setAPILOADED] = useState(false);
  let [recipes, setRecipies] = useState([]);
  let [chefs, setChefs] = useState([]);
  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(false);


  const chefData = (chefid)=>{
    const findChefName = chefi => chefs.find(chef => chef.username === chefi);
    const x = findChefName(chefid)
    return (x.firstName+" "+x.lastName)
  }

  // const chefsID = (chefid)=>{
  //   const findChefName = chefi => chefs.find(chef => chef.username === chefi);
  //   const x = findChefName(chefid)
  //   return (x._id)
  // }

  const addCupboard = async (r) =>{

    let cid = "62473b56d99e6a53bffb24c3";
    let chefstuff = await axios.get(`http://127.0.0.1:3001/api/chef/${cid}`);
    console.log(r)
    console.log(chefstuff)
    chefstuff.data.chef.recipesSaved.push(r._id)
    console.log(r)
    let c = await axios.post(`http://127.0.0.1:3001/api/addRecipe/${cid}`,chefstuff);
    console.log(c)
    setComment("")

  }

  const destroyFood = async (recID) =>{
      const del = prompt("Whats the delete password")
      if(del === "boom"){
        let c = await axios.delete(`http://127.0.0.1:3001/api/delRecipe/${recID}`);
        console.log(c)
      }
      return
      
  }
  const pushCom = async (recipe) =>{

    recipe.comments.push(comment)
    console.log(recipe)
    let c = await axios.post(`http://127.0.0.1:3001/api/commentRecipe/${recipe._id}`,recipe);
    console.log(c)
    setComment("")


  }


  const apiCall = async () => {
    try {
        let x = await axios("http://127.0.0.1:3001/api/recipe/all");// Get all of the recipes
        setRecipies(x.data.recipes);
        console.log("Loaded Recipes")
        let c = await axios("http://127.0.0.1:3001/api/chef/all");
        setChefs(c.data.chefs);
        console.log("Loaded Chefs")

        setAPILOADED(true)
      } catch (err) {
        console.log(err);
      }
      
  }
  const loadAPI = () => {
    !APILOADED ? apiCall() : setAPILOADED(true);
  };
  useEffect(() => {
    
    loadAPI();
  },[recipes]);
  if(!APILOADED){
    return(
    <p>LOADING</p>
    )
  }else
  return(
    <div>
      {recipes.map((r,index) =>{
        return(
          <div key={index} className="recipeBlock"> 
            <div className="recipeName">{r.name}</div>
            {r.pictures.length >= 1 && <img className="recipePic"alt="recipe" src={r.pictures}></img>} {/* if the there are no pictures, dont display */}

            <div className="ingstep">
              <div className="ingList">
              Ingredients
            <ul className="ingredients">{r.ingredients.map((i,index)=>{            //loop through ingredients
              return(<li key={index} className="ing">{i.amount} {i.name}</li>)
            })}</ul>
            </div>
            <div className="stepList">Steps
            <ol className="rSteps">{r.steps.map((s,index)=>{            //loop through ingredients
              return(<li key={index} className="rStep">{s.description}</li>)
            })}</ol></div>

            </div>
            <div className = "commSec"onClick={()=>setShowComment(!showComment)}>Show Comments
            {(r.comments.length >= 1 && showComment)&& <div> {r.comments.map((c)=>(<div className="rComments">{c}</div>))} <br/></div>}
            <div className="addstep"><input
            className="commInput"
            type="text"
            name="comment"
            placeholder="Comment Here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
        />
             <div className="addCom" onClick={()=>pushCom(r)}> + </div><br/>
             </div></div>
            {chefData(r.chef)}
            <h6>{r.date}</h6>
            <button onClick={()=>addCupboard(r)}>ADD TO CUPBOARD</button>
            <button onClick={()=>destroyFood(r._id)}>DELETE</button>
          </div>
        )
      })}


      {console.log(recipes)}
    </div>
  )
}

export default Recipes