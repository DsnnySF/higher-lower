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
    {"name": "China", "population": 1439323776, "imageLink": "assets/images/china.jpg", "pop": "1,439,323,776", "ratio": 23, "recognizedByUN" : true},
    {"name": "India", "population": 1380004385, "imageLink": "assets/images/india.svg", "pop": "1,380,004,385", "ratio": 23, "recognizedByUN" : true},
    {"name": "USA", "population": 331002651, "imageLink": "assets/images/usa.png", "pop": "331,002,651", "ratio": 1019, "recognizedByUN" : true},
    {"name": "Indonesia", "population": 273523615, "imageLink": "assets/images/indonesia.jpg", "pop": "273,523,615", "ratio": 23, "recognizedByUN" : true},
    {"name": "Pakistan", "population": 220892340, "imageLink": "assets/images/pakistan.png", "pop": "220,892,340", "ratio": 23, "recognizedByUN" : true},
    {"name": "Brazil", "population": 212559417, "imageLink": "assets/images/brazil.webp", "pop": "212,559,417", "ratio": 57, "recognizedByUN" : true},
    {"name": "Nigeria", "population": 206139589, "imageLink": "assets/images/nigeria.webp", "pop": "206,139,589", "ratio": 12, "recognizedByUN" : true},
    {"name": "Bangladesh", "population": 164689383, "imageLink": "assets/images/bangladesh.webp", "pop": "164,689,383", "ratio": 35, "recognizedByUN" : true},
    {"name": "Russia", "population": 145934462, "imageLink": "assets/images/russia.webp", "pop": "145,934,462", "ratio": 23, "recognizedByUN" : true},
    {"name": "Mexico", "population": 128932753, "imageLink": "assets/images/mexico.png", "pop": "128,932,753", "ratio": 1018, "recognizedByUN" : true},
    {"name": "Japan", "population": 126476461, "imageLink": "assets/images/japan.png", "pop": "126,476,461", "ratio": 23, "recognizedByUN" : true},
    {"name": "Ethiopia", "population": 114963588, "imageLink": "assets/images/ethiopia.webp", "pop": "114,963,588", "ratio": 12, "recognizedByUN" : true},
    {"name": "Philippines", "population": 109581078, "imageLink": "assets/images/philippines.png", "pop": "109,581,078", "ratio": 12, "recognizedByUN" : true},
    {"name": "Egypt", "population": 102334404, "imageLink": "assets/images/egypt.webp", "pop": "102,334,404", "ratio": 23, "recognizedByUN" : true},
    {"name": "Vietnam", "population": 97338579, "imageLink": "assets/images/vietnam.webp", "pop": "97,338,579", "ratio": 23, "recognizedByUN" : true},
    {"name": "DR Congo", "population": 89561403, "imageLink": "assets/images/drcongo.png", "pop": "89,561,403", "ratio": 34, "recognizedByUN" : true},
    {"name": "Turkey", "population": 84339067, "imageLink": "assets/images/turkey.png", "pop": "84,339,067", "ratio": 23, "recognizedByUN" : true},
    {"name": "Iran", "population": 83992949, "imageLink": "assets/images/iran.png", "pop": "83,992,949", "ratio": 1018, "recognizedByUN" : true},
    {"name": "Germany", "population": 83783942, "imageLink": "assets/images/germany.webp", "pop": "83,783,942", "ratio": 35, "recognizedByUN" : true},
    {"name": "Thailand", "population": 69799978, "imageLink": "assets/images/thailand.webp", "pop": "69,799,978", "ratio": 23, "recognizedByUN" : true},
    {"name": "UK", "population": 67886011, "imageLink": "assets/images/uk.png", "pop": "67,886,011", "ratio": 12, "recognizedByUN" : true},
    {"name": "France", "population": 65273511, "imageLink": "assets/images/france.webp", "pop": "65,273,511", "ratio": 23, "recognizedByUN" : true},
    {"name": "Italy", "population": 60461826, "imageLink": "assets/images/italy.svg", "pop": "60,461,826", "ratio": 23, "recognizedByUN" : true},
    {"name": "Tanzania", "population": 59734218, "imageLink": "assets/images/tanzania.webp", "pop": "59,734,218", "ratio": 23, "recognizedByUN" : true},
    {"name": "South Africa", "population": 59308690, "imageLink": "assets/images/southafrica.png", "pop": "59,308,690", "ratio": 23, "recognizedByUN" : true},
    {"name": "Myanmar", "population": 54409800, "imageLink": "assets/images/myanmar.png", "pop": "54,409,800", "ratio": 23, "recognizedByUN" : true},
    {"name": "Kenya", "population": 53771296, "imageLink": "assets/images/kenya.png", "pop": "53,771,296", "ratio": 23, "recognizedByUN" : true},
    {"name": "South Korea", "population": 51269185, "imageLink": "assets/images/southkorea.png", "pop": "51,269,185", "ratio": 23, "recognizedByUN" : true},
    {"name": "Colombia", "population": 50882891, "imageLink": "assets/images/colombia.webp", "pop": "50,882,891", "ratio": 23, "recognizedByUN" : true},
    {"name": "Spain", "population": 46754778, "imageLink": "assets/images/spain.svg", "pop": "46,754,778", "ratio": 23, "recognizedByUN" : true},
    {"name": "Uganda", "population": 45741007, "imageLink": "assets/images/uganda.jpg", "pop": "45,741,007", "ratio": 23, "recognizedByUN" : true},
    {"name": "Argentina", "population": 45195774, "imageLink": "assets/images/argentina.webp", "pop": "45,195,774", "ratio": 58, "recognizedByUN" : true},
    {"name": "Algeria", "population": 43851044, "imageLink": "assets/images/algeria.png", "pop": "43,851,044", "ratio": 23, "recognizedByUN" : true},
    {"name": "Sudan", "population": 43849260, "imageLink": "assets/images/sudan.webp", "pop": "43,849,260", "ratio": 12, "recognizedByUN" : true},
    {"name": "Ukraine", "population": 43733762, "imageLink": "assets/images/ukraine.png", "pop": "43,733,762", "ratio": 23, "recognizedByUN" : true},
    {"name": "Iraq", "population": 40222493, "imageLink": "assets/images/iraq.webp", "pop": "40,222,493", "ratio": 23, "recognizedByUN" : true},
    {"name": "Afghanistan", "population": 38928346, "imageLink": "assets/images/afghanistan.png", "pop": "38,928,346", "ratio": 23, "recognizedByUN" : true},
    {"name": "Poland", "population": 37846611, "imageLink": "assets/images/poland.svg", "pop": "37,846,611", "ratio": 58, "recognizedByUN" : true},
    {"name": "Canada", "population": 37742154, "imageLink": "assets/images/canada.webp", "pop": "37,742,154", "ratio": 12, "recognizedByUN" : true},
    {"name": "Morocco", "population": 36910560, "imageLink": "assets/images/morocco.png", "pop": "36,910,560", "ratio": 23, "recognizedByUN" : true},
    {"name": "Saudi Arabia", "population": 34813871, "imageLink": "assets/images/saudiarabia.jpg", "pop": "34,813,871", "ratio": 23, "recognizedByUN" : true},
    {"name": "Uzbekistan", "population": 33469203, "imageLink": "assets/images/uzbekistan.png", "pop": "33,469,203", "ratio": 12, "recognizedByUN" : true},
    {"name": "Peru", "population": 32971854, "imageLink": "assets/images/peru.png", "pop": "32,971,854", "ratio": 23, "recognizedByUN" : true},
    {"name": "Angola", "population": 32866272, "imageLink": "assets/images/angola.webp", "pop": "32,866,272", "ratio": 23, "recognizedByUN" : true},
    {"name": "Malaysia", "population": 32365999, "imageLink": "assets/images/malaysia.webp", "pop": "32,365,999", "ratio": 12, "recognizedByUN" : true},
    {"name": "Mozambique", "population": 31255435, "imageLink": "assets/images/mozambique.png", "pop": "31,255,435", "ratio": 23, "recognizedByUN" : true},
    {"name": "Ghana", "population": 31072940, "imageLink": "assets/images/ghana.png", "pop": "31,072,940", "ratio": 23, "recognizedByUN" : true},
    {"name": "Yemen", "population": 29825964, "imageLink": "assets/images/yemen.webp", "pop": "29,825,964", "ratio": 23, "recognizedByUN" : true},
    {"name": "Nepal", "population": 29136808, "imageLink": "assets/images/nepal.png", "pop": "29,136,808", "ratio": 11, "recognizedByUN" : true},
    {"name": "Venezuela", "population": 28435940, "imageLink": "assets/images/venezuela.jpg", "pop": "28,435,940", "ratio": 23, "recognizedByUN" : true},
    {"name": "Madagascar", "population": 27691018, "imageLink": "assets/images/madagascar.jpg", "pop": "27,691,018", "ratio": 23, "recognizedByUN" : true},
    {"name": "Cameroon", "population": 26545863, "imageLink": "assets/images/cameroon.png", "pop": "26,545,863", "ratio": 23, "recognizedByUN" : true},
    {"name": "Ivory Coast", "population": 26378274, "imageLink": "assets/images/ivorycoast.webp", "pop": "26,378,274", "ratio": 23, "recognizedByUN" : true},
    {"name": "North Korea", "population": 25778816, "imageLink": "assets/images/northkorea.png", "pop": "25,778,816", "ratio": 12, "recognizedByUN" : true},
    {"name": "Australia", "population": 25499884, "imageLink": "assets/images/australia.webp", "pop": "25,499,884", "ratio": 12, "recognizedByUN" : true},
    {"name": "Niger", "population": 24206644, "imageLink": "assets/images/niger.png", "pop": "24,206,644", "ratio": 67, "recognizedByUN" : true},
    {"name": "Taiwan", "population": 23816775, "imageLink": "assets/images/taiwan.webp", "pop": "23,816,775", "ratio": 23, "recognizedByUN" : true},
    {"name": "Sri Lanka", "population": 21413249, "imageLink": "assets/images/srilanka.jpg", "pop": "21,413,249", "ratio": 12, "recognizedByUN" : true},
    {"name": "Burkina Faso", "population": 20903273, "imageLink": "assets/images/burkinafaso.webp", "pop": "20,903,273", "ratio": 23, "recognizedByUN" : true},
    {"name": "Mali", "population": 20250833, "imageLink": "assets/images/mali.webp", "pop": "20,250,833", "ratio": 23, "recognizedByUN" : true},
    {"name": "Romania", "population": 19237691, "imageLink": "assets/images/romania.webp", "pop": "19,237,691", "ratio": 23, "recognizedByUN" : true},
    {"name": "Malawi", "population": 19129952, "imageLink": "assets/images/malawi.svg", "pop": "19,129,952", "ratio": 23, "recognizedByUN" : true},
    {"name": "Chile", "population": 19116201, "imageLink": "assets/images/chile.png", "pop": "19,116,201", "ratio": 23, "recognizedByUN" : true},
    {"name": "Kazakhstan", "population": 18776707, "imageLink": "assets/images/kazakhstan.jpg", "pop": "18,776,707", "ratio": 12, "recognizedByUN" : true},
    {"name": "Zambia", "population": 18383955, "imageLink": "assets/images/zambia.jpg", "pop": "18,383,955", "ratio": 23, "recognizedByUN" : true},
    {"name": "Guatemala", "population": 17915568, "imageLink": "assets/images/guatemala.svg", "pop": "17,915,568", "ratio": 58, "recognizedByUN" : true},
    {"name": "Ecuador", "population": 17643054, "imageLink": "assets/images/ecuador.png", "pop": "17,643,054", "ratio": 23, "recognizedByUN" : true},
    {"name": "Syria", "population": 17500658, "imageLink": "assets/images/syria.png", "pop": "17,500,658", "ratio": 23, "recognizedByUN" : true},
    {"name": "Netherlands", "population": 17134872, "imageLink": "assets/images/netherlands.png", "pop": "17,134,872", "ratio": 23, "recognizedByUN" : true},
    {"name": "Senegal", "population": 16743927, "imageLink": "assets/images/senegal.jpg", "pop": "16,743,927", "ratio": 23, "recognizedByUN" : true},
    {"name": "Cambodia", "population": 16718965, "imageLink": "assets/images/cambodia.jpg", "pop": "16,718,965", "ratio": 58, "recognizedByUN" : true},
    {"name": "Chad", "population": 16425864, "imageLink": "assets/images/chad.svg", "pop": "16,425,864", "ratio": 23, "recognizedByUN" : true},
    {"name": "Somalia", "population": 15893222, "imageLink": "assets/images/somalia.png", "pop": "15,893,222", "ratio": 23, "recognizedByUN" : true},
    {"name": "Zimbabwe", "population": 14862924, "imageLink": "assets/images/zimbabwe.png", "pop": "14,862,924", "ratio": 12, "recognizedByUN" : true},
    {"name": "Guinea", "population": 13132795, "imageLink": "assets/images/guinea.webp", "pop": "13,132,795", "ratio": 23, "recognizedByUN" : true},
    {"name": "Rwanda", "population": 12952218, "imageLink": "assets/images/rwanda.jpg", "pop": "12,952,218", "ratio": 23, "recognizedByUN" : true},
    {"name": "Benin", "population": 12123200, "imageLink": "assets/images/benin.jpg", "pop": "12,123,200", "ratio": 23, "recognizedByUN" : true},
    {"name": "Burundi", "population": 11890784, "imageLink": "assets/images/burundi.png", "pop": "11,890,784", "ratio": 35, "recognizedByUN" : true},
    {"name": "Tunisia", "population": 11818619, "imageLink": "assets/images/tunisia.webp", "pop": "11,818,619", "ratio": 23, "recognizedByUN" : true},
    {"name": "Bolivia", "population": 11673021, "imageLink": "assets/images/bolivia.webp", "pop": "11,673,021", "ratio": 23, "recognizedByUN" : true},
    {"name": "Belgium", "population": 11589623, "imageLink": "assets/images/belgium.png", "pop": "11,589,623", "ratio": 67, "recognizedByUN" : true},
    {"name": "Haiti", "population": 11402528, "imageLink": "assets/images/haiti.svg", "pop": "11,402,528", "ratio": 35, "recognizedByUN" : true},
    {"name": "Cuba", "population": 11326616, "imageLink": "assets/images/cuba.svg", "pop": "11,326,616", "ratio": 12, "recognizedByUN" : true},
    {"name": "South Sudan", "population": 11193725, "imageLink": "assets/images/southsudan.png", "pop": "11,193,725", "ratio": 12, "recognizedByUN" : true},
    {"name": "Dominican Republic", "population": 10847910, "imageLink": "assets/images/dominicanrepublic.webp", "pop": "10,847,910", "ratio": 58, "recognizedByUN" : true},
    {"name": "Czech Republic", "population": 10708981, "imageLink": "assets/images/czechia.png", "pop": "10,708,981", "ratio": 23, "recognizedByUN" : true},
    {"name": "Greece", "population": 10423054, "imageLink": "assets/images/greece.png", "pop": "10,423,054", "ratio": 23, "recognizedByUN" : true},
    {"name": "Jordan", "population": 10203134, "imageLink": "assets/images/jordan.png", "pop": "10,203,134", "ratio": 12, "recognizedByUN" : true},
    {"name": "Portugal", "population": 10196709, "imageLink": "assets/images/portugal.webp", "pop": "10,196,709", "ratio": 23, "recognizedByUN" : true},
    {"name": "Azerbaijan", "population": 10139177, "imageLink": "assets/images/azerbaijan.svg", "pop": "10,139,177", "ratio": 12, "recognizedByUN" : true},
    {"name": "Sweden", "population": 10009265, "imageLink": "assets/images/sweden.png", "pop": "10,009,265", "ratio": 58, "recognizedByUN" : true},
    {"name": "Honduras", "population": 9904607, "imageLink": "assets/images/honduras.png", "pop": "9,904,607", "ratio": 12, "recognizedByUN" : true},
    {"name": "UAE", "population": 9890402, "imageLink": "assets/images/uae.webp", "pop": "9,890,402", "ratio": 12, "recognizedByUN" : true},
    {"name": "Hungary", "population": 9660351, "imageLink": "assets/images/hungary.jpg", "pop": "9,660,351", "ratio": 12, "recognizedByUN" : true},
    {"name": "Tajikistan", "population": 9537645, "imageLink": "assets/images/tajikistan.png", "pop": "9,537,645", "ratio": 12, "recognizedByUN" : true},
    {"name": "Belarus", "population": 9449323, "imageLink": "assets/images/belarus.jpg", "pop": "9,449,323", "ratio": 12, "recognizedByUN" : true},
    {"name": "Austria", "population": 9006398, "imageLink": "assets/images/austria.svg", "pop": "9,006,398", "ratio": 23, "recognizedByUN" : true},
    {"name": "Papua New Guinea", "population": 8947024, "imageLink": "assets/images/papuanewguinea.png", "pop": "8,947,024", "ratio": 34, "recognizedByUN" : true},
    {"name": "Serbia", "population": 8737371, "imageLink": "assets/images/serbia.png", "pop": "8,737,371", "ratio": 23, "recognizedByUN" : true},
    {"name": "Israel", "population": 8655535, "imageLink": "assets/images/israel.png", "pop": "8,655,535", "ratio": 57, "recognizedByUN" : true},
    {"name": "Switzerland", "population": 8654622, "imageLink": "assets/images/switzerland.jpg", "pop": "8,654,622", "ratio": 11, "recognizedByUN" : true},
    {"name": "Togo", "population": 8278724, "imageLink": "assets/images/togo.png", "pop": "8,278,724", "ratio": 58, "recognizedByUN" : true},
    {"name": "Sierra Leone", "population": 7976983, "imageLink": "assets/images/sierraleone.svg", "pop": "7,976,983", "ratio": 23, "recognizedByUN" : true},
    {"name": "Hong Kong", "population": 7496981, "imageLink": "assets/images/hongkong.png", "pop": "7,496,981", "ratio": 23, "recognizedByUN" : false},
    {"name": "Laos", "population": 7275560, "imageLink": "assets/images/laos.png", "pop": "7,275,560", "ratio": 23, "recognizedByUN" : true},
    {"name": "Paraguay", "population": 7132538, "imageLink": "assets/images/paraguay.webp", "pop": "7,132,538", "ratio": 1018, "recognizedByUN" : true},
    {"name": "Bulgaria", "population": 6948445, "imageLink": "assets/images/bulgaria.png", "pop": "6,948,445", "ratio": 35, "recognizedByUN" : true},
    {"name": "Libya", "population": 6871292, "imageLink": "assets/images/libya.webp", "pop": "6,871,292", "ratio": 12, "recognizedByUN" : true},
    {"name": "Lebanon", "population": 6825445, "imageLink": "assets/images/lebanon.jpg", "pop": "6,825,445", "ratio": 23, "recognizedByUN" : true},
    {"name": "Nicaragua", "population": 6624554, "imageLink": "assets/images/nicaragua.png", "pop": "6,624,554", "ratio": 35, "recognizedByUN" : true},
    {"name": "Kyrgyzstan", "population": 6524195, "imageLink": "assets/images/kyrgyzstan.webp", "pop": "6,524,195", "ratio": 35, "recognizedByUN" : true},
    {"name": "El Salvador", "population": 6486205, "imageLink": "assets/images/elsalvador.jpg", "pop": "6,486,205", "ratio": 1018, "recognizedByUN" : true},
    {"name": "Turkmenistan", "population": 6031200, "imageLink": "assets/images/turkmenistan.png", "pop": "6,031,200", "ratio": 23, "recognizedByUN" : true},
    {"name": "Singapore", "population": 5850342, "imageLink": "assets/images/singapore.png", "pop": "5,850,342", "ratio": 23, "recognizedByUN" : true},
    {"name": "Denmark", "population": 5792202, "imageLink": "assets/images/denmark.png", "pop": "5,792,202", "ratio": 34, "recognizedByUN" : true},
    {"name": "Finland", "population": 5540720, "imageLink": "assets/images/finland.png", "pop": "5,540,720", "ratio": 35, "recognizedByUN" : true},
    {"name": "Republic of Congo", "population": 5518087, "imageLink": "assets/images/republicofcongo.svg", "pop": "5,518,087", "ratio": 23, "recognizedByUN" : true},
    {"name": "Slovakia", "population": 5459642, "imageLink": "assets/images/slovakia.png", "pop": "5,459,642", "ratio": 23, "recognizedByUN" : true},
    {"name": "Norway", "population": 5421241, "imageLink": "assets/images/norway.jpg", "pop": "5,421,241", "ratio": 57, "recognizedByUN" : true},
    {"name": "Oman", "population": 5106626, "imageLink": "assets/images/oman.svg", "pop": "5,106,626", "ratio": 12, "recognizedByUN" : true},
    {"name": "Palestine", "population": 5101414, "imageLink": "assets/images/palestine.png", "pop": "5,101,414", "ratio": 12, "recognizedByUN" : true},
    {"name": "Costa Rica", "population": 5094118, "imageLink": "assets/images/costarica.png", "pop": "5,094,118", "ratio": 35, "recognizedByUN" : true},
    {"name": "Liberia", "population": 5057681, "imageLink": "assets/images/liberia.webp", "pop": "5,057,681", "ratio": 1019, "recognizedByUN" : true},
    {"name": "Ireland", "population": 4937786, "imageLink": "assets/images/ireland.webp", "pop": "4,937,786", "ratio": 12, "recognizedByUN" : true},
    {"name": "Central African Republic", "population": 4829767, "imageLink": "assets/images/centralafricanrepublic.png", "pop": "4,829,767", "ratio": 23, "recognizedByUN" : true},
    {"name": "New Zealand", "population": 4822233, "imageLink": "assets/images/newzealand.jpg", "pop": "4,822,233", "ratio": 12, "recognizedByUN" : true},
    {"name": "Mauritania", "population": 4649658, "imageLink": "assets/images/mauritania.webp", "pop": "4,649,658", "ratio": 23, "recognizedByUN" : true},
    {"name": "Panama", "population": 4314767, "imageLink": "assets/images/panama.webp", "pop": "4,314,767", "ratio": 23, "recognizedByUN" : true},
    {"name": "Kuwait", "population": 4270571, "imageLink": "assets/images/kuwait.png", "pop": "4,270,571", "ratio": 12, "recognizedByUN" : true},
    {"name": "Croatia", "population": 4105267, "imageLink": "assets/images/croatia.png", "pop": "4,105,267", "ratio": 12, "recognizedByUN" : true},
    {"name": "Moldova", "population": 4033963, "imageLink": "assets/images/moldova.png", "pop": "4,033,963", "ratio": 12, "recognizedByUN" : true},
    {"name": "Georgia", "population": 3989167, "imageLink": "assets/images/georgia.jpg", "pop": "3,989,167", "ratio": 23, "recognizedByUN" : true},
    {"name": "Eritrea", "population": 3546421, "imageLink": "assets/images/eritrea.png", "pop": "3,546,421", "ratio": 12, "recognizedByUN" : true},
    {"name": "Uruguay", "population": 3473730, "imageLink": "assets/images/uruguay.svg", "pop": "3,473,730", "ratio": 23, "recognizedByUN" : true},
    {"name": "Bosnia and Herzegovina", "population": 3280819, "imageLink": "assets/images/bosniaandherzegovina.png", "pop": "3,280,819", "ratio": 12, "recognizedByUN" : true},
    {"name": "Mongolia", "population": 3278290, "imageLink": "assets/images/mongolia.png", "pop": "3,278,290", "ratio": 12, "recognizedByUN" : true},
    {"name": "Armenia", "population": 2963243, "imageLink": "assets/images/armenia.webp", "pop": "2,963,243", "ratio": 12, "recognizedByUN" : true},
    {"name": "Jamaica", "population": 2961167, "imageLink": "assets/images/jamaica.svg", "pop": "2,961,167", "ratio": 12, "recognizedByUN" : true},
    {"name": "Qatar", "population": 2881053, "imageLink": "assets/images/qatar.jpg", "pop": "2,881,053", "ratio": 1128, "recognizedByUN" : true},
    {"name": "Albania", "population": 2877797, "imageLink": "assets/images/albania.svg", "pop": "2,877,797", "ratio": 57, "recognizedByUN" : true},
    {"name": "Puerto Rico", "population": 2860853, "imageLink": "assets/images/puertorico.svg", "pop": "2,860,853", "ratio": 23, "recognizedByUN" : false},
    {"name": "Lithuania", "population": 2722289, "imageLink": "assets/images/lithuania.png", "pop": "2,722,289", "ratio": 35, "recognizedByUN" : true},
    {"name": "Namibia", "population": 2540905, "imageLink": "assets/images/namibia.png", "pop": "2,540,905", "ratio": 23, "recognizedByUN" : true},
    {"name": "Gambia", "population": 2416668, "imageLink": "assets/images/gambia.webp", "pop": "2,416,668", "ratio": 23, "recognizedByUN" : true},
    {"name": "Botswana", "population": 2351627, "imageLink": "assets/images/botswana.webp", "pop": "2,351,627", "ratio": 23, "recognizedByUN" : true},
    {"name": "Gabon", "population": 2225734, "imageLink": "assets/images/gabon.png", "pop": "2,225,734", "ratio": 34, "recognizedByUN" : true},
    {"name": "Lesotho", "population": 2142249, "imageLink": "assets/images/lesotho.png", "pop": "2,142,249", "ratio": 23, "recognizedByUN" : true},
    {"name": "North Macedonia", "population": 2083374, "imageLink": "assets/images/northmacedonia.png", "pop": "2,083,374", "ratio": 12, "recognizedByUN" : true},
    {"name": "Slovenia", "population": 2078938, "imageLink": "assets/images/slovenia.png", "pop": "2,078,938", "ratio": 12, "recognizedByUN" : true},
    {"name": "Guinea-Bissau", "population": 1968001, "imageLink": "assets/images/guineabissau.svg", "pop": "1,968,001", "ratio": 12, "recognizedByUN" : true},
    {"name": "Latvia", "population": 1886198, "imageLink": "assets/images/latvia.png", "pop": "1,886,198", "ratio": 12, "recognizedByUN" : true},
    {"name": "Kosovo", "population": 1769386, "imageLink": "assets/images/kosovo.webp", "pop": "1,769,386", "ratio": 57, "recognizedByUN" : false},
    {"name": "Bahrain", "population": 1701575, "imageLink": "assets/images/bahrain.svg", "pop": "1,701,575", "ratio": 23, "recognizedByUN" : true},
    {"name": "Equatorial Guinea", "population": 1402985, "imageLink": "assets/images/equatorialguinea.png", "pop": "1,402,985", "ratio": 23, "recognizedByUN" : true},
    {"name": "Trinidad and Tobago", "population": 1399488, "imageLink": "assets/images/trinidadandtobago.jpg", "pop": "1,399,488", "ratio": 35, "recognizedByUN" : true},
    {"name": "Estonia", "population": 1326535, "imageLink": "assets/images/estonia.webp", "pop": "1,326,535", "ratio": 58, "recognizedByUN" : true},
    {"name": "Timor-Leste", "population": 1318445, "imageLink": "assets/images/timorleste.webp", "pop": "1,318,445", "ratio": 12, "recognizedByUN" : true},
    {"name": "Mauritius", "population": 1271768, "imageLink": "assets/images/mauritius.svg", "pop": "1,271,768", "ratio": 23, "recognizedByUN" : true},
    {"name": "Cyprus", "population": 1207359, "imageLink": "assets/images/cyprus.png", "pop": "1,207,359", "ratio": 23, "recognizedByUN" : true},
    {"name": "Eswatini", "population": 1160164, "imageLink": "assets/images/eswatini.png", "pop": "1,160,164", "ratio": 23, "recognizedByUN" : true},
    {"name": "Djibouti", "population": 988000, "imageLink": "assets/images/djibouti.webp", "pop": "988,000", "ratio": 23, "recognizedByUN" : true},
    {"name": "Fiji", "population": 896445, "imageLink": "assets/images/fiji.png", "pop": "896,445", "ratio": 12, "recognizedByUN" : true},
    {"name": "Reunion", "population": 895312, "imageLink": "assets/images/reunion.png", "pop": "895,312", "ratio": 23, "recognizedByUN" : false},
    {"name": "Comoros", "population": 869601, "imageLink": "assets/images/comoros.png", "pop": "869,601", "ratio": 35, "recognizedByUN" : true},
    {"name": "Guyana", "population": 786552, "imageLink": "assets/images/guyana.svg", "pop": "786,552", "ratio": 35, "recognizedByUN" : true},
    {"name": "Bhutan", "population": 771608, "imageLink": "assets/images/bhutan.png", "pop": "771,608", "ratio": 23, "recognizedByUN" : true},
    {"name": "Solomon Islands", "population": 686884, "imageLink": "assets/images/solomonislands.webp", "pop": "686,884", "ratio": 12, "recognizedByUN" : true},
    {"name": "Macao", "population": 649335, "imageLink": "assets/images/macao.png", "pop": "649,335", "ratio": 23, "recognizedByUN" : false},
    {"name": "Montenegro", "population": 628066, "imageLink": "assets/images/montenegro.webp", "pop": "628,066", "ratio": 12, "recognizedByUN" : true},
    {"name": "Luxembourg", "population": 625978, "imageLink": "assets/images/luxembourg.webp", "pop": "625,978", "ratio": 35, "recognizedByUN" : true},
    {"name": "Western Sahara", "population": 597339, "imageLink": "assets/images/westernsahara.png", "pop": "597,339", "ratio": 23, "recognizedByUN" : false},
    {"name": "Suriname", "population": 586632, "imageLink": "assets/images/suriname.webp", "pop": "586,632", "ratio": 23, "recognizedByUN" : true},
    {"name": "Cabo Verde", "population": 555987, "imageLink": "assets/images/caboverde.webp", "pop": "555,987", "ratio": 35, "recognizedByUN" : true},
    {"name": "Micronesia", "population": 548914, "imageLink": "assets/images/micronesia.png", "pop": "548,914", "ratio": 1019, "recognizedByUN" : true},
    {"name": "Maldives", "population": 540544, "imageLink": "assets/images/maldives.webp", "pop": "540,544", "ratio": 23, "recognizedByUN" : true},
    {"name": "Malta", "population": 441543, "imageLink": "assets/images/malta.jpg", "pop": "441,543", "ratio": 23, "recognizedByUN" : true},
    {"name": "Brunei", "population": 437479, "imageLink": "assets/images/brunei.png", "pop": "437,479", "ratio": 12, "recognizedByUN" : true},
    {"name": "Guadeloupe", "population": 400124, "imageLink": "assets/images/guadeloupe.webp", "pop": "400,124", "ratio": 23, "recognizedByUN" : false},
    {"name": "Belize", "population": 397628, "imageLink": "assets/images/belize.png", "pop": "397,628", "ratio": 35, "recognizedByUN" : true},
    {"name": "Bahamas", "population": 393244, "imageLink": "assets/images/bahamas.webp", "pop": "393,244", "ratio": 12, "recognizedByUN" : true},
    {"name": "Martinique", "population": 375265, "imageLink": "assets/images/martinique.png", "pop": "375,265", "ratio": 23, "recognizedByUN" : false},
    {"name": "Iceland", "population": 341243, "imageLink": "assets/images/iceland.jpg", "pop": "341,243", "ratio": 57, "recognizedByUN" : true},
    {"name": "Vanuatu", "population": 307145, "imageLink": "assets/images/vanuatu.svg", "pop": "307,145", "ratio": 1019, "recognizedByUN" : true},
    {"name": "French Guiana", "population": 298682, "imageLink": "assets/images/frenchguiana.png", "pop": "298,682", "ratio": 23, "recognizedByUN" : false},
    {"name": "Barbados", "population": 287375, "imageLink": "assets/images/barbados.svg", "pop": "287,375", "ratio": 23, "recognizedByUN" : true},
    {"name": "New Caledonia", "population": 285498, "imageLink": "assets/images/newcaledonia.jpg", "pop": "285,498", "ratio": 12, "recognizedByUN" : false},
    {"name": "French Polynesia", "population": 280908, "imageLink": "assets/images/frenchpolynesia.png", "pop": "280,908", "ratio": 23, "recognizedByUN" : false},
    {"name": "Mayotte", "population": 272815, "imageLink": "assets/images/mayotte.png", "pop": "272,815", "ratio": 23, "recognizedByUN" : false},
    {"name": "Sao Tome and Principe", "population": 219159, "imageLink": "assets/images/saotomeandprincipe.svg", "pop": "219,159", "ratio": 12, "recognizedByUN" : true},
    {"name": "Samoa", "population": 198414, "imageLink": "assets/images/samoa.webp", "pop": "198,414", "ratio": 12, "recognizedByUN" : true},
    {"name": "St. Lucia", "population": 183627, "imageLink": "assets/images/stlucia.jpg", "pop": "183,627", "ratio": 12, "recognizedByUN" : true},
    {"name": "Channel Islands", "population": 173863, "imageLink": "assets/images/channelislands.png", "pop": "173,863", "ratio": 23, "recognizedByUN" : false},
    {"name": "Guam", "population": 168775, "imageLink": "assets/images/guam.png", "pop": "168,775", "ratio": 1019, "recognizedByUN" : false},
    {"name": "Curacao", "population": 164093, "imageLink": "assets/images/curacao.webp", "pop": "164,093", "ratio": 23, "recognizedByUN" : false},
    {"name": "Kiribati", "population": 119449, "imageLink": "assets/images/kiribati.webp", "pop": "119,449", "ratio": 12, "recognizedByUN" : true},
    {"name": "Grenada", "population": 112523, "imageLink": "assets/images/grenada.svg", "pop": "112,523", "ratio": 35, "recognizedByUN" : true},
    {"name": "St. Vincent and the Grenadines", "population": 110940, "imageLink": "assets/images/stvincentandthegrenadines.svg", "pop": "110,940", "ratio": 23, "recognizedByUN" : true},
    {"name": "Aruba", "population": 106766, "imageLink": "assets/images/aruba.png", "pop": "106,766", "ratio": 23, "recognizedByUN" : false},
    {"name": "Tonga", "population": 105695, "imageLink": "assets/images/tonga.png", "pop": "105,695", "ratio": 12, "recognizedByUN" : true},
    {"name": "U.S. Virgin Islands", "population": 104425, "imageLink": "assets/images/usvirginislands.webp", "pop": "104,425", "ratio": 23, "recognizedByUN" : false},
    {"name": "Seychelles", "population": 98347, "imageLink": "assets/images/seychelles.webp", "pop": "98,347", "ratio": 12, "recognizedByUN" : true},
    {"name": "Antigua and Barbuda", "population": 97929, "imageLink": "assets/images/antiguaandbarbuda.jpg", "pop": "97,929", "ratio": 23, "recognizedByUN" : true},
    {"name": "Isle of Man", "population": 85033, "imageLink": "assets/images/isleofman.webp", "pop": "85,033", "ratio": 12, "recognizedByUN" : false},
    {"name": "Andorra", "population": 77265, "imageLink": "assets/images/andorra.webp", "pop": "77,265", "ratio": 57, "recognizedByUN" : true},
    {"name": "Dominica", "population": 71986, "imageLink": "assets/images/dominica.webp", "pop": "71,986", "ratio": 12, "recognizedByUN" : true},
    {"name": "Cayman Islands", "population": 65722, "imageLink": "assets/images/caymanislands.png", "pop": "65,722", "ratio": 12, "recognizedByUN" : false},
    {"name": "Bermuda", "population": 62278, "imageLink": "assets/images/bermuda.png", "pop": "62,278", "ratio": 12, "recognizedByUN" : false},
    {"name": "Marshall Islands", "population": 59190, "imageLink": "assets/images/marshallislands.png", "pop": "59,190", "ratio": 1019, "recognizedByUN" : true},
    {"name": "Northern Mariana Islands", "population": 57559, "imageLink": "assets/images/northernmarianaislands.svg", "pop": "57,559", "ratio": 12, "recognizedByUN" : false},
    {"name": "Greenland", "population": 56770, "imageLink": "assets/images/greenland.jpg", "pop": "56,770", "ratio": 23, "recognizedByUN" : false},
    {"name": "American Samoa", "population": 55191, "imageLink": "assets/images/americansamoa.webp", "pop": "55,191", "ratio": 1019, "recognizedByUN" : false},
    {"name": "St. Kitts and Nevis", "population": 53199, "imageLink": "assets/images/stkittsandnevis.jpg", "pop": "53,199", "ratio": 23, "recognizedByUN" : true},
    {"name": "Faroe Islands", "population": 48863, "imageLink": "assets/images/faroeislands.svg", "pop": "48,863", "ratio": 57, "recognizedByUN" : false},
    {"name": "Sint Maarten", "population": 42876, "imageLink": "assets/images/sintmaarten.png", "pop": "42,876", "ratio": 23, "recognizedByUN" : false},
    {"name": "Monaco", "population": 39242, "imageLink": "assets/images/monaco.png", "pop": "39,242", "ratio": 67, "recognizedByUN" : true},
    {"name": "Turks and Caicos", "population": 38717, "imageLink": "assets/images/turksandcaicos.svg", "pop": "38,717", "ratio": 12, "recognizedByUN" : false},
    {"name": "Saint Martin", "population": 38666, "imageLink": "assets/images/saintmartin.png", "pop": "38,666", "ratio": 23, "recognizedByUN" : false},
    {"name": "Liechtenstein", "population": 38128, "imageLink": "assets/images/liechtenstein.svg", "pop": "38,128", "ratio": 35, "recognizedByUN" : true},
    {"name": "San Marino", "population": 33931, "imageLink": "assets/images/sanmarino.png", "pop": "33,931", "ratio": 34, "recognizedByUN" : true},
    {"name": "Gibraltar", "population": 33691, "imageLink": "assets/images/gibraltar.svg", "pop": "33,691", "ratio": 12, "recognizedByUN" : false},
    {"name": "British Virgin Islands", "population": 30231, "imageLink": "assets/images/britishvirginislands.png", "pop": "30,231", "ratio": 12, "recognizedByUN" : false},
    {"name": "Caribbean Netherlands", "population": 26223, "imageLink": "assets/images/caribbeannetherlands.png", "pop": "26,223", "ratio": 23, "recognizedByUN" : false},
    {"name": "Palau", "population": 18094, "imageLink": "assets/images/palau.webp", "pop": "18,094", "ratio": 58, "recognizedByUN" : true},
    {"name": "Cook Islands", "population": 17564, "imageLink": "assets/images/cookislands.svg", "pop": "17,564", "ratio": 12, "recognizedByUN" : false},
    {"name": "Anguilla", "population": 15003, "imageLink": "assets/images/anguilla.svg", "pop": "15,003", "ratio": 12, "recognizedByUN" : false},
    {"name": "Tuvalu", "population": 11792, "imageLink": "assets/images/tuvalu.png", "pop": "11,792", "ratio": 12, "recognizedByUN" : true},
    {"name": "Wallis and Futuna", "population": 11239, "imageLink": "assets/images/wallisandfutuna.png", "pop": "11,239", "ratio": 23, "recognizedByUN" : false},
    {"name": "Nauru", "population": 10824, "imageLink": "assets/images/nauru.png", "pop": "10,824", "ratio": 12, "recognizedByUN" : true},
    {"name": "St. Barthelemy", "population": 9877, "imageLink": "assets/images/saintbarthelemy.png", "pop": "9,877", "ratio": 23, "recognizedByUN" : false},
    {"name": "St. Helena", "population": 6077, "imageLink": "assets/images/sainthelena.png", "pop": "6,077", "ratio": 23, "recognizedByUN" : false},
    {"name": "St. Pierre and Miquelon", "population": 5794, "imageLink": "assets/images/stpierreandmiquelon.png", "pop": "5,794", "ratio": 23, "recognizedByUN" : false},
    {"name": "Montserrat", "population": 4992, "imageLink": "assets/images/montserrat.svg", "pop": "4,992", "ratio": 12, "recognizedByUN" : false},
    {"name": "Falkland Islands", "population": 3480, "imageLink": "assets/images/falklandislands.svg", "pop": "3,480", "ratio": 12, "recognizedByUN" : false},
    {"name": "Niue", "population": 1626, "imageLink": "assets/images/niue.png", "pop": "1,626", "ratio": 12, "recognizedByUN" : false},
    {"name": "Tokelau", "population": 1357, "imageLink": "assets/images/tokelau.svg", "pop": "1,357", "ratio": 12, "recognizedByUN" : false},
    {"name": "Vatican City", "population": 801, "imageLink": "assets/images/vaticancity.png", "pop": "801", "ratio": 11, "recognizedByUN" : true}
  ];
  country: Country| undefined;
  prev_country: Country| undefined;
  game_started: boolean;
  score: number;
  max_score: number;
  un_recog_max_score: number;
  end_screen: boolean;
  /*
  Gamemode 1 is regular all countries mode
  2 is only UN recongnized countries
   */
  gamemode: number;

  constructor() {
    this.game_started = false;
    this.score = 0;
    this.max_score = 0;
    this.un_recog_max_score = 0;
    this.end_screen = false;
    this.gamemode = 1;
  }

  ngOnInit(): void {
  }

  //Sets this.country as a random country that is contained in the gamemode
  selectRandom(): void {
    if (this.gamemode == 2){
      let num: number = this.getRandomInt(0, 234);
      while(!this.countries[num].recognizedByUN){
        num = this.getRandomInt(0, 234);
      }
      this.prev_country = this.country;
      this.country = this.countries[num];
    }
    else {
      let num: number = this.getRandomInt(0, 234);
      this.prev_country = this.country;
      this.country = this.countries[num];
    }
  }

  //returns a random int between the two given numbers
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
    this.end_screen = true;
    this.score = 0;
  }

  startGame(): void {
    this.end_screen = false;
    this.game_started = true;
    this.selectRandom();
    this.selectRandom();
  }

  goToHome(): void {
    this.end_screen = false;
  }
}
