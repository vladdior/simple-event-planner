import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EventsService } from 'src/app/services/events.service';
import { EventModel } from '../../models/event.model';

import {
  MatCarousel,
  MatCarouselComponent,
  MatCarouselSlideComponent,
} from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('carousel')
  carousel: MatCarouselComponent;

  events: EventModel[];

  slides = [
    {
      image:
        'https://soject.com/wp-content/uploads/2020/08/annie-spratt-QckxruozjRg-unsplash-1.jpg',
    },
    {
      image: 'https://img.freepik.com/free-photo/diverse-team-young-software-programmers-using-computers-writing-code-while-collaborating-project-it-development-studio-copy-space_236854-29533.jpg?w=2000',
    },
    {
      image:
        'https://miro.medium.com/max/1400/0*AZw9xyZa0f1veJg0',
    },
    {
      image:
        'https://miro.medium.com/max/1400/0*VfeKJdOSbVwQVm0L',
    },
  ];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService
      .getApprovedEvents()
      .toPromise()
      .then((events) => {
        this.events = events.sort((a, b) => {
          return (
            new Date(a.startDateTime).getTime() -
            new Date(b.startDateTime).getTime()
          );
        });

        if (this.events.length > 5) {
          this.events.length = 5;
        }

        console.log(this.events);
      })
      .catch((e) => console.log(e));
  }

  convertDate(x: any) {
    return new Date(x).toLocaleString();
  }

  getTime(x: any) {
    return new Date(x).toLocaleTimeString();
  }

  getDate(x: any) {
    return new Date(x).getDate();
  }

  getMonth(x: any) {
    return new Date(x).toLocaleString('default', { month: 'long' });
  }
}
