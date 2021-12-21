const ImportJsonSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "homeEnergy": {
                "houseOccupants": 1,
                "houseBedrooms": 0,
                "useSimplified": false,
                "electric": 0,
                "gas": 0,
                "oil": 0,
                "coal": 0,
                "lpg": 0,
                "type": 0,
                "age": 0,
                "loftInsulation": 0,
                "mainEnergySource": 0,
                "secondaryEnergySource": 0,
                "glazingType": 0,
                "heatingType": 0,
                "tempWinter": 0,
                "tempControl": 0
            },
            "transportation": {
                "car": {
                    "size": "",
                    "type": 0,
                    "distance": 0
                },
                "flight": {
                    "haul": "",
                    "pClass": 0,
                    "distance": 0
                },
                "railway": {
                    "national": 0,
                    "international": 0,
                    "metro": 0,
                    "underground": 0
                },
                "motorbike": {
                    "small": 0,
                    "medium": 0,
                    "large": 0,
                    "average": 0
                },
                "bus": {
                    "local": 0,
                    "localLondon": 0,
                    "averageLocal": 0,
                    "coach": 0
                },
                "taxi": {
                    "blackcab": 0,
                    "regular": 0
                }
            },
            "waste": {
                "recycled": {
                    "metal": {
                        "aluminium": 0,
                        "scrap": 0,
                        "steel": 0
                    },
                    "plastic": {
                        "average": 0,
                        "film": 0,
                        "rigid": 0,
                        "pvc": 0
                    },
                    "paper": {
                        "board": 0,
                        "paper": 0,
                        "mixed": 0
                    },
                    "other": {
                        "glass": 0,
                        "clothing": 0
                    }
                },
                "landfill": {
                    "metal": {
                        "aluminium": 200,
                        "scrap": 0,
                        "steel": 0
                    },
                    "plastic": {
                        "average": 0,
                        "film": 0,
                        "rigid": 0,
                        "pvc": 0
                    },
                    "paper": {
                        "board": 0,
                        "paper": 0,
                        "mixed": 0
                    },
                    "other": {
                        "glass": 0,
                        "clothing": 0
                    }
                }
            },
            "food": {
                "oneWeek": [],
                "twoWeek": [],
                "oneDay": [],
                "twoDay": []
            },
            "spending": {
                "pharma": 0,
                "clothing": 0,
                "paper": 0,
                "computer": 0,
                "funi": 0,
                "edu": 0,
                "enter": 0
            }
        }
    ],
    "required": [
        "homeEnergy",
        "transportation",
        "waste",
        "food",
        "spending"
    ],
    "properties": {
        "homeEnergy": {
            "$id": "#/properties/homeEnergy",
            "type": "object",
            "title": "The homeEnergy schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "houseOccupants": 1,
                    "houseBedrooms": 0,
                    "useSimplified": false,
                    "electric": 0,
                    "gas": 0,
                    "oil": 0,
                    "coal": 0,
                    "lpg": 0,
                    "type": 0,
                    "age": 0,
                    "loftInsulation": 0,
                    "mainEnergySource": 0,
                    "secondaryEnergySource": 0,
                    "glazingType": 0,
                    "heatingType": 0,
                    "tempWinter": 0,
                    "tempControl": 0
                }
            ],
            "required": [
                "houseOccupants",
                "houseBedrooms",
                "useSimplified",
                "electric",
                "gas",
                "oil",
                "coal",
                "lpg",
                "type",
                "age",
                "loftInsulation",
                "mainEnergySource",
                "secondaryEnergySource",
                "glazingType",
                "heatingType",
                "tempWinter",
                "tempControl"
            ],
            "properties": {
                "houseOccupants": {
                    "$id": "#/properties/homeEnergy/properties/houseOccupants",
                    "type": "integer",
                    "title": "The houseOccupants schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "houseBedrooms": {
                    "$id": "#/properties/homeEnergy/properties/houseBedrooms",
                    "type": "integer",
                    "title": "The houseBedrooms schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "useSimplified": {
                    "$id": "#/properties/homeEnergy/properties/useSimplified",
                    "type": "boolean",
                    "title": "The useSimplified schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": false,
                    "examples": [
                        false
                    ]
                },
                "electric": {
                    "$id": "#/properties/homeEnergy/properties/electric",
                    "type": "integer",
                    "title": "The electric schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "gas": {
                    "$id": "#/properties/homeEnergy/properties/gas",
                    "type": "integer",
                    "title": "The gas schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "oil": {
                    "$id": "#/properties/homeEnergy/properties/oil",
                    "type": "integer",
                    "title": "The oil schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "coal": {
                    "$id": "#/properties/homeEnergy/properties/coal",
                    "type": "integer",
                    "title": "The coal schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "lpg": {
                    "$id": "#/properties/homeEnergy/properties/lpg",
                    "type": "integer",
                    "title": "The lpg schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "type": {
                    "$id": "#/properties/homeEnergy/properties/type",
                    "type": "integer",
                    "title": "The type schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "age": {
                    "$id": "#/properties/homeEnergy/properties/age",
                    "type": "integer",
                    "title": "The age schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "loftInsulation": {
                    "$id": "#/properties/homeEnergy/properties/loftInsulation",
                    "type": "integer",
                    "title": "The loftInsulation schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "mainEnergySource": {
                    "$id": "#/properties/homeEnergy/properties/mainEnergySource",
                    "type": "integer",
                    "title": "The mainEnergySource schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "secondaryEnergySource": {
                    "$id": "#/properties/homeEnergy/properties/secondaryEnergySource",
                    "type": "integer",
                    "title": "The secondaryEnergySource schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "glazingType": {
                    "$id": "#/properties/homeEnergy/properties/glazingType",
                    "type": "integer",
                    "title": "The glazingType schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "heatingType": {
                    "$id": "#/properties/homeEnergy/properties/heatingType",
                    "type": "integer",
                    "title": "The heatingType schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "tempWinter": {
                    "$id": "#/properties/homeEnergy/properties/tempWinter",
                    "type": "integer",
                    "title": "The tempWinter schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "tempControl": {
                    "$id": "#/properties/homeEnergy/properties/tempControl",
                    "type": "integer",
                    "title": "The tempControl schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                }
            },
            "additionalProperties": true
        },
        "transportation": {
            "$id": "#/properties/transportation",
            "type": "object",
            "title": "The transportation schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "car": {
                        "size": "",
                        "type": 0,
                        "distance": 0
                    },
                    "flight": {
                        "haul": "",
                        "pClass": 0,
                        "distance": 0
                    },
                    "railway": {
                        "national": 0,
                        "international": 0,
                        "metro": 0,
                        "underground": 0
                    },
                    "motorbike": {
                        "small": 0,
                        "medium": 0,
                        "large": 0,
                        "average": 0
                    },
                    "bus": {
                        "local": 0,
                        "localLondon": 0,
                        "averageLocal": 0,
                        "coach": 0
                    },
                    "taxi": {
                        "blackcab": 0,
                        "regular": 0
                    }
                }
            ],
            "required": [
                "car",
                "flight",
                "railway",
                "motorbike",
                "bus",
                "taxi"
            ],
            "properties": {
                "car": {
                    "$id": "#/properties/transportation/properties/car",
                    "type": "object",
                    "title": "The car schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "size": "",
                            "type": 0,
                            "distance": 0
                        }
                    ],
                    "required": [
                        "size",
                        "type",
                        "distance"
                    ],
                    "properties": {
                        "size": {
                            "$id": "#/properties/transportation/properties/car/properties/size",
                            "type": "string",
                            "title": "The size schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                ""
                            ]
                        },
                        "type": {
                            "$id": "#/properties/transportation/properties/car/properties/type",
                            "type": "integer",
                            "title": "The type schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "distance": {
                            "$id": "#/properties/transportation/properties/car/properties/distance",
                            "type": "integer",
                            "title": "The distance schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        }
                    },
                    "additionalProperties": true
                },
                "flight": {
                    "$id": "#/properties/transportation/properties/flight",
                    "type": "object",
                    "title": "The flight schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "haul": "",
                            "pClass": 0,
                            "distance": 0
                        }
                    ],
                    "required": [
                        "haul",
                        "pClass",
                        "distance"
                    ],
                    "properties": {
                        "haul": {
                            "$id": "#/properties/transportation/properties/flight/properties/haul",
                            "type": "string",
                            "title": "The haul schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                ""
                            ]
                        },
                        "pClass": {
                            "$id": "#/properties/transportation/properties/flight/properties/pClass",
                            "type": "integer",
                            "title": "The pClass schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "distance": {
                            "$id": "#/properties/transportation/properties/flight/properties/distance",
                            "type": "integer",
                            "title": "The distance schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        }
                    },
                    "additionalProperties": true
                },
                "railway": {
                    "$id": "#/properties/transportation/properties/railway",
                    "type": "object",
                    "title": "The railway schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "national": 0,
                            "international": 0,
                            "metro": 0,
                            "underground": 0
                        }
                    ],
                    "required": [
                        "national",
                        "international",
                        "metro",
                        "underground"
                    ],
                    "properties": {
                        "national": {
                            "$id": "#/properties/transportation/properties/railway/properties/national",
                            "type": "integer",
                            "title": "The national schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "international": {
                            "$id": "#/properties/transportation/properties/railway/properties/international",
                            "type": "integer",
                            "title": "The international schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "metro": {
                            "$id": "#/properties/transportation/properties/railway/properties/metro",
                            "type": "integer",
                            "title": "The metro schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "underground": {
                            "$id": "#/properties/transportation/properties/railway/properties/underground",
                            "type": "integer",
                            "title": "The underground schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        }
                    },
                    "additionalProperties": true
                },
                "motorbike": {
                    "$id": "#/properties/transportation/properties/motorbike",
                    "type": "object",
                    "title": "The motorbike schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "small": 0,
                            "medium": 0,
                            "large": 0,
                            "average": 0
                        }
                    ],
                    "required": [
                        "small",
                        "medium",
                        "large",
                        "average"
                    ],
                    "properties": {
                        "small": {
                            "$id": "#/properties/transportation/properties/motorbike/properties/small",
                            "type": "integer",
                            "title": "The small schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "medium": {
                            "$id": "#/properties/transportation/properties/motorbike/properties/medium",
                            "type": "integer",
                            "title": "The medium schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "large": {
                            "$id": "#/properties/transportation/properties/motorbike/properties/large",
                            "type": "integer",
                            "title": "The large schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "average": {
                            "$id": "#/properties/transportation/properties/motorbike/properties/average",
                            "type": "integer",
                            "title": "The average schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        }
                    },
                    "additionalProperties": true
                },
                "bus": {
                    "$id": "#/properties/transportation/properties/bus",
                    "type": "object",
                    "title": "The bus schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "local": 0,
                            "localLondon": 0,
                            "averageLocal": 0,
                            "coach": 0
                        }
                    ],
                    "required": [
                        "local",
                        "localLondon",
                        "averageLocal",
                        "coach"
                    ],
                    "properties": {
                        "local": {
                            "$id": "#/properties/transportation/properties/bus/properties/local",
                            "type": "integer",
                            "title": "The local schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "localLondon": {
                            "$id": "#/properties/transportation/properties/bus/properties/localLondon",
                            "type": "integer",
                            "title": "The localLondon schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "averageLocal": {
                            "$id": "#/properties/transportation/properties/bus/properties/averageLocal",
                            "type": "integer",
                            "title": "The averageLocal schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "coach": {
                            "$id": "#/properties/transportation/properties/bus/properties/coach",
                            "type": "integer",
                            "title": "The coach schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        }
                    },
                    "additionalProperties": true
                },
                "taxi": {
                    "$id": "#/properties/transportation/properties/taxi",
                    "type": "object",
                    "title": "The taxi schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "blackcab": 0,
                            "regular": 0
                        }
                    ],
                    "required": [
                        "blackcab",
                        "regular"
                    ],
                    "properties": {
                        "blackcab": {
                            "$id": "#/properties/transportation/properties/taxi/properties/blackcab",
                            "type": "integer",
                            "title": "The blackcab schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "regular": {
                            "$id": "#/properties/transportation/properties/taxi/properties/regular",
                            "type": "integer",
                            "title": "The regular schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        }
                    },
                    "additionalProperties": true
                }
            },
            "additionalProperties": true
        },
        "waste": {
            "$id": "#/properties/waste",
            "type": "object",
            "title": "The waste schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "recycled": {
                        "metal": {
                            "aluminium": 0,
                            "scrap": 0,
                            "steel": 0
                        },
                        "plastic": {
                            "average": 0,
                            "film": 0,
                            "rigid": 0,
                            "pvc": 0
                        },
                        "paper": {
                            "board": 0,
                            "paper": 0,
                            "mixed": 0
                        },
                        "other": {
                            "glass": 0,
                            "clothing": 0
                        }
                    },
                    "landfill": {
                        "metal": {
                            "aluminium": 200,
                            "scrap": 0,
                            "steel": 0
                        },
                        "plastic": {
                            "average": 0,
                            "film": 0,
                            "rigid": 0,
                            "pvc": 0
                        },
                        "paper": {
                            "board": 0,
                            "paper": 0,
                            "mixed": 0
                        },
                        "other": {
                            "glass": 0,
                            "clothing": 0
                        }
                    }
                }
            ],
            "required": [
                "recycled",
                "landfill"
            ],
            "properties": {
                "recycled": {
                    "$id": "#/properties/waste/properties/recycled",
                    "type": "object",
                    "title": "The recycled schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "metal": {
                                "aluminium": 0,
                                "scrap": 0,
                                "steel": 0
                            },
                            "plastic": {
                                "average": 0,
                                "film": 0,
                                "rigid": 0,
                                "pvc": 0
                            },
                            "paper": {
                                "board": 0,
                                "paper": 0,
                                "mixed": 0
                            },
                            "other": {
                                "glass": 0,
                                "clothing": 0
                            }
                        }
                    ],
                    "required": [
                        "metal",
                        "plastic",
                        "paper",
                        "other"
                    ],
                    "properties": {
                        "metal": {
                            "$id": "#/properties/waste/properties/recycled/properties/metal",
                            "type": "object",
                            "title": "The metal schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "aluminium": 0,
                                    "scrap": 0,
                                    "steel": 0
                                }
                            ],
                            "required": [
                                "aluminium",
                                "scrap",
                                "steel"
                            ],
                            "properties": {
                                "aluminium": {
                                    "$id": "#/properties/waste/properties/recycled/properties/metal/properties/aluminium",
                                    "type": "integer",
                                    "title": "The aluminium schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "scrap": {
                                    "$id": "#/properties/waste/properties/recycled/properties/metal/properties/scrap",
                                    "type": "integer",
                                    "title": "The scrap schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "steel": {
                                    "$id": "#/properties/waste/properties/recycled/properties/metal/properties/steel",
                                    "type": "integer",
                                    "title": "The steel schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                }
                            },
                            "additionalProperties": true
                        },
                        "plastic": {
                            "$id": "#/properties/waste/properties/recycled/properties/plastic",
                            "type": "object",
                            "title": "The plastic schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "average": 0,
                                    "film": 0,
                                    "rigid": 0,
                                    "pvc": 0
                                }
                            ],
                            "required": [
                                "average",
                                "film",
                                "rigid",
                                "pvc"
                            ],
                            "properties": {
                                "average": {
                                    "$id": "#/properties/waste/properties/recycled/properties/plastic/properties/average",
                                    "type": "integer",
                                    "title": "The average schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "film": {
                                    "$id": "#/properties/waste/properties/recycled/properties/plastic/properties/film",
                                    "type": "integer",
                                    "title": "The film schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "rigid": {
                                    "$id": "#/properties/waste/properties/recycled/properties/plastic/properties/rigid",
                                    "type": "integer",
                                    "title": "The rigid schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "pvc": {
                                    "$id": "#/properties/waste/properties/recycled/properties/plastic/properties/pvc",
                                    "type": "integer",
                                    "title": "The pvc schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                }
                            },
                            "additionalProperties": true
                        },
                        "paper": {
                            "$id": "#/properties/waste/properties/recycled/properties/paper",
                            "type": "object",
                            "title": "The paper schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "board": 0,
                                    "paper": 0,
                                    "mixed": 0
                                }
                            ],
                            "required": [
                                "board",
                                "paper",
                                "mixed"
                            ],
                            "properties": {
                                "board": {
                                    "$id": "#/properties/waste/properties/recycled/properties/paper/properties/board",
                                    "type": "integer",
                                    "title": "The board schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "paper": {
                                    "$id": "#/properties/waste/properties/recycled/properties/paper/properties/paper",
                                    "type": "integer",
                                    "title": "The paper schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "mixed": {
                                    "$id": "#/properties/waste/properties/recycled/properties/paper/properties/mixed",
                                    "type": "integer",
                                    "title": "The mixed schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                }
                            },
                            "additionalProperties": true
                        },
                        "other": {
                            "$id": "#/properties/waste/properties/recycled/properties/other",
                            "type": "object",
                            "title": "The other schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "glass": 0,
                                    "clothing": 0
                                }
                            ],
                            "required": [
                                "glass",
                                "clothing"
                            ],
                            "properties": {
                                "glass": {
                                    "$id": "#/properties/waste/properties/recycled/properties/other/properties/glass",
                                    "type": "integer",
                                    "title": "The glass schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "clothing": {
                                    "$id": "#/properties/waste/properties/recycled/properties/other/properties/clothing",
                                    "type": "integer",
                                    "title": "The clothing schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                }
                            },
                            "additionalProperties": true
                        }
                    },
                    "additionalProperties": true
                },
                "landfill": {
                    "$id": "#/properties/waste/properties/landfill",
                    "type": "object",
                    "title": "The landfill schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "metal": {
                                "aluminium": 200,
                                "scrap": 0,
                                "steel": 0
                            },
                            "plastic": {
                                "average": 0,
                                "film": 0,
                                "rigid": 0,
                                "pvc": 0
                            },
                            "paper": {
                                "board": 0,
                                "paper": 0,
                                "mixed": 0
                            },
                            "other": {
                                "glass": 0,
                                "clothing": 0
                            }
                        }
                    ],
                    "required": [
                        "metal",
                        "plastic",
                        "paper",
                        "other"
                    ],
                    "properties": {
                        "metal": {
                            "$id": "#/properties/waste/properties/landfill/properties/metal",
                            "type": "object",
                            "title": "The metal schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "aluminium": 200,
                                    "scrap": 0,
                                    "steel": 0
                                }
                            ],
                            "required": [
                                "aluminium",
                                "scrap",
                                "steel"
                            ],
                            "properties": {
                                "aluminium": {
                                    "$id": "#/properties/waste/properties/landfill/properties/metal/properties/aluminium",
                                    "type": "integer",
                                    "title": "The aluminium schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        200
                                    ]
                                },
                                "scrap": {
                                    "$id": "#/properties/waste/properties/landfill/properties/metal/properties/scrap",
                                    "type": "integer",
                                    "title": "The scrap schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "steel": {
                                    "$id": "#/properties/waste/properties/landfill/properties/metal/properties/steel",
                                    "type": "integer",
                                    "title": "The steel schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                }
                            },
                            "additionalProperties": true
                        },
                        "plastic": {
                            "$id": "#/properties/waste/properties/landfill/properties/plastic",
                            "type": "object",
                            "title": "The plastic schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "average": 0,
                                    "film": 0,
                                    "rigid": 0,
                                    "pvc": 0
                                }
                            ],
                            "required": [
                                "average",
                                "film",
                                "rigid",
                                "pvc"
                            ],
                            "properties": {
                                "average": {
                                    "$id": "#/properties/waste/properties/landfill/properties/plastic/properties/average",
                                    "type": "integer",
                                    "title": "The average schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "film": {
                                    "$id": "#/properties/waste/properties/landfill/properties/plastic/properties/film",
                                    "type": "integer",
                                    "title": "The film schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "rigid": {
                                    "$id": "#/properties/waste/properties/landfill/properties/plastic/properties/rigid",
                                    "type": "integer",
                                    "title": "The rigid schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "pvc": {
                                    "$id": "#/properties/waste/properties/landfill/properties/plastic/properties/pvc",
                                    "type": "integer",
                                    "title": "The pvc schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                }
                            },
                            "additionalProperties": true
                        },
                        "paper": {
                            "$id": "#/properties/waste/properties/landfill/properties/paper",
                            "type": "object",
                            "title": "The paper schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "board": 0,
                                    "paper": 0,
                                    "mixed": 0
                                }
                            ],
                            "required": [
                                "board",
                                "paper",
                                "mixed"
                            ],
                            "properties": {
                                "board": {
                                    "$id": "#/properties/waste/properties/landfill/properties/paper/properties/board",
                                    "type": "integer",
                                    "title": "The board schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "paper": {
                                    "$id": "#/properties/waste/properties/landfill/properties/paper/properties/paper",
                                    "type": "integer",
                                    "title": "The paper schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "mixed": {
                                    "$id": "#/properties/waste/properties/landfill/properties/paper/properties/mixed",
                                    "type": "integer",
                                    "title": "The mixed schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                }
                            },
                            "additionalProperties": true
                        },
                        "other": {
                            "$id": "#/properties/waste/properties/landfill/properties/other",
                            "type": "object",
                            "title": "The other schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "glass": 0,
                                    "clothing": 0
                                }
                            ],
                            "required": [
                                "glass",
                                "clothing"
                            ],
                            "properties": {
                                "glass": {
                                    "$id": "#/properties/waste/properties/landfill/properties/other/properties/glass",
                                    "type": "integer",
                                    "title": "The glass schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                },
                                "clothing": {
                                    "$id": "#/properties/waste/properties/landfill/properties/other/properties/clothing",
                                    "type": "integer",
                                    "title": "The clothing schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0,
                                    "examples": [
                                        0
                                    ]
                                }
                            },
                            "additionalProperties": true
                        }
                    },
                    "additionalProperties": true
                }
            },
            "additionalProperties": true
        },
        "food": {
            "$id": "#/properties/food",
            "type": "object",
            "title": "The food schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "oneWeek": [],
                    "twoWeek": [],
                    "oneDay": [],
                    "twoDay": []
                }
            ],
            "required": [
                "oneWeek",
                "twoWeek",
                "oneDay",
                "twoDay"
            ],
            "properties": {
                "oneWeek": {
                    "$id": "#/properties/food/properties/oneWeek",
                    "type": "array",
                    "title": "The oneWeek schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": [],
                    "examples": [
                        []
                    ],
                    "items": {
                        "$id": "#/properties/food/properties/oneWeek/items"
                    }
                },
                "twoWeek": {
                    "$id": "#/properties/food/properties/twoWeek",
                    "type": "array",
                    "title": "The twoWeek schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": [],
                    "examples": [
                        []
                    ],
                    "items": {
                        "$id": "#/properties/food/properties/twoWeek/items"
                    }
                },
                "oneDay": {
                    "$id": "#/properties/food/properties/oneDay",
                    "type": "array",
                    "title": "The oneDay schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": [],
                    "examples": [
                        []
                    ],
                    "items": {
                        "$id": "#/properties/food/properties/oneDay/items"
                    }
                },
                "twoDay": {
                    "$id": "#/properties/food/properties/twoDay",
                    "type": "array",
                    "title": "The twoDay schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": [],
                    "examples": [
                        []
                    ],
                    "items": {
                        "$id": "#/properties/food/properties/twoDay/items"
                    }
                }
            },
            "additionalProperties": true
        },
        "spending": {
            "$id": "#/properties/spending",
            "type": "object",
            "title": "The spending schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "pharma": 0,
                    "clothing": 0,
                    "paper": 0,
                    "computer": 0,
                    "funi": 0,
                    "edu": 0,
                    "enter": 0
                }
            ],
            "required": [
                "pharma",
                "clothing",
                "paper",
                "computer",
                "funi",
                "edu",
                "enter"
            ],
            "properties": {
                "pharma": {
                    "$id": "#/properties/spending/properties/pharma",
                    "type": "integer",
                    "title": "The pharma schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "clothing": {
                    "$id": "#/properties/spending/properties/clothing",
                    "type": "integer",
                    "title": "The clothing schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "paper": {
                    "$id": "#/properties/spending/properties/paper",
                    "type": "integer",
                    "title": "The paper schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "computer": {
                    "$id": "#/properties/spending/properties/computer",
                    "type": "integer",
                    "title": "The computer schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "funi": {
                    "$id": "#/properties/spending/properties/funi",
                    "type": "integer",
                    "title": "The funi schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "edu": {
                    "$id": "#/properties/spending/properties/edu",
                    "type": "integer",
                    "title": "The edu schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "enter": {
                    "$id": "#/properties/spending/properties/enter",
                    "type": "integer",
                    "title": "The enter schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        0
                    ]
                }
            },
            "additionalProperties": true
        }
    },
    "additionalProperties": true
}

export default ImportJsonSchema;