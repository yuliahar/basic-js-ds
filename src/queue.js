const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this._data = [];
	}

	getUnderlyingList() {
		if (this._data.length) {
			let list = new ListNode(this._data[0]);
			let current = list;
			for (let i = 1; i < this._data.length; i++) {
				current.next = new ListNode(this._data[i]);
				current = current.next;
			}
			return list;
		}
		return null;
	}

	enqueue(value) {
		this._data.push(value);
	}

	dequeue() {
		return this._data.shift();
	}
}

module.exports = {
	Queue,
};
