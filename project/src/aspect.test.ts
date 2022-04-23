import AspectCalculator from "./aspect";
import default_settings from "./settings";

describe('radix', () => {
  test('1', () => {
    var toPoints = {
      Sun: [0],
      Moon: [91],
      Neptune: [122],
      As: [330],
      Ic: [90],
    };

    var points = {
      Sun: [0],
      Moon: [91],
      Neptune: [122],
    };

    const settings = {
      ...default_settings,
      ASPECTS: {
        conjunction: { degree: 0, orbit: 10, color: "transparent" },
        square: { degree: 90, orbit: 8, color: "#FF4500" },
        trine: { degree: 120, orbit: 8, color: "#27AE60" },
        opposition: { degree: 180, orbit: 10, color: "#27AE60" },
      },
    };

    const calculator = new AspectCalculator(toPoints, settings);
    const aspects = calculator.radix(points);

    expect(aspects).toStrictEqual([
      {
        aspect: {
          color: "#FF4500",
          degree: 90,
          name: "square",
          orbit: 8,
        },
        point: {
          name: "Sun",
          position: 0,
        },
        precision: "0.0000",
        toPoint: {
          name: "Ic",
          position: 90,
        },
      },
      {
        aspect: {
          color: "#FF4500",
          degree: 90,
          name: "square",
          orbit: 8,
        },
        point: {
          name: "Sun",
          position: 0,
        },
        precision: "1.0000",
        toPoint: {
          name: "Moon",
          position: 91,
        },
      },
      {
        aspect: {
          color: "#FF4500",
          degree: 90,
          name: "square",
          orbit: 8,
        },
        point: {
          name: "Moon",
          position: 91,
        },
        precision: "1.0000",
        toPoint: {
          name: "Sun",
          position: 0,
        },
      },
      {
        aspect: {
          color: "#27AE60",
          degree: 120,
          name: "trine",
          orbit: 8,
        },
        point: {
          name: "Moon",
          position: 91,
        },
        precision: "1.0000",
        toPoint: {
          name: "As",
          position: 330,
        },
      },
      {
        aspect: {
          color: "transparent",
          degree: 0,
          name: "conjunction",
          orbit: 10,
        },
        point: {
          name: "Moon",
          position: 91,
        },
        precision: "1.0000",
        toPoint: {
          name: "Ic",
          position: 90,
        },
      },
      {
        aspect: {
          color: "#27AE60",
          degree: 120,
          name: "trine",
          orbit: 8,
        },
        point: {
          name: "Sun",
          position: 0,
        },
        precision: "2.0000",
        toPoint: {
          name: "Neptune",
          position: 122,
        },
      },
      {
        aspect: {
          color: "#27AE60",
          degree: 120,
          name: "trine",
          orbit: 8,
        },
        point: {
          name: "Neptune",
          position: 122,
        },
        precision: "2.0000",
        toPoint: {
          name: "Sun",
          position: 0,
        },
      },
    ]);
  });
});

