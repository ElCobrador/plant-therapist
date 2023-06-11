import React from 'react'
import { FlexContainer } from './styles/container.styled'
import { FontSize } from './Constants/FontSize';
import { Label } from './Label';

export default function NavBar() {

  return (
    <>
      <FlexContainer direction='row' justifyContent='space-between' padding='30px' alignItems='center'>
        <Label text='Some Logo' fontSize={FontSize.H5} />
        <FlexContainer direction='row' alignItems='center'>
          <Label text='Some Navigation links' fontSize={FontSize.Base} />
        </FlexContainer>
      </FlexContainer>
    </>
  )
}
