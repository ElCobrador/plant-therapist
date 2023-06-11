import { useEffect, useState } from "react";
import { getAllPlants } from "../api/plant";
import { Plant } from "../models/Plant";
import { PlantCard } from "../Components/PlantCard";

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
    {plants.map((plant) => (
      <>
        <PlantCard plant={plant} />
      </>
    ))}
  </div>

}