class MinStack {
    constructor(
    ) {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(typeof val === 'number') this.minStack.push(val)
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = Infinity
        for(let i = 0; i < this.stack.length; i++) {
            min = Math.min(min, this.stack[i])
        }

        return min
    }
}
