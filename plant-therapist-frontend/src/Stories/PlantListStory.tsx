import { useEffect, useState } from "react";
import { getAllPlants } from "../Api/plant";
import { Plant } from "../models/Plant";
import { PlantCard } from "../Components/PlantCard";
import FlexContainer from "../Components/styles/container.styled";

export const PlantListStory = (): JSX.Element => {
  const [plants, setPlants] = useState<Plant[]>([])

  useEffect(() => {
    fetchAllPlants();
  }, [])

  const fetchAllPlants = async () => {
    const plants = await getAllPlants();
    setPlants(plants ?? [])
  }

  return <div>
    <FlexContainer justifyContent="center" gap='8px'>
      {plants.map((plant) => (
        <PlantCard plant={plant} />
      ))}
    </FlexContainer>
  </div>

}