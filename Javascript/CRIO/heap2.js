class MinHeap{
    constructor() {
        this.heap = [];
    }
    add(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    compare(a,b){
        return a.val-b.val;
    }
    size(){
        return this.heap.length;
    }
    swap(i,j){
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    peek(){
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    heapifyDown(index){
        let leftChildIndex, rightChildIndex;
        while(index < this.heap.length){
            let minIndex = index;
            leftChildIndex = 2*index +1 ;
            rightChildIndex = 2*index +2 ;
            if(leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex],this.heap[minIndex]) < 0)
                minIndex = leftChildIndex;
            else
                minIndex = rightChildIndex;
            if(minIndex !== index){
                this.swap(index,minIndex);
                index = minIndex;
            }
            else{
                break;
            }
        }
    }
    poll(){
        if(this.heap.length === 0){
            return null;
        }
        if(this.heap.length == 1 ){
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return min;
    }
    heapifyUp(index){
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.compare(this.heap[index],this.heap[parentIndex]) < 0){
                this.swap(index, parentIndex);
                index = parentIndex;
            }
            else{
                break;
            }
        }
    }
}