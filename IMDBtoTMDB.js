import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const { TMDB_API_KEY } = process.env;

/**
 *
    let categories = [];


    document.querySelectorAll('.event-widgets__award-category').forEach(e =>{
        if(e && e.querySelector('.event-widgets__award-category-name')?.textContent) {
            let category = {};
            category.name = e.querySelector('.event-widgets__award-category-name')?.textContent;
            category.items = Array.prototype.slice.call(e.querySelectorAll('.event-widgets__award-nomination')).map(nomination => ({
                main: nomination.querySelector('.event-widgets__primary-nominees .event-widgets__nominee-name a')?.href.replace('https://www.imdb.com/title/', '').replace('https://www.imdb.com/name/', '').replace('/?ref_=ev_nom', ''),
                secondary: Array.prototype.slice.call(nomination.querySelectorAll('.event-widgets__secondary-nominees .event-widgets__nominee-name a')).length>1 ? Array.prototype.slice.call(nomination.querySelectorAll('.event-widgets__secondary-nominees .event-widgets__nominee-name a')).map(nominee =>nominee?.href.replace('https://www.imdb.com/title/', '').replace('https://www.imdb.com/name/', '').replace('/?ref_=ev_nom', '')) : nomination.querySelector('.event-widgets__secondary-nominees .event-widgets__nominee-name a')?.href.replace('https://www.imdb.com/title/', '').replace('https://www.imdb.com/name/', '').replace('/?ref_=ev_nom', ''),
                mainType: nomination.querySelector('.event-widgets__primary-nominees .event-widgets__nominee-name a')?.href.includes('title') ? 'movie' : 'people',
                secondaryType: nomination.querySelector('.event-widgets__secondary-nominees .event-widgets__nominee-name a')?.href.includes('title') ? 'movie' : 'people',
                winner: nomination.querySelector('.event-widgets__winner-badge') ? true: false
            }));
            categories.push(category);
        }
    });
    console.log(categories);
 */

