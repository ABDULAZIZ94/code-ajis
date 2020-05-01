export class Tutorial{
    //core information
    public tag: String = "";
    public title: String = "";
    public steps: String="";//Step[] = []; //can be code, chapter, description
    public author: String = "";
    //date time
    public date_modified: String = "";//last time modified
    public date_created: String="";
    //code-zizi data
    public popularity: Number = 0;
    public favaroute: Number = 0;
    public comments: String[] = [];
    public reportAbuseCount:Number = 0;
    public reports: String[] = [];
    
    constructor(){};
}