export abstract class PlantDtoSwaggerDoc {

  public static FriendlyName = {
    description: "The plant's friendly name.",
    required: true
  }

  public static ScientificName = {
    description: "The plant's scientific name.",
    required: false
  }

  public static Description = {
    description: "The plant's description",
    required: false
  }

  public static AssignedProbeId = {
    description: "The probe assigned to the plant.",
    required: false
  }

}