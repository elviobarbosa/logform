import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info } from '../../shared/entities/types/general';

@Component({
  selector: 'app-log-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log-form.component.html',
  styleUrl: './log-form.component.scss'
})



export class LogFormComponent {

  @Input() info:Info | null = null;

}
