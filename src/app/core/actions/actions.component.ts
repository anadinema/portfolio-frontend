import { Component } from '@angular/core';
import { Commands } from '../models/command.type';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  template: `
    <p>
      actions works!
    </p>
  `,
  styles: ``
})
export class ActionsComponent {

	run(command: Commands): string {
		switch (command) {
			case Commands.help:
				return help();
			case Commands.clear:
				return clear();
			case Commands.about:
				return getAboutMe();
			case Commands.contact:
				return getContactDetails();
			case Commands.projects:
				return getProjectDetails();
			case Commands.resume:
				return getResume();
			case Commands.socials:
				return getSocialAccounts();
			case Commands.whoami:
				return whoAmI();
			case Commands.history:
				return getCommandHistory();
			default:
				return commandNotFound();
		}
	}
}

function getCommandHistory(): string {
	throw new Error('Function not implemented.');
}

function commandNotFound(): string {
	throw new Error('Function not implemented.');
}

function help(): string {
	throw new Error('Function not implemented.');
}

function clear(): string {
	throw new Error('Function not implemented.');
}

function getAboutMe(): string {
	throw new Error('Function not implemented.');
}

function getContactDetails(): string {
	throw new Error('Function not implemented.');
}

function getProjectDetails(): string {
	throw new Error('Function not implemented.');
}

function getResume(): string {
	throw new Error('Function not implemented.');
}

function getSocialAccounts(): string {
	throw new Error('Function not implemented.');
}

function whoAmI(): string {
	throw new Error('Function not implemented.');
}

