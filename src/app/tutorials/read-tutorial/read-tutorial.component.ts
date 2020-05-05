import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read-tutorial',
  templateUrl: './read-tutorial.component.html',
  styleUrls: ['./read-tutorial.component.css']
})
export class ReadTutorialComponent implements OnInit {
  id;
  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