const source = [
    {
        "name": "Best Motion Picture of the Year",
        "items": [
            {
                "main": "tt9770150",
                "secondary": [
                    "nm0000531",
                    "nm0817379",
                    "nm2571693",
                    "nm1885766",
                    "nm2125482"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt9784798",
                "secondary": [
                    "nm3489851",
                    "nm2229798",
                    "nm3363032"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt1070874",
                "secondary": [
                    "nm0686887",
                    "nm0078804"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10618286",
                "secondary": [
                    "nm0149556",
                    "nm0744839",
                    "nm0881703"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10633456",
                "secondary": "nm3567152",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt9620292",
                "secondary": [
                    "nm1878845",
                    "nm4516779",
                    "nm2193504",
                    "nm3560755"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt5363618",
                "secondary": [
                    "nm0353012",
                    "nm5289961"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10272386",
                "secondary": [
                    "nm0661406",
                    "nm0515201",
                    "nm0136260"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Performance by an Actor in a Leading Role",
        "items": [
            {
                "main": "nm0000164",
                "secondary": "tt10272386",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": true
            },
            {
                "main": "nm1569276",
                "secondary": "tt10514222",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm0000198",
                "secondary": "tt10618286",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm1981893",
                "secondary": "tt5363618",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm3081796",
                "secondary": "tt10633456",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Performance by an Actress in a Leading Role",
        "items": [
            {
                "main": "nm0000531",
                "secondary": "tt9770150",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": true
            },
            {
                "main": "nm7363531",
                "secondary": "tt8521718",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm1659547",
                "secondary": "tt9620292",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm3948952",
                "secondary": "tt11161474",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm0205626",
                "secondary": "tt10514222",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Performance by an Actor in a Supporting Role",
        "items": [
            {
                "main": "nm2257207",
                "secondary": "tt9784798",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": true
            },
            {
                "main": "nm3147751",
                "secondary": "tt9784798",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm1502434",
                "secondary": "tt10612922",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm0705152",
                "secondary": "tt5363618",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm0056187",
                "secondary": "tt1070874",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Performance by an Actress in a Supporting Role",
        "items": [
            {
                "main": "nm0950926",
                "secondary": "tt10633456",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": true
            },
            {
                "main": "nm1086543",
                "secondary": "tt10618286",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm0000335",
                "secondary": "tt6772802",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm7210025",
                "secondary": "tt13143964",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm1469236",
                "secondary": "tt10272386",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Directing",
        "items": [
            {
                "main": "nm2125482",
                "secondary": "tt9770150",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": true
            },
            {
                "main": "nm0000399",
                "secondary": "tt10618286",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm2193504",
                "secondary": "tt9620292",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm1818032",
                "secondary": "tt10633456",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            },
            {
                "main": "nm0899121",
                "secondary": "tt10288566",
                "mainType": "people",
                "secondaryType": "movie",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Original Screenplay",
        "items": [
            {
                "main": "tt9620292",
                "secondary": "nm2193504",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt9784798",
                "secondary": [
                    "nm0077768",
                    "nm3489851",
                    "nm3584219",
                    "nm5695570"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt1070874",
                "secondary": "nm0815070",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10633456",
                "secondary": "nm1818032",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt5363618",
                "secondary": [
                    "nm2942187",
                    "nm3473150",
                    "nm0161834"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Adapted Screenplay",
        "items": [
            {
                "main": "tt10272386",
                "secondary": [
                    "nm0358960",
                    "nm1725469"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt13143964",
                "secondary": [
                    "nm0056187",
                    "nm0385630",
                    "nm2255631",
                    "nm0063165",
                    "nm1106214",
                    "nm0563243",
                    "nm2773070",
                    "nm1745272",
                    "nm4988577"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt6571548",
                "secondary": "nm1023919",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt9770150",
                "secondary": "nm2125482",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10612922",
                "secondary": "nm5358492",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Cinematography",
        "items": [
            {
                "main": "tt10618286",
                "secondary": "nm0582081",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt9784798",
                "secondary": "nm0090312",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt6878306",
                "secondary": "nm0003011",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt1070874",
                "secondary": "nm0003659",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt9770150",
                "secondary": "nm4452305",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Film Editing",
        "items": [
            {
                "main": "tt5363618",
                "secondary": "nm1182055",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt1070874",
                "secondary": "nm0062328",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt9770150",
                "secondary": "nm2125482",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt9620292",
                "secondary": "nm1754850",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10272386",
                "secondary": "nm2498855",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Production Design",
        "items": [
            {
                "main": "tt10618286",
                "secondary": [
                    "nm0123426",
                    "nm0664308"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt6878306",
                "secondary": [
                    "nm0186477",
                    "nm1404582"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10514222",
                "secondary": [
                    "nm0725475",
                    "nm0641286",
                    "nm0832839"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt6723592",
                "secondary": [
                    "nm0189769",
                    "nm0524205"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10272386",
                "secondary": [
                    "nm0290286",
                    "nm1570850"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Costume Design",
        "items": [
            {
                "main": "tt10514222",
                "secondary": "nm0744778",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt9214832",
                "secondary": "nm0126107",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10618286",
                "secondary": "nm0838844",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt4566758",
                "secondary": "nm0197257",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt8333746",
                "secondary": "nm1964768",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Sound",
        "items": [
            {
                "main": "tt5363618",
                "secondary": [
                    "nm0065545",
                    "nm0049254",
                    "nm2499159",
                    "nm3997636",
                    "nm3835694"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt6878306",
                "secondary": [
                    "nm0850549",
                    "nm0696523",
                    "nm7017920",
                    "nm0698099"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10618286",
                "secondary": [
                    "nm0460274",
                    "nm0597199",
                    "nm0662188",
                    "nm2315737",
                    "nm0475168"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt2948372",
                "secondary": [
                    "nm0460274",
                    "nm0254208",
                    "nm0662188"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt6048922",
                "secondary": [
                    "nm0790022",
                    "nm0591444",
                    "nm0003311",
                    "nm1049027"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Makeup and Hairstyling",
        "items": [
            {
                "main": "tt10514222",
                "secondary": [
                    "nm0520236",
                    "nm4135648",
                    "nm5003080"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt9214832",
                "secondary": [
                    "nm0485984",
                    "nm8526114",
                    "nm0831656"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10618286",
                "secondary": [
                    "nm0930666",
                    "nm0819129",
                    "nm0479295"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt8333746",
                "secondary": [
                    "nm0183418",
                    "nm2252273",
                    "nm4687885"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt6772802",
                "secondary": [
                    "nm0472477",
                    "nm0612817",
                    "nm0214912"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Music Written for Motion Pictures (Original Score)",
        "items": [
            {
                "main": "tt2948372",
                "secondary": [
                    "nm0722153",
                    "nm1589604",
                    "nm4456022"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt9777644",
                "secondary": "nm0005966",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt6878306",
                "secondary": "nm0006133",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10618286",
                "secondary": [
                    "nm0722153",
                    "nm1589604"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10633456",
                "secondary": "nm7888676",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Music Written for Motion Pictures (Original Song)",
        "items": [
            {
                "main": "tt9784798",
                "secondary": [
                    "nm2878358",
                    "nm6299956",
                    "nm8454691"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt8580274",
                "secondary": [
                    "nm4153652",
                    "nm12200610",
                    "nm7646386"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10627584",
                "secondary": [
                    "nm0005534",
                    "nm1306128"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt1070874",
                "secondary": [
                    "nm11203881",
                    "nm1207404"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10612922",
                "secondary": [
                    "nm1502434",
                    "nm3841867"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Achievement in Visual Effects",
        "items": [
            {
                "main": "tt6723592",
                "secondary": [
                    "nm1886497",
                    "nm2814296",
                    "nm0516916",
                    "nm0279782"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt3661394",
                "secondary": [
                    "nm0002428",
                    "nm1049807",
                    "nm2932799",
                    "nm2979916"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt2222042",
                "secondary": [
                    "nm0805992",
                    "nm3784934",
                    "nm3051832",
                    "nm0184939"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10539608",
                "secondary": [
                    "nm0440683",
                    "nm1165856",
                    "nm1281289",
                    "nm0914247"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt4566758",
                "secondary": [
                    "nm0264915",
                    "nm1619365",
                    "nm0561295",
                    "nm0409032"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Documentary Feature",
        "items": [
            {
                "main": "tt12888462",
                "secondary": [
                    "nm11813828",
                    "nm1624755",
                    "nm0287741"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt8923484",
                "secondary": [
                    "nm1011820",
                    "nm0495898",
                    "nm0092781"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt11394298",
                "secondary": [
                    "nm3073146",
                    "nm5337246"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10706602",
                "secondary": [
                    "nm1681049",
                    "nm4290702"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt11416746",
                "secondary": [
                    "nm3797834",
                    "nm6156086",
                    "nm2062930"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Documentary Short Subject",
        "items": [
            {
                "main": "tt11643154",
                "secondary": [
                    "nm1818348",
                    "nm3550163"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt13793326",
                "secondary": [
                    "nm3988897",
                    "nm3929283"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt11512676",
                "secondary": [
                    "nm4108371",
                    "nm4085451"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt12979636",
                "secondary": [
                    "nm1148695",
                    "nm11492155"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt8993180",
                "secondary": [
                    "nm7630871",
                    "nm5903832"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Animated Feature Film",
        "items": [
            {
                "main": "tt2948372",
                "secondary": [
                    "nm0230032",
                    "nm1733918"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt7146812",
                "secondary": [
                    "nm0768959",
                    "nm0706032"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt5198068",
                "secondary": [
                    "nm1119079",
                    "nm2075487",
                    "nm2727721",
                    "nm2847097"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt6193408",
                "secondary": [
                    "nm4503368",
                    "nm2192511",
                    "nm1385754"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt7488208",
                "secondary": [
                    "nm0443855",
                    "nm2937345",
                    "nm1513657"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Animated Short Film",
        "items": [
            {
                "main": "tt11768948",
                "secondary": [
                    "nm0566489",
                    "nm1854728"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt11884670",
                "secondary": [
                    "nm3352576",
                    "nm3856500"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt12706728",
                "secondary": [
                    "nm4496900",
                    "nm2727616"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt13167288",
                "secondary": [
                    "nm6461347",
                    "nm6040099"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt14039636",
                "secondary": "nm4014909",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best Live Action Short Film",
        "items": [
            {
                "main": "tt13472984",
                "secondary": [
                    "nm3579257",
                    "nm1804553"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt9280166",
                "secondary": [
                    "nm3194313",
                    "nm10801720"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt11962160",
                "secondary": [
                    "nm4895825",
                    "nm1001945"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt11474480",
                "secondary": [
                    "nm9048529",
                    "nm3050599"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10538710",
                "secondary": [
                    "nm8781219",
                    "nm6735926"
                ],
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    },
    {
        "name": "Best International Feature Film",
        "items": [
            {
                "main": "tt10288566",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": true
            },
            {
                "main": "tt10360862",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt10706602",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt8633462",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            },
            {
                "main": "tt9586294",
                "mainType": "movie",
                "secondaryType": "people",
                "winner": false
            }
        ]
    }
];

const typeRenamer = {
    'Best Motion Picture of the Year' : 'Best Picture',
    'Best Achievement in Directing' : 'Best Director',
    'Best Performance by an Actor in a Leading Role' : 'Best Actor',
    'Best Performance by an Actress in a Leading Role' : 'Best Actress',
    'Best Performance by an Actor in a Supporting Role' : 'Best Supporting Actor',
    'Best Performance by an Actress in a Supporting Role' : 'Best Supporting Actress',
    'Best Achievement in Music Written for Motion Pictures (Original Score)' : 'Best Original Score',
    'Best Achievement in Music Written for Motion Pictures (Original Song)' : 'Best Original Song',
    'Best Achievement in Production Design' : 'Best Production Design',
    'Best Achievement in Cinematography' : 'Best Cinematography',
    'Best Achievement in Makeup and Hairstyling' : 'Best Makeup and Hairstyling',
    'Best Achievement in Costume Design' : 'Best Costume Design',
    'Best Achievement in Film Editing' : 'Best Film Editing',
    'Best Achievement in Visual Effects' : 'Best Visual Effects',
}

let toFetch = [];
let fetched = [];

for (let i = 0; i < source.length; i++) {
    const category = source[i];
    for (let j = 0; j < category.items.length; j++) {
        const item = category.items[j];
        if (!toFetch.includes(item.main)) {
            toFetch.push(item.main);
        }
        if (!Array.isArray(item.secondary)) {
            if (!toFetch.includes(item.secondary)) {
                toFetch.push(item.secondary);
            }
        } else {
            for (let k = 0; k < item.secondary.length; k++) {
                const secondary = item.secondary[k];
                if (!toFetch.includes(secondary) && secondary !== '') {
                    toFetch.push(secondary);
                }
            }
        }
    }
}
let promises = [];

for (let i = 0; i < toFetch.length; i++) {
    const elemToFetch = toFetch[i];
    const url = `https://api.themoviedb.org/3/find/${elemToFetch}?api_key=${TMDB_API_KEY}&language=en-US&external_source=imdb_id`;
    promises.push(
        axios.get(url).then((resp) => {
            if (resp?.data?.movie_results?.length > 0) {
                fetched[elemToFetch] = resp.data.movie_results[0]?.id;
            } else if (resp?.data?.person_results?.length > 0) {
                fetched[elemToFetch] = resp.data.person_results[0]?.id;
            } else {
                fetched[elemToFetch] = undefined;
            }
        })
    );
}

Promise.all(promises).then(() => {
    let ret = [];
    let winners = [];
    for (let i = 0; i < source.length; i++) {
        const category = source[i];
        winners.push({
            type: typeRenamer[category?.name] ?? category?.name,
            ...(category.items.filter((item) => item.winner).map(item => ({
                main: item.main ? fetched?.[item.main] ?? '' : '',
                secondary: !Array.isArray(item.secondary) ? (item.secondary ? fetched?.[item.secondary] ?? undefined : undefined) :
                    item.secondary.map((secondary) => {
                        return fetched?.[secondary] ?? undefined;
                    }).filter((secondary) => secondary !== undefined),
                mainType: item.mainType,
                secondaryType: item.secondaryType,

            }))[0])

        });
        ret.push({
            name: typeRenamer[category?.name] ?? category?.name,
            items: category.items.map((item) => {
                return {
                    type: '',
                    main: item.main ? fetched?.[item.main] ?? '' : '',
                    secondary: !Array.isArray(item.secondary) ? (item.secondary ? fetched?.[item.secondary] ?? undefined : undefined) :
                        item.secondary.map((secondary) => {
                            return fetched?.[secondary] ?? undefined;
                        }).filter((secondary) => secondary !== undefined),
                    mainType: item.mainType,
                    secondaryType: item.secondaryType,
                    winner: item.winner,
                };
            })
        });
    }
    console.log(JSON.stringify(ret, null, 2));
    // console.log(JSON.stringify(winners, null, 2));
});
