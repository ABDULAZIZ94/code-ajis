enum StepType{
    featureCode,
    featureTitle,
    featureDescription,
    undescribed
}
export class Steps{
    public stepType: StepType = StepType.undescribed;
    public stepContent:String = "";
    
    constructor(){};
}