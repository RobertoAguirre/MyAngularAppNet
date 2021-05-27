import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService

  ) { }

  ngOnInit(): void {
  }

  CallARobot() {
    this.apiService.localTest();
  }

  InsertNewItem() {
    let task =
    {
      "name": "Go to work",
      "isComplete": false
    }

    this.apiService.saveToDoItem(task).subscribe((response) => {
      let _response;
      _response = response;
    });

  }

}
