import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-nav-top',
    templateUrl: './nav-top.component.html',
    styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

    @Input() showHidden = true;
    @Output() hiddenToggle = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

}
