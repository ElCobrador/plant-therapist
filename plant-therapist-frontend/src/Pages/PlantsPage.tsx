import { Button } from "../Components/Button"
import FlexContainer from "../Components/styles/container.styled"
import { PlantListStory } from "../Stories/PlantListStory"

export const PlantsPage = (): JSX.Element => {
  return <div>
    <Button text="Add new plant" />
    <PlantListStory />
  </div>
}