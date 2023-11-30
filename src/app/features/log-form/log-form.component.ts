import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info } from '../../shared/entities/types/general';
import { KeyValueEnum } from '../../shared/entities/types/general';
import { CustomerList, InvestorList, IvenstimentList } from '../../shared/entities/enums/general';

@Component({
  selector: 'app-log-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log-form.component.html',
  styleUrl: './log-form.component.scss'
})

export class LogFormComponent {
  @Input() info: Info | null = null;

  public investorList: KeyValueEnum[] = InvestorList;
  public ivenstimentList: KeyValueEnum[] = IvenstimentList;
  public customerList: KeyValueEnum[] = CustomerList;
}
