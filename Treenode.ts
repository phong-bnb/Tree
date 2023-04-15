 export class Treenode <T> {
    data: T;

    left: Treenode<T> |null
    right: Treenode<T>|null
    constructor(data:T) {
        this.data= data
        this.right=null
        this.left=null

    }



}