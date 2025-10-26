import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any[] = [];
  newItem: any = { title: '', description: '', imageUrl: '', projectUrl: '' };

  constructor(private svc: PortfolioService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAll().subscribe((data: any) => {
      this.items = data || [];
    });
  }

  add() {
    if (!this.newItem.title) return;
    this.svc.create(this.newItem).subscribe(() => {
      this.newItem = { title: '', description: '', imageUrl: '', projectUrl: '' };
      this.load();
    });
  }

  open(item: any) {
    if (item?.projectUrl) {
      window.open(item.projectUrl, '_blank');
    }
  }
}
