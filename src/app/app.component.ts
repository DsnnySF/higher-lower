import { Component } from '@angular/core';
import {Country} from "./country";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'higher-lower';
  //info from worldometers.info
  countries: Country[] = [
    {"name": "China", "population": 1439323776, "imageLink": "assets/images/china.jpg", "pop": "1,439,323,776", "ratio": 23, "recognizedByUN" : true, "popid": 1, "size": "9,388,211", "n_size": 9388211},
    {"name": "India", "population": 1380004385, "imageLink": "assets/images/india.png", "pop": "1,380,004,385", "ratio": 23, "recognizedByUN" : true, "popid": 2, "size": "2,973,190", "n_size": 2973190},
    {"name": "USA", "population": 331002651, "imageLink": "assets/images/usa.png", "pop": "331,002,651", "ratio": 1019, "recognizedByUN" : true, "popid": 3, "size": "9,147,420", "n_size": 9147420},
    {"name": "Indonesia", "population": 273523615, "imageLink": "assets/images/indonesia.jpg", "pop": "273,523,615", "ratio": 23, "recognizedByUN" : true, "popid": 4, "size": "1,811,570", "n_size": 1811570},
    {"name": "Pakistan", "population": 220892340, "imageLink": "assets/images/pakistan.png", "pop": "220,892,340", "ratio": 23, "recognizedByUN" : true, "popid": 5, "size": "770,880", "n_size": 770880},
    {"name": "Brazil", "population": 212559417, "imageLink": "assets/images/brazil.webp", "pop": "212,559,417", "ratio": 57, "recognizedByUN" : true, "popid": 6, "size": "8,358,140", "n_size": 8358140},
    {"name": "Nigeria", "population": 206139589, "imageLink": "assets/images/nigeria.webp", "pop": "206,139,589", "ratio": 12, "recognizedByUN" : true, "popid": 7, "size": "910,770", "n_size": 910770},
    {"name": "Bangladesh", "population": 164689383, "imageLink": "assets/images/bangladesh.webp", "pop": "164,689,383", "ratio": 35, "recognizedByUN" : true, "popid": 8, "size": "130,170", "n_size": 130170},
    {"name": "Russia", "population": 145934462, "imageLink": "assets/images/russia.webp", "pop": "145,934,462", "ratio": 23, "recognizedByUN" : true, "popid": 9, "size": "16,376,870", "n_size": 16376870},
    {"name": "Mexico", "population": 128932753, "imageLink": "assets/images/mexico.png", "pop": "128,932,753", "ratio": 1018, "recognizedByUN" : true, "popid": 10, "size": "1,943,950", "n_size": 1943950},
    {"name": "Japan", "population": 126476461, "imageLink": "assets/images/japan.png", "pop": "126,476,461", "ratio": 23, "recognizedByUN" : true, "popid": 11, "size": "364,555", "n_size": 364555},
    {"name": "Ethiopia", "population": 114963588, "imageLink": "assets/images/ethiopia.webp", "pop": "114,963,588", "ratio": 12, "recognizedByUN" : true, "popid": 12, "size": "1,000,000", "n_size": 1000000},
    {"name": "Philippines", "population": 109581078, "imageLink": "assets/images/philippines.png", "pop": "109,581,078", "ratio": 12, "recognizedByUN" : true, "popid": 13, "size": "298,170", "n_size": 298170},
    {"name": "Egypt", "population": 102334404, "imageLink": "assets/images/egypt.webp", "pop": "102,334,404", "ratio": 23, "recognizedByUN" : true, "popid": 14, "size": "995,450", "n_size": 995450},
    {"name": "Vietnam", "population": 97338579, "imageLink": "assets/images/vietnam.webp", "pop": "97,338,579", "ratio": 23, "recognizedByUN" : true, "popid": 15, "size": "310,070", "n_size": 310070},
    {"name": "DR Congo", "population": 89561403, "imageLink": "assets/images/drcongo.png", "pop": "89,561,403", "ratio": 34, "recognizedByUN" : true, "popid": 16, "size": "2,267,050", "n_size": 2267050},
    {"name": "Turkey", "population": 84339067, "imageLink": "assets/images/turkey.png", "pop": "84,339,067", "ratio": 23, "recognizedByUN" : true, "popid": 17, "size": "769,630", "n_size": 769630},
    {"name": "Iran", "population": 83992949, "imageLink": "assets/images/iran.png", "pop": "83,992,949", "ratio": 1018, "recognizedByUN" : true, "popid": 18, "size": "1,628,550", "n_size": 1628550},
    {"name": "Germany", "population": 83783942, "imageLink": "assets/images/germany.webp", "pop": "83,783,942", "ratio": 35, "recognizedByUN" : true, "popid": 19, "size": "348,560", "n_size": 348560},
    {"name": "Thailand", "population": 69799978, "imageLink": "assets/images/thailand.webp", "pop": "69,799,978", "ratio": 23, "recognizedByUN" : true, "popid": 20, "size": "510,890", "n_size": 510890},
    {"name": "UK", "population": 67886011, "imageLink": "assets/images/uk.png", "pop": "67,886,011", "ratio": 12, "recognizedByUN" : true, "popid": 21, "size": "241,930", "n_size": 241930},
    {"name": "France", "population": 65273511, "imageLink": "assets/images/france.webp", "pop": "65,273,511", "ratio": 23, "recognizedByUN" : true, "popid": 22, "size": "547,557", "n_size": 547557},
    {"name": "Italy", "population": 60461826, "imageLink": "assets/images/italy.svg", "pop": "60,461,826", "ratio": 23, "recognizedByUN" : true, "popid": 23, "size": "294,140", "n_size": 294140},
    {"name": "Tanzania", "population": 59734218, "imageLink": "assets/images/tanzania.webp", "pop": "59,734,218", "ratio": 23, "recognizedByUN" : true, "popid": 24, "size": "885,800", "n_size": 885800},
    {"name": "South Africa", "population": 59308690, "imageLink": "assets/images/southafrica.png", "pop": "59,308,690", "ratio": 23, "recognizedByUN" : true, "popid": 25, "size": "1,213,090", "n_size": 1213090},
    {"name": "Myanmar", "population": 54409800, "imageLink": "assets/images/myanmar.png", "pop": "54,409,800", "ratio": 23, "recognizedByUN" : true, "popid": 26, "size": "653,290", "n_size": 653290},
    {"name": "Kenya", "population": 53771296, "imageLink": "assets/images/kenya.png", "pop": "53,771,296", "ratio": 23, "recognizedByUN" : true, "popid": 27, "size": "569,140", "n_size": 569140},
    {"name": "South Korea", "population": 51269185, "imageLink": "assets/images/southkorea.png", "pop": "51,269,185", "ratio": 23, "recognizedByUN" : true, "popid": 28, "size": "97,230", "n_size": 97230},
    {"name": "Colombia", "population": 50882891, "imageLink": "assets/images/colombia.webp", "pop": "50,882,891", "ratio": 23, "recognizedByUN" : true, "popid": 29, "size": "1,109,500", "n_size": 1109500},
    {"name": "Spain", "population": 46754778, "imageLink": "assets/images/spain.svg", "pop": "46,754,778", "ratio": 23, "recognizedByUN" : true, "popid": 30, "size": "498,800", "n_size": 498800},
    {"name": "Uganda", "population": 45741007, "imageLink": "assets/images/uganda.jpg", "pop": "45,741,007", "ratio": 23, "recognizedByUN" : true, "popid": 31, "size": "199,810", "n_size": 199810},
    {"name": "Argentina", "population": 45195774, "imageLink": "assets/images/argentina.webp", "pop": "45,195,774", "ratio": 58, "recognizedByUN" : true, "popid": 32, "size": "2,736,690", "n_size": 2736690},
    {"name": "Algeria", "population": 43851044, "imageLink": "assets/images/algeria.png", "pop": "43,851,044", "ratio": 23, "recognizedByUN" : true, "popid": 33, "size": "2,381,740", "n_size": 2381740},
    {"name": "Sudan", "population": 43849260, "imageLink": "assets/images/sudan.webp", "pop": "43,849,260", "ratio": 12, "recognizedByUN" : true, "popid": 34, "size": "1,765,048", "n_size": 1765048},
    {"name": "Ukraine", "population": 43733762, "imageLink": "assets/images/ukraine.png", "pop": "43,733,762", "ratio": 23, "recognizedByUN" : true, "popid": 35, "size": "579,320", "n_size": 579320},
    {"name": "Iraq", "population": 40222493, "imageLink": "assets/images/iraq.webp", "pop": "40,222,493", "ratio": 23, "recognizedByUN" : true, "popid": 36, "size": "434,320", "n_size": 434320},
    {"name": "Afghanistan", "population": 38928346, "imageLink": "assets/images/afghanistan.png", "pop": "38,928,346", "ratio": 23, "recognizedByUN" : true, "popid": 37, "size": "652,860", "n_size": 652860},
    {"name": "Poland", "population": 37846611, "imageLink": "assets/images/poland.svg", "pop": "37,846,611", "ratio": 58, "recognizedByUN" : true, "popid": 38, "size": "306,230", "n_size": 306230},
    {"name": "Canada", "population": 37742154, "imageLink": "assets/images/canada.webp", "pop": "37,742,154", "ratio": 12, "recognizedByUN" : true, "popid": 39, "size": "9,093,510", "n_size": 9093510},
    {"name": "Morocco", "population": 36910560, "imageLink": "assets/images/morocco.png", "pop": "36,910,560", "ratio": 23, "recognizedByUN" : true, "popid": 40, "size": "446,300", "n_size": 446300},
    {"name": "Saudi Arabia", "population": 34813871, "imageLink": "assets/images/saudiarabia.jpg", "pop": "34,813,871", "ratio": 23, "recognizedByUN" : true, "popid": 41, "size": "2,149,690", "n_size": 2149690},
    {"name": "Uzbekistan", "population": 33469203, "imageLink": "assets/images/uzbekistan.png", "pop": "33,469,203", "ratio": 12, "recognizedByUN" : true, "popid": 42, "size": "425,400", "n_size": 425400},
    {"name": "Peru", "population": 32971854, "imageLink": "assets/images/peru.png", "pop": "32,971,854", "ratio": 23, "recognizedByUN" : true, "popid": 43, "size": "1,280,000", "n_size": 1280000},
    {"name": "Angola", "population": 32866272, "imageLink": "assets/images/angola.webp", "pop": "32,866,272", "ratio": 23, "recognizedByUN" : true, "popid": 44, "size": "1,246,700", "n_size": 1246700},
    {"name": "Malaysia", "population": 32365999, "imageLink": "assets/images/malaysia.webp", "pop": "32,365,999", "ratio": 12, "recognizedByUN" : true, "popid": 45, "size": "328,550", "n_size": 328550},
    {"name": "Mozambique", "population": 31255435, "imageLink": "assets/images/mozambique.png", "pop": "31,255,435", "ratio": 23, "recognizedByUN" : true, "popid": 46, "size": "786,380", "n_size": 786380},
    {"name": "Ghana", "population": 31072940, "imageLink": "assets/images/ghana.png", "pop": "31,072,940", "ratio": 23, "recognizedByUN" : true, "popid": 47, "size": "227,540", "n_size": 227540},
    {"name": "Yemen", "population": 29825964, "imageLink": "assets/images/yemen.webp", "pop": "29,825,964", "ratio": 23, "recognizedByUN" : true, "popid": 48, "size": "527,970", "n_size": 527970},
    {"name": "Nepal", "population": 29136808, "imageLink": "assets/images/nepal.png", "pop": "29,136,808", "ratio": 11, "recognizedByUN" : true, "popid": 49, "size": "143,350", "n_size": 143350},
    {"name": "Venezuela", "population": 28435940, "imageLink": "assets/images/venezuela.jpg", "pop": "28,435,940", "ratio": 23, "recognizedByUN" : true, "popid": 50, "size": "882,050", "n_size": 882050},
    {"name": "Madagascar", "population": 27691018, "imageLink": "assets/images/madagascar.jpg", "pop": "27,691,018", "ratio": 23, "recognizedByUN" : true, "popid": 51, "size": "581,795", "n_size": 581795},
    {"name": "Cameroon", "population": 26545863, "imageLink": "assets/images/cameroon.png", "pop": "26,545,863", "ratio": 23, "recognizedByUN" : true, "popid": 52, "size": "472,710", "n_size": 472710},
    {"name": "Ivory Coast", "population": 26378274, "imageLink": "assets/images/ivorycoast.webp", "pop": "26,378,274", "ratio": 23, "recognizedByUN" : true, "popid": 53, "size": "318,000", "n_size": 318000},
    {"name": "North Korea", "population": 25778816, "imageLink": "assets/images/northkorea.png", "pop": "25,778,816", "ratio": 12, "recognizedByUN" : true, "popid": 54, "size": "120,410", "n_size": 120410},
    {"name": "Australia", "population": 25499884, "imageLink": "assets/images/australia.webp", "pop": "25,499,884", "ratio": 12, "recognizedByUN" : true, "popid": 55, "size": "7,682,300", "n_size": 7682300},
    {"name": "Niger", "population": 24206644, "imageLink": "assets/images/niger.png", "pop": "24,206,644", "ratio": 67, "recognizedByUN" : true, "popid": 56, "size": "1,266,700", "n_size": 1266700},
    {"name": "Taiwan", "population": 23816775, "imageLink": "assets/images/taiwan.webp", "pop": "23,816,775", "ratio": 23, "recognizedByUN" : true, "popid": 57, "size": "35,410", "n_size": 35410},
    {"name": "Sri Lanka", "population": 21413249, "imageLink": "assets/images/srilanka.jpg", "pop": "21,413,249", "ratio": 12, "recognizedByUN" : true, "popid": 58, "size": "62,710", "n_size": 62710},
    {"name": "Burkina Faso", "population": 20903273, "imageLink": "assets/images/burkinafaso.webp", "pop": "20,903,273", "ratio": 23, "recognizedByUN" : true, "popid": 59, "size": "273,600", "n_size": 273600},
    {"name": "Mali", "population": 20250833, "imageLink": "assets/images/mali.webp", "pop": "20,250,833", "ratio": 23, "recognizedByUN" : true, "popid": 60, "size": "1,220,190", "n_size": 1220190},
    {"name": "Romania", "population": 19237691, "imageLink": "assets/images/romania.webp", "pop": "19,237,691", "ratio": 23, "recognizedByUN" : true, "popid": 61, "size": "230,170", "n_size": 230170},
    {"name": "Malawi", "population": 19129952, "imageLink": "assets/images/malawi.svg", "pop": "19,129,952", "ratio": 23, "recognizedByUN" : true, "popid": 62, "size": "94,280", "n_size": 94280},
    {"name": "Chile", "population": 19116201, "imageLink": "assets/images/chile.png", "pop": "19,116,201", "ratio": 23, "recognizedByUN" : true, "popid": 63, "size": "743,532", "n_size": 743532},
    {"name": "Kazakhstan", "population": 18776707, "imageLink": "assets/images/kazakhstan.jpg", "pop": "18,776,707", "ratio": 12, "recognizedByUN" : true, "popid": 64, "size": "2,699,700", "n_size": 2699700},
    {"name": "Zambia", "population": 18383955, "imageLink": "assets/images/zambia.jpg", "pop": "18,383,955", "ratio": 23, "recognizedByUN" : true, "popid": 65, "size": "743,390", "n_size": 743390},
    {"name": "Guatemala", "population": 17915568, "imageLink": "assets/images/guatemala.svg", "pop": "17,915,568", "ratio": 58, "recognizedByUN" : true, "popid": 66, "size": "107,160", "n_size": 107160},
    {"name": "Ecuador", "population": 17643054, "imageLink": "assets/images/ecuador.png", "pop": "17,643,054", "ratio": 23, "recognizedByUN" : true, "popid": 67, "size": "248,360", "n_size": 248360},
    {"name": "Syria", "population": 17500658, "imageLink": "assets/images/syria.png", "pop": "17,500,658", "ratio": 23, "recognizedByUN" : true, "popid": 68, "size": "183,630", "n_size": 183630},
    {"name": "Netherlands", "population": 17134872, "imageLink": "assets/images/netherlands.png", "pop": "17,134,872", "ratio": 23, "recognizedByUN" : true, "popid": 69, "size": "33,720", "n_size": 33720},
    {"name": "Senegal", "population": 16743927, "imageLink": "assets/images/senegal.jpg", "pop": "16,743,927", "ratio": 23, "recognizedByUN" : true, "popid": 70, "size": "192,530", "n_size": 192530},
    {"name": "Cambodia", "population": 16718965, "imageLink": "assets/images/cambodia.jpg", "pop": "16,718,965", "ratio": 58, "recognizedByUN" : true, "popid": 71, "size": "176,520", "n_size": 176520},
    {"name": "Chad", "population": 16425864, "imageLink": "assets/images/chad.svg", "pop": "16,425,864", "ratio": 23, "recognizedByUN" : true, "popid": 72, "size": "1,259,200", "n_size": 1259200},
    {"name": "Somalia", "population": 15893222, "imageLink": "assets/images/somalia.png", "pop": "15,893,222", "ratio": 23, "recognizedByUN" : true, "popid": 73, "size": "627,340", "n_size": 627340},
    {"name": "Zimbabwe", "population": 14862924, "imageLink": "assets/images/zimbabwe.png", "pop": "14,862,924", "ratio": 12, "recognizedByUN" : true, "popid": 74, "size": "386,850", "n_size": 386850},
    {"name": "Guinea", "population": 13132795, "imageLink": "assets/images/guinea.webp", "pop": "13,132,795", "ratio": 23, "recognizedByUN" : true, "popid": 75, "size": "245,720", "n_size": 245720},
    {"name": "Rwanda", "population": 12952218, "imageLink": "assets/images/rwanda.jpg", "pop": "12,952,218", "ratio": 23, "recognizedByUN" : true, "popid": 76, "size": "24,670", "n_size": 24670},
    {"name": "Benin", "population": 12123200, "imageLink": "assets/images/benin.jpg", "pop": "12,123,200", "ratio": 23, "recognizedByUN" : true, "popid": 77, "size": "112,760", "n_size": 112760},
    {"name": "Burundi", "population": 11890784, "imageLink": "assets/images/burundi.png", "pop": "11,890,784", "ratio": 35, "recognizedByUN" : true, "popid": 78, "size": "25,680", "n_size": 25680},
    {"name": "Tunisia", "population": 11818619, "imageLink": "assets/images/tunisia.webp", "pop": "11,818,619", "ratio": 23, "recognizedByUN" : true, "popid": 79, "size": "155,360", "n_size": 155360},
    {"name": "Bolivia", "population": 11673021, "imageLink": "assets/images/bolivia.webp", "pop": "11,673,021", "ratio": 23, "recognizedByUN" : true, "popid": 80, "size": "1,083,300", "n_size": 1083300},
    {"name": "Belgium", "population": 11589623, "imageLink": "assets/images/belgium.png", "pop": "11,589,623", "ratio": 67, "recognizedByUN" : true, "popid": 81, "size": "30,280", "n_size": 30280},
    {"name": "Haiti", "population": 11402528, "imageLink": "assets/images/haiti.svg", "pop": "11,402,528", "ratio": 35, "recognizedByUN" : true, "popid": 82, "size": "27,560", "n_size": 27560},
    {"name": "Cuba", "population": 11326616, "imageLink": "assets/images/cuba.svg", "pop": "11,326,616", "ratio": 12, "recognizedByUN" : true, "popid": 83, "size": "106,440", "n_size": 106440},
    {"name": "South Sudan", "population": 11193725, "imageLink": "assets/images/southsudan.png", "pop": "11,193,725", "ratio": 12, "recognizedByUN" : true, "popid": 84, "size": "610,952", "n_size": 610952},
    {"name": "Dominican Republic", "population": 10847910, "imageLink": "assets/images/dominicanrepublic.webp", "pop": "10,847,910", "ratio": 58, "recognizedByUN" : true, "popid": 85, "size": "48,320", "n_size": 48320},
    {"name": "Czech Republic", "population": 10708981, "imageLink": "assets/images/czechia.png", "pop": "10,708,981", "ratio": 23, "recognizedByUN" : true, "popid": 86, "size": "77,240", "n_size": 77240},
    {"name": "Greece", "population": 10423054, "imageLink": "assets/images/greece.png", "pop": "10,423,054", "ratio": 23, "recognizedByUN" : true, "popid": 87, "size": "128,900", "n_size": 128900},
    {"name": "Jordan", "population": 10203134, "imageLink": "assets/images/jordan.png", "pop": "10,203,134", "ratio": 12, "recognizedByUN" : true, "popid": 88, "size": "88,780", "n_size": 88780},
    {"name": "Portugal", "population": 10196709, "imageLink": "assets/images/portugal.webp", "pop": "10,196,709", "ratio": 23, "recognizedByUN" : true, "popid": 89, "size": "91,590", "n_size": 91590},
    {"name": "Azerbaijan", "population": 10139177, "imageLink": "assets/images/azerbaijan.svg", "pop": "10,139,177", "ratio": 12, "recognizedByUN" : true, "popid": 90, "size": "82,658", "n_size": 82658},
    {"name": "Sweden", "population": 10009265, "imageLink": "assets/images/sweden.png", "pop": "10,009,265", "ratio": 58, "recognizedByUN" : true, "popid": 91, "size": "410,340", "n_size": 410340},
    {"name": "Honduras", "population": 9904607, "imageLink": "assets/images/honduras.png", "pop": "9,904,607", "ratio": 12, "recognizedByUN" : true, "popid": 92, "size": "111,890", "n_size": 111890},
    {"name": "UAE", "population": 9890402, "imageLink": "assets/images/uae.webp", "pop": "9,890,402", "ratio": 12, "recognizedByUN" : true, "popid": 93, "size": "83,600", "n_size": 83600},
    {"name": "Hungary", "population": 9660351, "imageLink": "assets/images/hungary.jpg", "pop": "9,660,351", "ratio": 12, "recognizedByUN" : true, "popid": 94, "size": "90,530", "n_size": 90530},
    {"name": "Tajikistan", "population": 9537645, "imageLink": "assets/images/tajikistan.png", "pop": "9,537,645", "ratio": 12, "recognizedByUN" : true, "popid": 95, "size": "139,960", "n_size": 139960},
    {"name": "Belarus", "population": 9449323, "imageLink": "assets/images/belarus.jpg", "pop": "9,449,323", "ratio": 12, "recognizedByUN" : true, "popid": 96, "size": "202,910", "n_size": 202910},
    {"name": "Austria", "population": 9006398, "imageLink": "assets/images/austria.svg", "pop": "9,006,398", "ratio": 23, "recognizedByUN" : true, "popid": 97, "size": "82,409", "n_size": 82409},
    {"name": "Papua New Guinea", "population": 8947024, "imageLink": "assets/images/papuanewguinea.png", "pop": "8,947,024", "ratio": 34, "recognizedByUN" : true, "popid": 98, "size": "452,860", "n_size": 452860},
    {"name": "Serbia", "population": 8737371, "imageLink": "assets/images/serbia.png", "pop": "8,737,371", "ratio": 23, "recognizedByUN" : true, "popid": 99, "size": "87,460", "n_size": 87460},
    {"name": "Israel", "population": 8655535, "imageLink": "assets/images/israel.png", "pop": "8,655,535", "ratio": 57, "recognizedByUN" : true, "popid": 100, "size": "21,640", "n_size": 21640},
    {"name": "Switzerland", "population": 8654622, "imageLink": "assets/images/switzerland.jpg", "pop": "8,654,622", "ratio": 11, "recognizedByUN" : true, "popid": 101, "size": "39,516", "n_size": 39516},
    {"name": "Togo", "population": 8278724, "imageLink": "assets/images/togo.png", "pop": "8,278,724", "ratio": 58, "recognizedByUN" : true, "popid": 102, "size": "54,390", "n_size": 54390},
    {"name": "Sierra Leone", "population": 7976983, "imageLink": "assets/images/sierraleone.svg", "pop": "7,976,983", "ratio": 23, "recognizedByUN" : true, "popid": 103, "size": "72,180", "n_size": 72180},
    {"name": "Hong Kong", "population": 7496981, "imageLink": "assets/images/hongkong.png", "pop": "7,496,981", "ratio": 23, "recognizedByUN" : false, "popid": 104, "size": "1,050", "n_size": 1050},
    {"name": "Laos", "population": 7275560, "imageLink": "assets/images/laos.png", "pop": "7,275,560", "ratio": 23, "recognizedByUN" : true, "popid": 105, "size": "230,800", "n_size": 230800},
    {"name": "Paraguay", "population": 7132538, "imageLink": "assets/images/paraguay.webp", "pop": "7,132,538", "ratio": 1018, "recognizedByUN" : true, "popid": 106, "size": "397,300", "n_size": 397300},
    {"name": "Bulgaria", "population": 6948445, "imageLink": "assets/images/bulgaria.png", "pop": "6,948,445", "ratio": 35, "recognizedByUN" : true, "popid": 107, "size": "108,560", "n_size": 108560},
    {"name": "Libya", "population": 6871292, "imageLink": "assets/images/libya.webp", "pop": "6,871,292", "ratio": 12, "recognizedByUN" : true, "popid": 108, "size": "1,759,540", "n_size": 1759540},
    {"name": "Lebanon", "population": 6825445, "imageLink": "assets/images/lebanon.jpg", "pop": "6,825,445", "ratio": 23, "recognizedByUN" : true, "popid": 109, "size": "10,230", "n_size": 10230},
    {"name": "Nicaragua", "population": 6624554, "imageLink": "assets/images/nicaragua.png", "pop": "6,624,554", "ratio": 35, "recognizedByUN" : true, "popid": 110, "size": "120,340", "n_size": 120340},
    {"name": "Kyrgyzstan", "population": 6524195, "imageLink": "assets/images/kyrgyzstan.webp", "pop": "6,524,195", "ratio": 35, "recognizedByUN" : true, "popid": 111, "size": "191,800", "n_size": 191800},
    {"name": "El Salvador", "population": 6486205, "imageLink": "assets/images/elsalvador.jpg", "pop": "6,486,205", "ratio": 1018, "recognizedByUN" : true, "popid": 112, "size": "20,720", "n_size": 20720},
    {"name": "Turkmenistan", "population": 6031200, "imageLink": "assets/images/turkmenistan.png", "pop": "6,031,200", "ratio": 23, "recognizedByUN" : true, "popid": 113, "size": "469,930", "n_size": 469930},
    {"name": "Singapore", "population": 5850342, "imageLink": "assets/images/singapore.png", "pop": "5,850,342", "ratio": 23, "recognizedByUN" : true, "popid": 114, "size": "700", "n_size": 700},
    {"name": "Denmark", "population": 5792202, "imageLink": "assets/images/denmark.png", "pop": "5,792,202", "ratio": 34, "recognizedByUN" : true, "popid": 115, "size": "42,430", "n_size": 42430},
    {"name": "Finland", "population": 5540720, "imageLink": "assets/images/finland.png", "pop": "5,540,720", "ratio": 35, "recognizedByUN" : true, "popid": 116, "size": "303,890", "n_size": 303890},
    {"name": "Republic of Congo", "population": 5518087, "imageLink": "assets/images/republicofcongo.svg", "pop": "5,518,087", "ratio": 23, "recognizedByUN" : true, "popid": 117, "size": "341,500", "n_size": 341500},
    {"name": "Slovakia", "population": 5459642, "imageLink": "assets/images/slovakia.png", "pop": "5,459,642", "ratio": 23, "recognizedByUN" : true, "popid": 118, "size": "48,088", "n_size": 48088},
    {"name": "Norway", "population": 5421241, "imageLink": "assets/images/norway.jpg", "pop": "5,421,241", "ratio": 57, "recognizedByUN" : true, "popid": 119, "size": "365,268", "n_size": 365268},
    {"name": "Oman", "population": 5106626, "imageLink": "assets/images/oman.svg", "pop": "5,106,626", "ratio": 12, "recognizedByUN" : true, "popid": 120, "size": "309,500", "n_size": 309500},
    {"name": "Palestine", "population": 5101414, "imageLink": "assets/images/palestine.png", "pop": "5,101,414", "ratio": 12, "recognizedByUN" : true, "popid": 121, "size": "6,020", "n_size": 6020},
    {"name": "Costa Rica", "population": 5094118, "imageLink": "assets/images/costarica.png", "pop": "5,094,118", "ratio": 35, "recognizedByUN" : true, "popid": 122, "size": "51,060", "n_size": 51060},
    {"name": "Liberia", "population": 5057681, "imageLink": "assets/images/liberia.webp", "pop": "5,057,681", "ratio": 1019, "recognizedByUN" : true, "popid": 123, "size": "96,320", "n_size": 96320},
    {"name": "Ireland", "population": 4937786, "imageLink": "assets/images/ireland.webp", "pop": "4,937,786", "ratio": 12, "recognizedByUN" : true, "popid": 124, "size": "68,890", "n_size": 68890},
    {"name": "Central African Republic", "population": 4829767, "imageLink": "assets/images/centralafricanrepublic.png", "pop": "4,829,767", "ratio": 23, "recognizedByUN" : true, "popid": 125, "size": "622,980", "n_size": 622980},
    {"name": "New Zealand", "population": 4822233, "imageLink": "assets/images/newzealand.jpg", "pop": "4,822,233", "ratio": 12, "recognizedByUN" : true, "popid": 126, "size": "263,310", "n_size": 263310},
    {"name": "Mauritania", "population": 4649658, "imageLink": "assets/images/mauritania.webp", "pop": "4,649,658", "ratio": 23, "recognizedByUN" : true, "popid": 127, "size": "1,030,700", "n_size": 1030700},
    {"name": "Panama", "population": 4314767, "imageLink": "assets/images/panama.webp", "pop": "4,314,767", "ratio": 23, "recognizedByUN" : true, "popid": 128, "size": "74,340", "n_size": 74340},
    {"name": "Kuwait", "population": 4270571, "imageLink": "assets/images/kuwait.png", "pop": "4,270,571", "ratio": 12, "recognizedByUN" : true, "popid": 129, "size": "17,820", "n_size": 17820},
    {"name": "Croatia", "population": 4105267, "imageLink": "assets/images/croatia.png", "pop": "4,105,267", "ratio": 12, "recognizedByUN" : true, "popid": 130, "size": "55,960", "n_size": 55960},
    {"name": "Moldova", "population": 4033963, "imageLink": "assets/images/moldova.png", "pop": "4,033,963", "ratio": 12, "recognizedByUN" : true, "popid": 131, "size": "32,850", "n_size": 32850},
    {"name": "Georgia", "population": 3989167, "imageLink": "assets/images/georgia.jpg", "pop": "3,989,167", "ratio": 23, "recognizedByUN" : true, "popid": 132, "size": "69,490", "n_size": 69490},
    {"name": "Eritrea", "population": 3546421, "imageLink": "assets/images/eritrea.png", "pop": "3,546,421", "ratio": 12, "recognizedByUN" : true, "popid": 133, "size": "101,000", "n_size": 101000},
    {"name": "Uruguay", "population": 3473730, "imageLink": "assets/images/uruguay.svg", "pop": "3,473,730", "ratio": 23, "recognizedByUN" : true, "popid": 134, "size": "175,020", "n_size": 175020},
    {"name": "Bosnia and Herzegovina", "population": 3280819, "imageLink": "assets/images/bosniaandherzegovina.png", "pop": "3,280,819", "ratio": 12, "recognizedByUN" : true, "popid": 135, "size": "51,000", "n_size": 51000},
    {"name": "Mongolia", "population": 3278290, "imageLink": "assets/images/mongolia.png", "pop": "3,278,290", "ratio": 12, "recognizedByUN" : true, "popid": 136, "size": "1,553,560", "n_size": 1553560},
    {"name": "Armenia", "population": 2963243, "imageLink": "assets/images/armenia.webp", "pop": "2,963,243", "ratio": 12, "recognizedByUN" : true, "popid": 137, "size": "28,470", "n_size": 28470},
    {"name": "Jamaica", "population": 2961167, "imageLink": "assets/images/jamaica.svg", "pop": "2,961,167", "ratio": 12, "recognizedByUN" : true, "popid": 138, "size": "10,830", "n_size": 10830},
    {"name": "Qatar", "population": 2881053, "imageLink": "assets/images/qatar.jpg", "pop": "2,881,053", "ratio": 12, "recognizedByUN" : true, "popid": 139, "size": "11,610", "n_size": 11610},
    {"name": "Albania", "population": 2877797, "imageLink": "assets/images/albania.svg", "pop": "2,877,797", "ratio": 57, "recognizedByUN" : true, "popid": 140, "size": "27,400", "n_size": 27400},
    {"name": "Puerto Rico", "population": 2860853, "imageLink": "assets/images/puertorico.svg", "pop": "2,860,853", "ratio": 23, "recognizedByUN" : false, "popid": 141, "size": "8,870", "n_size": 8870},
    {"name": "Lithuania", "population": 2722289, "imageLink": "assets/images/lithuania.png", "pop": "2,722,289", "ratio": 35, "recognizedByUN" : true, "popid": 142, "size": "62,674", "n_size": 62674},
    {"name": "Namibia", "population": 2540905, "imageLink": "assets/images/namibia.png", "pop": "2,540,905", "ratio": 23, "recognizedByUN" : true, "popid": 143, "size": "823,290", "n_size": 823290},
    {"name": "Gambia", "population": 2416668, "imageLink": "assets/images/gambia.webp", "pop": "2,416,668", "ratio": 23, "recognizedByUN" : true, "popid": 144, "size": "10,120", "n_size": 10120},
    {"name": "Botswana", "population": 2351627, "imageLink": "assets/images/botswana.webp", "pop": "2,351,627", "ratio": 23, "recognizedByUN" : true, "popid": 145, "size": "566,730", "n_size": 566730},
    {"name": "Gabon", "population": 2225734, "imageLink": "assets/images/gabon.png", "pop": "2,225,734", "ratio": 34, "recognizedByUN" : true, "popid": 146, "size": "257,670", "n_size": 257670},
    {"name": "Lesotho", "population": 2142249, "imageLink": "assets/images/lesotho.png", "pop": "2,142,249", "ratio": 23, "recognizedByUN" : true, "popid": 147, "size": "30,360", "n_size": 30360},
    {"name": "North Macedonia", "population": 2083374, "imageLink": "assets/images/northmacedonia.png", "pop": "2,083,374", "ratio": 12, "recognizedByUN" : true, "popid": 148, "size": "25,220", "n_size": 25220},
    {"name": "Slovenia", "population": 2078938, "imageLink": "assets/images/slovenia.png", "pop": "2,078,938", "ratio": 12, "recognizedByUN" : true, "popid": 149, "size": "20,140", "n_size": 20140},
    {"name": "Guinea-Bissau", "population": 1968001, "imageLink": "assets/images/guineabissau.svg", "pop": "1,968,001", "ratio": 12, "recognizedByUN" : true, "popid": 150, "size": "28,120", "n_size": 28120},
    {"name": "Latvia", "population": 1886198, "imageLink": "assets/images/latvia.png", "pop": "1,886,198", "ratio": 12, "recognizedByUN" : true, "popid": 151, "size": "62,200", "n_size": 62200},
    {"name": "Kosovo", "population": 1769386, "imageLink": "assets/images/kosovo.webp", "pop": "1,769,386", "ratio": 57, "recognizedByUN" : false, "popid": 152, "size": "10,886", "n_size": 10886},
    {"name": "Bahrain", "population": 1701575, "imageLink": "assets/images/bahrain.svg", "pop": "1,701,575", "ratio": 23, "recognizedByUN" : true, "popid": 153, "size": "760", "n_size": 760},
    {"name": "Equatorial Guinea", "population": 1402985, "imageLink": "assets/images/equatorialguinea.png", "pop": "1,402,985", "ratio": 23, "recognizedByUN" : true, "popid": 154, "size": "28,050", "n_size": 28050},
    {"name": "Trinidad and Tobago", "population": 1399488, "imageLink": "assets/images/trinidadandtobago.jpg", "pop": "1,399,488", "ratio": 35, "recognizedByUN" : true, "popid": 155, "size": "5,130", "n_size": 5130},
    {"name": "Estonia", "population": 1326535, "imageLink": "assets/images/estonia.webp", "pop": "1,326,535", "ratio": 58, "recognizedByUN" : true, "popid": 156, "size": "42,390", "n_size": 42390},
    {"name": "Timor-Leste", "population": 1318445, "imageLink": "assets/images/timorleste.webp", "pop": "1,318,445", "ratio": 12, "recognizedByUN" : true, "popid": 157, "size": "14,870", "n_size": 14870},
    {"name": "Mauritius", "population": 1271768, "imageLink": "assets/images/mauritius.svg", "pop": "1,271,768", "ratio": 23, "recognizedByUN" : true, "popid": 158, "size": "2,030", "n_size": 2030},
    {"name": "Cyprus", "population": 1207359, "imageLink": "assets/images/cyprus.png", "pop": "1,207,359", "ratio": 23, "recognizedByUN" : true, "popid": 159, "size": "9,240", "n_size": 9240},
    {"name": "Eswatini", "population": 1160164, "imageLink": "assets/images/eswatini.png", "pop": "1,160,164", "ratio": 23, "recognizedByUN" : true, "popid": 160, "size": "17,200", "n_size": 17200},
    {"name": "Djibouti", "population": 988000, "imageLink": "assets/images/djibouti.webp", "pop": "988,000", "ratio": 23, "recognizedByUN" : true, "popid": 161, "size": "23,180", "n_size": 23180},
    {"name": "Fiji", "population": 896445, "imageLink": "assets/images/fiji.png", "pop": "896,445", "ratio": 12, "recognizedByUN" : true, "popid": 162, "size": "18,270", "n_size": 18270},
    {"name": "Reunion", "population": 895312, "imageLink": "assets/images/reunion.png", "pop": "895,312", "ratio": 23, "recognizedByUN" : false, "popid": 163, "size": "2,500", "n_size": 2500},
    {"name": "Comoros", "population": 869601, "imageLink": "assets/images/comoros.png", "pop": "869,601", "ratio": 35, "recognizedByUN" : true, "popid": 164, "size": "1,861", "n_size": 1861},
    {"name": "Guyana", "population": 786552, "imageLink": "assets/images/guyana.svg", "pop": "786,552", "ratio": 35, "recognizedByUN" : true, "popid": 165, "size": "196,850", "n_size": 196850},
    {"name": "Bhutan", "population": 771608, "imageLink": "assets/images/bhutan.png", "pop": "771,608", "ratio": 23, "recognizedByUN" : true, "popid": 166, "size": "38,117", "n_size": 38117},
    {"name": "Solomon Islands", "population": 686884, "imageLink": "assets/images/solomonislands.webp", "pop": "686,884", "ratio": 12, "recognizedByUN" : true, "popid": 167, "size": "27,990", "n_size": 27990},
    {"name": "Macao", "population": 649335, "imageLink": "assets/images/macao.png", "pop": "649,335", "ratio": 23, "recognizedByUN" : false, "popid": 168, "size": "30", "n_size": 30},
    {"name": "Montenegro", "population": 628066, "imageLink": "assets/images/montenegro.webp", "pop": "628,066", "ratio": 12, "recognizedByUN" : true, "popid": 169, "size": "13,450", "n_size": 13450},
    {"name": "Luxembourg", "population": 625978, "imageLink": "assets/images/luxembourg.webp", "pop": "625,978", "ratio": 35, "recognizedByUN" : true, "popid": 170, "size": "2,590", "n_size": 2590},
    {"name": "Western Sahara", "population": 597339, "imageLink": "assets/images/westernsahara.png", "pop": "597,339", "ratio": 23, "recognizedByUN" : false, "popid": 171, "size": "266,000", "n_size": 266000},
    {"name": "Suriname", "population": 586632, "imageLink": "assets/images/suriname.webp", "pop": "586,632", "ratio": 23, "recognizedByUN" : true, "popid": 172, "size": "156,000", "n_size": 156000},
    {"name": "Cabo Verde", "population": 555987, "imageLink": "assets/images/caboverde.webp", "pop": "555,987", "ratio": 35, "recognizedByUN" : true, "popid": 173, "size": "4,030", "n_size": 4030},
    {"name": "Micronesia", "population": 548914, "imageLink": "assets/images/micronesia.png", "pop": "548,914", "ratio": 1019, "recognizedByUN" : true, "popid": 174, "size": "700", "n_size": 700},
    {"name": "Maldives", "population": 540544, "imageLink": "assets/images/maldives.webp", "pop": "540,544", "ratio": 23, "recognizedByUN" : true, "popid": 175, "size": "300", "n_size": 300},
    {"name": "Malta", "population": 441543, "imageLink": "assets/images/malta.jpg", "pop": "441,543", "ratio": 23, "recognizedByUN" : true, "popid": 176, "size": "320", "n_size": 320},
    {"name": "Brunei", "population": 437479, "imageLink": "assets/images/brunei.png", "pop": "437,479", "ratio": 12, "recognizedByUN" : true, "popid": 177, "size": "5,270", "n_size": 5270},
    {"name": "Guadeloupe", "population": 400124, "imageLink": "assets/images/guadeloupe.webp", "pop": "400,124", "ratio": 23, "recognizedByUN" : false, "popid": 178, "size": "1,690", "n_size": 1690},
    {"name": "Belize", "population": 397628, "imageLink": "assets/images/belize.png", "pop": "397,628", "ratio": 35, "recognizedByUN" : true, "popid": 179, "size": "22,810", "n_size": 22810},
    {"name": "Bahamas", "population": 393244, "imageLink": "assets/images/bahamas.webp", "pop": "393,244", "ratio": 12, "recognizedByUN" : true, "popid": 180, "size": "10,010", "n_size": 10010},
    {"name": "Martinique", "population": 375265, "imageLink": "assets/images/martinique.png", "pop": "375,265", "ratio": 23, "recognizedByUN" : false, "popid": 181, "size": "1,060", "n_size": 1060},
    {"name": "Iceland", "population": 341243, "imageLink": "assets/images/iceland.jpg", "pop": "341,243", "ratio": 57, "recognizedByUN" : true, "popid": 182, "size": "100,250", "n_size": 100250},
    {"name": "Vanuatu", "population": 307145, "imageLink": "assets/images/vanuatu.svg", "pop": "307,145", "ratio": 1019, "recognizedByUN" : true, "popid": 183, "size": "12,190", "n_size": 12190},
    {"name": "French Guiana", "population": 298682, "imageLink": "assets/images/frenchguiana.png", "pop": "298,682", "ratio": 23, "recognizedByUN" : false, "popid": 184, "size": "82,200", "n_size": 82200},
    {"name": "Barbados", "population": 287375, "imageLink": "assets/images/barbados.svg", "pop": "287,375", "ratio": 23, "recognizedByUN" : true, "popid": 185, "size": "430", "n_size": 430},
    {"name": "New Caledonia", "population": 285498, "imageLink": "assets/images/newcaledonia.jpg", "pop": "285,498", "ratio": 12, "recognizedByUN" : false, "popid": 186, "size": "18,280", "n_size": 18280},
    {"name": "French Polynesia", "population": 280908, "imageLink": "assets/images/frenchpolynesia.png", "pop": "280,908", "ratio": 23, "recognizedByUN" : false, "popid": 187, "size": "3,660", "n_size": 3660},
    {"name": "Mayotte", "population": 272815, "imageLink": "assets/images/mayotte.png", "pop": "272,815", "ratio": 23, "recognizedByUN" : false, "popid": 188, "size": "375", "n_size": 375},
    {"name": "Sao Tome and Principe", "population": 219159, "imageLink": "assets/images/saotomeandprincipe.svg", "pop": "219,159", "ratio": 12, "recognizedByUN" : true, "popid": 189, "size": "960", "n_size": 960},
    {"name": "Samoa", "population": 198414, "imageLink": "assets/images/samoa.webp", "pop": "198,414", "ratio": 12, "recognizedByUN" : true, "popid": 190, "size": "2,830", "n_size": 2830},
    {"name": "St. Lucia", "population": 183627, "imageLink": "assets/images/stlucia.jpg", "pop": "183,627", "ratio": 12, "recognizedByUN" : true, "popid": 191, "size": "610", "n_size": 610},
    {"name": "Channel Islands", "population": 173863, "imageLink": "assets/images/channelislands.png", "pop": "173,863", "ratio": 23, "recognizedByUN" : false, "popid": 192, "size": "190", "n_size": 190},
    {"name": "Guam", "population": 168775, "imageLink": "assets/images/guam.png", "pop": "168,775", "ratio": 1019, "recognizedByUN" : false, "popid": 193, "size": "540", "n_size": 540},
    {"name": "Curacao", "population": 164093, "imageLink": "assets/images/curacao.webp", "pop": "164,093", "ratio": 23, "recognizedByUN" : false, "popid": 194, "size": "444", "n_size": 444},
    {"name": "Kiribati", "population": 119449, "imageLink": "assets/images/kiribati.webp", "pop": "119,449", "ratio": 12, "recognizedByUN" : true, "popid": 195, "size": "810", "n_size": 810},
    {"name": "Grenada", "population": 112523, "imageLink": "assets/images/grenada.svg", "pop": "112,523", "ratio": 35, "recognizedByUN" : true, "popid": 196, "size": "340", "n_size": 340},
    {"name": "St. Vincent and the Grenadines", "population": 110940, "imageLink": "assets/images/stvincentandthegrenadines.svg", "pop": "110,940", "ratio": 23, "recognizedByUN" : true, "popid": 197, "size": "390", "n_size": 390},
    {"name": "Aruba", "population": 106766, "imageLink": "assets/images/aruba.png", "pop": "106,766", "ratio": 23, "recognizedByUN" : false, "popid": 198, "size": "180", "n_size": 180},
    {"name": "Tonga", "population": 105695, "imageLink": "assets/images/tonga.png", "pop": "105,695", "ratio": 12, "recognizedByUN" : true, "popid": 199, "size": "720", "n_size": 720},
    {"name": "U.S. Virgin Islands", "population": 104425, "imageLink": "assets/images/usvirginislands.webp", "pop": "104,425", "ratio": 23, "recognizedByUN" : false, "popid": 200, "size": "350", "n_size": 350},
    {"name": "Seychelles", "population": 98347, "imageLink": "assets/images/seychelles.webp", "pop": "98,347", "ratio": 12, "recognizedByUN" : true, "popid": 201, "size": "460", "n_size": 460},
    {"name": "Antigua and Barbuda", "population": 97929, "imageLink": "assets/images/antiguaandbarbuda.jpg", "pop": "97,929", "ratio": 23, "recognizedByUN" : true, "popid": 202, "size": "440", "n_size": 440},
    {"name": "Isle of Man", "population": 85033, "imageLink": "assets/images/isleofman.webp", "pop": "85,033", "ratio": 12, "recognizedByUN" : false, "popid": 203, "size": "570", "n_size": 570},
    {"name": "Andorra", "population": 77265, "imageLink": "assets/images/andorra.webp", "pop": "77,265", "ratio": 57, "recognizedByUN" : true, "popid": 204, "size": "470", "n_size": 470},
    {"name": "Dominica", "population": 71986, "imageLink": "assets/images/dominica.webp", "pop": "71,986", "ratio": 12, "recognizedByUN" : true, "popid": 205, "size": "750", "n_size": 750},
    {"name": "Cayman Islands", "population": 65722, "imageLink": "assets/images/caymanislands.png", "pop": "65,722", "ratio": 12, "recognizedByUN" : false, "popid": 206, "size": "240", "n_size": 240},
    {"name": "Bermuda", "population": 62278, "imageLink": "assets/images/bermuda.png", "pop": "62,278", "ratio": 12, "recognizedByUN" : false, "popid": 207, "size": "50", "n_size": 50},
    {"name": "Marshall Islands", "population": 59190, "imageLink": "assets/images/marshallislands.png", "pop": "59,190", "ratio": 1019, "recognizedByUN" : true, "popid": 208, "size": "180", "n_size": 180},
    {"name": "Northern Mariana Islands", "population": 57559, "imageLink": "assets/images/northernmarianaislands.svg", "pop": "57,559", "ratio": 12, "recognizedByUN" : false, "popid": 209, "size": "460", "n_size": 460},
    {"name": "Greenland", "population": 56770, "imageLink": "assets/images/greenland.jpg", "pop": "56,770", "ratio": 23, "recognizedByUN" : false, "popid": 210, "size": "410,450", "n_size": 410450},
    {"name": "American Samoa", "population": 55191, "imageLink": "assets/images/americansamoa.webp", "pop": "55,191", "ratio": 1019, "recognizedByUN" : false, "popid": 211, "size": "200", "n_size": 200},
    {"name": "St. Kitts and Nevis", "population": 53199, "imageLink": "assets/images/stkittsandnevis.jpg", "pop": "53,199", "ratio": 23, "recognizedByUN" : true, "popid": 212, "size": "260", "n_size": 260},
    {"name": "Faroe Islands", "population": 48863, "imageLink": "assets/images/faroeislands.svg", "pop": "48,863", "ratio": 57, "recognizedByUN" : false, "popid": 213, "size": "1,396", "n_size": 1396},
    {"name": "Sint Maarten", "population": 42876, "imageLink": "assets/images/sintmaarten.png", "pop": "42,876", "ratio": 23, "recognizedByUN" : false, "popid": 214, "size": "34", "n_size": 34},
    {"name": "Monaco", "population": 39242, "imageLink": "assets/images/monaco.png", "pop": "39,242", "ratio": 67, "recognizedByUN" : true, "popid": 215, "size": "1", "n_size": 1},
    {"name": "Turks and Caicos", "population": 38717, "imageLink": "assets/images/turksandcaicos.svg", "pop": "38,717", "ratio": 12, "recognizedByUN" : false, "popid": 216, "size": "950", "n_size": 950},
    {"name": "Saint Martin", "population": 38666, "imageLink": "assets/images/saintmartin.png", "pop": "38,666", "ratio": 23, "recognizedByUN" : false, "popid": 217, "size": "53", "n_size": 53},
    {"name": "Liechtenstein", "population": 38128, "imageLink": "assets/images/liechtenstein.svg", "pop": "38,128", "ratio": 35, "recognizedByUN" : true, "popid": 218, "size": "160", "n_size": 160},
    {"name": "San Marino", "population": 33931, "imageLink": "assets/images/sanmarino.png", "pop": "33,931", "ratio": 34, "recognizedByUN" : true, "popid": 219, "size": "60", "n_size": 60},
    {"name": "Gibraltar", "population": 33691, "imageLink": "assets/images/gibraltar.svg", "pop": "33,691", "ratio": 12, "recognizedByUN" : false, "popid": 220, "size": "10", "n_size": 10},
    {"name": "British Virgin Islands", "population": 30231, "imageLink": "assets/images/britishvirginislands.png", "pop": "30,231", "ratio": 12, "recognizedByUN" : false, "popid": 221, "size": "150", "n_size": 150},
    {"name": "Caribbean Netherlands", "population": 26223, "imageLink": "assets/images/caribbeannetherlands.png", "pop": "26,223", "ratio": 23, "recognizedByUN" : false, "popid": 222, "size": "328", "n_size": 328},
    {"name": "Palau", "population": 18094, "imageLink": "assets/images/palau.webp", "pop": "18,094", "ratio": 58, "recognizedByUN" : true, "popid": 223, "size": "460", "n_size": 460},
    {"name": "Cook Islands", "population": 17564, "imageLink": "assets/images/cookislands.svg", "pop": "17,564", "ratio": 12, "recognizedByUN" : false, "popid": 224, "size": "240", "n_size": 240},
    {"name": "Anguilla", "population": 15003, "imageLink": "assets/images/anguilla.svg", "pop": "15,003", "ratio": 12, "recognizedByUN" : false, "popid": 225, "size": "90", "n_size": 90},
    {"name": "Tuvalu", "population": 11792, "imageLink": "assets/images/tuvalu.png", "pop": "11,792", "ratio": 12, "recognizedByUN" : true, "popid": 226, "size": "30", "n_size": 30},
    {"name": "Wallis and Futuna", "population": 11239, "imageLink": "assets/images/wallisandfutuna.png", "pop": "11,239", "ratio": 23, "recognizedByUN" : false, "popid": 227, "size": "140", "n_size": 140},
    {"name": "Nauru", "population": 10824, "imageLink": "assets/images/nauru.png", "pop": "10,824", "ratio": 12, "recognizedByUN" : true, "popid": 228, "size": "20", "n_size": 20},
    {"name": "St. Barthelemy", "population": 9877, "imageLink": "assets/images/saintbarthelemy.png", "pop": "9,877", "ratio": 23, "recognizedByUN" : false, "popid": 229, "size": "21", "n_size": 21},
    {"name": "St. Helena", "population": 6077, "imageLink": "assets/images/sainthelena.png", "pop": "6,077", "ratio": 23, "recognizedByUN" : false, "popid": 230, "size": "390", "n_size": 390},
    {"name": "St. Pierre and Miquelon", "population": 5794, "imageLink": "assets/images/stpierreandmiquelon.png", "pop": "5,794", "ratio": 23, "recognizedByUN" : false, "popid": 231, "size": "230", "n_size": 230},
    {"name": "Montserrat", "population": 4992, "imageLink": "assets/images/montserrat.svg", "pop": "4,992", "ratio": 12, "recognizedByUN" : false, "popid": 232, "size": "100", "n_size": 100},
    {"name": "Falkland Islands", "population": 3480, "imageLink": "assets/images/falklandislands.svg", "pop": "3,480", "ratio": 12, "recognizedByUN" : false, "popid": 233, "size": "12,170", "n_size": 12170},
    {"name": "Niue", "population": 1626, "imageLink": "assets/images/niue.png", "pop": "1,626", "ratio": 12, "recognizedByUN" : false, "popid": 234, "size": "260", "n_size": 260},
    {"name": "Tokelau", "population": 1357, "imageLink": "assets/images/tokelau.svg", "pop": "1,357", "ratio": 12, "recognizedByUN" : false, "popid": 235, "size": "10", "n_size": 10},
    {"name": "Vatican City", "population": 801, "imageLink": "assets/images/vaticancity.png", "pop": "801", "ratio": 11, "recognizedByUN" : true, "popid": 236, "size": ".5", "n_size": .5}
  ];
  country: Country| undefined;
  prev_country: Country| undefined;
  game_started: boolean;

  score: number;
  pop_score: number;
  un_pop_score: number;
  size_score: number;
  un_size_score: number;
  //true when we want to show the end screen
  end_screen: boolean;
  /*
  Game mode 1 is all countries mode (pop)
  2 is only UN recognized countries (pop)
  3 is all countries mode (size)
  4 is only UN recognized countries (size)
   */
  gamemode: number;
  /*
  1 is easy, 2 is regular, 3 is hard
   */
  difficulty: number;

  constructor() {
    this.game_started = false;
    this.score = 0;
    this.pop_score = 0;
    this.un_pop_score = 0;
    this.size_score = 0;
    this.un_size_score = 0;
    this.end_screen = false;
    this.gamemode = 1;
    this.difficulty = 2;
  }

  ngOnInit(): void {
  }

  //Sets this.country as a random country that is contained in the game mode and isn't the previous country
  selectRandom(): void {
    let num: number = this.getRandomInt(0, 234);
    if (this.gamemode == 2 || this.gamemode == 4){
        //while the country is not recognized by the UN or is the same as the previous country
        while(!this.countries[num].recognizedByUN || this.countries[num].popid == this.country?.popid){
          num = this.getRandomInt(0, 234);
        }
      }
    else {
      while (this.countries[num].popid == this.country?.popid){
        num = this.getRandomInt(0, 234);
      }
    }
    this.prev_country = this.country;
    this.country = this.countries[num];
  }

  //returns a random int between the two given numbers
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  //True means current is higher that previous
  check(bool: boolean) {
    if (this.gamemode == 1 || this.gamemode == 2){
      this.popCheck(bool);
    }
    else if (this.gamemode == 3 || this.gamemode == 4){
      this.sizeCheck(bool);
    }
  }

  popCheck(bool: boolean) {
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

  sizeCheck(bool: boolean) {
    if (bool){
      // @ts-ignore
      if (this.country?.n_size > this.prev_country?.n_size){
        this.moveCountry();
      }
      else {
        this.endGame();
      }
    }
    else {
      // @ts-ignore
      if (this.prev_country?.n_size > this.country?.n_size){
        this.moveCountry()
      }
      else{
        this.endGame();
      }
    }
  }

  moveCountry(): void {
    ++this.score
    if (this.gamemode == 1){
      if (this.score > this.pop_score){
        this.pop_score = this.score;
      }
    }
    else if (this.gamemode == 2){
      if (this.score > this.un_pop_score){
        this.un_pop_score = this.score;
      }
    }
    else if (this.gamemode == 3){
      if (this.score > this.size_score){
        this.size_score = this.score;
      }
    }
    else if (this.gamemode == 4){
      if (this.score > this.un_size_score){
        this.un_size_score = this.score;
      }
    }
    this.selectRandom();

  }

  endGame(): void {
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
