import React from 'react'
import { Metadata } from 'next'

import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=
    ${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <section className={classes.login}>
      <div className={classes.heroImg}>
    <Link href="/">
    <Image 
    src="/logo.svg"
    alt="logo"
    width={220}
    height={23}
    className={classes.logo}
    />
  </Link>
  </div>
  <div className={classes.formWrapper}>
  <div className={classes.formContainer}>
    <RenderParams className={classes.params}/>
    <div className={classes.formTitle}>
      <h3>Login</h3>
    </div>
    <div><LoginForm/></div>
  </div>
</div>
<div/>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
