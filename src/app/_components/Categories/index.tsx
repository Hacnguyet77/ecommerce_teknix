import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'


import classes from './index.module.scss'
import CategoryCard from './CategoryCard'

const Categories = ({ categories }: { categories: Category[] |null}) => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link href="/products">Show All</Link>
      </div>
    
      {categories ? (
        <div className={classes.list}>
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              category={category} 
            />
          ))}
        </div>
      ) : (
        <p>No categories available</p>
      )}
      
      
    </section>
  )
}

export default Categories