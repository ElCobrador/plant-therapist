import React, { Component, FunctionComponent, useEffect, useState } from 'react'
import { getAllPlants } from '../api/plant'
import PlantPng from '../assets/images/HeroPlant.png'
import FlexContainer from '../Components/styles/container.styled'
import { Plant } from '../models/Plant'

type HeroStoryProps = {}

export const HeroStory = (props: HeroStoryProps): JSX.Element => {

  const [plants, setPlants] = useState<Plant[]>([])

  useEffect(() => {
    fetchAllPlants();
  }, [])

  const fetchAllPlants = async () => {
    const plants = await getAllPlants();
    setPlants(plants ?? [])
  }

  return <div>
    <FlexContainer justifyContent='space-around' direction='row'>
      <div>
        Hero Text
      </div>
      <img src={PlantPng} alt='Plant' height={500} />
    </FlexContainer>
  </div>
}