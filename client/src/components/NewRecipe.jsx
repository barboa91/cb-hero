import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import DataContext from "./DataContext";

const NewRecipe = () =>{
    const [APILOADED, setAPILOADED] = useState(false);
    const { chefInfo, setChefInfo } = useContext(DataContext)
    const [recipePackage, setRecipePackage] = useState({
        chef:"admin",
        name:"",
        ingredients:[{name:"",amount:""}],
        steps:[{description:""}],
        difficulty:"",
        private:false,
        totalTime:"",
        pictures:[""],
        date:""
    })


//   let getChef = localStorage.getItem('chefI')

//   console.log(getChef)


    // NEXT STEPS IS TO ADD THE REST OF RECIPE

    const changeIngName = (e, index) =>{
        const nValue = e.target.value;
        const prevValue = {...recipePackage}
        prevValue.ingredients[index].name = nValue

        setRecipePackage(prevValue)
    }
    const changeIngAmm = (e, index) =>{
        const nValue = e.target.value;
        const prevValue = {...recipePackage}
        prevValue.ingredients[index].amount = nValue

        setRecipePackage(prevValue)
    }
    const changStepArr = (e, index) =>{
        const nValue = e.target.value;
        const prevValue = {...recipePackage}
        prevValue.steps[index].description = nValue

        setRecipePackage(prevValue)
    }
    const changPicArr = (e, index) =>{
        const nValue = e.target.value;
        const prevValue = {...recipePackage}
        prevValue.pictures[index] = nValue

        setRecipePackage(prevValue)
    }
    const pushPic = () =>{
        const pushArr = {...recipePackage}
        pushArr.pictures.push("")
        setRecipePackage(pushArr)
    }

    const pushIng = () =>{
        const pushArr = {...recipePackage}
        pushArr.ingredients.push({name:"", amount:""})
        setRecipePackage(pushArr)
    }
    const pushStep = () =>{
        const pushArr = {...recipePackage}
        pushArr.steps.push({description:""})
        setRecipePackage(pushArr)
    }

    const submitRecipe = async ()=>{
        const submitR = {...recipePackage}
        submitR.chef = chefInfo.userName


        console.log(chefInfo.userName)

        setRecipePackage(submitR)
        console.log(recipePackage)


        let n = await axios.post(
            "http://127.0.0.1:3001/api/createRecipe",
            recipePackage
          );
          console.log(n)

    }
    const apiCall = async () => {
        try {
            let n = await axios.post("http://127.0.0.1:3001/api/createRecipe", recipePackage);
              console.log(n);
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
          setChefInfo(chefInfo)

      },[recipePackage])

    return(
        <div className="newRecipe">

            <h3>Chef : {chefInfo.firstName}</h3>
            <input type="text" placeholder="Recipe Name" name="rName" value={recipePackage.name} onChange={(e) => setRecipePackage({ ...recipePackage , name: e.target.value})}/><br/>
            <input type="text" placeholder="Difficulty" value={recipePackage.difficulty} onChange={(e) => setRecipePackage({ ...recipePackage , difficulty: e.target.value})}/><br/>

            {recipePackage.ingredients.map((i,index)=>(
                <div className="addIngredient" key={index} ><input  className="oneIng" type="text" placeholder="Ingredient" value={i.name} onChange={e=>changeIngName(e, index)}></input>
                <input className="commInput" type="text" placeholder="Amount" value={i.amount} onChange={e=>changeIngAmm(e, index)}></input>
                <div className="addCom" onClick={()=>pushIng()}>+</div></div>
            ))}

            {recipePackage.steps.map((i,index)=>(
                <div className="addstep" key={index} ><input className="commInput" type="text" placeholder="Step" value={i.description} onChange={e=>changStepArr(e, index)}></input>
                <div className="addCom" onClick={()=>pushStep()} >+</div></div>
            ))}

            {recipePackage.pictures.map((i,index)=>(
                <div className="addstep" key={index} ><input className="commInput" type="text" placeholder="Picture Link" value={i} onChange={e=>changPicArr(e, index)}></input>
               <div className="addCom" onClick={()=>pushPic()} >+</div></div>
            ))}
            <input type="text" placeholder="Date" value={recipePackage.date} onChange={(e) => setRecipePackage({ ...recipePackage , date: e.target.value})}/><br/>





        <div>{recipePackage.name}</div>

        <button onClick={()=>submitRecipe()}>ADD RECIPE</button>
        </div>
    )
}

export default NewRecipe