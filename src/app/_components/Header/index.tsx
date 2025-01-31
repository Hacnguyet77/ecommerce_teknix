{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import  HeaderComponent from './HeaderComponent';

export async function Header() {
  let header: HeaderType | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    console.log(error)
  }

  return (
    <>
      <HeaderComponent header = {header} />
    </>
  )
}
