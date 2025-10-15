// carData.js
var brandData = {
    "比亚迪": ["Greece", "New Zealand", "Switzerland", "Ireland", "Israel", "Sweden", "Croatia", "Russia", "Italy", "Malaysia", "Thailand", "Portugal", "Spain", "Japan", "Korea", "Philippines", "Brazil", "Austria", "Uruguay", "Belgium", "Denmark", "United Kingdom", "Finland", "Luxembourg", "Turkey", "Poland", "Netherlands", "Germany", "Singapore", "Chile", "Hungary", "Colombia", "Romania", "France", "Indonesia", "Norway", "Australia"],
    // "上汽": ["Thailand", "Germany", "Indonesia"],
    "长城": ["South Africa", "Thailand", "Germany", "Israel", "Mexico", "United Kingdom", "Brazil", "Sweden", "Estonia", "Australia", "Russia", "Malaysia"],
    "小鹏": ["Switzerland", "Ireland", "Israel", "Egypt", "Sweden", "Russia", "Malaysia", "Iceland", "Thailand", "Portugal", "Spain", "United Arab Emirates", "Belgium", "Denmark", "United Kingdom", "Luxembourg", "Netherlands", "Germany", "France", "Norway"],
    "蔚来": ["Germany", "Denmark", "Sweden", "Norway", "Netherlands"],
    "零跑": ["Greece", "New Zealand", "Switzerland", "Guadeloupe", "Israel", "Italy", "Malaysia", "Thailand", "Portugal", "Spain", "Martinique", "Austria", "Uruguay", "Belgium", "Malta", "United Kingdom", "Mauritius", "Luxembourg", "Turkey", "Poland", "Netherlands", "Belarus", "Germany", "Romania", "France", "Australia", "Nepal"],
    "吉利": ["Israel", "Egypt", "Lebanon", "Sweden", "Saudi Arabia", "Azerbaijan", "Bahrain", "Malaysia", "Thailand", "Moldova", "Philippines", "Armenia", "Brazil", "Cambodia", "Lao PDR", "United Arab Emirates", "Mexico", "Denmark", "Belgium", "Kazakhstan", "Costa Rica", "Qatar", "Netherlands", "Germany", "Singapore", "Colombia", "Uzbekistan", "Georgia", "Kuwait", "Ecuador", "France", "Indonesia", "Norway", "Australia", "Myanmar", "Morocco"],
    // "广汽": ["Thailand"],
    // "哪吒": ["Thailand"],
    // "奇瑞": ["Brazil"],
    "理想": ["Russia"]
};

