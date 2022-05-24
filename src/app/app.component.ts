import { Component } from '@angular/core';
import {Country} from "./country";
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'higher-lower';
  countries: Country[] = [
    {"name": "China", "population": 1439323776, "imageLink": "assets/images/china.jpg"},
    {"name": "India", "population": 1380004385, "imageLink": "assets/images/india.svg"},
    {"name": "USA", "population": 331002651, "imageLink": "assets/images/usa.png"},
    {"name": "Indonesia", "population": 273523615, "imageLink": "assets/images/indonesia.jpg"},
    {"name": "Pakistan", "population": 220892340, "imageLink": "assets/images/pakistan.png"},
    {"name": "Brazil", "population": 212559417, "imageLink": "assets/images/brazil.webp"},
    {"name": "Nigeria", "population": 206139589, "imageLink": "assets/images/nigeria.webp"},
    {"name": "Bangladesh", "population": 164689383, "imageLink": "assets/images/bangladesh.webp"},
    {"name": "Russia", "population": 145934462, "imageLink": "assets/images/russia.webp"},
    {"name": "Mexico", "population": 128932753, "imageLink": "assets/images/mexico.png"},
    {"name": "Japan", "population": 126476461, "imageLink": "assets/images/japan.png"},
    {"name": "Ethiopia", "population": 114963588, "imageLink": "assets/images/ethiopia.webp"},
    {"name": "Philippines", "population": 109581078, "imageLink": "assets/images/philippines.png"},
    {"name": "Egypt", "population": 102334404, "imageLink": "assets/images/egypt.webp"},
    {"name": "Vietnam", "population": 97338579, "imageLink": "assets/images/vietnam.webp"},
    {"name": "DR Congo", "population": 89561403, "imageLink": "assets/images/drcongo.png"},
    {"name": "Turkey", "population": 84339067, "imageLink": "assets/images/turkey.png"},
    {"name": "Iran", "population": 83992949, "imageLink": "assets/images/iran.png"},
    {"name": "Germany", "population": 83783942, "imageLink": "assets/images/germany.webp"},
    {"name": "Thailand", "population": 69799978, "imageLink": "assets/images/thailand.webp"},
    {"name": "UK", "population": 67886011, "imageLink": "assets/images/uk.png"},
    {"name": "France", "population": 65273511, "imageLink": "assets/images/france.webp"},
    {"name": "Italy", "population": 60461826, "imageLink": "assets/images/italy.svg"},
    {"name": "Tanzania", "population": 59734218, "imageLink": "assets/images/tanzania.webp"},
    {"name": "South Africa", "population": 59308690, "imageLink": "assets/images/southafrica.png"},
    {"name": "Myanmar", "population": 54409800, "imageLink": "assets/images/myanmar.png"},
    {"name": "Kenya", "population": 53771296, "imageLink": "assets/images/kenya.png"},
    {"name": "South Korea", "population": 51269185, "imageLink": "assets/images/southkorea.png"},
    {"name": "Colombia", "population": 50882891, "imageLink": "assets/images/colombia.webp"},
    {"name": "Spain", "population": 46754778, "imageLink": "assets/images/spain.svg"},
    {"name": "Uganda", "population": 45741007, "imageLink": "assets/images/uganda.jpg"},
    {"name": "Argentina", "population": 45195774, "imageLink": "assets/images/argentina.webp"},
    {"name": "Algeria", "population": 43851044, "imageLink": "assets/images/algeria.png"},
    {"name": "Sudan", "population": 43849260, "imageLink": "assets/images/sudan.webp"},
    {"name": "Ukraine", "population": 43733762, "imageLink": "assets/images/ukraine.png"},
    {"name": "Iraq", "population": 40222493, "imageLink": "assets/images/iraq.webp"},
    {"name": "Afghanistan", "population": 38928346, "imageLink": "assets/images/afghanistan.png"},
    {"name": "Poland", "population": 37846611, "imageLink": "assets/images/poland.svg"},
    {"name": "Canada", "population": 37742154, "imageLink": "assets/images/canada.webp"},
    {"name": "Morocco", "population": 36910560, "imageLink": "assets/images/morocco.png"},
    {"name": "Saudi Arabia", "population": 34813871, "imageLink": "assets/images/saudiarabia.jpg"},
    {"name": "Uzbekistan", "population": 33469203, "imageLink": "assets/images/uzbekistan.png"},
    {"name": "Peru", "population": 32971854, "imageLink": "assets/images/peru.png"},
    {"name": "Angola", "population": 32866272, "imageLink": "assets/images/angola.webp"},
    {"name": "Malaysia", "population": 32365999, "imageLink": "assets/images/malaysia.webp"},
    {"name": "Mozambique", "population": 31255435, "imageLink": "assets/images/mozambique.png"},
    {"name": "Ghana", "population": 31072940, "imageLink": "assets/images/ghana.png"},
    {"name": "Yemen", "population": 29825964, "imageLink": "assets/images/yemen.webp"},
    {"name": "Nepal", "population": 29136808, "imageLink": "assets/images/nepal.png"},
    {"name": "Venezuela", "population": 28435940, "imageLink": "assets/images/venezuela.jpg"},
    {"name": "Madagascar", "population": 27691018, "imageLink": "assets/images/madagascar.jpg"},
    {"name": "Cameroon", "population": 26545863, "imageLink": "assets/images/cameroon.png"},
    {"name": "Ivory Coast", "population": 26378274, "imageLink": "assets/images/ivorycoast.webp"},
    {"name": "North Korea", "population": 25778816, "imageLink": "assets/images/northkorea.png"},
    {"name": "Australia", "population": 25499884, "imageLink": "assets/images/australia.webp"},
    {"name": "Niger", "population": 24206644, "imageLink": "assets/images/niger.png"},
    {"name": "Taiwan", "population": 23816775, "imageLink": "assets/images/taiwan.webp"},
    {"name": "Sri Lanka", "population": 21413249, "imageLink": "assets/images/srilanka.jpg"},
    {"name": "Burkina Faso", "population": 20903273, "imageLink": "assets/images/burkinafaso.webp"},
    {"name": "Mali", "population": 20250833, "imageLink": "assets/images/mali.webp"},
    {"name": "Romania", "population": 19237691, "imageLink": "assets/images/romania.webp"},
    {"name": "Malawi", "population": 19129952, "imageLink": "assets/images/malawi.svg"},
    {"name": "Chile", "population": 19116201, "imageLink": "assets/images/chile.png"},
    {"name": "Kazakhstan", "population": 18776707, "imageLink": "assets/images/kazakhstan.jpg"},
    {"name": "Zambia", "population": 18383955, "imageLink": "assets/images/zambia.jpg"},
    {"name": "Guatemala", "population": 17915568, "imageLink": "assets/images/guatemala.svg"},
    {"name": "Ecuador", "population": 17643054, "imageLink": "assets/images/ecuador.png"},
    {"name": "Syria", "population": 17500658, "imageLink": "assets/images/syria.png"},
    {"name": "Netherlands", "population": 17134872, "imageLink": "assets/images/netherlands.png"},
    {"name": "Senegal", "population": 16743927, "imageLink": "assets/images/senegal.jpg"},
    {"name": "Cambodia", "population": 16718965, "imageLink": "assets/images/cambodia.jpg"},
    {"name": "Chad", "population": 16425864, "imageLink": "assets/images/chad.svg"},
    {"name": "Somalia", "population": 15893222, "imageLink": "assets/images/somalia.png"},
    {"name": "Zimbabwe", "population": 14862924, "imageLink": "assets/images/zimbabwe.png"},
    {"name": "Guinea", "population": 13132795, "imageLink": "assets/images/guinea.webp"},
    {"name": "Rwanda", "population": 12952218, "imageLink": "assets/images/rwanda.jpg"},
    {"name": "Benin", "population": 12123200, "imageLink": "assets/images/benin.jpg"},
    {"name": "Burundi", "population": 11890784, "imageLink": "assets/images/burundi.png"},
    {"name": "Tunisia", "population": 11818619, "imageLink": "assets/images/tunisia.webp"},
    {"name": "Bolivia", "population": 11673021, "imageLink": "assets/images/bolivia.webp"},
    {"name": "Belgium", "population": 11589623, "imageLink": "assets/images/belgium.png"},
    {"name": "Haiti", "population": 11402528, "imageLink": "assets/images/haiti.svg"},
    {"name": "Cuba", "population": 11326616, "imageLink": "assets/images/cuba.svg"},
    {"name": "South Sudan", "population": 11193725, "imageLink": "assets/images/southsudan.png"},
    {"name": "Dominican Republic", "population": 10847910, "imageLink": "assets/images/dominicanrepublic.webp"},
    {"name": "Czech Republic", "population": 10708981, "imageLink": "assets/images/czechia.png"},
    {"name": "Greece", "population": 10423054, "imageLink": "assets/images/greece.png"},
    {"name": "Jordan", "population": 10203134, "imageLink": "assets/images/jordan.png"},
    {"name": "Portugal", "population": 10196709, "imageLink": "assets/images/portugal.webp"},
    {"name": "Azerbaijan", "population": 10139177, "imageLink": "assets/images/azerbaijan.svg"},
    {"name": "Sweden", "population": 10009265, "imageLink": "assets/images/sweden.png"},
    {"name": "Honduras", "population": 9904607, "imageLink": "assets/images/honduras.png"},
    {"name": "UAE", "population": 9890402, "imageLink": "assets/images/uae.webp"},
    {"name": "Hungary", "population": 9660351, "imageLink": "assets/images/hungary.jpg"},
    {"name": "Tajikistan", "population": 9537645, "imageLink": "assets/images/tajikistan.png"},
    {"name": "Belarus", "population": 9449323, "imageLink": "assets/images/belarus.jpg"},
    {"name": "Austria", "population": 9006398, "imageLink": "assets/images/austria.svg"},
    {"name": "Papua New Guinea", "population": 8947024, "imageLink": "assets/images/papuanewguinea.png"},
    {"name": "Serbia", "population": 8737371, "imageLink": "assets/images/serbia.png"},
    {"name": "Israel", "population": 8655535, "imageLink": "assets/images/israel.png"},
    {"name": "Switzerland", "population": 8654622, "imageLink": "assets/images/switzerland.jpg"},
    {"name": "Togo", "population": 8278724, "imageLink": "assets/images/togo.png"},
    {"name": "Sierra Leone", "population": 7976983, "imageLink": "assets/images/sierraleone.svg"},
    {"name": "Hong Kong", "population": 7496981, "imageLink": "assets/images/hongkong.png"},
    {"name": "Laos", "population": 7275560, "imageLink": "assets/images/laos.png"},
    {"name": "Paraguay", "population": 7132538, "imageLink": "assets/images/paraguay.webp"},
    {"name": "Bulgaria", "population": 6948445, "imageLink": "assets/images/bulgaria.png"},
    {"name": "Libya", "population": 6871292, "imageLink": "assets/images/libya.webp"},
    {"name": "Lebanon", "population": 6825445, "imageLink": "assets/images/lebanon.jpg"},
    {"name": "Nicaragua", "population": 6624554, "imageLink": "assets/images/nicaragua.png"},
    {"name": "Kyrgyzstan", "population": 6524195, "imageLink": "assets/images/kyrgyzstan.webp"},
    {"name": "El Salvador", "population": 6486205, "imageLink": "assets/images/elsalvador.jpg"},
    {"name": "Turkmenistan", "population": 6031200, "imageLink": "assets/images/turkmenistan.png"},
    {"name": "Singapore", "population": 5850342, "imageLink": "assets/images/singapore.png"},
    {"name": "Denmark", "population": 5792202, "imageLink": "assets/images/denmark.png"},
    {"name": "Finland", "population": 5540720, "imageLink": "assets/images/finland.png"},
    {"name": "Republic of Congo", "population": 5518087, "imageLink": "assets/images/republicofcongo.svg"},
    {"name": "Slovakia", "population": 5459642, "imageLink": "assets/images/slovakia.png"},
    {"name": "Norway", "population": 5421241, "imageLink": "assets/images/norway.jpg"},
    {"name": "Oman", "population": 5106626, "imageLink": "assets/images/oman.svg"},
    {"name": "Palestine", "population": 5101414, "imageLink": "assets/images/palestine.png"},
    {"name": "Costa Rica", "population": 5094118, "imageLink": "assets/images/costarica.png"},
    {"name": "Liberia", "population": 5057681, "imageLink": "assets/images/liberia.webp"},
    {"name": "Ireland", "population": 4937786, "imageLink": "assets/images/ireland.webp"},
    {"name": "Central African Republic", "population": 4829767, "imageLink": "assets/images/centralafricanrepublic.png"},
    {"name": "New Zealand", "population": 4822233, "imageLink": "assets/images/newzealand.jpg"},
    {"name": "Mauritania", "population": 4649658, "imageLink": "assets/images/mauritania.webp"},
    {"name": "Panama", "population": 4314767, "imageLink": "assets/images/panama.webp"},
    {"name": "Kuwait", "population": 4270571, "imageLink": "assets/images/kuwait.png"},
    {"name": "Croatia", "population": 4105267, "imageLink": "assets/images/croatia.png"},
    {"name": "Moldova", "population": 4033963, "imageLink": "assets/images/moldova.png"},
    {"name": "Georgia", "population": 3989167, "imageLink": "assets/images/georgia.jpg"},
    {"name": "Eritrea", "population": 3546421, "imageLink": "assets/images/eritrea.png"},
    {"name": "Uruguay", "population": 3473730, "imageLink": "assets/images/uruguay.svg"},
    {"name": "Bosnia and Herzegovina", "population": 3280819, "imageLink": "assets/images/bosniaandherzegovina.png"},
    {"name": "Mongolia", "population": 3278290, "imageLink": "assets/images/mongolia.png"},
    {"name": "Armenia", "population": 2963243, "imageLink": "assets/images/armenia.webp"},
    {"name": "Jamaica", "population": 2961167, "imageLink": "assets/images/jamaica.svg"},
    {"name": "Qatar", "population": 2881053, "imageLink": "assets/images/qatar.jpg"},
    {"name": "Albania", "population": 2877797, "imageLink": "assets/images/albania.svg"},
    {"name": "Puerto Rico", "population": 2860853, "imageLink": "assets/images/puertorico.svg"},
    {"name": "Lithuania", "population": 2722289, "imageLink": "assets/images/lithuania.png"},
    {"name": "Namibia", "population": 2540905, "imageLink": "assets/images/namibia.png"},
    {"name": "Gambia", "population": 2416668, "imageLink": "assets/images/gambia.webp"},
    {"name": "Botswana", "population": 2351627, "imageLink": "assets/images/botswana.webp"},
    {"name": "Gabon", "population": 2225734, "imageLink": "assets/images/gabon.png"},
    {"name": "Lesotho", "population": 2142249, "imageLink": "assets/images/lesotho.png"},
    {"name": "North Macedonia", "population": 2083374, "imageLink": "assets/images/northmacedonia.png"},
    {"name": "Slovenia", "population": 2078938, "imageLink": "assets/images/slovenia.png"},
    {"name": "Guinea-Bissau", "population": 1968001, "imageLink": "assets/images/guineabissau.svg"},
    {"name": "Latvia", "population": 1886198, "imageLink": "assets/images/latvia.png"},
    {"name": "Bahrain", "population": 1701575, "imageLink": "assets/images/bahrain.svg"},
    {"name": "Equatorial Guinea", "population": 1402985, "imageLink": "assets/images/equatorialguinea.png"},
    {"name": "Trinidad and Tobago", "population": 1399488, "imageLink": "assets/images/trinidadandtobago.jpg"},
    {"name": "Estonia", "population": 1326535, "imageLink": "assets/images/estonia.webp"},
    {"name": "Timor-Leste", "population": 1318445, "imageLink": "assets/images/timorleste.webp"},
    {"name": "Mauritius", "population": 1271768, "imageLink": "assets/images/mauritius.svg"},
    {"name": "Cyprus", "population": 1207359, "imageLink": "assets/images/cyprus.png"},
    {"name": "Eswatini", "population": 1160164, "imageLink": "assets/images/eswatini.png"},
    {"name": "Djibouti", "population": 988000, "imageLink": "assets/images/djibouti.webp"},
    {"name": "Fiji", "population": 896445, "imageLink": "assets/images/fiji.png"},
    {"name": "Reunion", "population": 895312, "imageLink": "assets/images/reunion.png"},
    {"name": "Comoros", "population": 869601, "imageLink": "assets/images/comoros.png"},
    {"name": "Guyana", "population": 786552, "imageLink": "assets/images/guyana.svg"},
    {"name": "Bhutan", "population": 771608, "imageLink": "assets/images/bhutan.png"},
    {"name": "Solomon Islands", "population": 686884, "imageLink": "assets/images/solomonislands.webp"},
    {"name": "Macao", "population": 649335, "imageLink": "assets/images/macao.png"},
    {"name": "Montenegro", "population": 628066, "imageLink": "assets/images/montenegro.webp"},
    {"name": "Luxembourg", "population": 625978, "imageLink": "assets/images/luxembourg.webp"},
    {"name": "Western Sahara", "population": 597339, "imageLink": "assets/images/westernsahara.png"},
    {"name": "Suriname", "population": 586632, "imageLink": "assets/images/suriname.webp"},
    {"name": "Cabo Verde", "population": 555987, "imageLink": "assets/images/caboverde.webp"},
    {"name": "Micronesia", "population": 548914, "imageLink": "assets/images/micronesia.png"},
    {"name": "Maldives", "population": 540544, "imageLink": "assets/images/maldives.webp"},
    {"name": "Malta", "population": 441543, "imageLink": "assets/images/malta.jpg"},
    {"name": "Brunei", "population": 437479, "imageLink": "assets/images/brunei.png"},
    {"name": "Guadeloupe", "population": 400124, "imageLink": "assets/images/guadeloupe.webp"},
    {"name": "Belize", "population": 397628, "imageLink": "assets/images/belize.png"},
    {"name": "Bahamas", "population": 393244, "imageLink": "assets/images/bahamas.webp"},
    {"name": "Martinique", "population": 375265, "imageLink": "assets/images/martinique.png"},
    {"name": "Iceland", "population": 341243, "imageLink": "assets/images/iceland.jpg"},
    {"name": "Vanuatu", "population": 307145, "imageLink": "assets/images/vanuatu.svg"},
    {"name": "French Guiana", "population": 298682, "imageLink": "assets/images/frenchguiana.png"},
    {"name": "Barbados", "population": 287375, "imageLink": "assets/images/barbados.svg"},
    {"name": "New Caledonia", "population": 285498, "imageLink": "assets/images/newcaledonia.jpg"},
    {"name": "French Polynesia", "population": 280908, "imageLink": "assets/images/frenchpolynesia.png"},
    {"name": "Mayotte", "population": 272815, "imageLink": "assets/images/mayotte.png"},
    {"name": "Sao Tome and Principe", "population": 219159, "imageLink": "assets/images/saotomeandprincipe.svg"},
    {"name": "Samoa", "population": 198414, "imageLink": "assets/images/samoa.webp"},
    {"name": "St. Lucia", "population": 183627, "imageLink": "assets/images/stlucia.jpg"},
    {"name": "Channel Islands", "population": 173863, "imageLink": "assets/images/channelislands.png"},
    {"name": "Guam", "population": 168775, "imageLink": "assets/images/guam.png"},
    {"name": "Curacao", "population": 164093, "imageLink": "assets/images/curacao.webp"},
    {"name": "Kiribati", "population": 119449, "imageLink": "assets/images/kiribati.webp"},
    {"name": "Grenada", "population": 112523, "imageLink": "assets/images/grenada.svg"},
    {"name": "St. Vincent and the Grenadines", "population": 110940, "imageLink": "assets/images/stvincentandthegrenadines.svg"},
    {"name": "Aruba", "population": 106766, "imageLink": "assets/images/aruba.png"},
    {"name": "Tonga", "population": 105695, "imageLink": "assets/images/tonga.png"},
    {"name": "U.S. Virgin Islands", "population": 104425, "imageLink": "assets/images/usvirginislands.webp"},
    {"name": "Seychelles", "population": 98347, "imageLink": "assets/images/seychelles.webp"},
    {"name": "Antigua and Barbuda", "population": 97929, "imageLink": "assets/images/antiguaandbarbuda.jpg"},
    {"name": "Isle of Man", "population": 85033, "imageLink": "assets/images/isleofman.webp"},
    {"name": "Andorra", "population": 77265, "imageLink": "assets/images/andorra.webp"},
    {"name": "Dominica", "population": 71986, "imageLink": "assets/images/dominica.webp"},
    {"name": "Cayman Islands", "population": 65722, "imageLink": "assets/images/caymanislands.png"},
    {"name": "Bermuda", "population": 62278, "imageLink": "assets/images/bermuda.png"},
    {"name": "Marshall Islands", "population": 59190, "imageLink": "assets/images/marshallislands.png"},
    {"name": "Northern Mariana Islands", "population": 57559, "imageLink": "assets/images/northernmarianaislands.svg"},
    {"name": "Greenland", "population": 56770, "imageLink": "assets/images/greenland.jpg"},
    {"name": "American Samoa", "population": 55191, "imageLink": "assets/images/americansamoa.webp"},
    {"name": "St. Kitts and Nevis", "population": 53199, "imageLink": "assets/images/stkittsandnevis.jpg"},
    {"name": "Faroe Islands", "population": 48863, "imageLink": "assets/images/faroeislands.svg"},
    {"name": "Sint Maarten", "population": 42876, "imageLink": "assets/images/sintmaarten.png"},
    {"name": "Monaco", "population": 39242, "imageLink": "assets/images/monaco.png"},
    {"name": "Turks and Caicos", "population": 38717, "imageLink": "assets/images/turksandcaicos.svg"},
    {"name": "Saint Martin", "population": 38666, "imageLink": "assets/images/saintmartin.png"},
    {"name": "Liechtenstein", "population": 38128, "imageLink": "assets/images/liechtenstein.svg"},
    {"name": "San Marino", "population": 33931, "imageLink": "assets/images/sanmarino.png"},
    {"name": "Gibraltar", "population": 33691, "imageLink": "assets/images/gibraltar.svg"},
    {"name": "British Virgin Islands", "population": 30231, "imageLink": "assets/images/britishvirginislands.png"},
    {"name": "Caribbean Netherlands", "population": 26223, "imageLink": "assets/images/caribbeannetherlands.png"},
    {"name": "Palau", "population": 18094, "imageLink": "assets/images/palau.webp"},
    {"name": "Cook Islands", "population": 17564, "imageLink": "assets/images/cookislands.svg"},
    {"name": "Anguilla", "population": 15003, "imageLink": "assets/images/anguilla.svg"},
    {"name": "Tuvalu", "population": 11792, "imageLink": "assets/images/tuvalu.png"},
    {"name": "Wallis and Futuna", "population": 11239, "imageLink": "assets/images/wallisandfutuna.png"},
    {"name": "Nauru", "population": 10824, "imageLink": "assets/images/nauru.png"},
    {"name": "St. Barthelemy", "population": 9877, "imageLink": "assets/images/saintbarthelemy.png"},
    {"name": "St. Helena", "population": 6077, "imageLink": "assets/images/sainthelena.png"},
    {"name": "St. Pierre and Miquelon", "population": 5794, "imageLink": "assets/images/stpierreandmiquelon.png"},
    {"name": "Montserrat", "population": 4992, "imageLink": "assets/images/montserrat.svg"},
    {"name": "Falkland Islands", "population": 3480, "imageLink": "assets/images/falklandislands.svg"},
    {"name": "Niue", "population": 1626, "imageLink": "assets/images/niue.png"},
    {"name": "Tokelau", "population": 1357, "imageLink": "assets/images/tokelau.svg"},
    {"name": "Vatican City", "population": 801, "imageLink": "assets/images/vaticancity.png"}
  ];
  country: Country| undefined;
  prev_country: Country| undefined;
  game_started: boolean;
  score: number;
  max_score: number;

  constructor() {
    this.game_started = false;
    this.score = 0;
    this.max_score = 0;
  }

  ngOnInit(): void {
  }

  selectRandom(): void {
    let num: number = this.getRandomInt(0, 234)
    this.prev_country = this.country;
    this.country = this.countries[num];
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  //True means current is higher that previous
  check(bool: boolean) {
    if (bool){
      // @ts-ignore
      if (this.country > this.prev_country){
        this.moveCountry();
      }
      else {
        this.endGame();
      }

    }
    else {

    }
  }

  moveCountry(): void {

  }

  endGame(): void {

  }

  startGame(): void {
    this.game_started = true;
    this.selectRandom();
    this.selectRandom();
  }
}
