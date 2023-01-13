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
                   
                   name: 'Michele Lorem',
                   avatar: '_1',
                   visible: true,
                   messages: [
                    {
                     date: '10/01/2020 15:30:55',
                     text: 'Hai portato a spasso il cane?',
                     status: 'sent',
                    
                   },
                   {
                     date: '10/01/2020 15:50:00',
                     text: 'Ricordati di dargli da mangiare',
                     status: 'sent',
                     
                   },
                   {
                     date: '10/01/2020 16:15:22',
                     text: 'Tutto fatto!',
                     status: 'received',
                     
                   }
                   ],
                 },
                 {
                 
                   name: 'Fabio Ipsum',
                   avatar: '_2',
                   visible: true,
                   messages: [{
                     date: '20/03/2020 16:30:00',
                     text: 'Ciao come stai?',
                     status: 'sent',
                    
                   },
                   {
                     date: '20/03/2020 16:30:55',
                     text: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received',
                    
                   },
                   {
                     date: '20/03/2020 16:35:00',
                     text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'sent',
                  
                   }
                   ],
                 },
                 {
                 
                   name: 'Samuele Volano',
                   avatar: '_3',
                   visible: true,
                   messages: [{
                     date: '28/03/2020 10:10:40',
                     text: 'La Marianna va in campagna',
                     status: 'received',
                    
                   },
                   {
                     date: '28/03/2020 10:20:10',
                     text: 'Sicuro di non aver sbagliato chat?',
                     status: 'sent',
                    
                   },
                   {
                     date: '28/03/2020 16:15:22',
                     text: 'Ah scusa!',
                     status: 'received',
                   }
                   ],
                 },
                   {
                              
                   name: 'Luisa Amet',
                   avatar: '_6',
                   visible: true,
                   messages: [{
                     date: '10/01/2020 15:30:55',
                     text: 'Lo sai che ha aperto una nuova pizzeria? lorem uyd nfuiahviuf niufhfaiuafiuhvfaiuhnvn oi',
                     status: 'sent',
                    
                   },
                   {
                     date: '10/01/2020 15:50:00',
                     text: 'Si, ma preferirei andare al cinema',
                     status: 'received',
                    
                   }
                   ],
                 },
                      ],
            selectedIndex: 0,
            newMessage: '',
            searchContact : '',  
            lastIndex : 0,
            isBoxClick: false,
            
            }
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
            this.scrollDownChat()
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
                this.scrollDownChat()
            },2000)
         },

         getLastIndex(index){
            return this.contacts[index].messages.length -1;
         },

        showDeleteMenu(){
          this.isBoxClick = !this.isBoxClick;
        },

        deleteMessage(index){
           this.contacts[this.selectedIndex].messages.splice(index,1);
           this.showDeleteMenu(index);
        },

        scrollDownChat(){
           this.$nextTick(() => {
            this.$refs.chatboard.scrollTop = this.$refs.chatboard.scrollHeight
           });
        },
        
        filterContact(){
          this.contacts.forEach( contact =>{
            contact.visible = contact.name.toLowerCase().includes(this.searchContact.toLowerCase());
          })
        }

        }

    })

app.mount('#board');