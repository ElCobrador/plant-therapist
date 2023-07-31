import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Components/Button";
import FlexContainer from "../Components/styles/container.styled";
import { useEffect, useState } from "react";
import { getPlantById } from "../Api/plant";
import { Label } from "../Components/Label";

export const PlantDetailPage = (): JSX.Element => {

  const { plantId } = useParams();
  const navigate = useNavigate();

  const deletePlant = () => {
    // show confirm popup.
  }

  useEffect(() => {
    async function initializeForm() {
        const plant = await getPlantById(plantId!)

        if(!plant) {
            console.log("The plant data could not be loaded.")
            return;
        }

        setFriendlyName(plant.FriendlyName);
        setScientificName(plant.ScientificName);
        setdescription(plant.Description);
        setAssignedProbeId(plant.AssignedProbeId);
    } 
    
    if(plantId) {
        initializeForm();
    }
  }, [])
  
  const [friendlyName, setFriendlyName] = useState("")
  const [scientificName, setScientificName] = useState("")
  const [description, setdescription] = useState("")
  const [assignedProbeId, setAssignedProbeId] = useState("")

  const updatePlant = () => {
    navigate("/plant/" + plantId + "/edit");
  }

  return <div>
    <FlexContainer gap='12px' direction="row">
      <Button text="Delete plant" onClick={() => deletePlant()}/>
      <Button text="Edit plant" onClick={() => updatePlant()}/>
    </FlexContainer>
    
    <FlexContainer direction="column">
      <Label text={"Friendly Name: " + friendlyName} />
      <Label text={"Scientific Name: " + scientificName}/>
      <Label text={"Description: " + description}/>
      <Label text={"AssignedProbeId: " + assignedProbeId}/>
    </FlexContainer>
  </div>
}