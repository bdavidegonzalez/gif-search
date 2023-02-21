import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch'])


    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories])
    }

    console.log(categories);

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
            
        {/* search */}

        {/* <AddCategory setCategories={ setCategories } /> */}
        <AddCategory onNewCategory={ onAddCategory }/>

        {/* listado de gif */}
        { 
            categories.map( (category) => (
                < GifGrid key={ category } category={category} />
            ))
        }

        </>
    )
}