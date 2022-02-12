let rechnungsbetrag = document.getElementById("rechnungsbetrag");
let wievielepersonen = document.getElementById("wievielepersonen");
let service = document.getElementById("service");
let ausgabe1 = document.getElementById("ausgabe1");

function berechnen() {
  console.log(rechnungsbetrag.value);
  console.log(wievielepersonen.value);
  console.log(service.value);

  switch (service.value) {
    case "schlecht":
      let ergebnis1 = rechnungsbetrag.value * 0.02;
      ergebnis1 = ergebnis1.toFixed(2);
      ausgabe1.innerHTML = ` Das Trinkgeld (2%) : ${ergebnis1} EUR <br>`;
      let gesamt1 = Number(ergebnis1) + Number(rechnungsbetrag.value);
      gesamt1 = gesamt1.toFixed(2);
      gesamt1_final = Number(gesamt1) / Number(wievielepersonen.value);
      gesamt1_final = gesamt1_final.toFixed(2);

      console.log(gesamt1);
      console.log(ergebnis1);
      console.log(rechnungsbetrag.value);
      console.log(wievielepersonen.value);
      console.log(gesamt1_final);

      ausgabe1.innerHTML += ` Der Gesamtbetrag : ${gesamt1} EUR <br>` ;
      ausgabe1.innerHTML += ` Der Gesamtbetrag pro Person : ${gesamt1_final} EUR `;
      break;


      case "okay":
      let ergebnis2 = rechnungsbetrag.value * 0.1;
      ergebnis2 = ergebnis2.toFixed(2);
      ausgabe1.innerHTML = ` Das Trinkgeld (10%) : ${ergebnis2} EUR <br>`;
      let gesamt2 = Number(ergebnis2) + Number(rechnungsbetrag.value);
      gesamt2 = gesamt2.toFixed(2);
      gesamt2_final = Number(gesamt2) / Number(wievielepersonen.value);
      gesamt2_final = gesamt2_final.toFixed(2);

      ausgabe1.innerHTML += ` Der Gesamtbetrag : ${gesamt2} EUR <br>`;
      ausgabe1.innerHTML += ` Der Gesamtbetrag pro Person : ${gesamt2_final} EUR <br> `;

      break;



    case "super":
      let ergebnis3 = rechnungsbetrag.value * 0.2;
      ergebnis3 = ergebnis3.toFixed(2);
      ausgabe1.innerHTML = ` Das Trinkgeld (20%) : ${ergebnis3} EUR <br>`;
      let gesamt3 = Number(ergebnis3) + Number(rechnungsbetrag.value);
      gesamt3 = gesamt3.toFixed(2);
      gesamt3_final = Number(gesamt3) / Number(wievielepersonen.value);
      gesamt3_final = gesamt3_final.toFixed(2);


      ausgabe1.innerHTML += ` Der Gesamtbetrag : ${gesamt3} EUR <br>`;
      ausgabe1.innerHTML += ` Der Gesamtbetrag pro Person : ${gesamt3_final} EUR <br> `;

      
      
      break;




    default:
      ausgabe1.innerHTML = ` Bitte wähle aus, wie dein Service war!`;
      break;
  }
}
