var app = new Vue({
 el: '#wrapper',
 data:{
   activeIndex: 0,
   txt:'',
   searchContactText:'',
   submit:[],
   contacts: [
	{
		name: 'Michele',
		avatar: '_1',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '10/01/2020 16:15:22',
				text: 'Tutto fatto!',
				status: 'received'
			}
		],
	},
	{
		name: 'Fabio',
		avatar: '_2',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Samuele',
		avatar: '_3',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luisa',
		avatar: '_4',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			}
		],
	},
],

},

methods:{
  newConversation: function(index){
    this.activeIndex = index;
  },


  mexInviato: function () {
    this.contacts[this.activeIndex].messages.push(
      {
        date: '10/01/2020 15:50:00',
        text:  this.txt,
        status: 'sent',
      }
    );

    setTimeout(()=>{
      this.contacts[this.activeIndex].messages.push(
        {
          date: '10/01/2020 15:50:00',
          text:  'ok',
          status: 'received',
        }
      );
   },1000)
   this.txt= '';
  },

  searchContacts  (){
    this.contacts.forEach((element)=>{
      if (element.name.toLowerCase().includes(this.searchContactText.toLowerCase())){
        element.visible = true;
      }else {
        element.visible = false;
      }
      console.log(element);
    });
  },

  ricerca: function (){
    console.log(this.contacts.visible);
    let listaContatti = document.getElementById('listaContatti');
    this.contacts.forEach((element)=>{
      if (this.contacts.visible === false) {
        listaContatti.style.display = none;

      }
    })

  }

}
});
Vue.config.devtools = true
