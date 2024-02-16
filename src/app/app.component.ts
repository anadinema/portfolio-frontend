import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerminalComponent } from './core/terminal/terminal.component';

@Component({
	selector: 'app-root',
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	standalone: true,
	imports: [CommonModule, RouterOutlet, TerminalComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'anadinema-dev-frontend';
}
