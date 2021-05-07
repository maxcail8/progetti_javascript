let ctx;
let lista_t;
let bubble;


$(document).ready(function(){
    ctx = $("#myChart");

    //Array con i terremoti
    lista_t = new Array();

    class terremoto{
        constructor(luogo, lat, long, magnitudo, anno, x, y){
            this.luogo = luogo;
            this.lat = lat;
            this.long = long;
            this.magnitudo = magnitudo
            this.anno = anno;
            this.x = x;
            this.y = y;
        }
    }

    function addList(t){
        lista_t.push(t);
    }

    //Deboli (Magnitudo <=2.5)
    let t;
    t = new terremoto("Mar Ionio", 42.1, 53, 2.3, 2020, 58.5, 12);
    addList(t);
    t = new terremoto("Napoli", 28.9, 25.9, 2.5, 2007, 51, 19);
    addList(t);
    t = new terremoto("Bologna", 12.8, 42, 2.0, 2015, 46.5, 34);
    addList(t);
    t = new terremoto("Genova", 22.6, 21.2, 2.2, 1740, 42.5, 34);
    addList(t);
    t = new terremoto("Parigi", 48.6, 13.2, 2.0, 2013, 29, 55);
    addList(t);
    t = new terremoto("Vienna", 56.5, 19.6, 2.4, 1995, 51.5, 46);
    addList(t);
    t = new terremoto("Sarajevo", 49.5, 15.6, 2.0, 2018, 58.5, 31);
    addList(t);
    t = new terremoto("Barcellona", 50.5, 17.6, 2.4, 2001, 29.5, 26);
    addList(t);
    t = new terremoto("Berlino", 40.5, 19.6, 2.0, 2012, 48.5, 68);
    addList(t);

    //Medi (Magnitudo >2.5 e <=3.5)
    t = new terremoto("Monte Bianco", 45.8, 6.6, 2.6, 2000, 40.5, 43);
    addList(t);
    t = new terremoto("Venezia", 46.2, 10.5, 3.2, 2011, 48.5, 37);
    addList(t);
    t = new terremoto("Palermo", 39.9, 22.2, 2.9, 2017, 48.5, 8);
    addList(t);
    t = new terremoto("Cagliari", 38.7, 19.5, 3.5, 2004, 41, 13);
    addList(t);
    t = new terremoto("Madrid", 45.6, 17.2, 3.0, 2001, 15.5, 32);
    addList(t);
    t = new terremoto("Monaco di Baviera", 40.6, 19.4, 2.9, 1800, 46.5, 53);
    addList(t);
    t = new terremoto("Budapest", 30.6, 16.4, 2.8, 2019, 53.5, 43);
    addList(t);
    t = new terremoto("Bucarest", 16.5, 10.4, 2.7, 2002, 76.5, 38);
    addList(t);
    t = new terremoto("Ankara", 43.5, 19.4, 3.4, 2019, 90.5, 18);
    addList(t);
    t = new terremoto("Algeri", 48.5, 12.4, 3.5, 2007, 28.5, 7);
    addList(t);

    //Forti (Magnitudo >=3.5 e <5.0)
    t = new terremoto("Messina", 38, 15, 4.2, 1986, 54, 7.5);
    addList(t);
    t = new terremoto("Milano", 37.5, 12.5, 3.7, 2003, 44, 39);
    addList(t);
    t = new terremoto("Firenze", 39.4, 23.7, 4.5, 1999, 45.5, 28);
    addList(t);
    t = new terremoto("Bari", 42.5, 19.5, 4.8, 2005, 57.5, 19);
    addList(t);
    t = new terremoto("Atene", 45, 26.5, 4.3, 2009, 71.5, 7);
    addList(t);
    t = new terremoto("Londra", 49.5, 17.4, 4.9, 2007, 28.5, 67);
    addList(t);
    t = new terremoto("Copenaghen", 35.5, 19.4, 4.0, 2000, 49.7, 77);
    addList(t);
    t = new terremoto("Kiev", 25.5, 18.4, 4.7, 2015, 81.5, 66);
    addList(t);
    t = new terremoto("Tolosa", 35.5, 22.4, 3.7, 2004, 28.5, 39);
    addList(t);

    //Molto forti (Magnitudo >=5.0)
    t = new terremoto("L'Aquila", 42.2, 13.5, 6.1, 2009, 49.5, 28);
    addList(t);
    t = new terremoto("Mar Tirreno", 38.6, 15, 5.8, 2006, 45.5, 18);
    addList(t);
    t = new terremoto("Potenza", 43.2, 18.2, 7.2, 1857, 54.7, 15);
    addList(t);
    t = new terremoto("Lisbona", 30.2, 10.8, 8.7, 1755, 5.5, 26);
    addList(t);
    t = new terremoto("Kamcatka", 50, 18.5, 8.5, 1737, 95.5, 99);
    addList(t);
    t = new terremoto("Varsavia", 32.6, 16.7, 5.3, 1991, 60.2, 65);
    addList(t);
    

    //Funzione che mi restituisce tutti i dati della bolla posizionata in (x,y)
    function getLabel(x, y){
        trovato = false;
        str = "";
        for(i=0;!trovato && i<lista_t.length;i++){
            t = lista_t[i];
            if(t.x==x && t.y ==y){
                trovato=true;
                str+= ': Luogo, ' + t.luogo + ', Lat: ' + t.lat + ', Long: ' + t.long + ', Maginitudo: ' + t.magnitudo + ', Anno: ' + t.anno + ')';
            }
        }
        
        return str;
    }

    bubble = new Chart(ctx, {
        type: 'bubble',
        data: {
            // posso inserire più di un dataset all'inteno dell'attibuto datasets
            datasets:[
                { //Terremoti deboli
                label:'Debole',
                backgroundColor:'rgba(0, 128, 0, 0.3)',
                borderColor:'rgba(0, 128, 0, 1.0)',
                borderWidth:3
            },
                { //Terremoti medi
                label:'Medio',
                backgroundColor:'rgba(255, 102, 0, 0.35)',
                borderColor:'rgba(255, 102, 0, 1.0)',
                borderWidth:3
            },
                {//Terremoti forti
                label:'Forte',
                backgroundColor:'rgba(255, 0, 0, 0.4)',
                borderColor:'rgba(255, 0, 0, 1.0)',
                borderWidth:3
            },
                {//Terremoti molto forti
                label:'Molto forte',
                backgroundColor:'rgba(0, 0, 0, 0.65)',
                borderColor:'rgba(0, 0, 0, 1.0)',
                borderWidth:3
            }
            ]
        },
        options:{
            responsive:true,
            //animation:false,
            animation:{ //Stile animazione
                easing:'easeOutBack'
            },
            scales: { //Assi
                yAxes: [{
                    ticks:{
                        beginAtZero: true,
                        suggestedMin:0,
                        suggestedMax:100
                    },
                    display: false
                }],
                xAxes: [{
                    ticks:{
                        beginAtZero: true,
                        suggestedMin:0,
                        suggestedMax:100
                    },
                    display: false
                }]
            },
            tooltips: { //Modifica
                callbacks: {
                    label: function(t, d) {
                        return 'Terremoto ' + d.datasets[t.datasetIndex].label + getLabel(t.xLabel, t.yLabel);
                    }
                }
            }
        }
    });

    //Funzione che ordina i terremoti in base alla data (crescente)
    function ordina_data(lista_t){
        for(i=0;i<lista_t.length-1;i++) 
            for(j=i+1;j<lista_t.length;j++)
                if(lista_t[i].anno > lista_t[j].anno){
                    tmp = lista_t[i];
                    lista_t[i] = lista_t[j];
                    lista_t[j] = tmp;
                }
    }

    //Funzione che aggiunge i terremoti al chart
    function aggiungi_terremoti(chart){
        ordina_data(lista_t);
        
        for(i=0;i<lista_t.length;i++){
            let t = lista_t[i];
            let magn = t.magnitudo;

            //Aggiungo il terremoto al corrispondente dataset, in base al magnitudo
            setTimeout(function(){
                if(magn <= 2.5){
                    chart.data.datasets[0].data.push({'x':t.x, 'y':t.y, 'r': 10});
                }
                else if(magn>2.5 && magn <=3.5){
                    chart.data.datasets[1].data.push({'x':t.x, 'y':t.y, 'r': 15});
                }
                else if(magn>=3.5 && magn <5.0){
                    chart.data.datasets[2].data.push({'x':t.x, 'y':t.y, 'r': 20});
                }
                else{
                    chart.data.datasets[3].data.push({'x':t.x, 'y':t.y, 'r': 30});
                }
                chart.update();
            }, (i+1)*700);
            chart.update();
        }
    }

    aggiungi_terremoti(bubble);
});