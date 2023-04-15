import {Treenode} from "./Treenode";
import {Tree} from "./interface";

export class BinaryTree<T> implements Tree<T>{
    root: Treenode<T> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    // @ts-ignore
    getSize(): number {
return this.totalNode
    }

    inorder(node: Treenode<T>): void {
        if (node) {
            console.log(node.data)
            if (node.left) {
                this.inorder(node.left)
            }
            if (node.right) {
                this.inorder(node.right)
            }
        }
    }
    // @ts-ignore
    insert(data:T): // @ts-ignore
        Treenode<T> {
        if (!this.root) {
            this.root = new Treenode<T>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new Treenode<T>(data);
            let currentNode = this.root;

            while (currentNode) {
                /* so sánh giá trị currentNode với data */
                if (data < currentNode.data) {
                    /* nếu currentNode không có phần tử bên trái thì gán bên trái của
                        currentNode bằng node cần thêm
                     */
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    /* gán lại currentNode cho node bên trái */
                    currentNode = currentNode.left;

                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    /* gán lại currentNode cho node bên phải */
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }




    }
}