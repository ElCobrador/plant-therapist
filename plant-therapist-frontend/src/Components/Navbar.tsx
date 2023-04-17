import React from 'react'
import { FlexContainer } from './styles/container.styled'

export default function NavBar() {

  return (
    <>
      <FlexContainer direction='row' justifyContent='space-between' padding='30px' alignItems='center'>
        Some Logo
        <FlexContainer direction='row' alignItems='center'>
          Some Navigation links
        </FlexContainer>
      </FlexContainer>
    </>
  )
}
