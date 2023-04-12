const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode;
	}

	add(value) {
		const newNode = new Node(value);

		if (this.rootNode === null) {
			this.rootNode = newNode;
		} else {
			insertNode(this.rootNode, newNode);
		}

		function insertNode(node, newNode) {
			if (newNode.data < node.data) {
				if (node.left === null) {
					node.left = newNode;
				} else {
					insertNode(node.left, newNode);
				}
			} else {
				if (node.right === null) {
					node.right = newNode;
				} else {
					insertNode(node.right, newNode);
				}
			}
		}
	}

	has(value) {
		if (this.find(value) === null) {
			return false;
		} else {
			return true;
		}
	}

	find(value) {
		if (this.rootNode === null) {
			return null;
		} else {
			return searchNode(this.rootNode, value);
		}

		function searchNode(node, value) {
			if (node === null) {
				return null;
			} else if (value < node.data) {
				return searchNode(node.left, value);
			} else if (value > node.data) {
				return searchNode(node.right, value);
			} else {
				return node;
			}
		}
	}

	remove(value) {
		if (this.rootNode === null) {
			return null;
		} else {
			this.rootNode = removeNode(this.rootNode, value);
		}

		function removeNode(node, value) {
			if (node === null) {
				return null;
			}
			if (value < node.data) {
				node.left = removeNode(node.left, value);
				return node;
			} else if (value > node.data) {
				node.right = removeNode(node.right, value);
				return node;
			} else {
				if (node.left === null && node.right === null) {
					node = null;
					return node;
				}
				if (node.left === null) {
					node = node.right;
					return node;
				} else if (node.right === null) {
					node = node.left;
					return node;
				}
				let minRight = node.right;
				while (minRight.left !== null) {
					minRight = minRight.left;
				}
				node.data = minRight.data;
				node.right = removeNode(node.right, minRight.data);
				return node;
			}
		}
	}

	min() {
		if (this.rootNode === null) {
			return null;
		} else {
			let node = this.rootNode;
			while (node.left !== null) {
				node = node.left;
			}
			return node.data;
		}
	}

	max() {
		if (this.rootNode === null) {
			return null;
		} else {
			let node = this.rootNode;
			while (node.right !== null) {
				node = node.right;
			}
			return node.data;
		}
	}
}

module.exports = {
	BinarySearchTree,
};
