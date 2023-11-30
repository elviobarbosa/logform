import { Component } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LogFormComponent } from './features/log-form/log-form.component';
import { data } from './mock';
import { Info, KeyValueEnum } from './shared/entities/types/general';
import { InvestorList, IvenstimentList, CustomerList } from './shared/entities/enums/general';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LogFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public info:Info = data;

  title = 'logform';
}
