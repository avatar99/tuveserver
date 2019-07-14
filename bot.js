
const TOKEN = "NjAwMDU0OTA0MzQ1NzIyOTQz.XSuKzQ.gJ_BOXZrJ8azmr0UYwiD3jdhZ0E";

var bot = new Discord.Client();

bot.on("ready", function() {
   console.log("Ready");   
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;


       if(message.content ===("باك")){
          message.channel.send('وِلْكُمْ يْا عَسَلْ');
          }
           if(message.content ===("برب")){
          message.channel.send('تِيْت يْا عَسَل');
             }
              if(message.content ===("كبوش")){
                 message.channel.send('أمِرْ يْا عِيونْ كَبوشْ إِنتْ ؟');
                    }
                                                  }
              if(message.content ===("السلام عليكم")){
                 message.channel.send('وعليكم السلام نورت ♥');

                                           }
              if(message.content ===("تكوتا")){
                 message.channel.send('اه اه اه');

                                                    }
              if(message.content ===(".")){
                 message.channel.send('يلبى الي ينقط بس ♥');

              if(message.content ===("كل زق")){
                 message.channel.send('كُلْ زَقْيِن يْا حَيْوَانْ');
              }
              if(message.content ===("كلزق")){
                 message.channel.send('كُلْ زَقْيِن يْا حَيْوَانْ');
              }
              
              
           
         } 

    });

bot.login('NjAwMDU0OTA0MzQ1NzIyOTQz.XSuKzQ.gJ_BOXZrJ8azmr0UYwiD3jdhZ0E'); 