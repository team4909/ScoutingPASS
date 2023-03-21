let CU_data = {
  "enable_google_sheets": "true", 
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 10,
      "maxSize": 999,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023mabos",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Dropped<br> Game Pieces",
    "code": "da",
    "type": "counter"
    }, 
    { "name": "Status",
      "code": "st",
      "type":"radio",
      "choices": {
        "d": "Docked (Not Balanced)<br>",
        "e": "Engaged (Balanced)<br>",
        "a": "Attempted but failed<br>",
      },
      "defaultValue": "x"
    },
    { "name": "Left Community?",
    "code": "lef",
    "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Grid Scoring",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },   
    { "name": "Dropped<br> Game Pieces",
    "code": "dt",
    "type": "counter"
    }, 
    { "name": "Died/Immobilized",
    "code": "die",
    "type": "bool"
    }
  ],
  "endgame": [

    { "name": "Did It<br>Defend?",
      "code": "did",
      "type": "level",
      "choices": {
        "yi": "Yes, It Stopped Robots From Intaking<br>",
        "yn": "Yes, Made it Difficult To Navigate<br>",
        "n": "No"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 999
  }
  // ],
  // "postmatch": [ 
  //   { "name": "Died/Immobilized",
  //     "code": "di",
  //     "type": "bool"
  //   },
  //   { "name": "Dropped Cones (>2)",
  //     "code": "dc",
  //     "type": "bool"
  //   },
  //   { "name": "Comments",
  //     "code": "c",
  //     "type": "text",
  //     "size": 15,
  //     "maxSize": 999
  //   }
  ]
}
var config_data = JSON.stringify(CU_data);
