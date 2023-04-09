import { Component } from "@angular/core";

@Component({
    selector: 'students',
    template: '<h2>{{getTitle()}}</h2><h2>{{getCurrentDate()}}</h2>'
})

export class StudentComponent {
    title = "My list of Students"

    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        const date = new Date();
        return date.toDateString()
    }

}