let config = {

  "title": "Scouting PASS 2023",
  "enable_google_sheets": "true",   
  "page_title": "Charged Up",
  "checkboxAs": "10",

  "prematch": [
    { "name": "Scouter Initials",
      "gsCol": "scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "event",
      "code": "e",
      "type": "event",
      "defaultValue": "2022carv",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
     "gsCol": "level",
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
      "gsCol": "matchNum",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "robot",
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
      "gsCol": "teamNum",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "autoStartPosition",
      "code": "as",
      "type": "field_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
      "gsCol": "autoScoringGrid",
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
    "gsCol": "drop",
    "type": "counter"
    }, 
    { "name": "Status",
      "code": "st",
      "gsCol": "stat",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Balanced)<br>",
        "e": "Engaged (Balanced)<br>",
        "a": "Attempted but failed<br>",
      },
      "defaultValue": "x"
    },
    { "name": "Left Community?",
    "code": "lef",
    "gsCol": "left",
    "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Grid Scoring",
      "code": "tsg",
      "gsCol": "gridScoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Dropped<br> Game Pieces",
    "code": "dt",
    "gsCol": "dropt",
    "type": "counter"
    }, 
    { "name": "Died/Immobilized",
    "code": "die",
    "gsCol": "died",
    "type": "bool"
    }
  ],
  "endgame": [

    { "name": "Did It<br>Defend?",
      "code": "did",
      "gsCol": "defend",

      "type": "level",
      "choices": {
        "yi": "Yes, It Stopped Robots From Intaking<br>",
        "yn": "Yes, Made it Difficult To Navigate<br>",
        "n": "No"
      },

    },
    { "name": "Comments",
      "code": "co",
      "gsCol": "comments",
      "type": "text",
      "size": 15,
      "maxSize": 999
  }
  // ],
  // "postmatch": [
  //   { "name": "Died/Immobilized",
  //     "code": "di",
  //     "gsCol": "die",
  //     "type": "bool"
  //   },
  //   { "name": "Dropped Cones (>2)",
  //     "code": "dc",
  //     "gsCol": "droppedCones",
  //     "type": "bool"
  //   },
  //   { "name": "Comments",
  //     "code": "c",
  //     "gsCol": "comment",
  //     "type": "text",
  //     "size": 15,
  //     "maxSize": 50
  //   }
  ]
}

var config_data = JSON.stringify(config);
