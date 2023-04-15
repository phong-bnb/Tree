export interface  Tree<T>{
    insert(data:T): Tree<T>;
    inoder(node:Tree<T>):void;
    getsize():number

}