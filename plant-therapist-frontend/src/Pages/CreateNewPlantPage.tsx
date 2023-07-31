import { useState } from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Input"
import { Label } from "../Components/Label"
import { CreatePlant } from "../Api/plant"
import FlexContainer from "../Components/styles/container.styled"
import { Plant } from "../models/Plant"

export const CreateNewPlantPage = (): JSX.Element => {

  const onAddPlantClicked = async () => {
    if(isFormValid())
    {
      const newPlant: Plant = {
        Id: "",
        FriendlyName: friendlyName,
        ScientificName: scientificName,
        Description: description,
        AssignedProbeId: assignedProbeId,
      }
      await CreatePlant(newPlant)
    }
  }

  const isFormValid = (): boolean => {
    console.log("TODO: validate the form before sending it to the BE.")
    return true;
  }

  const [friendlyName, setFriendlyName] = useState("SomeFriendlyName")
  const [scientificName, setScientificName] = useState("")
  const [description, setdescription] = useState("")
  const [assignedProbeId, setassignedProbeId] = useState("")

  return <div>
    <FlexContainer direction="column">
      <Label text="Friendly Name" />
      <Input DefaultText={friendlyName} onInputChange={(text) => setFriendlyName(text)} />
      <Label text="Scientific Name" />
      <Input DefaultText={scientificName} onInputChange={(text) => setScientificName(text)} />
      <Label text="Description" />
      <Input DefaultText={description} onInputChange={(text) => setdescription(text)}/>
      <Label text="AssignedProbeId" />
      <Input DefaultText={assignedProbeId} onInputChange={(text) => setassignedProbeId(text)}/>
      
      <Button text="Add plant." onClick={onAddPlantClicked} />
    </FlexContainer>
  </div>
}