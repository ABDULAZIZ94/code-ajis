import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ReadTutorialService } from 'src/app/services/read-tutorial.service';

@Component({
  selector: 'app-read-tutorial',
  templateUrl: './read-tutorial.component.html',
  styleUrls: ['./read-tutorial.component.css']
})
export class ReadTutorialComponent implements OnInit {
  id;
  constructor( private route: ActivatedRoute, public rts: ReadTutorialService) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.rts.getTutorial(this.id);
  }

}
