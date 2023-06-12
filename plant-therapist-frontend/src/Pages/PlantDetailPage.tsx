import { useParams } from "react-router-dom";
import { Button } from "../Components/Button";
import FlexContainer from "../Components/styles/container.styled";

export const PlantDetailPage = (): JSX.Element => {

  const { plantId } = useParams();

  return <div>
    <FlexContainer gap='12px' direction="row">
      <Button text="Delete plant" />
      <Button text="Edit plant" />
    </FlexContainer>
    Plant Details for object id : {plantId}
  </div>
}