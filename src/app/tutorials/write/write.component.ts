import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { WriteService } from 'src/app/services/write.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css'],
})
export class WriteComponent implements OnInit {
  constructor(public ws: WriteService ) { }
  ngOnInit(): void { }
}
