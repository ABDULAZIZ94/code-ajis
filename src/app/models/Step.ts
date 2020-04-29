export enum StepType{
    featureCode,
    featureTitle,
    featureDescription,
    undescribed
}
export class Step{
    public stepType: StepType = StepType.undescribed;
    public stepContent:String = "";
    
    constructor(){
    };
    public setType(s:StepType){
        switch(s){
            case StepType.featureTitle: this.stepType = s; break;
            case StepType.featureDescription: this.stepType = s; break;
            case StepType.featureTitle: this.stepType = s; break;
            default: this.stepType = StepType.undescribed; break;
        }
    }
}