var countryData = {
    "Germany": {
        "brands": {
            "比亚迪": {
                "sales": 2672,
                "models": {
                    "Dolphin": {
                        "sales": 440,
                        "localPrice": "€32,990",
                        "rmbPrice": "27万",
                        "website": "https://www.byd.com/de/order-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 575,
                        "localPrice": "€46,990",
                        "rmbPrice": "38万",
                        "website": "https://www.byd.com/de/order-seal"
                    },
                    "Seal U": {
                        "sales": 108,
                        "localPrice": "€38,900",
                        "rmbPrice": "32万",
                        "website": "https://www.byd.com/de/order-seal-u-dm-i"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 1082,
                        "localPrice": "€37,990",
                        "rmbPrice": "31万",
                        "website": "https://www.byd.com/de/order-atto3"
                    },
                    "Sealion 07": {
                        "sales": 50,
                        "localPrice": "€47,990",
                        "rmbPrice": "39万",
                        "website": "https://www.byd.com/de/order-sealion-7"
                    },
                    "Han": {
                        "sales": 0,
                        "localPrice": "€69,020",
                        "rmbPrice": "56万",
                        "website": "https://www.byd.com/de/order-han"
                    },
                    "Tang": {
                        "sales": 52,
                        "localPrice": "€69,615",
                        "rmbPrice": "57万",
                        "website": "https://www.byd.com/de/order-tang"
                    }
                }
            },
            "上汽": {
                "sales": 14530,
                "models": {
                    "MG 4": {
                        "sales": 12004,
                        "localPrice": "€34,900",
                        "rmbPrice": "28万",
                        "website": "https://www.mgmotor.de/"
                    },
                    "MG ZS SUV": {
                        "sales": 1387,
                        "localPrice": "€22,990",
                        "rmbPrice": "19万",
                        "website": "https://www.mgmotor.de/"
                    },
                    "MG-5": {
                        "sales": 817,
                        "localPrice": "€35,490",
                        "rmbPrice": "29万",
                        "website": "https://www.mgmotor.de/"
                    },
                    "MG Cyberster": {
                        "sales": 18,
                        "localPrice": "€64,900",
                        "rmbPrice": "53万",
                        "website": "https://www.mgmotor.de/"
                    },
                    "MG HS": {
                        "sales": 160,
                        "localPrice": "€39,900",
                        "rmbPrice": "32万",
                        "website": "https://www.mgmotor.de/"
                    },
                    "MG MARVEL R": {
                        "sales": 144,
                        "localPrice": "€46,990",
                        "rmbPrice": "38万",
                        "website": "https://www.mgmotor.de/"
                    }
                }
            },
            "长城": {
                "sales": 2999,
                "models": {
                    "ORA 07 / ORA Lightning": {
                        "sales": 89,
                        "localPrice": "€41,900",
                        "rmbPrice": "34万",
                        "website": "https://www.ora-motor.de/preise-ausstattung-ora-07"
                    },
                    "ORA 03 / Funky Cat": {
                        "sales": 2007,
                        "localPrice": "€26,990",
                        "rmbPrice": "22万",
                        "website": "https://www.ora-motor.de/preise-ausstattung-ora-03"
                    },
                    "WEY 05 / Coffee 01": {
                        "sales": 733,
                        "localPrice": "€59,900",
                        "rmbPrice": "49万",
                        "website": "https://www.wey-motor.de/gwm-wey-05/fahrzeugdetails/"
                    },
                    "WEY 03 / Coffee 02": {
                        "sales": 170,
                        "localPrice": "€47,900",
                        "rmbPrice": "39万",
                        "website": "https://www.wey-motor.de/gwm-wey-03/fahrzeugdetails/"
                    }
                }
            },
            "小鹏": {
                "sales": 386,
                "models": {
                    "XPeng G9": {
                        "sales": 219,
                        "localPrice": "€59,600",
                        "rmbPrice": "48万",
                        "website": "https://store.xpeng.com/de/configurator/G9_2024"
                    },
                    "XPeng G6": {
                        "sales": 135,
                        "localPrice": "€43,600",
                        "rmbPrice": "35万",
                        "website": "https://store.xpeng.com/de/configurator/G6"
                    },
                    "XPeng P7": {
                        "sales": 32,
                        "localPrice": "€49,600",
                        "rmbPrice": "40万",
                        "website": "https://store.xpeng.com/de/configurator/p7"
                    }
                }
            },
            "蔚来": {
                "sales": 356,
                "models": {
                    "NIO ET7": {
                        "sales": 128,
                        "localPrice": "€69,900",
                        "rmbPrice": "57万",
                        "website": "https://www.nio.com/de_DE/configurator/index?vehicle=ET7"
                    },
                    "NIO ET5": {
                        "sales": 120,
                        "localPrice": "€47,500",
                        "rmbPrice": "39万",
                        "website": "https://www.nio.com/de_DE/configurator/index?vehicle=ET5"
                    },
                    "NIO ET5T": {
                        "sales": 0,
                        "localPrice": "€47,500",
                        "rmbPrice": "39万",
                        "website": "https://www.nio.com/de_DE/configurator/index?vehicle=ET5%20Touring"
                    },
                    "NIO EL6": {
                        "sales": 74,
                        "localPrice": "€53,500",
                        "rmbPrice": "43万",
                        "website": "https://www.nio.com/de_DE/configurator/index?vehicle=EL6"
                    },
                    "NIO EL7": {
                        "sales": 34,
                        "localPrice": "€73,900",
                        "rmbPrice": "60万",
                        "website": "https://www.nio.com/de_DE/configurator/index?vehicle=EL7"
                    },
                    "NIO  EL8": {
                        "sales": 0,
                        "localPrice": "€82,900",
                        "rmbPrice": "67万",
                        "website": "https://www.nio.com/de_DE/configurator/index?vehicle=EL8"
                    }
                }
            },
            "零跑": {
                "sales": 178,
                "models": {
                    "T03": {
                        "sales": 159,
                        "localPrice": "€18,900",
                        "rmbPrice": "15万",
                        "website": "https://www.leapmotor.net/de/t03"
                    },
                    "C10": {
                        "sales": 19,
                        "localPrice": "€37,600",
                        "rmbPrice": "31万",
                        "website": "https://www.leapmotor.net/de/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "€37,900",
                        "rmbPrice": "31万",
                        "website": "https://www.leapmotor.net/de/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/de/B10"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "€59,900",
                        "rmbPrice": "49万",
                        "website": "https://www.zeekr.eu/de-de/models/001"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "€44,990",
                        "rmbPrice": "37万",
                        "website": "https://www.zeekr.eu/de-de/models/x"
                    }
                }
            }
        }
    },
    "Thailand": {
        "brands": {
            "比亚迪": {
                "sales": 26795,
                "models": {
                    "Dolphin": {
                        "sales": 13386,
                        "localPrice": "฿569,900",
                        "rmbPrice": "12万",
                        "website": "https://www.reverautomotive.com/model/new-dolphin/overview"
                    },
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "฿1,249,900",
                        "rmbPrice": "27万",
                        "website": "https://www.reverautomotive.com/model/sealion7/overview"
                    },
                    "e6": {
                        "sales": 0,
                        "localPrice": "฿990,000",
                        "rmbPrice": "22万",
                        "website": "https://www.bydchonburi.com/model/byd-e6"
                    },
                    "Haibao/Seal": {
                        "sales": 5156,
                        "localPrice": "฿999,000",
                        "rmbPrice": "22万",
                        "website": "https://www.reverautomotive.com/model/seal/overview"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "฿2,000,000",
                        "rmbPrice": "44万",
                        "website": "https://www.bydchonburi.com/model/tang"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 7747,
                        "localPrice": "฿899,900",
                        "rmbPrice": "20万",
                        "website": "https://www.reverautomotive.com/model/newatto3/overview"
                    },
                    "Sealion 6": {
                        "sales": 0,
                        "localPrice": "฿939,000",
                        "rmbPrice": "21万",
                        "website": "https://www.reverautomotive.com/model/sealion6_dm-i/overview"
                    },
                    "BYD M6": {
                        "sales": 506,
                        "localPrice": "฿799,000",
                        "rmbPrice": "18万",
                        "website": "https://www.reverautomotive.com/model/m6/overview"
                    }
                }
            },
            "上汽": {
                "sales": 9628,
                "models": {
                    "MG 4": {
                        "sales": 5396,
                        "localPrice": "฿709,900",
                        "rmbPrice": "16万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "MAXUS 7": {
                        "sales": 48,
                        "localPrice": "฿1,769,000",
                        "rmbPrice": "39万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "MG ZS SUV": {
                        "sales": 755,
                        "localPrice": "฿829,900",
                        "rmbPrice": "18万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "MG VS": {
                        "sales": 990,
                        "localPrice": "฿699,000",
                        "rmbPrice": "15万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "MG Cyberster": {
                        "sales": 62,
                        "localPrice": "฿2,499,000",
                        "rmbPrice": "55万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "Maxus 9": {
                        "sales": 665,
                        "localPrice": "฿2,499,000",
                        "rmbPrice": "55万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "MG EP": {
                        "sales": 1133,
                        "localPrice": "฿771,000",
                        "rmbPrice": "17万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "MG ES": {
                        "sales": 202,
                        "localPrice": "฿959,000",
                        "rmbPrice": "21万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "MG HS": {
                        "sales": 377,
                        "localPrice": "฿1,299,000",
                        "rmbPrice": "28万",
                        "website": "https://www.mgcars.com/th"
                    },
                    "Wuling Bingo/Binguo": {
                        "sales": 0,
                        "localPrice": "฿399,000",
                        "rmbPrice": "9万",
                        "website": "https://www.wulingthai.com/booking/model"
                    },
                    "Wuling AirEV": {
                        "sales": 0,
                        "localPrice": "฿429,000",
                        "rmbPrice": "9万",
                        "website": "https://www.wulingthai.com/booking/model"
                    }
                }
            },
            "长城": {
                "sales": 3231,
                "models": {
                    "ORA Lightning/Grand Cat": {
                        "sales": 805,
                        "localPrice": "฿1,299,000",
                        "rmbPrice": "28万",
                        "website": "https://mall.gwm.co.th/orderVehicles/normal?carBrand=4926649eecbe4915c318e4ff41ccf84b&carAudiCode=19ece211f2de1bddfad373c47459d0df&local=th"
                    },
                    "Good Cat / Funky Cat": {
                        "sales": 2426,
                        "localPrice": "฿799,000",
                        "rmbPrice": "18万",
                        "website": "https://mall.gwm.co.th/orderVehicles/normal?carBrand=4926649eecbe4915c318e4ff41ccf84b&carAudiCode=7c6a085113cbdee1c24d7dab90f6cf34&local=th"
                    },
                    "GOOD CAT GT": {
                        "sales": 0,
                        "localPrice": "฿1,099,000",
                        "rmbPrice": "24万",
                        "website": "https://mall.gwm.co.th/orderVehicles/normal?carBrand=4926649eecbe4915c318e4ff41ccf84b&carAudiCode=de129e0d0d0972310cc29bd4ba5ae3d2d69b9198ddcbf4aafa653f4ca17c300c&local=th"
                    }
                }
            },
            "小鹏": {
                "sales": 178,
                "models": {
                    "XPeng G6": {
                        "sales": 178,
                        "localPrice": "฿1,439,000",
                        "rmbPrice": "32万",
                        "website": "https://store.xpeng.com/th/configurator/G6_R"
                    }
                }
            },
            "广汽": {
                "sales": 4127,
                "models": {
                    "AION ES": {
                        "sales": 65,
                        "localPrice": "฿846,000",
                        "rmbPrice": "19万",
                        "website": "https://www.aionauto.com/th-th/aion-es"
                    },
                    "AionY": {
                        "sales": 3839,
                        "localPrice": "฿769,900",
                        "rmbPrice": "17万",
                        "website": "https://www.aionauto.com/th-th/aion-y-plus"
                    },
                    "AION V": {
                        "sales": 0,
                        "localPrice": "฿1,029,900",
                        "rmbPrice": "23万",
                        "website": "https://www.aionauto.com/th-th/aion-v"
                    },
                    "HYPTEC HT": {
                        "sales": 222,
                        "localPrice": "฿1,449,000",
                        "rmbPrice": "32万",
                        "website": "https://www.aionauto.com/th-th/hyptec-ht"
                    },
                    "HYPTEC SSR": {
                        "sales": 1,
                        "localPrice": "฿7,999,000",
                        "rmbPrice": "175万",
                        "website": "https://www.aionauto.com/th-th/hyptec-ssr"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "C10": {
                        "sales": 0,
                        "localPrice": "฿978,000",
                        "rmbPrice": "21万",
                        "website": "https://www.leapmotor-international.co/th/en/c10"
                    }
                }
            },
            "哪吒": {
                "sales": 7969,
                "models": {
                    "NETA X": {
                        "sales": 1382,
                        "localPrice": "฿799,000",
                        "rmbPrice": "18万",
                        "website": "https://www.neta.co.th/th/product/Neta-X"
                    },
                    "Neta V-II": {
                        "sales": 2009,
                        "localPrice": "฿549,000",
                        "rmbPrice": "12万",
                        "website": "https://www.neta.co.th/th/product/NetaV-II"
                    },
                    "NETA V": {
                        "sales": 4578,
                        "localPrice": "฿549,000",
                        "rmbPrice": "12万",
                        "website": "https://www.neta.co.th/th/product/NetaV"
                    }
                }
            },
            "吉利": {
                "sales": 197,
                "models": {
                    "ZEEKR 009": {
                        "sales": 1,
                        "localPrice": "฿3,120,000",
                        "rmbPrice": "68万",
                        "website": "https://www.zeekrlife.com/th-th/models/009"
                    },
                    "ZEEKR X": {
                        "sales": 196,
                        "localPrice": "฿1,199,000",
                        "rmbPrice": "26万",
                        "website": "https://www.zeekrlife.com/th-th/models/x"
                    }
                }
            }
        }
    },
    "Brazil": {
        "brands": {
            "比亚迪": {
                "sales": 103892,
                "models": {
                    "DOLPHIN MINI": {
                        "sales": 21946,
                        "localPrice": "R$122,800",
                        "rmbPrice": "15万",
                        "website": "https://www.byd.com/br/order-dolphin-mini"
                    },
                    "Dolphin": {
                        "sales": 15201,
                        "localPrice": "R$159,800",
                        "rmbPrice": "20万",
                        "website": "https://www.byd.com/br/order-dolphin"
                    },
                    "DOLPIN PLUS": {
                        "sales": 0,
                        "localPrice": "R$184,800",
                        "rmbPrice": "23万",
                        "website": "https://www.byd.com/br/order-dolphin-plus"
                    },
                    "Han": {
                        "sales": 40,
                        "localPrice": "R$559,800",
                        "rmbPrice": "70万",
                        "website": "https://www.byd.com/br/order-han-ev"
                    },
                    "Haibao/Seal": {
                        "sales": 3522,
                        "localPrice": "R$299,800",
                        "rmbPrice": "37万",
                        "website": "https://www.byd.com/br/order-seal"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "R$536,800",
                        "rmbPrice": "67万",
                        "website": "https://www.byd.com/br/order-tan"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 2870,
                        "localPrice": "R$235,800",
                        "rmbPrice": "29万",
                        "website": "https://www.byd.com/br/order-yuan-plus"
                    },
                    "YUAN PRO": {
                        "sales": 0,
                        "localPrice": "R$182,800",
                        "rmbPrice": "23万",
                        "website": "https://www.byd.com/br/order-yuan-pro"
                    },
                    "SHARK": {
                        "sales": 0,
                        "localPrice": "R$379,800",
                        "rmbPrice": "47万",
                        "website": "https://www.byd.com/br/order-shark"
                    },
                    "BYD King": {
                        "sales": 4935,
                        "localPrice": "R$179,900",
                        "rmbPrice": "22万",
                        "website": "https://www.byd.com/br/order-king-dmi"
                    },
                    "SONG PLUS": {
                        "sales": 27689,
                        "localPrice": "R$244,800",
                        "rmbPrice": "31万",
                        "website": "https://www.byd.com/br/order-song-plus-dmi"
                    },
                    "SONG PLUS PREMIUM": {
                        "sales": 0,
                        "localPrice": "R$299,800",
                        "rmbPrice": "37万",
                        "website": "https://www.byd.com/br/order-song-plus-premium"
                    },
                    "SONG PRO": {
                        "sales": 0,
                        "localPrice": "R$194,800",
                        "rmbPrice": "24万",
                        "website": "https://www.byd.com/br/order-song-pro"
                    }
                }
            },
            "长城": {
                "sales": 6326,
                "models": {
                    "ORA 03 GT": {
                        "sales": 0,
                        "localPrice": "R$187,000",
                        "rmbPrice": "23万",
                        "website": "https://www.gwmmotors.com.br/novos/ora-03-gt-2024"
                    },
                    "ORA 03": {
                        "sales": 6326,
                        "localPrice": "R$159,000",
                        "rmbPrice": "20万",
                        "website": "https://www.gwmmotors.com.br/novos/ora-03-skin-2024"
                    },
                    "H6": {
                        "sales": 0,
                        "localPrice": "R$244,000",
                        "rmbPrice": "30万",
                        "website": "https://www.gwmmotors.com.br/pt/modelos/haval-h6-phev-19"
                    },
                    "H6 GT": {
                        "sales": 0,
                        "localPrice": "R$325,000",
                        "rmbPrice": "41万",
                        "website": "https://www.gwmmotors.com.br/pt/modelos/haval-h6-gt"
                    }
                }
            },
            "奇瑞": {
                "sales": 0,
                "models": {
                    "Tiggo 5X": {
                        "sales": 0,
                        "localPrice": "R$157,990",
                        "rmbPrice": "20万",
                        "website": "https://caoachery.com.br/tiggo5xpro-hybrid-maxdrive"
                    },
                    "Tiggo 7": {
                        "sales": 0,
                        "localPrice": "R$239,990",
                        "rmbPrice": "30万",
                        "website": "https://caoachery.com.br/tiggo7-pro-plugin-hybrid-2025"
                    },
                    "Tiggo 8": {
                        "sales": 0,
                        "localPrice": "R$279,990",
                        "rmbPrice": "35万",
                        "website": "https://caoachery.com.br/tiggo8-pro-plugin-hybrid-2025"
                    },
                    "ARRIZO 6 PRO": {
                        "sales": 0,
                        "localPrice": "R$139,990",
                        "rmbPrice": "17万",
                        "website": "https://caoachery.com.br/arrizo6-pro-hybrid-max-drive"
                    },
                    "iCar": {
                        "sales": 0,
                        "localPrice": "R$119,990",
                        "rmbPrice": "15万",
                        "website": "https://caoachery.com.br/icar"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "R$298,000",
                        "rmbPrice": "37万",
                        "website": "https://conf.zeekr.com.br/?linkCode=3&_gl=1*11p4xxw*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_3GCL60M3NK*czE3NDcxODUwNjMkbzIkZzEkdDE3NDcxOTI2MzckajAkbDAkaDA.*_ga_ZNZGN3P95Q*czE3NDcxOTI2MDUkbzEkZzEkdDE3NDcxOTI2MzckajI4JGwwJGgw*_ga_XNN7YBNGGJ*czE3NDcxODUwNjMkbzIkZzEkdDE3NDcxOTI2MzckajAkbDAkaDA.&utm_id=&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "R$495,000",
                        "rmbPrice": "62万",
                        "website": "https://conf.zeekr.com.br/?_gl=1*1oyo59k*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_3GCL60M3NK*czE3NDcxODUwNjMkbzIkZzEkdDE3NDcxOTI2MzUkajAkbDAkaDA.*_ga_ZNZGN3P95Q*czE3NDcxOTI2MDUkbzEkZzAkdDE3NDcxOTI2MzUkajMwJGwwJGgw*_ga_XNN7YBNGGJ*czE3NDcxODUwNjMkbzIkZzEkdDE3NDcxOTI2MzUkajAkbDAkaDA.&utm_id=&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                    }
                }
            }
        }
    },
    "Japan": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "ATTO 3": {
                        "sales": 0,
                        "localPrice": "¥4,180,000",
                        "rmbPrice": "21万",
                        "website": "https://byd.co.jp/e-life/cars/atto3/"
                    },
                    "Dolphin": {
                        "sales": 0,
                        "localPrice": "¥2,992,000",
                        "rmbPrice": "15万",
                        "website": "https://byd.co.jp/e-life/cars/dolphin/"
                    },
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "¥4,950,000",
                        "rmbPrice": "25万",
                        "website": "https://byd.co.jp/e-life/cars/sealion7/"
                    },
                    "Seal": {
                        "sales": 0,
                        "localPrice": "¥5,280,000",
                        "rmbPrice": "26万",
                        "website": "https://byd.co.jp/e-life/cars/seal/"
                    }
                }
            }
        }
    },
    "Malaysia": {
        "brands": {
            "比亚迪": {
                "sales": 8570,
                "models": {
                    "Dolphin": {
                        "sales": 1325,
                        "localPrice": "RM99,900",
                        "rmbPrice": "17万",
                        "website": "https://millenniumautobyd.com.my/home/dolphin/"
                    },
                    "Haibao/Seal": {
                        "sales": 2825,
                        "localPrice": "RM179,800",
                        "rmbPrice": "30万",
                        "website": "https://millenniumautobyd.com.my/home/seal/"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 3854,
                        "localPrice": "RM123,800",
                        "rmbPrice": "21万",
                        "website": "https://millenniumautobyd.com.my/home/atto3/"
                    },
                    "BYD M6": {
                        "sales": 566,
                        "localPrice": "RM109,800",
                        "rmbPrice": "18万",
                        "website": "https://millenniumautobyd.com.my/home/byd-m6/"
                    },
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "RM183,800",
                        "rmbPrice": "31万",
                        "website": "https://millenniumautobyd.com.my/home/byd-sealion/"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "RM155,800,000",
                        "rmbPrice": "26185万",
                        "website": "https://www.zeekrlife.com/en-my/models/x"
                    },
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "RM349,800,000",
                        "rmbPrice": "58790万",
                        "website": "https://www.zeekrlife.com/en-my/models/009"
                    }
                }
            },
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng X9": {
                        "sales": 0,
                        "localPrice": "RM270,708",
                        "rmbPrice": "45万",
                        "website": "https://xpeng.com.my/x9.php"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "C10": {
                        "sales": 0,
                        "localPrice": "RM162,000",
                        "rmbPrice": "27万",
                        "website": "东马"
                    }
                }
            },
            "长城": {
                "sales": 0,
                "models": {
                    "ORA 07 / ORA Lightning": {
                        "sales": 0,
                        "localPrice": "RM25,000",
                        "rmbPrice": "4万",
                        "website": "https://www.gwm.com.my/ORA_07.html"
                    },
                    "ORA Good Cat": {
                        "sales": 0,
                        "localPrice": "RM20,000",
                        "rmbPrice": "3万",
                        "website": "https://www.gwm.com.my/ORA_GOOD_CAT.html"
                    }
                }
            }
        }
    },
    "Indonesia": {
        "brands": {
            "比亚迪": {
                "sales": 15429,
                "models": {
                    "Dolphin": {
                        "sales": 1186,
                        "localPrice": "Rp425,000,000",
                        "rmbPrice": "19万",
                        "website": "https://www.byd.com/id/order-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 4828,
                        "localPrice": "Rp635,000,000",
                        "rmbPrice": "28万",
                        "website": "https://www.byd.com/id/order-seal"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 3291,
                        "localPrice": "Rp515,000,000",
                        "rmbPrice": "23万",
                        "website": "https://www.byd.com/id/order-seal"
                    },
                    "BYD M6": {
                        "sales": 6124,
                        "localPrice": "Rp379,000,000",
                        "rmbPrice": "17万",
                        "website": "https://www.byd.com/id/order-m6"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-id/models/x"
                    },
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-id/models/009"
                    }
                }
            },
            "上汽": {
                "sales": 0,
                "models": {
                    "Wuling AirEV": {
                        "sales": 0,
                        "localPrice": "Rp184,000,000",
                        "rmbPrice": "8万",
                        "website": "https://wuling.id/id/air-ev"
                    }
                }
            }
        }
    },
    "Philippines": {
        "brands": {
            "比亚迪": {
                "sales": 1004,
                "models": {
                    "Dolphin": {
                        "sales": 367,
                        "localPrice": "₱898,000",
                        "rmbPrice": "12万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-dolphin"
                    },
                    "Haibao/Seal 05": {
                        "sales": 230,
                        "localPrice": "₱948,000",
                        "rmbPrice": "12万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-seal-5-dm-i-dynamic"
                    },
                    "Haibao/Seal": {
                        "sales": 56,
                        "localPrice": "₱2,548,000",
                        "rmbPrice": "33万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-seal-performance"
                    },
                    "Han": {
                        "sales": 69,
                        "localPrice": "₱3,113,000",
                        "rmbPrice": "41万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-han"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 240,
                        "localPrice": "₱1,598,000",
                        "rmbPrice": "21万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-atto-3-dynamic"
                    },
                    "Sealion 6": {
                        "sales": 42,
                        "localPrice": "₱1,548,000",
                        "rmbPrice": "20万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-sealion-6-dm-i"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "₱3,321,000",
                        "rmbPrice": "43万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-tang"
                    },
                    "Seagull": {
                        "sales": 0,
                        "localPrice": "₱898,000",
                        "rmbPrice": "12万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-seagull"
                    },
                    "SHARK 6": {
                        "sales": 0,
                        "localPrice": "₱2,098,000",
                        "rmbPrice": "27万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-shark-6-dmo-advanced"
                    },
                    "SHARK": {
                        "sales": 0,
                        "localPrice": "₱2,098,000",
                        "rmbPrice": "27万",
                        "website": "https://bydcarsphilippines.com/vehicles/byd-shark-6-dmo-advanced"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "₱2,600,000",
                        "rmbPrice": "34万",
                        "website": "https://www.electricvehicles.ph/zeekr-x/"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "₱3,625,000",
                        "rmbPrice": "47万",
                        "website": "https://www.electricvehicles.ph/zeekr-001/"
                    },
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "₱6,000,000",
                        "rmbPrice": "78万",
                        "website": "https://www.electricvehicles.ph/zeekr-009/"
                    }
                }
            }
        }
    },
    "Singapore": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "Yuan PLUS / ATTO 3": {
                        "sales": 0,
                        "localPrice": "S$154,388",
                        "rmbPrice": "86万",
                        "website": "https://byd.1826.sg/atto3"
                    },
                    "Dolphin": {
                        "sales": 0,
                        "localPrice": "S$147,388",
                        "rmbPrice": "82万",
                        "website": "https://byd.1826.sg/byd-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 0,
                        "localPrice": "S$168,388",
                        "rmbPrice": "94万",
                        "website": "https://byd.1826.sg/byd-seal"
                    },
                    "BYD M6": {
                        "sales": 0,
                        "localPrice": "S$154,388",
                        "rmbPrice": "86万",
                        "website": "https://byd.1826.sg/byd-m6"
                    },
                    "Denza D9": {
                        "sales": 0,
                        "localPrice": "S$290,888",
                        "rmbPrice": "162万",
                        "website": "https://denza.1826.sg/denza-d9"
                    },
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "S$201,388",
                        "rmbPrice": "112万",
                        "website": "https://byd.1826.sg/byd-sealion-7"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "S$412,999",
                        "rmbPrice": "229万",
                        "website": "https://shop.zeekr.sg/products/zeekr-009"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "S$202,999",
                        "rmbPrice": "113万",
                        "website": "https://shop.zeekr.sg/products/zeekr-x"
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://shop.zeekr.sg/products/zeekr-7x"
                    }
                }
            }
        }
    },
    "Australia": {
        "brands": {
            "比亚迪": {
                "sales": 20458,
                "models": {
                    "Dolphin": {
                        "sales": 2116,
                        "localPrice": "A$29,990",
                        "rmbPrice": "14万",
                        "website": "https://bydautomotive.com.au/configurator/byd-dolphin?ref=website"
                    },
                    "Haibao/Seal": {
                        "sales": 6393,
                        "localPrice": "A$46,990",
                        "rmbPrice": "22万",
                        "website": "https://bydautomotive.com.au/configurator/byd-sealion-6?ref=website"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 5751,
                        "localPrice": "A$39,990",
                        "rmbPrice": "19万",
                        "website": "https://bydautomotive.com.au/configurator/byd-atto-3?ref=website"
                    },
                    "Sealion 6": {
                        "sales": 6198,
                        "localPrice": "A$42,990",
                        "rmbPrice": "20万",
                        "website": "https://bydautomotive.com.au/configurator/byd-sealion-6?ref=website"
                    },
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "A$54,900",
                        "rmbPrice": "25万",
                        "website": "https://bydautomotive.com.au/configurator/byd-sealion-7?ref=website"
                    },
                    "SHARK 6": {
                        "sales": 0,
                        "localPrice": "A$57,900",
                        "rmbPrice": "27万",
                        "website": "https://bydautomotive.com.au/configurator/byd-shark-6?ref=website"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "A$49,900",
                        "rmbPrice": "23万",
                        "website": "https://conf.zeekr.au/?_gl=1*1l2p9j8*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_3GCL60M3NK*czE3NDc2NDI1NDUkbzUkZzEkdDE3NDc2NDI1NTgkajQ3JGwwJGgw*_ga_F7MV4R3PMD*czE3NDc2NDI1NDUkbzQkZzEkdDE3NDc2NDI1NTgkajAkbDAkaDA.*_gcl_au*MTUwNzM2NTE5Ni4xNzQ3MTMxMTQz*_ga_C97N74SV2M*czE3NDc2NDI1NDUkbzIkZzEkdDE3NDc2NDI1NTgkajQ3JGwwJGgzODY5NzU4Mzk.*_ga_XNN7YBNGGJ*czE3NDc2NDI1NDUkbzUkZzEkdDE3NDc2NDI1NTgkajQ3JGwwJGgw&utm_id=&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                    },
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "A$135,900",
                        "rmbPrice": "63万",
                        "website": "https://www.zeekrlife.com/en-au/models/009"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "C10": {
                        "sales": 0,
                        "localPrice": "A$45,900",
                        "rmbPrice": "21万",
                        "website": "https://www.leapmotor.net/au/c10"
                    },
                    "C10 Ultra": {
                        "sales": 0,
                        "localPrice": "A$45,900",
                        "rmbPrice": "21万",
                        "website": "https://www.leapmotor.net/au/reev"
                    }
                }
            },
            "长城": {
                "sales": 1225,
                "models": {
                    "ORA 03 / Funky Cat": {
                        "sales": 1225,
                        "localPrice": "A$33,990",
                        "rmbPrice": "16万",
                        "website": "https://www.gwmanz.com/au/models/hatchback/ora/"
                    },
                    "H6 GT": {
                        "sales": 0,
                        "localPrice": "A$44,990",
                        "rmbPrice": "21万",
                        "website": "https://www.gwmanz.com/au/models/suv/haval-h6gt/"
                    }
                }
            }
        }
    },
    "New Zealand": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "NZ$67,990",
                        "rmbPrice": "29万",
                        "website": "https://www.bydauto.co.nz/"
                    },
                    "Haibao/Seal": {
                        "sales": 0,
                        "localPrice": "NZ$58,990",
                        "rmbPrice": "25万",
                        "website": "https://www.bydauto.co.nz/vehicles/seal"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 0,
                        "localPrice": "NZ$49,990",
                        "rmbPrice": "21万",
                        "website": "https://www.bydauto.co.nz/vehicles/atto-3"
                    },
                    "Dolphin": {
                        "sales": 0,
                        "localPrice": "NZ$39,990",
                        "rmbPrice": "17万",
                        "website": "https://www.bydauto.co.nz/vehicles/dolphin"
                    },
                    "Sealion 6": {
                        "sales": 0,
                        "localPrice": "NZ$52,990",
                        "rmbPrice": "23万",
                        "website": "https://www.bydauto.co.nz/vehicles/sealion-6"
                    },
                    "SHARK 6": {
                        "sales": 0,
                        "localPrice": "NZ$69,990",
                        "rmbPrice": "30万",
                        "website": "https://www.bydauto.co.nz/vehicles/shark-6"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "C10": {
                        "sales": 0,
                        "localPrice": "NZ$49,990",
                        "rmbPrice": "21万",
                        "website": "https://www.leapmotor.net/nz/c10"
                    },
                    "C10 Ultra": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/nz/reev"
                    }
                }
            }
        }
    },
    "Chile": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "SONG PRO": {
                        "sales": 0,
                        "localPrice": "CLP$25,990,000",
                        "rmbPrice": "20万",
                        "website": "https://byd-auto.cl/modelos/"
                    },
                    "Haibao/Seal": {
                        "sales": 0,
                        "localPrice": "CLP$47,990,000",
                        "rmbPrice": "37万",
                        "website": "https://byd-auto.cl/modelos/"
                    },
                    "Han": {
                        "sales": 0,
                        "localPrice": "CLP$59,990,000",
                        "rmbPrice": "46万",
                        "website": "https://byd-auto.cl/modelos/"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 0,
                        "localPrice": "CLP$30,990,000",
                        "rmbPrice": "24万",
                        "website": "https://byd-auto.cl/modelos/"
                    },
                    "YUAN PLUS": {
                        "sales": 0,
                        "localPrice": "CLP$36,990,000",
                        "rmbPrice": "28万",
                        "website": "https://byd-auto.cl/modelos/"
                    },
                    "YUAN PRO": {
                        "sales": 0,
                        "localPrice": "CLP$22,990,000",
                        "rmbPrice": "18万",
                        "website": "https://byd-auto.cl/modelos/"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "CLP$67,990,000",
                        "rmbPrice": "52万",
                        "website": "https://byd-auto.cl/modelos/"
                    },
                    "Seagull/Dolphin mini": {
                        "sales": 0,
                        "localPrice": "CLP$16,990,000",
                        "rmbPrice": "13万",
                        "website": "https://byd-auto.cl/modelos/"
                    },
                    "SHARK 6": {
                        "sales": 0,
                        "localPrice": "CLP$41,990,000",
                        "rmbPrice": "32万",
                        "website": "https://byd-auto.cl/modelos/"
                    }
                }
            }
        }
    },
    "Colombia": {
        "brands": {
            "比亚迪": {
                "sales": 2687,
                "models": {
                    "Dolphin": {
                        "sales": 228,
                        "localPrice": "COL$114,990,000",
                        "rmbPrice": "21万",
                        "website": "https://bydauto.com.co/modelo/byd-dolphin-ev/byd-i-dolphin/"
                    },
                    "Han": {
                        "sales": 0,
                        "localPrice": "COL$299,990,000",
                        "rmbPrice": "54万",
                        "website": "https://bydauto.com.co/modelo/byd-han-ev/byd-han-ev/"
                    },
                    "Quin Plus": {
                        "sales": 0,
                        "localPrice": "COL$129,990,000",
                        "rmbPrice": "24万",
                        "website": "https://www.autocosmos.com.co/catalogo/segmentos/byd/quin-plus-dm-i"
                    },
                    "Seagull": {
                        "sales": 0,
                        "localPrice": "COL$76,990,000",
                        "rmbPrice": "14万",
                        "website": "https://bydauto.com.co/modelo/byd-seagull-ev/byd-seagull/"
                    },
                    "Haibao/Seal": {
                        "sales": 0,
                        "localPrice": "COL$249,990,000",
                        "rmbPrice": "45万",
                        "website": "https://www.autocosmos.com.co/catalogo/segmentos/byd/seal"
                    },
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "COL$214,990,000",
                        "rmbPrice": "39万",
                        "website": "https://bydauto.com.co/modelo/byd-sealion-7/byd-sealion-7/"
                    },
                    "Song": {
                        "sales": 567,
                        "localPrice": "COL$209,990,000",
                        "rmbPrice": "38万",
                        "website": "https://bydauto.com.co/modelo/byd-song-plus-dm-i-15t/byd-song-plus-dm-i-15t/"
                    },
                    "Yuan": {
                        "sales": 1892,
                        "localPrice": "COL$149,990,000",
                        "rmbPrice": "27万",
                        "website": "https://bydauto.com.co/modelo/byd-yuan-plus-lux/byd-yuan-plus-lux/"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/es-co/models/x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/es-co/models/001"
                    }
                }
            }
        }
    },
    "Uruguay": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "$U55,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "SONG PRO": {
                        "sales": 0,
                        "localPrice": "$U39,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "SONG PLUS": {
                        "sales": 0,
                        "localPrice": "$U49,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "SHARK 6": {
                        "sales": 0,
                        "localPrice": "$U69,490",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "YUAN PRO": {
                        "sales": 0,
                        "localPrice": "$U30,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "$U80,990",
                        "rmbPrice": "2万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "Haibao/Seal": {
                        "sales": 0,
                        "localPrice": "$U50,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "NEW E2": {
                        "sales": 0,
                        "localPrice": "$U27,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "YUAN PLUS": {
                        "sales": 0,
                        "localPrice": "$U39,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "Seagull": {
                        "sales": 0,
                        "localPrice": "$U21,990",
                        "rmbPrice": "0万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "Han": {
                        "sales": 0,
                        "localPrice": "$U69,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    },
                    "D1": {
                        "sales": 0,
                        "localPrice": "$U27,990",
                        "rmbPrice": "1万",
                        "website": "https://byd.com.uy/autos/"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "C11": {
                        "sales": 0,
                        "localPrice": "$U47,990",
                        "rmbPrice": "1万",
                        "website": "https://www.leapmotor.com.uy/c11"
                    },
                    "T03": {
                        "sales": 0,
                        "localPrice": "$U22,990",
                        "rmbPrice": "0万",
                        "website": "https://www.leapmotor.com.uy/t03"
                    }
                }
            }
        }
    },
    "France": {
        "brands": {
            "比亚迪": {
                "sales": 5415,
                "models": {
                    "Dolphin": {
                        "sales": 1024,
                        "localPrice": "€33,990",
                        "rmbPrice": "28万",
                        "website": "https://www.byd.com/fr/order-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 1024,
                        "localPrice": "€46,990",
                        "rmbPrice": "38万",
                        "website": "https://www.byd.com/fr/order-seal"
                    },
                    "Han": {
                        "sales": 161,
                        "localPrice": "€71,160",
                        "rmbPrice": "58万",
                        "website": "https://www.byd.com/fr/order-han"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 797,
                        "localPrice": "€38,990",
                        "rmbPrice": "32万",
                        "website": "https://www.byd.com/fr/order-atto3"
                    },
                    "Seal U": {
                        "sales": 2007,
                        "localPrice": "€37,500",
                        "rmbPrice": "30万",
                        "website": "https://www.byd.com/fr/order-seal-u-dm-i"
                    },
                    "Sealion 07": {
                        "sales": 83,
                        "localPrice": "€46,990",
                        "rmbPrice": "38万",
                        "website": "https://www.byd.com/fr/order-sealion-7"
                    },
                    "Tang": {
                        "sales": 60,
                        "localPrice": "€72,000",
                        "rmbPrice": "58万",
                        "website": "https://www.byd.com/fr/order-tang"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "€29,990",
                        "rmbPrice": "24万",
                        "website": "https://www.byd.com/fr/configurateur/atto-2"
                    }
                }
            },
            "小鹏": {
                "sales": 511,
                "models": {
                    "XPeng G6": {
                        "sales": 316,
                        "localPrice": "€42,990",
                        "rmbPrice": "35万",
                        "website": "https://store.xpeng.com/fr/configurator/G6"
                    },
                    "XPeng G9": {
                        "sales": 195,
                        "localPrice": "€59,990",
                        "rmbPrice": "49万",
                        "website": "https://store.xpeng.com/fr/configurator/G9_2024"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/fr-fr/models/001"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/fr-fr/models/x"
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/fr-fr/models/7x"
                    }
                }
            },
            "零跑": {
                "sales": 330,
                "models": {
                    "T03": {
                        "sales": 258,
                        "localPrice": "€17,600",
                        "rmbPrice": "14万",
                        "website": "https://www.leapmotor.net/fr/t03"
                    },
                    "C10": {
                        "sales": 72,
                        "localPrice": "€32,250",
                        "rmbPrice": "26万",
                        "website": "https://www.leapmotor.net/fr/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/fr/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/fr/B10"
                    }
                }
            }
        }
    },
    "Spain": {
        "brands": {
            "比亚迪": {
                "sales": 5393,
                "models": {
                    "Dolphin": {
                        "sales": 1154,
                        "localPrice": "€30,990",
                        "rmbPrice": "25万",
                        "website": "https://www.byd.com/es-es/configurador/dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 1023,
                        "localPrice": "€46,990",
                        "rmbPrice": "38万",
                        "website": "https://www.byd.com/es-es/configurador/sealion-7"
                    },
                    "Han": {
                        "sales": 17,
                        "localPrice": "€69,990",
                        "rmbPrice": "57万",
                        "website": "https://www.byd.com/es-es/coches-electricos/han"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 1231,
                        "localPrice": "€26,240",
                        "rmbPrice": "21万",
                        "website": "https://www.byd.com/es-es/configurador/atto3"
                    },
                    "Seal U": {
                        "sales": 1592,
                        "localPrice": "€36,990",
                        "rmbPrice": "30万",
                        "website": "https://www.byd.com/es-es/configurador/seal-u-dm-i"
                    },
                    "Sealion 07": {
                        "sales": 32,
                        "localPrice": "€46,780",
                        "rmbPrice": "38万",
                        "website": "https://www.byd.com/es-es/configurador/sealion-7"
                    },
                    "Tang": {
                        "sales": 7,
                        "localPrice": "€72,000",
                        "rmbPrice": "58万",
                        "website": "https://www.byd.com/es-es/configurador/tang"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "€29,990",
                        "rmbPrice": "24万",
                        "website": "https://www.byd.com/es-es/configurador/atto-2"
                    }
                }
            },
            "小鹏": {
                "sales": 65,
                "models": {
                    "XPeng P7": {
                        "sales": 7,
                        "localPrice": "€43,659",
                        "rmbPrice": "35万",
                        "website": "https://www.xpeng-auto.es/p7"
                    },
                    "XPeng G6": {
                        "sales": 47,
                        "localPrice": "€35,559",
                        "rmbPrice": "29万",
                        "website": "https://www.xpeng-auto.es/g6"
                    },
                    "XPeng G9": {
                        "sales": 11,
                        "localPrice": "€58,970",
                        "rmbPrice": "48万",
                        "website": "https://www.xpeng-auto.es/g9"
                    }
                }
            },
            "零跑": {
                "sales": 253,
                "models": {
                    "T03": {
                        "sales": 199,
                        "localPrice": "€11,900",
                        "rmbPrice": "10万",
                        "website": "https://www.leapmotor.net/es/t03"
                    },
                    "C10": {
                        "sales": 54,
                        "localPrice": "€25,900",
                        "rmbPrice": "21万",
                        "website": "https://www.leapmotor.net/es/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/es/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/es/B10"
                    }
                }
            }
        }
    },
    "Italy": {
        "brands": {
            "比亚迪": {
                "sales": 2776,
                "models": {
                    "Dolphin": {
                        "sales": 411,
                        "localPrice": "€28,600",
                        "rmbPrice": "23万",
                        "website": "https://www.byd.com/it/configuratore/dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 633,
                        "localPrice": "€41,130",
                        "rmbPrice": "33万",
                        "website": "https://www.byd.com/it/configuratore/seal"
                    },
                    "Han": {
                        "sales": 22,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.byd.com/it/auto-elettriche/han"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 544,
                        "localPrice": "€32,810",
                        "rmbPrice": "27万",
                        "website": "https://www.byd.com/it/configuratore/atto-3"
                    },
                    "Seal U": {
                        "sales": 1166,
                        "localPrice": "€39,800",
                        "rmbPrice": "32万",
                        "website": "https://www.byd.com/it/configuratore/seal-u-dm-i"
                    },
                    "Sealion 07": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.byd.com/it/configuratore/tang-2024"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "€67,250",
                        "rmbPrice": "55万",
                        "website": "https://www.byd.com/it/configuratore/tang-2024"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "€29,990",
                        "rmbPrice": "24万",
                        "website": "https://www.byd.com/it/configuratore/atto-2"
                    }
                }
            },
            "零跑": {
                "sales": 274,
                "models": {
                    "T03": {
                        "sales": 197,
                        "localPrice": "€15,500",
                        "rmbPrice": "13万",
                        "website": "https://www.leapmotor.net/it/t03"
                    },
                    "C10": {
                        "sales": 77,
                        "localPrice": "€33,900",
                        "rmbPrice": "28万",
                        "website": "https://www.leapmotor.net/it/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/it/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/it/B10"
                    }
                }
            }
        }
    },
    "Portugal": {
        "brands": {
            "比亚迪": {
                "sales": 3122,
                "models": {
                    "Dolphin": {
                        "sales": 583,
                        "localPrice": "€26,790",
                        "rmbPrice": "22万",
                        "website": "https://www.byd-auto.pt/modelos/byd-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 795,
                        "localPrice": "€44,990",
                        "rmbPrice": "37万",
                        "website": "https://www.byd-auto.pt/modelos/byd-seal"
                    },
                    "Han": {
                        "sales": 46,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.byd-auto.pt/modelos/byd-han"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 1108,
                        "localPrice": "€32,389",
                        "rmbPrice": "26万",
                        "website": "https://www.byd-auto.pt/modelos/byd-atto-3"
                    },
                    "Seal U": {
                        "sales": 273,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.byd-auto.pt/modelos/byd-seal-u-dm-i"
                    },
                    "Sealion 07": {
                        "sales": 5,
                        "localPrice": "€47,990",
                        "rmbPrice": "39万",
                        "website": "https://www.byd-auto.pt/modelos/byd-sealion-7"
                    },
                    "Tang": {
                        "sales": 30,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.byd-auto.pt/modelos/byd-tang"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "€29,990",
                        "rmbPrice": "24万",
                        "website": "https://www.byd-auto.pt/modelos/byd-atto-2"
                    }
                }
            },
            "小鹏": {
                "sales": 86,
                "models": {
                    "XPeng P7": {
                        "sales": 10,
                        "localPrice": "€54,990",
                        "rmbPrice": "45万",
                        "website": "https://www.xpeng-auto.pt/p7"
                    },
                    "XPeng G6": {
                        "sales": 47,
                        "localPrice": "€46,990",
                        "rmbPrice": "38万",
                        "website": "https://www.xpeng-auto.pt/g6"
                    },
                    "XPeng G9": {
                        "sales": 29,
                        "localPrice": "€62,790",
                        "rmbPrice": "51万",
                        "website": "https://www.xpeng-auto.pt/g9"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "€18,985",
                        "rmbPrice": "15万",
                        "website": "https://www.leapmotor.net/pt/t03"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "€36,785",
                        "rmbPrice": "30万",
                        "website": "https://www.leapmotor.net/pt/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/pt/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/pt/B10"
                    }
                }
            }
        }
    },
    "United Kingdom": {
        "brands": {
            "比亚迪": {
                "sales": 8788,
                "models": {
                    "Dolphin": {
                        "sales": 2635,
                        "localPrice": "£26,205",
                        "rmbPrice": "25万",
                        "website": "https://www.byd.com/uk/order-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 1975,
                        "localPrice": "£45,705",
                        "rmbPrice": "44万",
                        "website": "https://www.byd.com/uk/order-seal"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 3427,
                        "localPrice": "£37,705",
                        "rmbPrice": "36万",
                        "website": "https://www.byd.com/uk/order-atto3"
                    },
                    "Seal U": {
                        "sales": 751,
                        "localPrice": "£33,315",
                        "rmbPrice": "32万",
                        "website": "https://www.byd.com/uk/order-seal-u-dm-i"
                    },
                    "Sealion 07": {
                        "sales": 0,
                        "localPrice": "£47,000",
                        "rmbPrice": "45万",
                        "website": "https://www.byd.com/uk/order-sealion-7"
                    }
                }
            },
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "£39,990",
                        "rmbPrice": "38万",
                        "website": "https://xpengcars.co.uk/configurator/g6/?_gl=1*e30nkw*_up*MQ..*_ga*MzEzMTg4NjM3LjE3NDE3NDQ0MDk.*_ga_8FKNFMCQZ9*MTc0MTc0NDQwOS4xLjAuMTc0MTc0NDQxMS4wLjAuMA..#/vanilla"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "£15,995",
                        "rmbPrice": "15万",
                        "website": "https://www.leapmotor.net/uk/t03"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "£36,500",
                        "rmbPrice": "35万",
                        "website": "https://www.leapmotor.net/uk/c10"
                    }
                }
            },
            "长城": {
                "sales": 0,
                "models": {
                    "ORA 03 / Funky Cat": {
                        "sales": 0,
                        "localPrice": "£24,995",
                        "rmbPrice": "24万",
                        "website": "https://gwmcars.co.uk/models/ora-03/"
                    }
                }
            }
        }
    },
    "Ireland": {
        "brands": {
            "比亚迪": {
                "sales": 1406,
                "models": {
                    "Dolphin": {
                        "sales": 298,
                        "localPrice": "€31,160",
                        "rmbPrice": "25万",
                        "website": "https://www.bydauto.ie/en/dolphin/configure"
                    },
                    "Haibao/Seal": {
                        "sales": 693,
                        "localPrice": "€45,435",
                        "rmbPrice": "37万",
                        "website": "https://www.bydauto.ie/en/seal/configure"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 415,
                        "localPrice": "€40,033",
                        "rmbPrice": "33万",
                        "website": "https://www.bydauto.ie/en/atto-3/configure"
                    },
                    "Seal U": {
                        "sales": 0,
                        "localPrice": "€42,150",
                        "rmbPrice": "34万",
                        "website": "https://www.bydauto.ie/en/seal-u/configure"
                    },
                    "Sealion 07": {
                        "sales": 0,
                        "localPrice": "€45,435",
                        "rmbPrice": "37万",
                        "website": "https://www.bydauto.ie/en/sealion-7/configure?_gl=1*cpa46m*_up*MQ..*_ga*MTk1OTg0MTYxNC4xNzQ0MTkzMTIz*_ga_LSRSR0JE8X*MTc0NDE5MzEyMy4xLjAuMTc0NDE5MzEyMy4wLjAuMA.."
                    }
                }
            },
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "€42,000",
                        "rmbPrice": "34万",
                        "website": "https://www.xpeng.com/ie/models/g6?_gl=1*jmrcwz*_up*MQ..*_ga*NDQyNjQ3NzUuMTc0NzA0MDU1NQ..*_ga_K3JL9TXJFK*czE3NDcwNDA1NTUkbzEkZzAkdDE3NDcwNDA1NTUkajAkbDAkaDA."
                    }
                }
            }
        }
    },
    "Belgium": {
        "brands": {
            "比亚迪": {
                "sales": 2274,
                "models": {
                    "Dolphin": {
                        "sales": 261,
                        "localPrice": "€29,000",
                        "rmbPrice": "24万",
                        "website": "https://drive.bydauto.be/en/dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 520,
                        "localPrice": "€41,500",
                        "rmbPrice": "34万",
                        "website": "https://drive.bydauto.be/en/seal"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 632,
                        "localPrice": "€34,000",
                        "rmbPrice": "28万",
                        "website": "https://drive.bydauto.be/en/atto-3"
                    },
                    "Seal U": {
                        "sales": 815,
                        "localPrice": "€43,490",
                        "rmbPrice": "35万",
                        "website": "https://drive.bydauto.be/en/seal-u"
                    },
                    "Sealion 07": {
                        "sales": 7,
                        "localPrice": "€48,990",
                        "rmbPrice": "40万",
                        "website": "https://drive.bydauto.be/en/sealion-7"
                    },
                    "Tang": {
                        "sales": 39,
                        "localPrice": "€72,000",
                        "rmbPrice": "58万",
                        "website": "https://drive.bydauto.be/en/tang"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "€29,990",
                        "rmbPrice": "24万",
                        "website": "https://drive.bydauto.be/en/atto-2"
                    }
                }
            },
            "小鹏": {
                "sales": 231,
                "models": {
                    "XPeng P7": {
                        "sales": 18,
                        "localPrice": "€49,990",
                        "rmbPrice": "41万",
                        "website": "https://store.xpeng.com/be/configurator/P7"
                    },
                    "XPeng G6": {
                        "sales": 81,
                        "localPrice": "€42,990",
                        "rmbPrice": "35万",
                        "website": "https://store.xpeng.com/be/configurator/g6"
                    },
                    "XPeng G9": {
                        "sales": 132,
                        "localPrice": "€57,990",
                        "rmbPrice": "47万",
                        "website": "https://store.xpeng.com/be/configurator/G9"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/fr-be/models/001"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/fr-be/models/x"
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/fr-be/models/7x"
                    }
                }
            },
            "零跑": {
                "sales": 85,
                "models": {
                    "T03": {
                        "sales": 35,
                        "localPrice": "€18,900",
                        "rmbPrice": "15万",
                        "website": "https://www.leapmotor.net/be-fr/t03"
                    },
                    "C10": {
                        "sales": 50,
                        "localPrice": "€34,900",
                        "rmbPrice": "28万",
                        "website": "https://www.leapmotor.net/be-fr/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/be-fr/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/be-fr/B10"
                    }
                }
            }
        }
    },
    "Netherlands": {
        "brands": {
            "比亚迪": {
                "sales": 3204,
                "models": {
                    "Dolphin": {
                        "sales": 577,
                        "localPrice": "€33,690",
                        "rmbPrice": "27万",
                        "website": "https://www.bydauto.nl/modellen/"
                    },
                    "Haibao/Seal": {
                        "sales": 532,
                        "localPrice": "€41,690",
                        "rmbPrice": "34万",
                        "website": "https://www.bydauto.nl/modellen/"
                    },
                    "Han": {
                        "sales": 20,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.bydauto.nl/modellen/"
                    },
                    "ATTO 2": {
                        "sales": 28,
                        "localPrice": "€31,690",
                        "rmbPrice": "26万",
                        "website": "https://www.bydauto.nl/modellen/"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 1300,
                        "localPrice": "€34,690",
                        "rmbPrice": "28万",
                        "website": "https://www.bydauto.nl/modellen/"
                    },
                    "Seal U": {
                        "sales": 126,
                        "localPrice": "€39,790",
                        "rmbPrice": "32万",
                        "website": "https://www.bydauto.nl/modellen/"
                    },
                    "Sealion 07": {
                        "sales": 12,
                        "localPrice": "€50,690",
                        "rmbPrice": "41万",
                        "website": "https://www.bydauto.nl/modellen/"
                    },
                    "Tang": {
                        "sales": 36,
                        "localPrice": "€68,090",
                        "rmbPrice": "55万",
                        "website": "https://www.bydauto.nl/modellen/"
                    }
                }
            },
            "小鹏": {
                "sales": 1293,
                "models": {
                    "XPeng P7": {
                        "sales": 62,
                        "localPrice": "€49,990",
                        "rmbPrice": "41万",
                        "website": "https://store.xpeng.com/nl/configurator/P7?source=ow_os_top_nav&channel=&owner=&campaign_id="
                    },
                    "XPeng G6": {
                        "sales": 480,
                        "localPrice": "€42,990",
                        "rmbPrice": "35万",
                        "website": "https://store.xpeng.com/nl/configurator/G6"
                    },
                    "XPeng G9": {
                        "sales": 751,
                        "localPrice": "€59,990",
                        "rmbPrice": "49万",
                        "website": "https://store.xpeng.com/nl/configurator/G9_2024"
                    }
                }
            },
            "蔚来": {
                "sales": 263,
                "models": {
                    "NIO ET5": {
                        "sales": 65,
                        "localPrice": "€50,033",
                        "rmbPrice": "41万",
                        "website": "https://www.nio.com/nl_NL/configurator/index?vehicle=ET5"
                    },
                    "NIO ET7": {
                        "sales": 119,
                        "localPrice": "€72,233",
                        "rmbPrice": "59万",
                        "website": "https://www.nio.com/nl_NL/configurator/index?vehicle=ET7"
                    },
                    "NIO ET5t": {
                        "sales": 0,
                        "localPrice": "€51,233",
                        "rmbPrice": "42万",
                        "website": "https://www.nio.com/nl_NL/configurator/index?vehicle=ET5%20Touring"
                    },
                    "NIO EL6": {
                        "sales": 54,
                        "localPrice": "€55,233",
                        "rmbPrice": "45万",
                        "website": "https://www.nio.com/nl_NL/configurator/index?vehicle=EL6"
                    },
                    "NIO EL7": {
                        "sales": 19,
                        "localPrice": "€76,900",
                        "rmbPrice": "62万",
                        "website": "https://www.nio.com/nl_NL/configurator/index?vehicle=EL7"
                    },
                    "NIO EL8": {
                        "sales": 6,
                        "localPrice": "€78,233",
                        "rmbPrice": "64万",
                        "website": "https://www.nio.com/nl_NL/configurator/index?vehicle=EL8"
                    }
                }
            },
            "吉利": {
                "sales": 951,
                "models": {
                    "ZEEKR 001": {
                        "sales": 572,
                        "localPrice": "€54,990",
                        "rmbPrice": "45万",
                        "website": "https://shop.zeekr.eu/nl-nl/configuration/?linkCode=1&_gl=1*7hn07w*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjgxNTgkajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjgxNTgkajAkbDAkaDA."
                    },
                    "ZEEKR X": {
                        "sales": 379,
                        "localPrice": "€37,990",
                        "rmbPrice": "31万",
                        "website": "https://shop.zeekr.eu/nl-NL/configuration/?linkCode=1101&_gl=1*1mpcj7c*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjgzMTUkajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjgzMTUkajAkbDAkaDA."
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "€52,990",
                        "rmbPrice": "43万",
                        "website": "https://shop.zeekr.eu/nl-nl/configuration/?linkCode=1075&_gl=1*yzxund*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjgzMjIkajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjgzMjIkajAkbDAkaDA."
                    }
                }
            },
            "零跑": {
                "sales": 54,
                "models": {
                    "T03": {
                        "sales": 42,
                        "localPrice": "€19,950",
                        "rmbPrice": "16万",
                        "website": "https://www.leapmotor.net/nl/t03"
                    },
                    "C10": {
                        "sales": 12,
                        "localPrice": "€39,050",
                        "rmbPrice": "32万",
                        "website": "https://www.leapmotor.net/nl/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "€39,050",
                        "rmbPrice": "32万",
                        "website": "https://www.leapmotor.net/nl/c10reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/nl/B10"
                    }
                }
            }
        }
    },
    "Austria": {
        "brands": {
            "比亚迪": {
                "sales": 3866,
                "models": {
                    "Dolphin": {
                        "sales": 481,
                        "localPrice": "€34,980",
                        "rmbPrice": "28万",
                        "website": "https://www.bydauto.at/"
                    },
                    "Haibao/Seal": {
                        "sales": 1214,
                        "localPrice": "€47,980",
                        "rmbPrice": "39万",
                        "website": "https://www.bydauto.at/"
                    },
                    "Han": {
                        "sales": 13,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.bydauto.at/"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 899,
                        "localPrice": "€38,980",
                        "rmbPrice": "32万",
                        "website": "https://www.bydauto.at/"
                    },
                    "Seal U": {
                        "sales": 106,
                        "localPrice": "€37,890",
                        "rmbPrice": "31万",
                        "website": "https://www.bydauto.at/"
                    },
                    "Sealion 07": {
                        "sales": 14,
                        "localPrice": "€47,980",
                        "rmbPrice": "39万",
                        "website": "https://www.bydauto.at/"
                    },
                    "Tang": {
                        "sales": 50,
                        "localPrice": "€72,390",
                        "rmbPrice": "59万",
                        "website": "https://www.bydauto.at/"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "€19,090",
                        "rmbPrice": "16万",
                        "website": "https://www.leapmotor.net/at/t03"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "€37,000",
                        "rmbPrice": "30万",
                        "website": "https://www.leapmotor.net/at/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/at/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/at/B10"
                    }
                }
            }
        }
    },
    "Switzerland": {
        "brands": {
            "比亚迪": {
                "sales": 30,
                "models": {
                    "Haibao/Seal": {
                        "sales": 30,
                        "localPrice": "CHF48,990",
                        "rmbPrice": "43万",
                        "website": "https://www.byd.com/de-ch/konfiguration/seal"
                    },
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "CHF49,990",
                        "rmbPrice": "43万",
                        "website": "https://www.byd.com/de-ch/konfiguration/sealion-7"
                    },
                    "Seal U": {
                        "sales": 0,
                        "localPrice": "CHF42,990",
                        "rmbPrice": "37万",
                        "website": "https://www.byd.com/de-ch/konfiguration/seal-u-dm-i"
                    }
                }
            },
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng P7": {
                        "sales": 0,
                        "localPrice": "CHF599,900",
                        "rmbPrice": "521万",
                        "website": "https://store.xpeng.com/se/configurator/p7"
                    },
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "CHF529,900",
                        "rmbPrice": "460万",
                        "website": "https://store.xpeng.com/se/configurator/G6"
                    },
                    "XPeng G9": {
                        "sales": 0,
                        "localPrice": "CHF719,900",
                        "rmbPrice": "625万",
                        "website": "https://store.xpeng.com/se/configurator/G9_2024"
                    }
                }
            },
            "零跑": {
                "sales": 6,
                "models": {
                    "T03": {
                        "sales": 4,
                        "localPrice": "CHF16,990",
                        "rmbPrice": "15万",
                        "website": "https://www.leapmotor.net/ch-de/t03"
                    },
                    "C10": {
                        "sales": 2,
                        "localPrice": "CHF35,990",
                        "rmbPrice": "31万",
                        "website": "https://www.leapmotor.net/ch-de/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "CHF35,990",
                        "rmbPrice": "31万",
                        "website": "https://www.leapmotor.net/ch-de/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/ch-de/B10"
                    }
                }
            }
        }
    },
    "Luxembourg": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "€47,370",
                        "rmbPrice": "38万",
                        "website": "https://drive.bydauto.be/lu-fr/sealion-7"
                    },
                    "Seal U": {
                        "sales": 0,
                        "localPrice": "€42,052",
                        "rmbPrice": "34万",
                        "website": "https://drive.bydauto.be/lu-fr/seal-u"
                    },
                    "Haibao/Seal": {
                        "sales": 0,
                        "localPrice": "€40,128",
                        "rmbPrice": "33万",
                        "website": "https://drive.bydauto.be/lu-fr/seal"
                    },
                    "Dolphin": {
                        "sales": 0,
                        "localPrice": "€28,041",
                        "rmbPrice": "23万",
                        "website": "https://drive.bydauto.be/lu-fr/dolphin"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "€28,999",
                        "rmbPrice": "24万",
                        "website": "https://drive.bydauto.be/lu-fr/atto-2"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "€69,620",
                        "rmbPrice": "57万",
                        "website": "https://drive.bydauto.be/lu-fr/tang"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 0,
                        "localPrice": "€37,700",
                        "rmbPrice": "31万",
                        "website": "https://drive.bydauto.be/lu-fr/atto-3"
                    }
                }
            },
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng P7": {
                        "sales": 0,
                        "localPrice": "€47,990",
                        "rmbPrice": "39万",
                        "website": "https://store.xpeng.com/lu/configurator/P7"
                    },
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "€41,990",
                        "rmbPrice": "34万",
                        "website": "https://store.xpeng.com/lu/configurator/G6"
                    },
                    "XPeng G9": {
                        "sales": 0,
                        "localPrice": "€57,990",
                        "rmbPrice": "47万",
                        "website": "https://store.xpeng.com/lu/configurator/G9_2024"
                    }
                }
            },
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "€18,900",
                        "rmbPrice": "15万",
                        "website": "https://www.leapmotor.net/lu/t03"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "€34,900",
                        "rmbPrice": "28万",
                        "website": "https://www.leapmotor.net/lu/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/lu/reev"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/lu/B10"
                    }
                }
            }
        }
    },
    "Sweden": {
        "brands": {
            "比亚迪": {
                "sales": 912,
                "models": {
                    "Dolphin": {
                        "sales": 321,
                        "localPrice": "kr439,900",
                        "rmbPrice": "30万",
                        "website": "https://bydauto.se/modeller/byd-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 101,
                        "localPrice": "kr589,900",
                        "rmbPrice": "40万",
                        "website": "https://bydauto.se/modeller/byd-seal"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 306,
                        "localPrice": "kr484,900",
                        "rmbPrice": "33万",
                        "website": "https://bydauto.se/modeller/byd-atto-3"
                    },
                    "Seal U": {
                        "sales": 72,
                        "localPrice": "kr499,900",
                        "rmbPrice": "34万",
                        "website": "https://bydauto.se/modeller/byd-seal-u-dm-i"
                    },
                    "Tang": {
                        "sales": 43,
                        "localPrice": "kr799,900",
                        "rmbPrice": "55万",
                        "website": "https://bydauto.se/modeller/byd-tang"
                    }
                }
            },
            "小鹏": {
                "sales": 746,
                "models": {
                    "XPeng P7": {
                        "sales": 25,
                        "localPrice": "kr599,900",
                        "rmbPrice": "41万",
                        "website": "https://store.xpeng.com/se/configurator/P7?source=ow_os_top_nav&channel=&owner=&campaign_id="
                    },
                    "XPeng G6": {
                        "sales": 236,
                        "localPrice": "kr529,900",
                        "rmbPrice": "36万",
                        "website": "https://store.xpeng.com/se/configurator/G6"
                    },
                    "XPeng G9": {
                        "sales": 485,
                        "localPrice": "kr719,900",
                        "rmbPrice": "49万",
                        "website": "https://store.xpeng.com/se/configurator/G9_2024"
                    }
                }
            },
            "蔚来": {
                "sales": 124,
                "models": {
                    "NIO ET5": {
                        "sales": 19,
                        "localPrice": "kr556,000",
                        "rmbPrice": "38万",
                        "website": "https://www.nio.com/sv_SE/configurator/index?vehicle=ET5"
                    },
                    "NIO ET7": {
                        "sales": 54,
                        "localPrice": "kr799,000",
                        "rmbPrice": "55万",
                        "website": "https://www.nio.com/sv_SE/configurator/index?vehicle=ET7"
                    },
                    "NIO ET5t": {
                        "sales": 0,
                        "localPrice": "kr576,000",
                        "rmbPrice": "40万",
                        "website": "https://www.nio.com/sv_SE/configurator/index?vehicle=ET5%20Touring"
                    },
                    "NIO EL6": {
                        "sales": 16,
                        "localPrice": "kr639,000",
                        "rmbPrice": "44万",
                        "website": "https://www.nio.com/sv_SE/configurator/index?vehicle=EL6"
                    },
                    "NIO EL7": {
                        "sales": 28,
                        "localPrice": "kr839,000",
                        "rmbPrice": "58万",
                        "website": "https://www.nio.com/sv_SE/configurator/index?vehicle=EL7"
                    },
                    "NIO EL8": {
                        "sales": 7,
                        "localPrice": "kr999,000",
                        "rmbPrice": "69万",
                        "website": "https://www.nio.com/sv_SE/configurator/index?vehicle=EL8"
                    }
                }
            },
            "吉利": {
                "sales": 1176,
                "models": {
                    "ZEEKR 001": {
                        "sales": 551,
                        "localPrice": "kr677,000",
                        "rmbPrice": "46万",
                        "website": "https://shop.zeekr.eu/sv-SE/configuration/?linkCode=1&_gl=1*1cxe8qg*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjc2MzAkajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjc2MzAkajAkbDAkaDA."
                    },
                    "ZEEKR X": {
                        "sales": 625,
                        "localPrice": "kr469,000",
                        "rmbPrice": "32万",
                        "website": "https://shop.zeekr.eu/sv-SE/configuration/?linkCode=1101&_gl=1*h5excm*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjc4MDckajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjc4MDckajAkbDAkaDA."
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "kr579,000",
                        "rmbPrice": "40万",
                        "website": "https://shop.zeekr.eu/sv-se/configuration/?linkCode=1075&_gl=1*11cwdre*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjc4NDgkajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjc4NDgkajAkbDAkaDA."
                    }
                }
            },
            "长城": {
                "sales": 97,
                "models": {
                    "ORA 03 / Funky Cat": {
                        "sales": 97,
                        "localPrice": "kr419,900",
                        "rmbPrice": "29万",
                        "website": "https://ora.se/vara-elbilar?_gl=1*124pfb8*_up*MQ..*_ga*MzAxMzIyMjc1LjE3NDc3MjIyMTg.*_ga_6FVDK5EM9W*czE3NDc3MjIyMTgkbzEkZzAkdDE3NDc3MjIyMTgkajAkbDAkaDA."
                    },
                    "ORA 03+": {
                        "sales": 0,
                        "localPrice": "kr499,900",
                        "rmbPrice": "34万",
                        "website": "https://ora.se/vara-elbilar?_gl=1*124pfb8*_up*MQ..*_ga*MzAxMzIyMjc1LjE3NDc3MjIyMTg.*_ga_6FVDK5EM9W*czE3NDc3MjIyMTgkbzEkZzAkdDE3NDc3MjIyMTgkajAkbDAkaDA."
                    }
                }
            }
        }
    },
    "Norway": {
        "brands": {
            "比亚迪": {
                "sales": 2669,
                "models": {
                    "Dolphin": {
                        "sales": 612,
                        "localPrice": "kr299,900",
                        "rmbPrice": "21万",
                        "website": "https://byd.no/modeller"
                    },
                    "Haibao/Seal": {
                        "sales": 295,
                        "localPrice": "kr469,900",
                        "rmbPrice": "33万",
                        "website": "https://byd.no/modeller"
                    },
                    "Han": {
                        "sales": 235,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://byd.no/modeller"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 227,
                        "localPrice": "kr399,900",
                        "rmbPrice": "28万",
                        "website": "https://byd.no/modeller"
                    },
                    "Seal U": {
                        "sales": 453,
                        "localPrice": "kr399,900",
                        "rmbPrice": "28万",
                        "website": "https://byd.no/modeller"
                    },
                    "Sealion 07": {
                        "sales": 294,
                        "localPrice": "kr469,900",
                        "rmbPrice": "33万",
                        "website": "https://byd.no/modeller"
                    },
                    "Tang": {
                        "sales": 553,
                        "localPrice": "kr699,900",
                        "rmbPrice": "48万",
                        "website": "https://byd.no/modeller"
                    }
                }
            },
            "小鹏": {
                "sales": 1960,
                "models": {
                    "XPeng P7": {
                        "sales": 48,
                        "localPrice": "kr439,900",
                        "rmbPrice": "30万",
                        "website": "https://store.xpeng.com/no/configurator/p7?source=ow_os_top_nav&channel=&owner=&campaign_id="
                    },
                    "XPeng G6": {
                        "sales": 732,
                        "localPrice": "kr387,778",
                        "rmbPrice": "27万",
                        "website": "https://store.xpeng.com/no/configurator/G6"
                    },
                    "XPeng G9": {
                        "sales": 1180,
                        "localPrice": "kr510,084",
                        "rmbPrice": "35万",
                        "website": "https://store.xpeng.com/no/configurator/G9_2024"
                    },
                    "XPeng X9": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://event.xpeng.com/no/47d954.html"
                    }
                }
            },
            "蔚来": {
                "sales": 890,
                "models": {
                    "NIO ET5": {
                        "sales": 115,
                        "localPrice": "kr426,000",
                        "rmbPrice": "29万",
                        "website": "https://www.nio.com/no_NO/configurator/ET5"
                    },
                    "NIO ET7": {
                        "sales": 102,
                        "localPrice": "kr619,000",
                        "rmbPrice": "43万",
                        "website": "https://www.nio.com/no_NO/configurator/ET7"
                    },
                    "NIO ET5t": {
                        "sales": 0,
                        "localPrice": "kr439,000",
                        "rmbPrice": "30万",
                        "website": "https://www.nio.com/no_NO/configurator/index?vehicle=ET5%20Touring&campaign_code=z9yTRF1C&utm_source=NO_DigitalCampaigns&utm_medium=NO_DigitalCampaigns_FB&utm_campaign=NO_DigitalCampaigns_ET5T&utm_content=NO_DigitalCampaigns_ET5T_Order"
                    },
                    "NIO EL6": {
                        "sales": 387,
                        "localPrice": "kr489,000",
                        "rmbPrice": "34万",
                        "website": "https://www.nio.com/no_NO/configurator/EL6"
                    },
                    "NIO EL7": {
                        "sales": 97,
                        "localPrice": "kr669,000",
                        "rmbPrice": "46万",
                        "website": "https://www.nio.com/no_NO/configurator/EL7"
                    },
                    "NIO EL8": {
                        "sales": 30,
                        "localPrice": "kr719,000",
                        "rmbPrice": "50万",
                        "website": "https://www.nio.com/no_NO/configurator/EL8"
                    },
                    "NIO ES8": {
                        "sales": 159,
                        "localPrice": "kr669,000",
                        "rmbPrice": "46万",
                        "website": "https://www.nio.com/no_NO/configurator/ES8"
                    }
                }
            },
            "吉利": {
                "sales": 23,
                "models": {
                    "ZEEKR 001": {
                        "sales": 16,
                        "localPrice": "kr533,282",
                        "rmbPrice": "37万",
                        "website": "https://shop.zeekr.eu/nb-no/configuration/?linkCode=1&_gl=1*1pt1mwf*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjY5MzMkajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjY5MzMkajAkbDAkaDA."
                    },
                    "ZEEKR X": {
                        "sales": 7,
                        "localPrice": "kr393,969",
                        "rmbPrice": "27万",
                        "website": "https://shop.zeekr.eu/nb-no/configuration/?linkCode=3&_gl=1*7le3qt*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjY5ODkkajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjY5ODkkajAkbDAkaDA."
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "kr500,087",
                        "rmbPrice": "35万",
                        "website": "https://shop.zeekr.eu/nb-no/configuration/?linkCode=1075&_gl=1*7lv7bo*_gcl_au*MTAyNTczODYyMy4xNzQ3MTI2ODk3*_ga*MjA3NTE2NDUzMS4xNzQ3MTI2ODk3*_ga_2T2G9RQWKG*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjcwNjYkajAkbDAkaDA.*_ga_Y7ZN5SDK5X*czE3NDcxMjY4OTckbzEkZzEkdDE3NDcxMjcwNjYkajAkbDAkaDA."
                    }
                }
            }
        }
    },
    "Denmark": {
        "brands": {
            "比亚迪": {
                "sales": 2798,
                "models": {
                    "Dolphin": {
                        "sales": 1477,
                        "localPrice": "kr234,995",
                        "rmbPrice": "26万",
                        "website": "https://www.bydauto.dk/modeller/byd-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 614,
                        "localPrice": "kr309,995",
                        "rmbPrice": "34万",
                        "website": "https://www.bydauto.dk/modeller/byd-seal"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 219,
                        "localPrice": "kr269,995",
                        "rmbPrice": "29万",
                        "website": "https://www.bydauto.dk/modeller/byd-atto-3"
                    },
                    "Seal U": {
                        "sales": 408,
                        "localPrice": "kr309,995",
                        "rmbPrice": "34万",
                        "website": "https://www.bydauto.dk/modeller/byd-seal-u"
                    },
                    "Sealion 07": {
                        "sales": 20,
                        "localPrice": "kr339,995",
                        "rmbPrice": "37万",
                        "website": "https://www.bydauto.dk/modeller/byd-sealion-7"
                    },
                    "Tang": {
                        "sales": 60,
                        "localPrice": "kr489,995",
                        "rmbPrice": "53万",
                        "website": "https://www.bydauto.dk/modeller/byd-tang"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "kr209,995",
                        "rmbPrice": "23万",
                        "website": "https://www.bydauto.dk/modeller/byd-atto-2"
                    }
                }
            },
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng P7": {
                        "sales": 0,
                        "localPrice": "kr299,900",
                        "rmbPrice": "33万",
                        "website": "https://store.xpeng.com/dk/configurator/P7"
                    },
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "kr299,900",
                        "rmbPrice": "33万",
                        "website": "https://store.xpeng.com/dk/configurator/G6?source=ow_os_top_nav&channel=&owner=&campaign_id="
                    },
                    "XPeng G9": {
                        "sales": 0,
                        "localPrice": "kr451,916",
                        "rmbPrice": "49万",
                        "website": "https://store.xpeng.com/dk/configurator/G9_2024"
                    }
                }
            },
            "蔚来": {
                "sales": 5,
                "models": {
                    "NIO ET5": {
                        "sales": 1,
                        "localPrice": "kr408,000",
                        "rmbPrice": "44万",
                        "website": "https://www.nio.com/da_DK/configurator/index?vehicle=ET5"
                    },
                    "NIO ET7": {
                        "sales": 0,
                        "localPrice": "kr684,000",
                        "rmbPrice": "75万",
                        "website": "https://www.nio.com/da_DK/configurator/index?vehicle=ET7"
                    },
                    "NIO ET5t": {
                        "sales": 0,
                        "localPrice": "kr424,000",
                        "rmbPrice": "46万",
                        "website": "https://www.nio.com/da_DK/configurator/index?vehicle=ET5%20Touring"
                    },
                    "NIO EL6": {
                        "sales": 4,
                        "localPrice": "kr454,000",
                        "rmbPrice": "49万",
                        "website": "https://www.nio.com/da_DK/configurator/index?vehicle=EL6"
                    },
                    "NIO EL7": {
                        "sales": 0,
                        "localPrice": "kr724,000",
                        "rmbPrice": "79万",
                        "website": "https://www.nio.com/da_DK/configurator/index?vehicle=EL7"
                    },
                    "NIO EL8": {
                        "sales": 0,
                        "localPrice": "kr799,000",
                        "rmbPrice": "87万",
                        "website": "https://www.nio.com/da_DK/configurator/index?vehicle=EL8"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/da-dk/models/001"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/da-dk/models/x"
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekr.eu/da-dk/models/7x"
                    }
                }
            }
        }
    },
    "Finland": {
        "brands": {
            "比亚迪": {
                "sales": 555,
                "models": {
                    "Dolphin": {
                        "sales": 60,
                        "localPrice": "€32,990",
                        "rmbPrice": "27万",
                        "website": "https://autokeskus.fi/byd/"
                    },
                    "Haibao/Seal": {
                        "sales": 277,
                        "localPrice": "€48,690",
                        "rmbPrice": "40万",
                        "website": "https://autokeskus.fi/byd/"
                    },
                    "Han": {
                        "sales": 13,
                        "localPrice": "€72,770",
                        "rmbPrice": "59万",
                        "website": "https://autokeskus.fi/byd/"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 162,
                        "localPrice": "€39,690",
                        "rmbPrice": "32万",
                        "website": "https://autokeskus.fi/byd/"
                    },
                    "Seal U": {
                        "sales": 0,
                        "localPrice": "€45,000",
                        "rmbPrice": "37万",
                        "website": "https://autokeskus.fi/byd/"
                    },
                    "Tang": {
                        "sales": 24,
                        "localPrice": "€72,000",
                        "rmbPrice": "58万",
                        "website": "https://autokeskus.fi/byd/"
                    },
                    "Sealion 07": {
                        "sales": 3,
                        "localPrice": "€51,490",
                        "rmbPrice": "42万",
                        "website": "https://autokeskus.fi/byd/"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "€32,700",
                        "rmbPrice": "27万",
                        "website": "https://autokeskus.fi/byd/"
                    }
                }
            }
        }
    },
    "Greece": {
        "brands": {
            "比亚迪": {
                "sales": 1578,
                "models": {
                    "Dolphin": {
                        "sales": 701,
                        "localPrice": "€19,998",
                        "rmbPrice": "16万",
                        "website": "https://bydauto.gr/dolphin-config/"
                    },
                    "Haibao/Seal": {
                        "sales": 78,
                        "localPrice": "€38,990",
                        "rmbPrice": "32万",
                        "website": "https://bydauto.gr/seal-config/"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 729,
                        "localPrice": "€26,525",
                        "rmbPrice": "22万",
                        "website": "https://bydauto.gr/atto-3-config/"
                    },
                    "Seal U": {
                        "sales": 25,
                        "localPrice": "€38,900",
                        "rmbPrice": "32万",
                        "website": "https://bydauto.gr/seal-u-dm-i-config/#"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "€22,734",
                        "rmbPrice": "18万",
                        "website": "https://bydauto.gr/atto-2-config/"
                    },
                    "Sealion 07": {
                        "sales": 0,
                        "localPrice": "€40,990",
                        "rmbPrice": "33万",
                        "website": "https://bydauto.gr/sealion-7-config/"
                    }
                }
            },
            "零跑": {
                "sales": 50,
                "models": {
                    "T03": {
                        "sales": 39,
                        "localPrice": "€19,900",
                        "rmbPrice": "16万",
                        "website": "https://www.leapmotor.net/gr/t03"
                    },
                    "C10": {
                        "sales": 11,
                        "localPrice": "€41,900",
                        "rmbPrice": "34万",
                        "website": "https://www.leapmotor.net/gr/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "€40,900",
                        "rmbPrice": "33万",
                        "website": "https://www.leapmotor.net/gr/REEV"
                    }
                }
            }
        }
    },
    "Poland": {
        "brands": {
            "比亚迪": {
                "sales": 409,
                "models": {
                    "Dolphin": {
                        "sales": 27,
                        "localPrice": "zł141,000",
                        "rmbPrice": "27万",
                        "website": "https://www.byd.com/pl/order-dolphin"
                    },
                    "Haibao/Seal": {
                        "sales": 91,
                        "localPrice": "zł215,900",
                        "rmbPrice": "41万",
                        "website": "https://www.byd.com/pl/order-seal"
                    },
                    "Seal U": {
                        "sales": 0,
                        "localPrice": "zł169,900",
                        "rmbPrice": "32万",
                        "website": "https://www.byd.com/pl/order-seal-u-dm-i"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "zł320,000",
                        "rmbPrice": "61万",
                        "website": "https://www.byd.com/pl/order-tang"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "zł129,900",
                        "rmbPrice": "25万",
                        "website": "https://www.byd.com/pl/konfiguracja/atto-2"
                    },
                    "Sealion 07": {
                        "sales": 0,
                        "localPrice": "zł219,900",
                        "rmbPrice": "42万",
                        "website": "https://www.byd.com/pl/order-sealion-7"
                    }
                }
            },
            "零跑": {
                "sales": 7,
                "models": {
                    "T03": {
                        "sales": 7,
                        "localPrice": "zł54,900",
                        "rmbPrice": "10万",
                        "website": "https://www.leapmotor.net/pl/t03"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/pl/B10"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "zł133,200",
                        "rmbPrice": "25万",
                        "website": "https://www.leapmotor.net/pl/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "zł149,900",
                        "rmbPrice": "28万",
                        "website": "https://www.leapmotor.net/pl/c10"
                    }
                }
            }
        }
    },
    "Romania": {
        "brands": {
            "比亚迪": {
                "sales": 2,
                "models": {
                    "Haibao/Seal": {
                        "sales": 1,
                        "localPrice": "lei38,990",
                        "rmbPrice": "6万",
                        "website": "https://bydauto.gr/seal-config/"
                    },
                    "Seal U": {
                        "sales": 1,
                        "localPrice": "lei38,900",
                        "rmbPrice": "6万",
                        "website": "https://bydauto.gr/seal-u-dm-i-config/"
                    },
                    "Sealion 07": {
                        "sales": 0,
                        "localPrice": "lei40,990",
                        "rmbPrice": "7万",
                        "website": "https://bydauto.gr/sealion-7-config/"
                    },
                    "Dolphin": {
                        "sales": 0,
                        "localPrice": "lei19,998",
                        "rmbPrice": "3万",
                        "website": "https://bydauto.gr/dolphin-config/"
                    },
                    "ATTO 2": {
                        "sales": 0,
                        "localPrice": "lei22,734",
                        "rmbPrice": "4万",
                        "website": "https://bydauto.gr/atto-2-config/"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 0,
                        "localPrice": "lei26,525",
                        "rmbPrice": "4万",
                        "website": "https://bydauto.gr/atto-3-config/"
                    }
                }
            },
            "零跑": {
                "sales": 17,
                "models": {
                    "T03": {
                        "sales": 15,
                        "localPrice": "lei9,600",
                        "rmbPrice": "2万",
                        "website": "https://www.leapmotor.net/ro/t03"
                    },
                    "C10": {
                        "sales": 2,
                        "localPrice": "lei27,150",
                        "rmbPrice": "4万",
                        "website": "https://www.leapmotor.net/ro/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/ro/reev"
                    }
                }
            }
        }
    },
    "Croatia": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "Seal U": {
                        "sales": 0,
                        "localPrice": "€45,500",
                        "rmbPrice": "37万",
                        "website": "https://www.byd.com/hr/konfiguracija/seal-u"
                    },
                    "Haibao/Seal": {
                        "sales": 0,
                        "localPrice": "€47,990",
                        "rmbPrice": "39万",
                        "website": "https://www.byd.com/hr/konfiguracija/seal"
                    },
                    "Sealion 07": {
                        "sales": 0,
                        "localPrice": "€49,990",
                        "rmbPrice": "41万",
                        "website": "https://www.byd.com/hr/konfiguracija/sealion-7"
                    }
                }
            }
        }
    },
    "Turkey": {
        "brands": {
            "比亚迪": {
                "sales": 8331,
                "models": {
                    "Dolphin": {
                        "sales": 355,
                        "localPrice": "₺1,365,000",
                        "rmbPrice": "25万",
                        "website": "https://www.bydauto.com.tr/fiyat-listesi"
                    },
                    "Haibao/Seal": {
                        "sales": 168,
                        "localPrice": "₺1,925,000",
                        "rmbPrice": "36万",
                        "website": "https://www.bydauto.com.tr/fiyat-listesi"
                    },
                    "Han": {
                        "sales": 116,
                        "localPrice": "₺3,750,000",
                        "rmbPrice": "70万",
                        "website": "https://www.bydauto.com.tr/fiyat-listesi"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 2252,
                        "localPrice": "₺1,710,000",
                        "rmbPrice": "32万",
                        "website": "https://www.bydauto.com.tr/fiyat-listesi"
                    },
                    "Seal U": {
                        "sales": 4531,
                        "localPrice": "₺2,115,000",
                        "rmbPrice": "39万",
                        "website": "https://www.bydauto.com.tr/fiyat-listesi"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "₺4,220,000",
                        "rmbPrice": "79万",
                        "website": "https://www.bydauto.com.tr/fiyat-listesi"
                    }
                }
            },
            "零跑": {
                "sales": 218,
                "models": {
                    "T03": {
                        "sales": 218,
                        "localPrice": "₺898,000",
                        "rmbPrice": "17万",
                        "website": "https://leapmotortr.com/yetkili-servis/"
                    }
                }
            }
        }
    },
    "Israel": {
        "brands": {
            "比亚迪": {
                "sales": 16390,
                "models": {
                    "Dolphin": {
                        "sales": 4491,
                        "localPrice": "₪149,990",
                        "rmbPrice": "30万",
                        "website": "https://www.carzone.co.il/BYDAuto/"
                    },
                    "Haibao/Seal": {
                        "sales": 843,
                        "localPrice": "₪218,990",
                        "rmbPrice": "45万",
                        "website": "https://www.carzone.co.il/BYDAuto/"
                    },
                    "Han": {
                        "sales": 35,
                        "localPrice": "₪352,990",
                        "rmbPrice": "72万",
                        "website": "https://www.carzone.co.il/BYDAuto/"
                    },
                    "Yuan PLUS / ATTO 3": {
                        "sales": 11021,
                        "localPrice": "₪177,500",
                        "rmbPrice": "36万",
                        "website": "https://www.carzone.co.il/BYDAuto/"
                    },
                    "Seal U": {
                        "sales": 0,
                        "localPrice": "₪194,990",
                        "rmbPrice": "40万",
                        "website": "https://www.carzone.co.il/BYDAuto/"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "₪327,990",
                        "rmbPrice": "67万",
                        "website": "https://www.carzone.co.il/BYDAuto/"
                    }
                }
            },
            "小鹏": {
                "sales": 4890,
                "models": {
                    "XPeng P7": {
                        "sales": 1156,
                        "localPrice": "₪214,990",
                        "rmbPrice": "44万",
                        "website": "https://heyxpeng.co.il/p7/configurator"
                    },
                    "XPeng G6": {
                        "sales": 2775,
                        "localPrice": "₪201,990",
                        "rmbPrice": "41万",
                        "website": "https://heyxpeng.co.il/g6/configurator"
                    },
                    "XPeng G9": {
                        "sales": 959,
                        "localPrice": "₪284,990",
                        "rmbPrice": "58万",
                        "website": "https://heyxpeng.co.il/g9/configurator"
                    }
                }
            },
            "吉利": {
                "sales": 2683,
                "models": {
                    "ZEEKR 001": {
                        "sales": 616,
                        "localPrice": "₪283,990",
                        "rmbPrice": "58万",
                        "website": "https://zeekr-israel.co.il/cars-configurator/?pp=1508&utm_source=website&utm_medium=page_zeekr001"
                    },
                    "ZEEKR X": {
                        "sales": 2067,
                        "localPrice": "₪190,990",
                        "rmbPrice": "39万",
                        "website": "https://zeekr-israel.co.il/cars-configurator/?pp=2123"
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/he-il/models/7x"
                    }
                }
            },
            "零跑": {
                "sales": 198,
                "models": {
                    "T03": {
                        "sales": 198,
                        "localPrice": "₪89,900",
                        "rmbPrice": "18万",
                        "website": "https://leapmotor.co.il/model-t03/"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "₪169,900",
                        "rmbPrice": "35万",
                        "website": "https://leapmotor.co.il/model-c10/"
                    }
                }
            },
            "长城": {
                "sales": 0,
                "models": {
                    "WEY 05 / Coffee 01": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://wey.co.il/model_coffee01/"
                    },
                    "WEY 03 / Coffee 02": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://wey.co.il/model_coffee02/"
                    }
                }
            }
        }
    },
    "Russia": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "Han": {
                        "sales": 0,
                        "localPrice": "₽5,220,000",
                        "rmbPrice": "46万",
                        "website": "BYD Han — купить по цене от 6,1 млн руб"
                    },
                    "Yangwang U8": {
                        "sales": 0,
                        "localPrice": "₽19,780,000",
                        "rmbPrice": "173万",
                        "website": "https://byd-auto-russia.ru/models/yangwang-u8"
                    },
                    "Tang": {
                        "sales": 0,
                        "localPrice": "₽5,750,000",
                        "rmbPrice": "50万",
                        "website": "https://byd-auto-russia.ru/models/tang"
                    },
                    "Leopard 5": {
                        "sales": 0,
                        "localPrice": "₽5,400,000",
                        "rmbPrice": "47万",
                        "website": "https://byd-auto-russia.ru/models/leopard5"
                    }
                }
            },
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng G3i": {
                        "sales": 0,
                        "localPrice": "₽3,250,000",
                        "rmbPrice": "28万",
                        "website": "https://xpeng-russia.ru/models"
                    },
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "₽5,600,000",
                        "rmbPrice": "49万",
                        "website": "https://xpeng-russia.ru/models"
                    },
                    "XPeng G9": {
                        "sales": 0,
                        "localPrice": "₽5,900,000",
                        "rmbPrice": "52万",
                        "website": "https://xpeng-russia.ru/models"
                    },
                    "XPeng P5": {
                        "sales": 0,
                        "localPrice": "₽3,900,000",
                        "rmbPrice": "34万",
                        "website": "https://xpeng-russia.ru/models"
                    },
                    "XPeng P7": {
                        "sales": 0,
                        "localPrice": "₽4,900,000",
                        "rmbPrice": "43万",
                        "website": "https://xpeng-russia.ru/models"
                    },
                    "XPeng X9": {
                        "sales": 0,
                        "localPrice": "₽7,900,000",
                        "rmbPrice": "69万",
                        "website": "https://xpeng-russia.ru/models"
                    }
                }
            },
            "理想": {
                "sales": 0,
                "models": {
                    "L6": {
                        "sales": 0,
                        "localPrice": "₽5,981,000",
                        "rmbPrice": "52万",
                        "website": "https://li-motors.ru/"
                    },
                    "L7": {
                        "sales": 0,
                        "localPrice": "₽6,681,000",
                        "rmbPrice": "59万",
                        "website": "https://li-motors.ru/"
                    },
                    "L8": {
                        "sales": 0,
                        "localPrice": "₽8,000,000",
                        "rmbPrice": "70万",
                        "website": "https://li-motors.ru/"
                    },
                    "L9": {
                        "sales": 0,
                        "localPrice": "₽8,299,000",
                        "rmbPrice": "73万",
                        "website": "https://li-motors.ru/"
                    },
                    "Mega": {
                        "sales": 0,
                        "localPrice": "₽9,500,000",
                        "rmbPrice": "83万",
                        "website": "https://li-motors.ru/"
                    }
                }
            },
            "长城": {
                "sales": 0,
                "models": {
                    "WEY 05 / Coffee 01": {
                        "sales": 0,
                        "localPrice": "₽4,900,000",
                        "rmbPrice": "43万",
                        "website": "https://gwm-wey.ru/configurator/wey-05"
                    },
                    "WEY 80": {
                        "sales": 0,
                        "localPrice": "₽6,499,000",
                        "rmbPrice": "57万",
                        "website": "https://gwm-wey.ru/configurator/wey-80"
                    },
                    "WEY 07": {
                        "sales": 0,
                        "localPrice": "₽6,549,000",
                        "rmbPrice": "57万",
                        "website": "https://gwm-wey.ru/configurator/wey-07"
                    },
                    "ORA 03 / Funky Cat": {
                        "sales": 0,
                        "localPrice": "₽3,499,000",
                        "rmbPrice": "31万",
                        "website": "https://gwm-ora.ru/ora-03/"
                    },
                    "ORA 03 GT": {
                        "sales": 0,
                        "localPrice": "₽3,699,000",
                        "rmbPrice": "32万",
                        "website": "https://gwm-ora.ru/ora-gt/"
                    }
                }
            }
        }
    },
    "Egypt": {
        "brands": {
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng P7": {
                        "sales": 0,
                        "localPrice": "E£2,350,000",
                        "rmbPrice": "33万",
                        "website": "https://www.xpeng.com/eg/p7?_gl=1*wnc4fh*_ga*MjQxMDI4OTU2LjE3MzY5MDYzMDI.*_ga_PTHEE3LZE2*czE3NDcwNDQ1MTUkbzIkZzAkdDE3NDcwNDQ1MTUkajAkbDAkaDA."
                    },
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "E£2,390,000",
                        "rmbPrice": "33万",
                        "website": "https://www.xpeng.com/eg/p7?_gl=1*wnc4fh*_ga*MjQxMDI4OTU2LjE3MzY5MDYzMDI.*_ga_PTHEE3LZE2*czE3NDcwNDQ1MTUkbzIkZzAkdDE3NDcwNDQ1MTUkajAkbDAkaDA."
                    },
                    "XPeng G9": {
                        "sales": 0,
                        "localPrice": "E£2,800,000",
                        "rmbPrice": "39万",
                        "website": "https://www.xpeng.com/eg/p7?_gl=1*wnc4fh*_ga*MjQxMDI4OTU2LjE3MzY5MDYzMDI.*_ga_PTHEE3LZE2*czE3NDcwNDQ1MTUkbzIkZzAkdDE3NDcwNDQ1MTUkajAkbDAkaDA."
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "E£2,700,000",
                        "rmbPrice": "38万",
                        "website": "https://cnevpost.com/2025/02/13/zeekr-enters-egypt/"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "E£2,100,000",
                        "rmbPrice": "29万",
                        "website": "https://cnevpost.com/2025/02/13/zeekr-enters-egypt/"
                    }
                }
            }
        }
    },
    "Iceland": {
        "brands": {
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng P7": {
                        "sales": 0,
                        "localPrice": "kr7,990,000",
                        "rmbPrice": "45万",
                        "website": "https://store.xpeng.com/is/configurator/p7"
                    },
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "kr5,990,000",
                        "rmbPrice": "34万",
                        "website": "https://store.xpeng.com/is/configurator/g6"
                    },
                    "XPeng G9": {
                        "sales": 0,
                        "localPrice": "kr7,990,000",
                        "rmbPrice": "45万",
                        "website": "https://store.xpeng.com/is/configurator/G9_2024"
                    }
                }
            }
        }
    },
    "United Arab Emirates": {
        "brands": {
            "小鹏": {
                "sales": 0,
                "models": {
                    "XPeng G6": {
                        "sales": 0,
                        "localPrice": "AED165,900",
                        "rmbPrice": "33万",
                        "website": "https://www.xpeng.com/ae/g6.html"
                    },
                    "XPeng G9": {
                        "sales": 0,
                        "localPrice": "AED216,900",
                        "rmbPrice": "43万",
                        "website": "https://www.xpeng.com/ae/g9.html"
                    },
                    "XPeng X9": {
                        "sales": 0,
                        "localPrice": "AED261,900",
                        "rmbPrice": "51万",
                        "website": "https://www.xpeng.com/ae/x9.html"
                    }
                }
            },
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "AED170,900",
                        "rmbPrice": "34万",
                        "website": "https://conf.zeekr.ae/?linkCode=3&_gl=1*1m2khiu*_gcl_au*MTUwNzM2NTE5Ni4xNzQ3MTMxMTQz*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_XNN7YBNGGJ*czE3NDcyMTA1MzQkbzMkZzEkdDE3NDcyMTA2MTckajAkbDAkaDA.*_ga_3GCL60M3NK*czE3NDcyMTA1MzQkbzMkZzEkdDE3NDcyMTA2MTgkajAkbDAkaDA.*_ga_HXZLDDQT6N*czE3NDcyMTA1NzMkbzEkZzEkdDE3NDcyMTA2MTgkajE1JGwwJGgw&utm_id=&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "AED225,900",
                        "rmbPrice": "44万",
                        "website": "https://conf.zeekr.ae/?_gl=1*nvxww1*_gcl_au*MTUwNzM2NTE5Ni4xNzQ3MTMxMTQz*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_XNN7YBNGGJ*czE3NDcyMTA1MzQkbzMkZzEkdDE3NDcyMTA2NTAkajAkbDAkaDA.*_ga_3GCL60M3NK*czE3NDcyMTA1MzQkbzMkZzEkdDE3NDcyMTA2NTAkajAkbDAkaDA.*_ga_HXZLDDQT6N*czE3NDcyMTA1NzMkbzEkZzEkdDE3NDcyMTA2NTAkajU1JGwwJGgw&utm_id=&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-ae/models/7x"
                    }
                }
            }
        }
    },
    "Kazakhstan": {
        "brands": {
            "吉利": {
                "sales": 816,
                "models": {
                    "ZEEKR 001": {
                        "sales": 350,
                        "localPrice": "₸22,250,000",
                        "rmbPrice": "31万",
                        "website": "https://zeekr-configurator.kz/ru/models/zeekr-001/?_gl=1*1t8e4ar*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_Q1SZ4Y942C*czE3NDcxODg2MzEkbzIkZzAkdDE3NDcxODg2NjIkajI5JGwwJGgw"
                    },
                    "ZEEKR X": {
                        "sales": 466,
                        "localPrice": "₸14,990,000",
                        "rmbPrice": "21万",
                        "website": "https://zeekr-configurator.kz/ru/models/zeekr-x/?_gl=1*14si7m8*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_Q1SZ4Y942C*czE3NDcxODg2MzEkbzIkZzAkdDE3NDcxODg2MzUkajU2JGwwJGgw"
                    }
                }
            }
        }
    },
    "Moldova": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "MDL55,767",
                        "rmbPrice": "2万",
                        "website": "https://www.zeekrlife.com/ro-md/models/model-001"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "MDL38,479",
                        "rmbPrice": "1万",
                        "website": "https://www.zeekrlife.com/ro-md/models/model-x"
                    }
                }
            }
        }
    },
    "Uzbekistan": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "UZS720,000,000",
                        "rmbPrice": "53万",
                        "website": "https://zeekr-cars.uz/ru/zeekr-001"
                    },
                    "ZEEKR 001 ALL NEW": {
                        "sales": 0,
                        "localPrice": "UZS811,000,000",
                        "rmbPrice": "60万",
                        "website": "https://zeekr-cars.uz/ru/zeekr-001-all-new"
                    },
                    "ZEEKR 007": {
                        "sales": 0,
                        "localPrice": "UZS561,000,000",
                        "rmbPrice": "42万",
                        "website": "https://zeekr-cars.uz/ru/zeekr-007"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "UZS377,000,000",
                        "rmbPrice": "28万",
                        "website": "https://zeekr-cars.uz/ru/zeekr-x"
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "UZS610,000,000",
                        "rmbPrice": "45万",
                        "website": "https://zeekr-cars.uz/ru/zeekr-7x"
                    },
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "UZS1,055,000,000",
                        "rmbPrice": "78万",
                        "website": "https://zeekr-cars.uz/ru/zeekr-009"
                    }
                }
            }
        }
    },
    "Georgia": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/ka-ge/models/model-001"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/ka-ge/models/model-x"
                    }
                }
            }
        }
    },
    "Azerbaijan": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/ru-az/models/model-001"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/ru-az/models/model-x"
                    }
                }
            }
        }
    },
    "Armenia": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-am/models/001"
                    },
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-am/models/x"
                    },
                    "ZEEKR 7X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-am/models/7x"
                    }
                }
            }
        }
    },
    "Mexico": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "$799,000",
                        "rmbPrice": "28万",
                        "website": "https://conf.zeekr.com.mx/?linkCode=3&_gl=1*qgfk5g*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_LT3D8F54GC*czE3NDcxODg3MDQkbzIkZzEkdDE3NDcxOTEwOTUkajUzJGwwJGgw*_ga_F7MV4R3PMD*czE3NDcxODg3MDQkbzIkZzEkdDE3NDcxOTEwOTUkajAkbDAkaDA.*_ga_3GCL60M3NK*czE3NDcxODUwNjMkbzIkZzEkdDE3NDcxOTEwOTUkajAkbDAkaDA.*_ga_XNN7YBNGGJ*czE3NDcxODUwNjMkbzIkZzEkdDE3NDcxOTEwOTUkajAkbDAkaDA.&utm_id=&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "$1,078,300",
                        "rmbPrice": "38万",
                        "website": "https://conf.zeekr.com.mx/?_gl=1*1cbncl6*_ga*MTgyOTU1ODc1NS4xNzQ3MTMxMTQz*_ga_LT3D8F54GC*czE3NDcxODg3MDQkbzIkZzEkdDE3NDcxOTEyMjIkajU1JGwwJGgw*_ga_F7MV4R3PMD*czE3NDcxODg3MDQkbzIkZzEkdDE3NDcxOTEyMjIkajAkbDAkaDA.*_ga_3GCL60M3NK*czE3NDcxODUwNjMkbzIkZzEkdDE3NDcxOTEyMjIkajAkbDAkaDA.*_ga_XNN7YBNGGJ*czE3NDcxODUwNjMkbzIkZzEkdDE3NDcxOTEyMjIkajAkbDAkaDA.&utm_id=&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                    }
                }
            },
            "长城": {
                "sales": 0,
                "models": {
                    "ORA 03 / Funky Cat": {
                        "sales": 0,
                        "localPrice": "$536,900",
                        "rmbPrice": "19万",
                        "website": "https://www.gwm-mx.com/es/models/ora-03"
                    }
                }
            }
        }
    },
    "Ecuador": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/es-ec/models/x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/es-ec/models/001"
                    }
                }
            }
        }
    },
    "Costa Rica": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/es-ec/models/x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/es-ec/models/001"
                    }
                }
            }
        }
    },
    "Bahrain": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-bh/models/model-x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "BD282,000",
                        "rmbPrice": "537万",
                        "website": "https://www.zeekrlife.com/en-bh/models/model-001"
                    }
                }
            }
        }
    },
    "Kuwait": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-kw/models/x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/ar-kw/models/001"
                    }
                }
            }
        }
    },
    "Lebanon": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-lb/models/x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-lb/models/001"
                    }
                }
            }
        }
    },
    "Morocco": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-ma/models/x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-ma/models/001"
                    }
                }
            }
        }
    },
    "Qatar": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-qa/models/x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-qa/models/001"
                    }
                }
            }
        }
    },
    "Saudi Arabia": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-sa/models/x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-sa/models/001"
                    }
                }
            }
        }
    },
    "Myanmar": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-mm/"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-mm/"
                    },
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-mm/"
                    }
                }
            }
        }
    },
    "Cambodia": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-cam/vehicles/model-x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-cam/vehicles/model-001"
                    },
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-cam/vehicles/model-009"
                    }
                }
            }
        }
    },
    "Lao PDR": {
        "brands": {
            "吉利": {
                "sales": 0,
                "models": {
                    "ZEEKR X": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-la/models/model-x"
                    },
                    "ZEEKR 001": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-la/models/model-001"
                    },
                    "ZEEKR 009": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.zeekrlife.com/en-la/models/model-009"
                    }
                }
            }
        }
    },
    "Korea": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "ATTO 3": {
                        "sales": 0,
                        "localPrice": "₩31,500,000",
                        "rmbPrice": "16万",
                        "website": "https://www.bydauto.kr/purchase/build-my-car/atto3"
                    }
                }
            }
        }
    },
    "Hungary": {
        "brands": {
            "比亚迪": {
                "sales": 0,
                "models": {
                    "Sealion 7": {
                        "sales": 0,
                        "localPrice": "Ft20,040,000",
                        "rmbPrice": "40万",
                        "website": "https://www.byd.com/hu/order-sealion-7"
                    }
                }
            }
        }
    },
    "Mauritius": {
        "brands": {
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "₨775,000",
                        "rmbPrice": "12万",
                        "website": "https://www.leapmotor.net/mu-fr/t03"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "₨1,700,000",
                        "rmbPrice": "27万",
                        "website": "https://www.leapmotor.net/mu-fr/c10"
                    },
                    "C10 REEV": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/mu-fr/reev"
                    }
                }
            }
        }
    },
    "Nepal": {
        "brands": {
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotornepal.com/t03/"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "₨720,000",
                        "rmbPrice": "4万",
                        "website": "https://www.leapmotornepal.com/c10/"
                    }
                }
            }
        }
    },
    "Martinique": {
        "brands": {
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "€19,900",
                        "rmbPrice": "16万",
                        "website": "https://www.leapmotor.net/mq/t03"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "€39,990",
                        "rmbPrice": "32万",
                        "website": "https://www.leapmotor.net/mq/c10"
                    }
                }
            }
        }
    },
    "Malta": {
        "brands": {
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/mt/t03"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/mt/c10"
                    },
                    "B10": {
                        "sales": 0,
                        "localPrice": "即将上市",
                        "rmbPrice": "即将上市",
                        "website": "https://www.leapmotor.net/mt/B10"
                    }
                }
            }
        }
    },
    "Guadeloupe": {
        "brands": {
            "零跑": {
                "sales": 0,
                "models": {
                    "T03": {
                        "sales": 0,
                        "localPrice": "€22,990",
                        "rmbPrice": "19万",
                        "website": "https://www.leapmotor.net/gp/t03"
                    },
                    "C10": {
                        "sales": 0,
                        "localPrice": "€39,990",
                        "rmbPrice": "32万",
                        "website": "https://www.leapmotor.net/gp/c10"
                    }
                }
            }
        }
    },
    "Belarus": {
        "brands": {
            "零跑": {
                "sales": 0,
                "models": {
                    "C11": {
                        "sales": 0,
                        "localPrice": "Br102,990",
                        "rmbPrice": "25万",
                        "website": "https://leapmotor.feloct.by/"
                    },
                    "C16": {
                        "sales": 0,
                        "localPrice": "Br125,900",
                        "rmbPrice": "31万",
                        "website": "https://leapmotor.feloct.by/c16/"
                    },
                    "C16 REEV": {
                        "sales": 0,
                        "localPrice": "Br99,900",
                        "rmbPrice": "24万",
                        "website": "https://leapmotor.feloct.by/c16/"
                    }
                }
            }
        }
    },
    "South Africa": {
        "brands": {
            "长城": {
                "sales": 43,
                "models": {
                    "ORA 03 / Funky Cat": {
                        "sales": 43,
                        "localPrice": "R686,950",
                        "rmbPrice": "26万",
                        "website": "https://www.gwm.co.za/explore/ora-03"
                    }
                }
            }
        }
    },
    "Estonia": {
        "brands": {
            "长城": {
                "sales": 12,
                "models": {
                    "ORA 03 / Funky Cat": {
                        "sales": 0,
                        "localPrice": "€24,995",
                        "rmbPrice": "20万",
                        "website": "https://gwmcars.ee/ora?_gl=1*1j12vks*_up*MQ..*_ga*MTQ4ODk2MTU0NS4xNzQ3NzI1MTk4*_ga_PQM010YJPZ*czE3NDc3MjUxOTgkbzEkZzAkdDE3NDc3MjUxOTgkajAkbDAkaDA."
                    },
                    "ORA 03+": {
                        "sales": 0,
                        "localPrice": "€37,995",
                        "rmbPrice": "31万",
                        "website": "https://gwmcars.ee/ora?_gl=1*1j12vks*_up*MQ..*_ga*MTQ4ODk2MTU0NS4xNzQ3NzI1MTk4*_ga_PQM010YJPZ*czE3NDc3MjUxOTgkbzEkZzAkdDE3NDc3MjUxOTgkajAkbDAkaDA."
                    },
                    "WEY 05 / Coffee 01": {
                        "sales": 12,
                        "localPrice": "€49,990",
                        "rmbPrice": "41万",
                        "website": "https://gwmcars.ee/wey"
                    },
                    "WEY 03 / Coffee 02": {
                        "sales": 0,
                        "localPrice": "€39,990",
                        "rmbPrice": "32万",
                        "website": "https://gwmcars.ee/wey"
                    }
                }
            }
        }
    }
};
