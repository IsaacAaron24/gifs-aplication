import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['one piece'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}


