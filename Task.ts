import { priority } from "./priority";
export class Task {
    private name : string;
    private date : Date;
    private done : boolean;
    private priority : priority;
    
    public taskIsDone() {
        return this.done = true;
    };
    public getDone() {
        return this.done;
    };
    public getName() {
        return this.name;
    };
    public getDate() {
        return this.date;
    };
    public getPriority() {
        return this.priority;
    };
    
    constructor(name:string, date:Date, done : boolean, priority : priority) {
        this.name = name;
        this.date = date;
        this.done = done;
        this.priority = priority;
    };
};