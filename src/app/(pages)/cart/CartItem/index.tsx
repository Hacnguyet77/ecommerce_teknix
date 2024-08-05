import React, { useState } from "react"
import classes from './index.module.scss'
import Link from "next/link"
import { Media } from "@/app/_components/Media"
import { Price } from "@/app/_components/Price"
import Image from "next/image"
import { RemoveFromCartButton } from "@/app/_components/RemoveFromCartButton"

const CartItem = ({ product, title, metaImage, quantity, addItemToCart}) => {
    const[qty, setQuantity]= useState(quantity)
    const decrementQuantity=()=> {
        const updateQuantity= quantity>1? quantity-1:1

        setQuantity(updateQuantity)
        addItemToCart({product, quantity:Number(updateQuantity)})
    }
    const incrementQuantity=()=> {
        const updateQuantity= quantity + 1

        setQuantity(updateQuantity)
        addItemToCart({product, quantity:Number(updateQuantity)})
    }
    const enterQuantity=(e: React.ChangeEvent<HTMLInputElement>)=> {
        const updateQuantity= Number(e.target.value)
        setQuantity(updateQuantity)
        addItemToCart({product, quantity:Number(updateQuantity)})
    }
    return <li className={classes.item} key={title}>
        <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No image</span>}
        {metaImage && typeof metaImage!== 'string'&&(
            <Media className={classes.media} 
            imgClassName={classes.image} resource={metaImage} fill/>
        )}
        </Link>

        <div className={classes.itemDetails}>
            <div className={classes.titleWrapper}>
                <h6>{title}</h6>
                <Price product={product} button={false}/>
            </div>
            <div className={classes.quantity}>
                <div className={classes.quantityBtn} onClick={decrementQuantity}>
                    <Image src="/assets/icons/minus.svg" alt="minus" 
                    width={24} height={24} className={classes.qtnBt}/> 
                </div>

                <input 
                type="text"
                className={classes.quantityInput}
                value={quantity}
                onChange={enterQuantity}
                />
                <div className={classes.quantityBtn} onClick={incrementQuantity}>
                    <Image src="/assets/icons/plus.svg" alt="plus" width={24} 
                    height={24} className={classes.qtnBt}/> 
                </div>
            </div>
        </div>
        <div className={classes.subtotalWrapper}>
            <Price product={product} button={false} quantity={quantity}/>
            <RemoveFromCartButton product={product}/>
        </div>
    </li>
}

export default CartItem