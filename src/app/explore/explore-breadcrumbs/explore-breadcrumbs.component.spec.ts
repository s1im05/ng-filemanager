import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExploreBreadcrumbsComponent} from './explore-breadcrumbs.component';

describe('ExploreBreadcrumbsComponent', () => {
    let component: ExploreBreadcrumbsComponent;
    let fixture: ComponentFixture<ExploreBreadcrumbsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExploreBreadcrumbsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreBreadcrumbsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
