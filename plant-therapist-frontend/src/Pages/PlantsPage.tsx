import { useNavigate } from "react-router-dom"
import { Button } from "../Components/Button"
import { PlantListStory } from "../Stories/PlantListStory"

export const PlantsPage = (): JSX.Element => {
  const navigate = useNavigate();

  const onAddNewPlant = () => {
    navigate('/CreatePlant/')
  }

  return <div>
    <Button text="Add new plant" onClick={onAddNewPlant} />
    <PlantListStory />
  </div>
}