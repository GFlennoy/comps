import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'Blue light scatters more' },
    { title: 'What does an orange taste like?', content: 'like an orange' },
    { title: 'What is Gokus weakness?', content: 'healing his enemies' }
  ];

  constructor() { }

  ngOnInit (): void { }

  onClick () {
    this.modalOpen = !this.modalOpen;
  }
}
