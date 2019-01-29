import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-nav-top',
    templateUrl: './nav-top.component.html',
    styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

    @Input() showHidden;
    @Output() hiddenToggle = new EventEmitter();
    showHiddenKey = 'showHidden';

    constructor() {
    }

    ngOnInit() {
        this.showHidden = window.localStorage.getItem(this.showHiddenKey) !== null &&
            window.localStorage.getItem(this.showHiddenKey) === '1';

        window.setTimeout(() => {
            this.hiddenToggle.emit(this.showHidden);
        });
    }

    onHiddenToggle() {
        this.hiddenToggle.emit(this.showHidden = !this.showHidden);
        window.localStorage.setItem(this.showHiddenKey, this.showHidden ? '1' : '0');
    }

}
