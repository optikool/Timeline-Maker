import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../interfaces/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  public dataSource: Member[];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.dataSource = data.members;
    });
  }

  ngOnInit(): void {
    
  }
}
