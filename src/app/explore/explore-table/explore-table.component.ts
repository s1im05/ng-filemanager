import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ExploreService} from '../../services/explore.service';

@Component({
    selector: 'app-explore-table',
    templateUrl: './explore-table.component.html',
    styleUrls: ['./explore-table.component.scss']
})
export class ExploreTableComponent implements OnInit, OnChanges {

    @Input() showHidden: boolean;
    list: IFile[];
    wait: boolean;

    constructor(public service: ExploreService) {
    }

    ngOnInit() {
        this.load();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('showHidden')) {
            this.load();
        }
    }

    async load() {
        this.wait = true;
        try {
            const response = await this.service.dir(this.path);
            this.list = response.files.filter(file => this.showHidden ? file : file.name[0] !== '.');
            window.scrollTo(0, 0);
        } catch (e) {
            console.error(e);
        }
        this.wait = false;
    }

    changeDirRelative(e: MouseEvent, dirName: string) {
        e.preventDefault();
        this.path = this.path + '/' + dirName;
    }

    changeDirAbsolute(e: MouseEvent, dirName: string) {
        e.preventDefault();
        this.path = dirName;
    }

    get path(): string {
        return window.sessionStorage.getItem('path') || '';
    }

    set path(newPath: string) {
        window.sessionStorage.setItem('path', newPath);
        this.load();
    }

    onChangePath(newPath: string) {
        this.path = newPath;
    }
}
