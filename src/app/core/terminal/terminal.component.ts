import { Component } from '@angular/core';
import { GlobalConstants } from '../../shared/GlobalConstants';
import { BannerComponent } from '../banner/banner.component';
import { CommonUtils } from '../../shared/utils/common.utils';

@Component({
	selector: 'app-terminal',
	standalone: true,
	imports: [BannerComponent],
	templateUrl: './terminal.component.html',
	styleUrl: './terminal.component.scss',
})
export class TerminalComponent {
	command: string = 'help';
	isClearCalled: boolean = false;
	readonly prompt: string = CommonUtils.providePrompt().toLowerCase();

	setInput(event: Event) {
		this.command = (event.target as HTMLInputElement).value
	}

	getKeyPress(event: KeyboardEvent) {
		if (event.key == 'Enter') {
			console.log("Enter triggered");
			this.command = '';
		}
	}

}
