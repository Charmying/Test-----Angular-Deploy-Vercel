import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent],
})
export class ButtonComponent {
  @Input() leftIcon!: string;
  @Input() text: string = '';
  @Input() rightIcon!: string;
  @Input() border: boolean = true;
  @Output() buttonClick = new EventEmitter<void>();

  click(): void {
    this.buttonClick.emit();
  }
}
