import { Plant } from "../models/Plant"
import { FontFamily } from "./Constants/FontFamily";
import { FontSize } from "./Constants/FontSize";
import { Label } from "./Label";
import { CardContainer, CardImage } from "./styles/PlantCard.styled";
import PlantPng from '../assets/images/HeroPlant.png'
import { useNavigate } from 'react-router-dom';

type PlantCardProps = {
  plant: Plant;
}

export const PlantCard = ({ plant }: PlantCardProps): JSX.Element => {

  const navigate = useNavigate();
  const onContainerClicked = () => {
    navigate("/plant/" + plant.Id)
  }

  return <CardContainer onClick={() => onContainerClicked()}>
    <CardImage src={PlantPng} alt='Plant' />
    <Label text={plant.FriendlyName} fontSize={FontSize.Base} />
  </CardContainer>
}