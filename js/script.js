// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. [completato]
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. [completato]

// MILESTONE 2 [completato]
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista. [completato]

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. [completato]

const app = new Vue(
    {
        el: "#root",
        data: {
            todos: [
                {
                    text: "fare l'esercizio",
                    done: false,
                },
                {
                    text: "seguire il recap",
                    done: false,
                },
                {
                    text: "andare in palestra",
                    done: false,
                },
                {
                    text: "tornare a casa e fare la doccia",
                    done: false,
                },
                {
                    text: "cenare",
                    done: false,
                },
            ],
            newToDo: '',
        },
        methods: {
            // funzione aggiungi elemento
            addToDo: function() {
                
                // creo nuovo todo
                const newToDo = {
                    text: this.newToDo,
                    done: false,
                }
                this.todos.push(newToDo);
                this.newToDo = "";
                
            },

            // funzione rimuovi elemento
            removeToDo: function(index) {
                this.todos.splice(index, 1);
            },

            // funzione per verificare se l'azione è stata fatta o meno
            toggleDone: function(index) {
                const clicked = this.todos[index];
                if(clicked.done) {
                    clicked.done = false;
                } else {
                    clicked.done = true;
                }
            },


        }
    }
)