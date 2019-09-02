report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Home_-_Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Home_-_Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Home_-_Desktop_0_document_0_desktop.png",
        "label": "GeoNode Home - Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Home_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Home_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Home_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode Home - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Layers_-_Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Layers_-_Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Layers_-_Desktop_0_document_0_desktop.png",
        "label": "GeoNode Layers - Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/layers/?limit=20&offset=0",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 132
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Layers_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Layers_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Layers_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode Layers - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/layers/?limit=20&offset=0",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 77
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Maps_-_Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Maps_-_Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Maps_-_Desktop_0_document_0_desktop.png",
        "label": "GeoNode Maps - Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/maps/?limit=20&offset=0",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -62
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 67
        },
        "diffImage": "../bitmaps_test/20190902-092534/failed_diff_geonode_regression_tests_GeoNode_Maps_-_Desktop_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Maps_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Maps_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Maps_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode Maps - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/maps/?limit=20&offset=0",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_People_-_Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_People_-_Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_People_-_Desktop_0_document_0_desktop.png",
        "label": "GeoNode People - Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/people/?limit=20&offset=0",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 57
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_People_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_People_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_People_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode People - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/people/?limit=20&offset=0",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_SingleLayer_-_Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_SingleLayer_-_Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_SingleLayer_-_Desktop_0_document_0_desktop.png",
        "label": "GeoNode SingleLayer - Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/layers/geonode:single_point",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_SingleLayer_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_SingleLayer_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_SingleLayer_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode SingleLayer - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/layers/geonode:single_point",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_Create_Map_-_Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_Create_Map_-_Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_Create_Map_-_Desktop_0_document_0_desktop.png",
        "label": "Create Map - Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/maps/new",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "23.93",
          "analysisTime": 62
        },
        "diffImage": "../bitmaps_test/20190902-092534/failed_diff_geonode_regression_tests_Create_Map_-_Desktop_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Layer_Upload_-_Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Layer_Upload_-_Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Layer_Upload_-_Desktop_0_document_0_desktop.png",
        "label": "GeoNode Layer Upload - Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/layers/upload",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Layer_Upload_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Layer_Upload_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Layer_Upload_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode Layer Upload - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/layers/upload",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_SingleLayer_metaWizard_-_Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_SingleLayer_metaWizard_-_Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_SingleLayer_metaWizard_-_Desktop_0_document_0_desktop.png",
        "label": "GeoNode SingleLayer metaWizard - Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/layers/geonode:single_point/metadata",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 51
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_SingleLayer_metaWizard_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_SingleLayer_metaWizard_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_SingleLayer_metaWizard_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode SingleLayer metaWizard - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/layers/geonode:single_point/metadata",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Remote_Service__Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Remote_Service__Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Remote_Service__Desktop_0_document_0_desktop.png",
        "label": "GeoNode Remote Service – Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/services/register/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Remote_Service_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Remote_Service_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Remote_Service_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode Remote Service - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/services/register/",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Documents__Desktop_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Documents__Desktop_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Documents__Desktop_0_document_0_desktop.png",
        "label": "GeoNode Documents – Desktop",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/documents/?limit=20&offset=0",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/geonode_regression_tests_GeoNode_Documents_-_Mobile__0_document_0_mobile.png",
        "test": "../bitmaps_test/20190902-092534/geonode_regression_tests_GeoNode_Documents_-_Mobile__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "geonode_regression_tests_GeoNode_Documents_-_Mobile__0_document_0_mobile.png",
        "label": "GeoNode Documents - Mobile ",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/documents/?limit=20&offset=0",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "geonode_regression_tests"
});