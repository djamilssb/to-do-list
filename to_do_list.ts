import { priority } from "./priority";
import { Task } from "./task";

export class to_do_list {
    private tasks : Task[] =[];
    private trash : Task[] =[];
    public createTask(name:string, date:Date, done : boolean, priority : priority) {
        let new_task : Task = new Task(name, date, done, priority)
        this.tasks.push(new_task);
    };
    public nbToDo() {
        let cpt : number = 0
        for (let i=0; this.tasks.length; i++) {
            if (this.tasks[i].getDone() == false) {
                cpt = cpt+1;
            }
        }
        return cpt;
    };
    public nbDone() {
        let cpt : number = 0
        for (let i=0; this.tasks.length; i++) {
            if (this.tasks[i].getDone() == true) {
                cpt = cpt+1;
            }
        }
        return cpt;
    };
    constructor() {
    };
};