import React from 'react'
import { FlexContainer } from './styles/container.styled'
import { FontSize } from './Constants/FontSize';
import { Label } from './Label';
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <>
      <FlexContainer direction='row' justifyContent='space-between' padding='30px' alignItems='center'>
        <Label text='Some Logo' fontSize={FontSize.H5} />
        <FlexContainer direction='row' alignItems='center' gap='12px'>
          <Link to="/">
            <Label text='Home' fontSize={FontSize.Base} />
          </Link>
          <Link to="/plants">
            <Label text='Plants' fontSize={FontSize.Base} />
          </Link>
          <Link to="/profile">
            <Label text='Profile' fontSize={FontSize.Base} />
          </Link>
        </FlexContainer>
      </FlexContainer>
    </>
  )
}
