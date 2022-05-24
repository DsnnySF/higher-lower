import { Component } from '@angular/core';
import {Country} from "./country";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'higher-lower';
  countries: Country[] = [
    {"name": "China", "population": 1439323776, "imageLink": "assets/images/china.jpg", "pop": "1,439,323,776"},
    {"name": "India", "population": 1380004385, "imageLink": "assets/images/india.svg", "pop": "1,380,004,385"},
    {"name": "USA", "population": 331002651, "imageLink": "assets/images/usa.png", "pop": "331,002,651"},
    {"name": "Indonesia", "population": 273523615, "imageLink": "assets/images/indonesia.jpg", "pop": "273,523,615"},
    {"name": "Pakistan", "population": 220892340, "imageLink": "assets/images/pakistan.png", "pop": "220,892,340"},
    {"name": "Brazil", "population": 212559417, "imageLink": "assets/images/brazil.webp", "pop": "212,559,417"},
    {"name": "Nigeria", "population": 206139589, "imageLink": "assets/images/nigeria.webp", "pop": "206,139,589"},
    {"name": "Bangladesh", "population": 164689383, "imageLink": "assets/images/bangladesh.webp", "pop": "164,689,383"},
    {"name": "Russia", "population": 145934462, "imageLink": "assets/images/russia.webp", "pop": "145,934,462"},
    {"name": "Mexico", "population": 128932753, "imageLink": "assets/images/mexico.png", "pop": "128,932,753"},
    {"name": "Japan", "population": 126476461, "imageLink": "assets/images/japan.png", "pop": "126,476,461"},
    {"name": "Ethiopia", "population": 114963588, "imageLink": "assets/images/ethiopia.webp", "pop": "114,963,588"},
    {"name": "Philippines", "population": 109581078, "imageLink": "assets/images/philippines.png", "pop": "109,581,078"},
    {"name": "Egypt", "population": 102334404, "imageLink": "assets/images/egypt.webp", "pop": "102,334,404"},
    {"name": "Vietnam", "population": 97338579, "imageLink": "assets/images/vietnam.webp", "pop": "97,338,579"},
    {"name": "DR Congo", "population": 89561403, "imageLink": "assets/images/drcongo.png", "pop": "89,561,403"},
    {"name": "Turkey", "population": 84339067, "imageLink": "assets/images/turkey.png", "pop": "84,339,067"},
    {"name": "Iran", "population": 83992949, "imageLink": "assets/images/iran.png", "pop": "83,992,949"},
    {"name": "Germany", "population": 83783942, "imageLink": "assets/images/germany.webp", "pop": "83,783,942"},
    {"name": "Thailand", "population": 69799978, "imageLink": "assets/images/thailand.webp", "pop": "69,799,978"},
    {"name": "UK", "population": 67886011, "imageLink": "assets/images/uk.png", "pop": "67,886,011"},
    {"name": "France", "population": 65273511, "imageLink": "assets/images/france.webp", "pop": "65,273,511"},
    {"name": "Italy", "population": 60461826, "imageLink": "assets/images/italy.svg", "pop": "60,461,826"},
    {"name": "Tanzania", "population": 59734218, "imageLink": "assets/images/tanzania.webp", "pop": "59,734,218"},
    {"name": "South Africa", "population": 59308690, "imageLink": "assets/images/southafrica.png", "pop": "59,308,690"},
    {"name": "Myanmar", "population": 54409800, "imageLink": "assets/images/myanmar.png", "pop": "54,409,800"},
    {"name": "Kenya", "population": 53771296, "imageLink": "assets/images/kenya.png", "pop": "53,771,296"},
    {"name": "South Korea", "population": 51269185, "imageLink": "assets/images/southkorea.png", "pop": "51,269,185"},
    {"name": "Colombia", "population": 50882891, "imageLink": "assets/images/colombia.webp", "pop": "50,882,891"},
    {"name": "Spain", "population": 46754778, "imageLink": "assets/images/spain.svg", "pop": "46,754,778"},
    {"name": "Uganda", "population": 45741007, "imageLink": "assets/images/uganda.jpg", "pop": "45,741,007"},
    {"name": "Argentina", "population": 45195774, "imageLink": "assets/images/argentina.webp", "pop": "45,195,774"},
    {"name": "Algeria", "population": 43851044, "imageLink": "assets/images/algeria.png", "pop": "43,851,044"},
    {"name": "Sudan", "population": 43849260, "imageLink": "assets/images/sudan.webp", "pop": "43,849,260"},
    {"name": "Ukraine", "population": 43733762, "imageLink": "assets/images/ukraine.png", "pop": "43,733,762"},
    {"name": "Iraq", "population": 40222493, "imageLink": "assets/images/iraq.webp", "pop": "40,222,493"},
    {"name": "Afghanistan", "population": 38928346, "imageLink": "assets/images/afghanistan.png", "pop": "38,928,346"},
    {"name": "Poland", "population": 37846611, "imageLink": "assets/images/poland.svg", "pop": "37,846,611"},
    {"name": "Canada", "population": 37742154, "imageLink": "assets/images/canada.webp", "pop": "37,742,154"},
    {"name": "Morocco", "population": 36910560, "imageLink": "assets/images/morocco.png", "pop": "36,910,560"},
    {"name": "Saudi Arabia", "population": 34813871, "imageLink": "assets/images/saudiarabia.jpg", "pop": "34,813,871"},
    {"name": "Uzbekistan", "population": 33469203, "imageLink": "assets/images/uzbekistan.png", "pop": "33,469,203"},
    {"name": "Peru", "population": 32971854, "imageLink": "assets/images/peru.png", "pop": "32,971,854"},
    {"name": "Angola", "population": 32866272, "imageLink": "assets/images/angola.webp", "pop": "32,866,272"},
    {"name": "Malaysia", "population": 32365999, "imageLink": "assets/images/malaysia.webp", "pop": "32,365,999"},
    {"name": "Mozambique", "population": 31255435, "imageLink": "assets/images/mozambique.png", "pop": "31,255,435"},
    {"name": "Ghana", "population": 31072940, "imageLink": "assets/images/ghana.png", "pop": "31,072,940"},
    {"name": "Yemen", "population": 29825964, "imageLink": "assets/images/yemen.webp", "pop": "29,825,964"},
    {"name": "Nepal", "population": 29136808, "imageLink": "assets/images/nepal.png", "pop": "29,136,808"},
    {"name": "Venezuela", "population": 28435940, "imageLink": "assets/images/venezuela.jpg", "pop": "28,435,940"},
    {"name": "Madagascar", "population": 27691018, "imageLink": "assets/images/madagascar.jpg", "pop": "27,691,018"},
    {"name": "Cameroon", "population": 26545863, "imageLink": "assets/images/cameroon.png", "pop": "26,545,863"},
    {"name": "Ivory Coast", "population": 26378274, "imageLink": "assets/images/ivorycoast.webp", "pop": "26,378,274"},
    {"name": "North Korea", "population": 25778816, "imageLink": "assets/images/northkorea.png", "pop": "25,778,816"},
    {"name": "Australia", "population": 25499884, "imageLink": "assets/images/australia.webp", "pop": "25,499,884"},
    {"name": "Niger", "population": 24206644, "imageLink": "assets/images/niger.png", "pop": "24,206,644"},
    {"name": "Taiwan", "population": 23816775, "imageLink": "assets/images/taiwan.webp", "pop": "23,816,775"},
    {"name": "Sri Lanka", "population": 21413249, "imageLink": "assets/images/srilanka.jpg", "pop": "21,413,249"},
    {"name": "Burkina Faso", "population": 20903273, "imageLink": "assets/images/burkinafaso.webp", "pop": "20,903,273"},
    {"name": "Mali", "population": 20250833, "imageLink": "assets/images/mali.webp", "pop": "20,250,833"},
    {"name": "Romania", "population": 19237691, "imageLink": "assets/images/romania.webp", "pop": "19,237,691"},
    {"name": "Malawi", "population": 19129952, "imageLink": "assets/images/malawi.svg", "pop": "19,129,952"},
    {"name": "Chile", "population": 19116201, "imageLink": "assets/images/chile.png", "pop": "19,116,201"},
    {"name": "Kazakhstan", "population": 18776707, "imageLink": "assets/images/kazakhstan.jpg", "pop": "18,776,707"},
    {"name": "Zambia", "population": 18383955, "imageLink": "assets/images/zambia.jpg", "pop": "18,383,955"},
    {"name": "Guatemala", "population": 17915568, "imageLink": "assets/images/guatemala.svg", "pop": "17,915,568"},
    {"name": "Ecuador", "population": 17643054, "imageLink": "assets/images/ecuador.png", "pop": "17,643,054"},
    {"name": "Syria", "population": 17500658, "imageLink": "assets/images/syria.png", "pop": "17,500,658"},
    {"name": "Netherlands", "population": 17134872, "imageLink": "assets/images/netherlands.png", "pop": "17,134,872"},
    {"name": "Senegal", "population": 16743927, "imageLink": "assets/images/senegal.jpg", "pop": "16,743,927"},
    {"name": "Cambodia", "population": 16718965, "imageLink": "assets/images/cambodia.jpg", "pop": "16,718,965"},
    {"name": "Chad", "population": 16425864, "imageLink": "assets/images/chad.svg", "pop": "16,425,864"},
    {"name": "Somalia", "population": 15893222, "imageLink": "assets/images/somalia.png", "pop": "15,893,222"},
    {"name": "Zimbabwe", "population": 14862924, "imageLink": "assets/images/zimbabwe.png", "pop": "14,862,924"},
    {"name": "Guinea", "population": 13132795, "imageLink": "assets/images/guinea.webp", "pop": "13,132,795"},
    {"name": "Rwanda", "population": 12952218, "imageLink": "assets/images/rwanda.jpg", "pop": "12,952,218"},
    {"name": "Benin", "population": 12123200, "imageLink": "assets/images/benin.jpg", "pop": "12,123,200"},
    {"name": "Burundi", "population": 11890784, "imageLink": "assets/images/burundi.png", "pop": "11,890,784"},
    {"name": "Tunisia", "population": 11818619, "imageLink": "assets/images/tunisia.webp", "pop": "11,818,619"},
    {"name": "Bolivia", "population": 11673021, "imageLink": "assets/images/bolivia.webp", "pop": "11,673,021"},
    {"name": "Belgium", "population": 11589623, "imageLink": "assets/images/belgium.png", "pop": "11,589,623"},
    {"name": "Haiti", "population": 11402528, "imageLink": "assets/images/haiti.svg", "pop": "11,402,528"},
    {"name": "Cuba", "population": 11326616, "imageLink": "assets/images/cuba.svg", "pop": "11,326,616"},
    {"name": "South Sudan", "population": 11193725, "imageLink": "assets/images/southsudan.png", "pop": "11,193,725"},
    {"name": "Dominican Republic", "population": 10847910, "imageLink": "assets/images/dominicanrepublic.webp", "pop": "10,847,910"},
    {"name": "Czech Republic", "population": 10708981, "imageLink": "assets/images/czechia.png", "pop": "10,708,981"},
    {"name": "Greece", "population": 10423054, "imageLink": "assets/images/greece.png", "pop": "10,423,054"},
    {"name": "Jordan", "population": 10203134, "imageLink": "assets/images/jordan.png", "pop": "10,203,134"},
    {"name": "Portugal", "population": 10196709, "imageLink": "assets/images/portugal.webp", "pop": "10,196,709"},
    {"name": "Azerbaijan", "population": 10139177, "imageLink": "assets/images/azerbaijan.svg", "pop": "10,139,177"},
    {"name": "Sweden", "population": 10009265, "imageLink": "assets/images/sweden.png", "pop": "10,009,265"},
    {"name": "Honduras", "population": 9904607, "imageLink": "assets/images/honduras.png", "pop": "9,904,607"},
    {"name": "UAE", "population": 9890402, "imageLink": "assets/images/uae.webp", "pop": "9,890,402"},
    {"name": "Hungary", "population": 9660351, "imageLink": "assets/images/hungary.jpg", "pop": "9,660,351"},
    {"name": "Tajikistan", "population": 9537645, "imageLink": "assets/images/tajikistan.png", "pop": "9,537,645"},
    {"name": "Belarus", "population": 9449323, "imageLink": "assets/images/belarus.jpg", "pop": "9,449,323"},
    {"name": "Austria", "population": 9006398, "imageLink": "assets/images/austria.svg", "pop": "9,006,398"},
    {"name": "Papua New Guinea", "population": 8947024, "imageLink": "assets/images/papuanewguinea.png", "pop": "8,947,024"},
    {"name": "Serbia", "population": 8737371, "imageLink": "assets/images/serbia.png", "pop": "8,737,371"},
    {"name": "Israel", "population": 8655535, "imageLink": "assets/images/israel.png", "pop": "8,655,535"},
    {"name": "Switzerland", "population": 8654622, "imageLink": "assets/images/switzerland.jpg", "pop": "8,654,622"},
    {"name": "Togo", "population": 8278724, "imageLink": "assets/images/togo.png", "pop": "8,278,724"},
    {"name": "Sierra Leone", "population": 7976983, "imageLink": "assets/images/sierraleone.svg", "pop": "7,976,983"},
    {"name": "Hong Kong", "population": 7496981, "imageLink": "assets/images/hongkong.png", "pop": "7,496,981"},
    {"name": "Laos", "population": 7275560, "imageLink": "assets/images/laos.png", "pop": "7,275,560"},
    {"name": "Paraguay", "population": 7132538, "imageLink": "assets/images/paraguay.webp", "pop": "7,132,538"},
    {"name": "Bulgaria", "population": 6948445, "imageLink": "assets/images/bulgaria.png", "pop": "6,948,445"},
    {"name": "Libya", "population": 6871292, "imageLink": "assets/images/libya.webp", "pop": "6,871,292"},
    {"name": "Lebanon", "population": 6825445, "imageLink": "assets/images/lebanon.jpg", "pop": "6,825,445"},
    {"name": "Nicaragua", "population": 6624554, "imageLink": "assets/images/nicaragua.png", "pop": "6,624,554"},
    {"name": "Kyrgyzstan", "population": 6524195, "imageLink": "assets/images/kyrgyzstan.webp", "pop": "6,524,195"},
    {"name": "El Salvador", "population": 6486205, "imageLink": "assets/images/elsalvador.jpg", "pop": "6,486,205"},
    {"name": "Turkmenistan", "population": 6031200, "imageLink": "assets/images/turkmenistan.png", "pop": "6,031,200"},
    {"name": "Singapore", "population": 5850342, "imageLink": "assets/images/singapore.png", "pop": "5,850,342"},
    {"name": "Denmark", "population": 5792202, "imageLink": "assets/images/denmark.png", "pop": "5,792,202"},
    {"name": "Finland", "population": 5540720, "imageLink": "assets/images/finland.png", "pop": "5,540,720"},
    {"name": "Republic of Congo", "population": 5518087, "imageLink": "assets/images/republicofcongo.svg", "pop": "5,518,087"},
    {"name": "Slovakia", "population": 5459642, "imageLink": "assets/images/slovakia.png", "pop": "5,459,642"},
    {"name": "Norway", "population": 5421241, "imageLink": "assets/images/norway.jpg", "pop": "5,421,241"},
    {"name": "Oman", "population": 5106626, "imageLink": "assets/images/oman.svg", "pop": "5,106,626"},
    {"name": "Palestine", "population": 5101414, "imageLink": "assets/images/palestine.png", "pop": "5,101,414"},
    {"name": "Costa Rica", "population": 5094118, "imageLink": "assets/images/costarica.png", "pop": "5,094,118"},
    {"name": "Liberia", "population": 5057681, "imageLink": "assets/images/liberia.webp", "pop": "5,057,681"},
    {"name": "Ireland", "population": 4937786, "imageLink": "assets/images/ireland.webp", "pop": "4,937,786"},
    {"name": "Central African Republic", "population": 4829767, "imageLink": "assets/images/centralafricanrepublic.png", "pop": "4,829,767"},
    {"name": "New Zealand", "population": 4822233, "imageLink": "assets/images/newzealand.jpg", "pop": "4,822,233"},
    {"name": "Mauritania", "population": 4649658, "imageLink": "assets/images/mauritania.webp", "pop": "4,649,658"},
    {"name": "Panama", "population": 4314767, "imageLink": "assets/images/panama.webp", "pop": "4,314,767"},
    {"name": "Kuwait", "population": 4270571, "imageLink": "assets/images/kuwait.png", "pop": "4,270,571"},
    {"name": "Croatia", "population": 4105267, "imageLink": "assets/images/croatia.png", "pop": "4,105,267"},
    {"name": "Moldova", "population": 4033963, "imageLink": "assets/images/moldova.png", "pop": "4,033,963"},
    {"name": "Georgia", "population": 3989167, "imageLink": "assets/images/georgia.jpg", "pop": "3,989,167"},
    {"name": "Eritrea", "population": 3546421, "imageLink": "assets/images/eritrea.png", "pop": "3,546,421"},
    {"name": "Uruguay", "population": 3473730, "imageLink": "assets/images/uruguay.svg", "pop": "3,473,730"},
    {"name": "Bosnia and Herzegovina", "population": 3280819, "imageLink": "assets/images/bosniaandherzegovina.png", "pop": "3,280,819"},
    {"name": "Mongolia", "population": 3278290, "imageLink": "assets/images/mongolia.png", "pop": "3,278,290"},
    {"name": "Armenia", "population": 2963243, "imageLink": "assets/images/armenia.webp", "pop": "2,963,243"},
    {"name": "Jamaica", "population": 2961167, "imageLink": "assets/images/jamaica.svg", "pop": "2,961,167"},
    {"name": "Qatar", "population": 2881053, "imageLink": "assets/images/qatar.jpg", "pop": "2,881,053"},
    {"name": "Albania", "population": 2877797, "imageLink": "assets/images/albania.svg", "pop": "2,877,797"},
    {"name": "Puerto Rico", "population": 2860853, "imageLink": "assets/images/puertorico.svg", "pop": "2,860,853"},
    {"name": "Lithuania", "population": 2722289, "imageLink": "assets/images/lithuania.png", "pop": "2,722,289"},
    {"name": "Namibia", "population": 2540905, "imageLink": "assets/images/namibia.png", "pop": "2,540,905"},
    {"name": "Gambia", "population": 2416668, "imageLink": "assets/images/gambia.webp", "pop": "2,416,668"},
    {"name": "Botswana", "population": 2351627, "imageLink": "assets/images/botswana.webp", "pop": "2,351,627"},
    {"name": "Gabon", "population": 2225734, "imageLink": "assets/images/gabon.png", "pop": "2,225,734"},
    {"name": "Lesotho", "population": 2142249, "imageLink": "assets/images/lesotho.png", "pop": "2,142,249"},
    {"name": "North Macedonia", "population": 2083374, "imageLink": "assets/images/northmacedonia.png", "pop": "2,083,374"},
    {"name": "Slovenia", "population": 2078938, "imageLink": "assets/images/slovenia.png", "pop": "2,078,938"},
    {"name": "Guinea-Bissau", "population": 1968001, "imageLink": "assets/images/guineabissau.svg", "pop": "1,968,001"},
    {"name": "Latvia", "population": 1886198, "imageLink": "assets/images/latvia.png", "pop": "1,886,198"},
    {"name": "Bahrain", "population": 1701575, "imageLink": "assets/images/bahrain.svg", "pop": "1,701,575"},
    {"name": "Equatorial Guinea", "population": 1402985, "imageLink": "assets/images/equatorialguinea.png", "pop": "1,402,985"},
    {"name": "Trinidad and Tobago", "population": 1399488, "imageLink": "assets/images/trinidadandtobago.jpg", "pop": "1,399,488"},
    {"name": "Estonia", "population": 1326535, "imageLink": "assets/images/estonia.webp", "pop": "1,326,535"},
    {"name": "Timor-Leste", "population": 1318445, "imageLink": "assets/images/timorleste.webp", "pop": "1,318,445"},
    {"name": "Mauritius", "population": 1271768, "imageLink": "assets/images/mauritius.svg", "pop": "1,271,768"},
    {"name": "Cyprus", "population": 1207359, "imageLink": "assets/images/cyprus.png", "pop": "1,207,359"},
    {"name": "Eswatini", "population": 1160164, "imageLink": "assets/images/eswatini.png", "pop": "1,160,164"},
    {"name": "Djibouti", "population": 988000, "imageLink": "assets/images/djibouti.webp", "pop": "988,000"},
    {"name": "Fiji", "population": 896445, "imageLink": "assets/images/fiji.png", "pop": "896,445"},
    {"name": "Reunion", "population": 895312, "imageLink": "assets/images/reunion.png", "pop": "895,312"},
    {"name": "Comoros", "population": 869601, "imageLink": "assets/images/comoros.png", "pop": "869,601"},
    {"name": "Guyana", "population": 786552, "imageLink": "assets/images/guyana.svg", "pop": "786,552"},
    {"name": "Bhutan", "population": 771608, "imageLink": "assets/images/bhutan.png", "pop": "771,608"},
    {"name": "Solomon Islands", "population": 686884, "imageLink": "assets/images/solomonislands.webp", "pop": "686,884"},
    {"name": "Macao", "population": 649335, "imageLink": "assets/images/macao.png", "pop": "649,335"},
    {"name": "Montenegro", "population": 628066, "imageLink": "assets/images/montenegro.webp", "pop": "628,066"},
    {"name": "Luxembourg", "population": 625978, "imageLink": "assets/images/luxembourg.webp", "pop": "625,978"},
    {"name": "Western Sahara", "population": 597339, "imageLink": "assets/images/westernsahara.png", "pop": "597,339"},
    {"name": "Suriname", "population": 586632, "imageLink": "assets/images/suriname.webp", "pop": "586,632"},
    {"name": "Cabo Verde", "population": 555987, "imageLink": "assets/images/caboverde.webp", "pop": "555,987"},
    {"name": "Micronesia", "population": 548914, "imageLink": "assets/images/micronesia.png", "pop": "548,914"},
    {"name": "Maldives", "population": 540544, "imageLink": "assets/images/maldives.webp", "pop": "540,544"},
    {"name": "Malta", "population": 441543, "imageLink": "assets/images/malta.jpg", "pop": "441,543"},
    {"name": "Brunei", "population": 437479, "imageLink": "assets/images/brunei.png", "pop": "437,479"},
    {"name": "Guadeloupe", "population": 400124, "imageLink": "assets/images/guadeloupe.webp", "pop": "400,124"},
    {"name": "Belize", "population": 397628, "imageLink": "assets/images/belize.png", "pop": "397,628"},
    {"name": "Bahamas", "population": 393244, "imageLink": "assets/images/bahamas.webp", "pop": "393,244"},
    {"name": "Martinique", "population": 375265, "imageLink": "assets/images/martinique.png", "pop": "375,265"},
    {"name": "Iceland", "population": 341243, "imageLink": "assets/images/iceland.jpg", "pop": "341,243"},
    {"name": "Vanuatu", "population": 307145, "imageLink": "assets/images/vanuatu.svg", "pop": "307,145"},
    {"name": "French Guiana", "population": 298682, "imageLink": "assets/images/frenchguiana.png", "pop": "298,682"},
    {"name": "Barbados", "population": 287375, "imageLink": "assets/images/barbados.svg", "pop": "287,375"},
    {"name": "New Caledonia", "population": 285498, "imageLink": "assets/images/newcaledonia.jpg", "pop": "285,498"},
    {"name": "French Polynesia", "population": 280908, "imageLink": "assets/images/frenchpolynesia.png", "pop": "280,908"},
    {"name": "Mayotte", "population": 272815, "imageLink": "assets/images/mayotte.png", "pop": "272,815"},
    {"name": "Sao Tome and Principe", "population": 219159, "imageLink": "assets/images/saotomeandprincipe.svg", "pop": "219,159"},
    {"name": "Samoa", "population": 198414, "imageLink": "assets/images/samoa.webp", "pop": "198,414"},
    {"name": "St. Lucia", "population": 183627, "imageLink": "assets/images/stlucia.jpg", "pop": "183,627"},
    {"name": "Channel Islands", "population": 173863, "imageLink": "assets/images/channelislands.png", "pop": "173,863"},
    {"name": "Guam", "population": 168775, "imageLink": "assets/images/guam.png", "pop": "168,775"},
    {"name": "Curacao", "population": 164093, "imageLink": "assets/images/curacao.webp", "pop": "164,093"},
    {"name": "Kiribati", "population": 119449, "imageLink": "assets/images/kiribati.webp", "pop": "119,449"},
    {"name": "Grenada", "population": 112523, "imageLink": "assets/images/grenada.svg", "pop": "112,523"},
    {"name": "St. Vincent and the Grenadines", "population": 110940, "imageLink": "assets/images/stvincentandthegrenadines.svg", "pop": "110,940"},
    {"name": "Aruba", "population": 106766, "imageLink": "assets/images/aruba.png", "pop": "106,766"},
    {"name": "Tonga", "population": 105695, "imageLink": "assets/images/tonga.png", "pop": "105,695"},
    {"name": "U.S. Virgin Islands", "population": 104425, "imageLink": "assets/images/usvirginislands.webp", "pop": "104,425"},
    {"name": "Seychelles", "population": 98347, "imageLink": "assets/images/seychelles.webp", "pop": "98,347"},
    {"name": "Antigua and Barbuda", "population": 97929, "imageLink": "assets/images/antiguaandbarbuda.jpg", "pop": "97,929"},
    {"name": "Isle of Man", "population": 85033, "imageLink": "assets/images/isleofman.webp", "pop": "85,033"},
    {"name": "Andorra", "population": 77265, "imageLink": "assets/images/andorra.webp", "pop": "77,265"},
    {"name": "Dominica", "population": 71986, "imageLink": "assets/images/dominica.webp", "pop": "71,986"},
    {"name": "Cayman Islands", "population": 65722, "imageLink": "assets/images/caymanislands.png", "pop": "65,722"},
    {"name": "Bermuda", "population": 62278, "imageLink": "assets/images/bermuda.png", "pop": "62,278"},
    {"name": "Marshall Islands", "population": 59190, "imageLink": "assets/images/marshallislands.png", "pop": "59,190"},
    {"name": "Northern Mariana Islands", "population": 57559, "imageLink": "assets/images/northernmarianaislands.svg", "pop": "57,559"},
    {"name": "Greenland", "population": 56770, "imageLink": "assets/images/greenland.jpg", "pop": "56,770"},
    {"name": "American Samoa", "population": 55191, "imageLink": "assets/images/americansamoa.webp", "pop": "55,191"},
    {"name": "St. Kitts and Nevis", "population": 53199, "imageLink": "assets/images/stkittsandnevis.jpg", "pop": "53,199"},
    {"name": "Faroe Islands", "population": 48863, "imageLink": "assets/images/faroeislands.svg", "pop": "48,863"},
    {"name": "Sint Maarten", "population": 42876, "imageLink": "assets/images/sintmaarten.png", "pop": "42,876"},
    {"name": "Monaco", "population": 39242, "imageLink": "assets/images/monaco.png", "pop": "39,242"},
    {"name": "Turks and Caicos", "population": 38717, "imageLink": "assets/images/turksandcaicos.svg", "pop": "38,717"},
    {"name": "Saint Martin", "population": 38666, "imageLink": "assets/images/saintmartin.png", "pop": "38,666"},
    {"name": "Liechtenstein", "population": 38128, "imageLink": "assets/images/liechtenstein.svg", "pop": "38,128"},
    {"name": "San Marino", "population": 33931, "imageLink": "assets/images/sanmarino.png", "pop": "33,931"},
    {"name": "Gibraltar", "population": 33691, "imageLink": "assets/images/gibraltar.svg", "pop": "33,691"},
    {"name": "British Virgin Islands", "population": 30231, "imageLink": "assets/images/britishvirginislands.png", "pop": "30,231"},
    {"name": "Caribbean Netherlands", "population": 26223, "imageLink": "assets/images/caribbeannetherlands.png", "pop": "26,223"},
    {"name": "Palau", "population": 18094, "imageLink": "assets/images/palau.webp", "pop": "18,094"},
    {"name": "Cook Islands", "population": 17564, "imageLink": "assets/images/cookislands.svg", "pop": "17,564"},
    {"name": "Anguilla", "population": 15003, "imageLink": "assets/images/anguilla.svg", "pop": "15,003"},
    {"name": "Tuvalu", "population": 11792, "imageLink": "assets/images/tuvalu.png", "pop": "11,792"},
    {"name": "Wallis and Futuna", "population": 11239, "imageLink": "assets/images/wallisandfutuna.png", "pop": "11,239"},
    {"name": "Nauru", "population": 10824, "imageLink": "assets/images/nauru.png", "pop": "10,824"},
    {"name": "St. Barthelemy", "population": 9877, "imageLink": "assets/images/saintbarthelemy.png", "pop": "9,877"},
    {"name": "St. Helena", "population": 6077, "imageLink": "assets/images/sainthelena.png", "pop": "6,077"},
    {"name": "St. Pierre and Miquelon", "population": 5794, "imageLink": "assets/images/stpierreandmiquelon.png", "pop": "5,794"},
    {"name": "Montserrat", "population": 4992, "imageLink": "assets/images/montserrat.svg", "pop": "4,992"},
    {"name": "Falkland Islands", "population": 3480, "imageLink": "assets/images/falklandislands.svg", "pop": "3,480"},
    {"name": "Niue", "population": 1626, "imageLink": "assets/images/niue.png", "pop": "1,626"},
    {"name": "Tokelau", "population": 1357, "imageLink": "assets/images/tokelau.svg", "pop": "1,357"},
    {"name": "Vatican City", "population": 801, "imageLink": "assets/images/vaticancity.png", "pop": "801"}
  ];
  country: Country| undefined;
  prev_country: Country| undefined;
  game_started: boolean;
  score: number;
  max_score: number;
  display_correct: boolean;
  display_incorrect: boolean;

  constructor() {
    this.game_started = false;
    this.score = 0;
    this.max_score = 0;
    this.display_correct = false;
    this.display_incorrect = false;
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
      if (this.country?.population > this.prev_country?.population){
        this.moveCountry();
      }
      else {
        this.endGame();
      }
    }
    else {
      // @ts-ignore
      if (this.prev_country?.population > this.country?.population){
        this.moveCountry()
      }
      else{
        this.endGame();
      }
    }
  }

  moveCountry(): void {
    ++this.score
    if (this.score > this.max_score){
      this.max_score = this.score;
    }
    this.selectRandom();

  }

  endGame(): void {
    if (this.score > this.max_score){
      this.max_score = this.score;
    }
    this.game_started = false;
    this.score = 0;
  }

  startGame(): void {
    this.game_started = true;
    this.selectRandom();
    this.selectRandom();
  }
}
