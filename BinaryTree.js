"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var Treenode_1 = require("./Treenode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    // @ts-ignore
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.inorder = function (node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inorder(node.left);
            }
            if (node.right) {
                this.inorder(node.right);
            }
        }
    };
    // @ts-ignore
    BinaryTree.prototype.insert = function (data) {
        if (!this.root) {
            this.root = new Treenode_1.Treenode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new Treenode_1.Treenode(data);
            var currentNode = this.root;
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
                }
                else if (data > currentNode.data) {
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
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
