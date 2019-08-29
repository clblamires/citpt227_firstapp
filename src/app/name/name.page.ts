import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {

  constructor( public route: ActivatedRoute) { }

  username: string;

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("name");
  }

}
// url: /name/Casey