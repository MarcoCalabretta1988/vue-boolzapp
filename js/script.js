// CHECK JS LINK
console.log('JS OK');
console.log('Vue ok',Vue)

//! VUE INIZIALITATION

const app = Vue.createApp({
    data(){
        return {
            user: {
                name: 'Marco Calabretta',
                avatar: '_io'
              },

            contacts: [
                 {
                   id: 1,
                   name: 'Michele Lorem',
                   avatar: '_1',
                   visible: true,
                   messages: [
                    {
                     date: '10/01/2020 15:30:55',
                     text: 'Hai portato a spasso il cane?',
                     status: 'sent',
                     isBoxClick: false,
                   },
                   {
                     date: '10/01/2020 15:50:00',
                     text: 'Ricordati di dargli da mangiare',
                     status: 'sent',
                     isBoxClick: false,
                   },
                   {
                     date: '10/01/2020 16:15:22',
                     text: 'Tutto fatto!',
                     status: 'received',
                     isBoxClick: false,
                   }
                   ],
                 },
                 {
                   id: 2,
                   name: 'Fabio Ipsum',
                   avatar: '_2',
                   visible: true,
                   messages: [{
                     date: '20/03/2020 16:30:00',
                     text: 'Ciao come stai?',
                     status: 'sent',
                     isBoxClick: false,
                   },
                   {
                     date: '20/03/2020 16:30:55',
                     text: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received',
                     isBoxClick: false,
                   },
                   {
                     date: '20/03/2020 16:35:00',
                     text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'sent',
                     isBoxClick: false,
                   }
                   ],
                 },
                 {
                   id: 3,
                   name: 'Samuele Volano',
                   avatar: '_3',
                   visible: true,
                   messages: [{
                     date: '28/03/2020 10:10:40',
                     text: 'La Marianna va in campagna',
                     status: 'received',
                     isBoxClick: false,
                   },
                   {
                     date: '28/03/2020 10:20:10',
                     text: 'Sicuro di non aver sbagliato chat?',
                     status: 'sent',
                     isBoxClick: false,
                   },
                   {
                     date: '28/03/2020 16:15:22',
                     text: 'Ah scusa!',
                     status: 'received',
                     isBoxClick: false,
                   }
                   ],
                 },
                   {
                    id: 4,               
                   name: 'Luisa Amet',
                   avatar: '_6',
                   visible: true,
                   messages: [{
                     date: '10/01/2020 15:30:55',
                     text: 'Lo sai che ha aperto una nuova pizzeria?',
                     status: 'sent',
                     isBoxClick: false,
                   },
                   {
                     date: '10/01/2020 15:50:00',
                     text: 'Si, ma preferirei andare al cinema',
                     status: 'received',
                     isBoxClick: false,
                   }
                   ],
                 },
                      ],
            selectedIndex: 0,
            newMessage: '',
            searchContact : '',  
            lastIndex : 0,
            
            }
        },
        computed:{
            filteredContact(){
               return this.contacts.filter( contact => contact.name.toLowerCase().includes(this.searchContact.toLowerCase()));
            },
            
        },
    methods:{
         changeCurrentIndex(index){
            this.selectedIndex = index;
         },
         addNewMessage(){
            if(this.newMessage){
            const message ={
                date: new Date().toLocaleString(),
                text: this.newMessage,
                status: 'sent'
            }
            this.contacts[this.selectedIndex].messages.push(message);
            this.interlocutorResponse();
            this.newMessage = '';
           }
         },
         interlocutorResponse(){
            setTimeout (()=>{
                const message ={
                    date: new Date().toLocaleString(),
                    text: 'ok',
                    status: 'received'
                }
                this.contacts[this.selectedIndex].messages.push(message);
            },2000)
         },
         getLastIndex(index){
            return this.contacts[index].messages.length -1;
         },
        showDeleteMenu(index){
          this.contacts[this.selectedIndex].messages[index].isBoxClick= !this.contacts[this.selectedIndex].messages[index].isBoxClick;

        },
        deleteMessage(index){
          if(this.contacts[this.selectedIndex].messages){
           this.contacts[this.selectedIndex].messages.splice(index,1);
           this.showDeleteMenu(index);
          }
        }
        }

    })

app.mount('#board');