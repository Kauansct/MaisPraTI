// lista bi-encadeadas

class Node{
    constructor(data){
        this.data = data
        this.next = null // proximo elemento da lista
        this.previous = null // elemento anterior da lista
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null // primeiro elemento da lista
        this.tail = null // ultimo elemento da lista
        this.size = 0 // tamanho da lista 
    }

    add(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.size++
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log('index fora dos limites!')
        }

        let newNode = new Node(data)
        let current = this.head
        let previous

        if(index === 0){
            if(this.head === null){
                this.head = newNode
                this.tail = newNode
            }
            else{
                newNode.next = this.head
                this.head.previous = newNode
                this.head = newNode
            }
        }
        else if(index === this.size){
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        else{
            for(let i = 0; i < index; i++){
                current = current.next
            }

            newNode.next = current
            newNode.previous = current.previous
            current.previous.next = newNode
            current.previous = newNode
        }
        
        this.size++
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log('index fora dos limites!')
        }

        let current = this.head

        if(index === 0){
            this.head = this.head.next

            if(this.head !== null){
                this.head.previous = null
            }
            else{
                this.tail = null
            }
        }
        else if(index === this.size - 1){
            this.tail = this.tail.previous
            this.tail.next = null
        }
        else{
            for(let i = 0; i < index; i++){
                current = current.next
            }

            current.next.previous = current.previous
            current.previous.next = current.next
        }

        this.size--
    }

    printList(){
        let current = this.head
        let result = []

        while(current !== null){
            result.push(current.data)
            current = current.next
        }

        console.log(result.join(' <=> '))
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
    }

    getData(index){
        if(index < 0 || index >= this.size){
            return console.log('index fora dos limites!')
        }
        else{
            let current = this.head

            for(let i = 0; i < index; i++){
                current = current.next
            }

            return current.data
        }
    }

    removeAll(){
        this.head = null
        this.tail = null
        this.size = 0

        console.log(`Lista limpa!`)
    }
}

let List = new doublyLinkedList()

List.add("Fomação +praTI")
List.add(true)
List.add(1998)
List.add("elemento")
List.printList()
List.removeFrom(List.getSize() - 1)
List.printList()
List.insertAt(10, List.getSize())
List.printList()

console.log(`Elemento na posição 2:`, List.getData(2))
console.log(`A lista está vazia?`, List.isEmpty())
console.log(`Tamanho da lista?`, List.getSize())

List.removeAll()
List.printList()