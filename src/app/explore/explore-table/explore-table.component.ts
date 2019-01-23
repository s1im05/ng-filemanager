import {Component, OnInit} from '@angular/core';
import {ExploreService} from '../../services/explore.service';

@Component({
    selector: 'app-explore-table',
    templateUrl: './explore-table.component.html',
    styleUrls: ['./explore-table.component.scss']
})
export class ExploreTableComponent implements OnInit {

    list: any[];

    constructor(public service: ExploreService) {
    }

    ngOnInit() {
        this.load();
    }

    async load() {
        try {
            this.list = await this.service.dir('');
        } catch (e) {
            console.error(e);
        }
    }

}
