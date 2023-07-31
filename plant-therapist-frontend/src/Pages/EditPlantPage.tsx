import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Label } from '../Components/Label';
import { Input } from '../Components/Input';
import FlexContainer from '../Components/styles/container.styled';
import { Button } from '../Components/Button';
import { useParams } from 'react-router-dom';
import { getPlantById, updatePlant } from '../Api/plant';
import { Plant } from '../models/Plant';

export default function EditPlantPage() {
  const form = useForm();
  const {plantId} = useParams();
  const onSubmit = () => {
    if(!plantId){
        console.log("The plant id cannot be null.")
    }

    const plantData: Plant = {
        Id: plantId!,
        FriendlyName: friendlyName,
        ScientificName: scientificName,
        Description: description, 
        AssignedProbeId: assignedProbeId
    };

    updatePlant(plantId!, plantData);
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

  return (
    <FlexContainer direction="column">
      <Label text="Friendly Name" />
      <Input DefaultText={friendlyName} onInputChange={(text) => setFriendlyName(text)} />
      <Label text="Scientific Name" />
      <Input DefaultText={scientificName} onInputChange={(text) => setScientificName(text)} />
      <Label text="Description" />
      <Input DefaultText={description} onInputChange={(text) => setdescription(text)}/>
      <Label text="AssignedProbeId" />
      <Input DefaultText={assignedProbeId} onInputChange={(text) => setAssignedProbeId(text)}/>
      
      <Button text="Save" onClick={onSubmit} />
    </FlexContainer>
  )
}
