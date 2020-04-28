import { Steps } from './Steps';

export class Tutorial{
    //core information
    public tag: String = "";
    public title: String = "";
    public steps: Steps[] = [];
    public author: String = "";
    public source_code: String = "";
    //date time
    public date_modified: String = "";
    public date_created: String="";
    //code-zizi data
    public popularity: Number = 0;
    public favaroute: Number = 0;
    public comments: String[] = [];
    public reportAbuseCount:Number = 0;
    public reports: String[] = [];

    constructor(){};
    
}