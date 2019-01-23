import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-explore-breadcrumbs',
    templateUrl: './explore-breadcrumbs.component.html',
    styleUrls: ['./explore-breadcrumbs.component.scss']
})
export class ExploreBreadcrumbsComponent implements OnInit, OnChanges {

    @Input() path: string;
    @Output() changePath = new EventEmitter();
    breadCrumbs: string[];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('path')) {
            try {
                this.breadCrumbs = changes.path.currentValue.split('/');
            } catch (e) {
                this.breadCrumbs = [];
            }
        }
    }

    changeDir(e: MouseEvent, index: number) {
        e.preventDefault();
        this.changePath.emit(this.breadCrumbs.slice(0, index + 1).join('/'));
    }
}
