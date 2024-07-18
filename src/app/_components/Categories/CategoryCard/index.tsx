'use client'
import React from 'react'
import Link from 'next/link'

import { Category} from '../../../../payload/payload-types'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'

type CategoryCardProps = {
  category: Category
}


const CategoryCard = ({ category }: CategoryCardProps) => {
const { setCategoryFilters } = useFilter()


  return (
    <div className={classes.card}>
        <Link
      href="/products" 
      onClick={()=> setCategoryFilters([category.id])}
    >
      <p >{category.title}</p>
    </Link>
    </div>
    
  )
}

export default CategoryCard