console.log("Wordbank!");

var wordbank = {
  "name": "shapes",
  "list": [
    "acute triangle",
    "annulus",
    "arc",
    "asymmetry",
    "bipyramid",
    "cardioid",
    "circle",
    "concave polygon",
    "cone",
    "convex polygon",
    "crescent",
    "cube",
    "cuboid",
    "curve",
    "cylinder",
    "decagon",
    "disc",
    "dodecahedron",
    "dot",
    "ellipse",
    "ellipsoid",
    "equilateral triangle",
    "gnomon",
    "heart",
    "helix",
    "heptagon",
    "hexaflexagon",
    "hexagon",
    "hexagonal prism",
    "hexahedron",
    "hyperboloid",
    "hypersphere",
    "icosahedron",
    "interval",
    "isosceles triangle",
    "kite",
    "Klein bottle",
    "line",
    "line segment",
    "lozenge",
    "möbius strip",
    "nonagon",
    "obtuse triangle",
    "octagon",
    "octahedron",
    "orb",
    "oval",
    "paraboloid",
    "parallelepiped",
    "parallelogram",
    "pentagon",
    "plane",
    "Platonic solid",
    "point",
    "polygon",
    "polyhedra",
    "prism",
    "pyramid",
    "quadrilateral",
    "ray",
    "rectangle",
    "regular polygon",
    "regular polyhedra",
    "rhombus",
    "right triangle",
    "round",
    "scalene triangle",
    "sector",
    "semicircle",
    "shape",
    "shapeless",
    "sphere",
    "spheroid",
    "square",
    "star",
    "symmetry",
    "tetrahedron",
    "tesseract",
    "torus",
    "trapezium",
    "trapezoid",
    "triangle",
    "wedge"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "shapes_wordbank",
  "title": "Shapes Wordbank 2017",
  "documentId": "shapes_wordbank",
  "phrases": []
};

for (i = 0; i < wordbank.list.length; i++) {

  allPhrases.phrases.push(
    {
      "phrase": "",
      "phraseToParse": wordbank.list[i],
      "imgData": {
        "url": ""
      },
      "metaData": {}
    });
}

// console.log(allPhraseIds);
console.log(JSON.stringify(allPhrases, 0, 2));
