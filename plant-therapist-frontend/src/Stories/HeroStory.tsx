import React, { Component } from 'react'
import PlantPng from '../assets/images/HeroPlant.png'
import FlexContainer from '../Components/styles/container.styled'

type Props = {}

type State = {}

export default class HeroStory extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <FlexContainer justifyContent='space-around' direction='row'>
          <div>
            Hero Text
          </div>
          <img src={PlantPng} alt='Plant' height={500} />
        </FlexContainer>
      </div>
    )
  }
} 