describe('transit', () => {
  test('1', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[1], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
      "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
      "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
      "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
      "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
    }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                                          
     expect(calculator.transit( transit )).toStrictEqual([
                {
                  "aspect": {
                    "color": "transparent",
                    "degree": 0,
                    "name": "conjunction",
                    "orbit": 10
                  },
                  "point": {
                    "name": "Sun",
                    "position": 1
                  },
                  "precision": "1.0000",
                  "toPoint": {
                    "name": "Sun",
                    "position": 0
                  }
                }
              ]);
  })

  test('2', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[359], 											
    }
    
    const settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }}
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([
              {
                "aspect": {
                  "color": "transparent",
                  "degree": 0,
                  "name": "conjunction",
                  "orbit": 10
                },
                "point": {
                  "name": "Sun",
                  "position": 359
                },
                "precision": "-1.0000",
                "toPoint": {
                  "name": "Sun",
                  "position": 0
                }
              }
            ]);		
  })

  test('3', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[91], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
      "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
      "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
      "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
      "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
    }}
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual( 	
          [
            {
              "aspect": {
            "color": "#FF4500",
            "degree": 90,
            "name": "square",
            "orbit": 8
          },
          "point": {
            "name": "Sun",
            "position": 91
          },
          "precision": "1.0000",
          "toPoint": {
            "name": "Sun",
            "position": 0
              }
            }
          ]);
  })

  test('4', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[89], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([
            {
              "aspect": {
            "color": "#FF4500",
            "degree": 90,
            "name": "square",
            "orbit": 8
          },
          "point": {
            "name": "Sun",
            "position": 89
          },
          "precision": "-1.0000",
          "toPoint": {
            "name": "Sun",
            "position": 0
              }
            }
          ]);
  })

  test('5', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[181], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([
          {
            "aspect": {
              "color": "#27AE60",
              "degree": 180,
              "name": "opposition",
              "orbit": 10
            },
            "point": {
              "name": "Sun",
              "position": 181
            },
            "precision": "1.0000",
            "toPoint": {
              "name": "Sun",
              "position": 0
            }
          }
        ]);
  })

  test('6', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[179], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
     expect(calculator.transit( transit )).toStrictEqual([
        {
          "aspect": {
            "color": "#27AE60",
            "degree": 180,
            "name": "opposition",
            "orbit": 10
          },
          "point": {
            "name": "Sun",
            "position": 179
          },
          "precision": "-1.0000",
          "toPoint": {
            "name": "Sun",
            "position": 0
          }
        }
      ]);
  })

  test('7', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[271], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([
          {
            "aspect": {
              "color": "#FF4500",
              "degree": 90,
              "name": "square",
              "orbit": 8
            },
            "point": {
              "name": "Sun",
              "position": 271
            },
            "precision": "1.0000",
            "toPoint": {
              "name": "Sun",
              "position": 0
            }
          }
        ]);
  })

  test('8', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[269], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([
          {
            "aspect": {
              "color": "#FF4500",
              "degree": 90,
              "name": "square",
              "orbit": 8
            },
            "point": {
              "name": "Sun",
              "position": 269
            },
            "precision": "-1.0000",
            "toPoint": {
              "name": "Sun",
              "position": 0
            }
          }
        ]);
  })

  test('9', () => {
    var toPoints = {
      "Sun":[359], 						
    };
    
    var transit = {
      "Sun":[90], 											
    };
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([{
        "aspect": {
          "color": "#FF4500",
          "degree": 90,
          "name": "square",
          "orbit": 8
        },
        "point": {
          "name": "Sun",
          "position": 90
        },
        "precision": "1.0000",
        "toPoint": {
          "name": "Sun",
          "position": 359
        }
      }]);
  })

  test('10', () => {
    var toPoints = {
      "Sun":[359], 						
    };
    
    var transit = {
      "Sun":[88], 											
    };
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([{
        "aspect": {
          "color": "#FF4500",
          "degree": 90,
          "name": "square",
          "orbit": 8
        },
        "point": {
          "name": "Sun",
          "position": 88
        },
        "precision": "-1.0000",
        "toPoint": {
          "name": "Sun",
          "position": 359
        }
      }]);
  })

  test('11 - speed', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[1, 1], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([ {
          "aspect": {
            "color": "transparent",
            "degree": 0,
            "name": "conjunction",
            "orbit": 10
          },
          "point": {
            "name": "Sun",
            "position": 1
          },
          "precision": "1.0000",
          "toPoint": {
            "name": "Sun",
            "position": 0
          }
        }]);
  })

  test('12 - speed', () => {
    var toPoints = {
      "Sun":[0], 						
    };
    
    var transit = {
      "Sun":[1, -1], 											
    }
    
    var settings = {...default_settings, ASPECTS: { 
        "conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
        "square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
        "trine":{"degree":120, "orbit":8, "color":"#27AE60"},
        "opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
      }};
      
    var calculator = new AspectCalculator( toPoints, settings);
                                  
    expect(calculator.transit( transit )).toStrictEqual([{
          "aspect": {
            "color": "transparent",
            "degree": 0,
            "name": "conjunction",
            "orbit": 10
          },
          "point": {
            "name": "Sun",
            "position": 1
          },
          "precision": "-1.0000",
          "toPoint": {
            "name": "Sun",
            "position": 0
          }
        }]);
  })

})
