/**
 * Tests Two.js Utilities related to Svg Interpretation:
 * + two.interpret()
 * + polygon.subdivide()
 */

(function() {

  module('SvgInterpreter');

  asyncTest('Two.interpret', 7, function(o) {

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/D.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":122.049,"y":350,"command":"M","controls":{"left":{"x":122.049,"y":350},"right":{"x":122.049,"y":350}}},{"x":122.10700000000001,"y":50,"command":"L","controls":{"left":{"x":122.10700000000001,"y":50},"right":{"x":200.00600000000003,"y":50}}},{"x":277.952,"y":118.883,"command":"C","controls":{"left":{"x":277.952,"y":51.528999999999996},"right":{"x":277.952,"y":118.883}}},{"x":277.952,"y":273.965,"command":"C","controls":{"left":{"x":277.952,"y":197.98899999999998},"right":{"x":277.951,"y":349.941}}},{"x":122.049,"y":350,"command":"C","controls":{"left":{"x":200.006,"y":350},"right":{"x":122.049,"y":350}}}],"rotation":0,"scale":1}],"translation":{"x":200,"y":200},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).center();

        shape.translation.set(two.width / 2, two.height / 2);

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.interpret imports <path> properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/K.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":0.1419999999999959,"y":-150,"command":"M"},{"x":-0.1419999999999959,"y":150,"command":"L"}],"rotation":0,"scale":1},{"vertices":[{"x":77.44849999999997,"y":-97.33449999999999,"command":"M"},{"x":-77.44849999999997,"y":97.33449999999999,"command":"L"}],"rotation":0,"scale":1},{"vertices":[{"x":-57.42400000000001,"y":-86.08600000000001,"command":"M"},{"x":57.42400000000001,"y":86.08600000000001,"command":"L"}],"rotation":0,"scale":1}],"translation":{"x":200,"y":200},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).center();

        shape.translation.set(two.width / 2, two.height / 2);

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.interpret imports <line> properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/circle.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":100,"y":0,"command":"M","controls":{"left":{"x":100,"y":-25.257106536095936},"right":{"x":100,"y":25.25710653609592}}},{"x":70.71067811865476,"y":70.71067811865474,"command":"C","controls":{"left":{"x":88.57014942347925,"y":52.851206813830245},"right":{"x":52.851206813830245,"y":88.57014942347924}}},{"x":6.123031769111886e-15,"y":100,"command":"C","controls":{"left":{"x":25.257106536095932,"y":100},"right":{"x":-25.257106536095915,"y":100}}},{"x":-70.71067811865474,"y":70.71067811865476,"command":"C","controls":{"left":{"x":-52.851206813830245,"y":88.57014942347925},"right":{"x":-88.57014942347924,"y":52.85120681383025}}},{"x":-100,"y":1.2246063538223773e-14,"command":"C","controls":{"left":{"x":-99.99999999999999,"y":25.257106536095936},"right":{"x":-100,"y":-25.257106536095915}}},{"x":-70.71067811865477,"y":-70.71067811865474,"command":"C","controls":{"left":{"x":-88.57014942347926,"y":-52.85120681383024},"right":{"x":-52.85120681383027,"y":-88.57014942347924}}},{"x":-1.836909530733566e-14,"y":-100,"command":"C","controls":{"left":{"x":-25.257106536095943,"y":-100},"right":{"x":25.257106536095908,"y":-100}}},{"x":70.71067811865474,"y":-70.71067811865477,"command":"C","controls":{"left":{"x":52.851206813830245,"y":-88.57014942347928},"right":{"x":88.57014942347925,"y":-52.85120681383026}}}],"rotation":0,"scale":1}],"translation":{"x":200,"y":200},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).center();

        shape.translation.set(two.width / 2, two.height / 2);

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.interpret imports <circle> properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/rect.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":100,"y":100,"command":"M"},{"x":-100,"y":100,"command":"L"},{"x":-100,"y":-100,"command":"L"},{"x":100,"y":-100,"command":"L"}],"rotation":0,"scale":1}],"translation":{"x":200,"y":200},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).center();

        shape.translation.set(two.width / 2, two.height / 2);

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.interpret imports <rect> properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/ellipse.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":150,"y":0,"command":"M","controls":{"left":{"x":150,"y":-23.068791917986825},"right":{"x":150,"y":23.068791917986818}}},{"x":106.06601717798213,"y":54.374390152901945,"command":"C","controls":{"left":{"x":125.73007811641895,"y":42.31230625480136},"right":{"x":75.56491679098507,"y":73.08399611904339}}},{"x":9.18454765366783e-15,"y":76.897,"command":"C","controls":{"left":{"x":35.78220899030619,"y":76.897},"right":{"x":-35.78220899030618,"y":76.897}}},{"x":-106.06601717798212,"y":54.37439015290195,"command":"C","controls":{"left":{"x":-75.56491679098505,"y":73.0839961190434},"right":{"x":-125.73007811641894,"y":42.31230625480137}}},{"x":-150,"y":9.416855478987935e-15,"command":"C","controls":{"left":{"x":-150,"y":23.06879191798683},"right":{"x":-150,"y":-23.068791917986808}}},{"x":-106.06601717798215,"y":-54.374390152901945,"command":"C","controls":{"left":{"x":-125.73007811641897,"y":-42.31230625480136},"right":{"x":-75.56491679098508,"y":-73.0839961190434}}},{"x":-2.7553642961003488e-14,"y":-76.897,"command":"C","controls":{"left":{"x":-35.78220899030621,"y":-76.897},"right":{"x":35.78220899030616,"y":-76.897}}},{"x":106.0660171779821,"y":-54.37439015290196,"command":"C","controls":{"left":{"x":75.56491679098504,"y":-73.08399611904342},"right":{"x":125.73007811641892,"y":-42.31230625480137}}}],"rotation":0,"scale":1}],"translation":{"x":200,"y":200},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).center();

        shape.translation.set(two.width / 2, two.height / 2);

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.interpret imports <ellipse> properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/polyline.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":20.079,"y":104.42,"command":"M"},{"x":47.352,"y":104.42,"command":"L"},{"x":47.352,"y":90.785,"command":"L"},{"x":74.625,"y":90.785,"command":"L"},{"x":74.625,"y":104.42,"command":"L"},{"x":101.897,"y":104.42,"command":"L"},{"x":101.897,"y":70.33,"command":"L"},{"x":129.17,"y":70.33,"command":"L"},{"x":129.17,"y":104.42,"command":"L"},{"x":156.442,"y":104.42,"command":"L"},{"x":156.442,"y":49.875,"command":"L"},{"x":183.715,"y":49.875,"command":"L"},{"x":183.715,"y":104.42,"command":"L"},{"x":210.988,"y":104.42,"command":"L"},{"x":210.988,"y":29.42,"command":"L"},{"x":238.26,"y":29.42,"command":"L"},{"x":238.26,"y":104.42,"command":"L"},{"x":265.534,"y":104.42,"command":"L"},{"x":265.534,"y":8.965,"command":"L"},{"x":292.805,"y":8.965,"command":"L"},{"x":292.805,"y":104.42,"command":"L"},{"x":320.079,"y":104.42,"command":"L"}],"rotation":0,"scale":1}],"translation":{"x":200,"y":200},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).center();

        shape.translation.set(two.width / 2, two.height / 2);

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.interpret imports <polyline> properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/polygon.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":99.212,"y":21.26,"command":"M"},{"x":107.433,"y":45.638,"command":"L"},{"x":132.945,"y":45.638,"command":"L"},{"x":112.536,"y":60.945,"command":"L"},{"x":119.905,"y":85.323,"command":"L"},{"x":99.212,"y":70.867,"command":"L"},{"x":78.52,"y":85.323,"command":"L"},{"x":85.89,"y":60.945,"command":"L"},{"x":65.48,"y":45.638,"command":"L"},{"x":90.992,"y":45.638,"command":"L"}],"rotation":0,"scale":1},{"vertices":[{"x":240.945,"y":21.26,"command":"M"},{"x":271.559,"y":38.977,"command":"L"},{"x":271.559,"y":74.41,"command":"L"},{"x":240.945,"y":92.126,"command":"L"},{"x":210.331,"y":74.438,"command":"L"},{"x":210.331,"y":38.977,"command":"L"}],"rotation":0,"scale":1}],"translation":{"x":200,"y":200},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).center();

        shape.translation.set(two.width / 2, two.height / 2);

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.interpret imports <polygon> properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

  });

  asyncTest('Two.subdivide', 2, function(o) {

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/D.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":122.049,"y":350,"command":"L"},{"x":122.049,"y":350,"command":"M"},{"x":122.04957846529616,"y":347.0079381233462,"command":"L"},{"x":122.05121941787094,"y":338.52025239161406,"command":"L"},{"x":122.05378119275392,"y":325.2696926521473,"command":"L"},{"x":122.05712212497455,"y":307.9890087522898,"command":"L"},{"x":122.06110054956238,"y":287.4109505393852,"command":"L"},{"x":122.0655748015469,"y":264.2682678607775,"command":"L"},{"x":122.07040321595767,"y":239.29371056381027,"command":"L"},{"x":122.07544412782416,"y":213.22002849582742,"command":"L"},{"x":122.08055587217586,"y":186.7799715041726,"command":"L"},{"x":122.08559678404237,"y":160.7062894361897,"command":"L"},{"x":122.09042519845309,"y":135.73173213922243,"command":"L"},{"x":122.09489945043764,"y":112.58904946061469,"command":"L"},{"x":122.09887787502545,"y":92.01099124771018,"command":"L"},{"x":122.1022188072461,"y":74.73030734785264,"command":"L"},{"x":122.10478058212905,"y":61.47974760838592,"command":"L"},{"x":122.10642153470387,"y":52.99206187665378,"command":"L"},{"x":122.10700000000001,"y":50,"command":"L"},{"x":135.83849542031348,"y":50.0289588845919,"command":"L"},{"x":149.47571768776714,"y":50.168183187461835,"command":"L"},{"x":162.9234178709546,"y":50.49619438225117,"command":"L"},{"x":176.08634703846934,"y":51.09151394260126,"command":"L"},{"x":188.86925625890493,"y":52.032663342153455,"command":"L"},{"x":201.17689660085486,"y":53.398164054549156,"command":"L"},{"x":212.9140191329127,"y":55.26653755342967,"command":"L"},{"x":223.9853749236719,"y":57.716305312436404,"command":"L"},{"x":234.295715041726,"y":60.82598880521066,"command":"L"},{"x":243.74979055566868,"y":64.67410950539386,"command":"L"},{"x":252.25235253409323,"y":69.33918888662731,"command":"L"},{"x":259.70815204559335,"y":74.89974842255242,"command":"L"},{"x":266.0219401587625,"y":81.4343095868105,"command":"L"},{"x":271.0984679421942,"y":89.02139385304294,"command":"L"},{"x":274.84248646448196,"y":97.7395226948911,"command":"L"},{"x":277.15874679421944,"y":107.66721758599634,"command":"L"},{"x":277.952,"y":118.883,"command":"L"},{"x":277.952,"y":119.68743110116019,"command":"L"},{"x":277.952,"y":122.03377060858944,"command":"L"},{"x":277.952,"y":125.82158782821085,"command":"L"},{"x":277.95199999999994,"y":130.95045206594747,"command":"L"},{"x":277.95199999999994,"y":137.31993262772232,"command":"L"},{"x":277.952,"y":144.82959881945854,"command":"L"},{"x":277.952,"y":153.37901994707917,"command":"L"},{"x":277.952,"y":162.86776531650722,"command":"L"},{"x":277.952,"y":173.19540423366573,"command":"L"},{"x":277.952,"y":184.26150600447792,"command":"L"},{"x":277.952,"y":195.96563993486666,"command":"L"},{"x":277.952,"y":208.20737533075516,"command":"L"},{"x":277.952,"y":220.88628149806632,"command":"L"},{"x":277.952,"y":233.90192774272333,"command":"L"},{"x":277.952,"y":247.15388337064925,"command":"L"},{"x":277.952,"y":260.5417176877671,"command":"L"},{"x":277.952,"y":273.965,"command":"L"},{"x":277.15857866883783,"y":286.59990392835334,"command":"L"},{"x":274.84211723997555,"y":297.75131793201706,"command":"L"},{"x":271.09779014858543,"y":307.51188357419085,"command":"L"},{"x":266.02077182983913,"y":315.9742424180744,"command":"L"},{"x":259.70623671890894,"y":323.2310360268674,"command":"L"},{"x":252.2493592509668,"y":329.3749059637695,"command":"L"},{"x":243.74531386118457,"y":334.4984937919804,"command":"L"},{"x":234.2892749847344,"y":338.6944410746998,"command":"L"},{"x":223.9764170567881,"y":342.0553893751271,"command":"L"},{"x":212.90191451251786,"y":344.67398025646247,"command":"L"},{"x":201.16094178709545,"y":346.6428552819051,"command":"L"},{"x":188.84867331569308,"y":348.05465601465505,"command":"L"},{"x":176.06028353348262,"y":349.00202401791165,"command":"L"},{"x":162.89094687563608,"y":349.57760085487485,"command":"L"},{"x":149.43583777732547,"y":349.8740280887441,"command":"L"},{"x":135.79013067372279,"y":349.9839472827193,"command":"L"},{"x":122.049,"y":350,"command":"Z"}],"rotation":0,"scale":1}],"translation":{"x":0,"y":0},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).subdivide();

        _.each(_.toArray(shape.children)[0].vertices, function(v) {
          var circle = two.makeCircle(v.x, v.y, 3);
          circle.noStroke().fill = 'red';
        });

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.subdivide subdivides curveTo and lineTo properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

    (function() {

      var two = new Two({
        width: 400,
        height: 400
      });

      QUnit.Utils.get('./images/interpretation/compound-path.svg', function(resp) {

        var answer = {"children":[{"vertices":[{"x":220,"y":100,"command":"L"},{"x":80,"y":200,"command":"M"},{"x":80.4577667412986,"y":209.63074944026056,"command":"L"},{"x":81.80313047018115,"y":219.00247303073476,"command":"L"},{"x":83.99418644412783,"y":228.07326602890294,"command":"L"},{"x":86.98902992061875,"y":236.801223692245,"command":"L"},{"x":90.74575615713411,"y":245.14444127824135,"command":"L"},{"x":95.22246041115407,"y":253.06101404437203,"command":"L"},{"x":100.37723794015875,"y":260.50903724811724,"command":"L"},{"x":106.16818400162833,"y":267.44660614695704,"command":"L"},{"x":112.55339385304293,"y":273.8318159983716,"command":"L"},{"x":119.49096275188278,"y":279.6227620598413,"command":"L"},{"x":126.93898595562791,"y":284.7775395888459,"command":"L"},{"x":134.85555872175863,"y":289.2542438428659,"command":"L"},{"x":143.19877630775494,"y":293.01097007938125,"command":"L"},{"x":151.9267339710971,"y":296.0058135558722,"command":"L"},{"x":160.9975269692652,"y":298.19686952981885,"command":"L"},{"x":170.3692505597395,"y":299.5422332587014,"command":"L"},{"x":180,"y":300,"command":"L"},{"x":180,"y":298.00529208223077,"command":"L"},{"x":179.99999999999997,"y":292.3468349277427,"command":"L"},{"x":180,"y":283.5131284347649,"command":"L"},{"x":179.99999999999997,"y":271.9926725015265,"command":"L"},{"x":179.99999999999994,"y":258.2739670262568,"command":"L"},{"x":180,"y":242.84551190718497,"command":"L"},{"x":180,"y":226.1958070425402,"command":"L"},{"x":180.00000000000003,"y":208.81335233055162,"command":"L"},{"x":179.99999999999997,"y":191.18664766944838,"command":"L"},{"x":180,"y":173.8041929574598,"command":"L"},{"x":179.99999999999997,"y":157.15448809281497,"command":"L"},{"x":180,"y":141.72603297374314,"command":"L"},{"x":180,"y":128.00732749847344,"command":"L"},{"x":180,"y":116.4868715652351,"command":"L"},{"x":180,"y":107.65316507225728,"command":"L"},{"x":180.00000000000003,"y":101.99470791776919,"command":"L"},{"x":180,"y":100,"command":"L"},{"x":170.36925055973947,"y":100.4577667412986,"command":"L"},{"x":160.99752696926518,"y":101.80313047018115,"command":"L"},{"x":151.92673397109706,"y":103.9941864441278,"command":"L"},{"x":143.1987763077549,"y":106.98902992061876,"command":"L"},{"x":134.85555872175857,"y":110.74575615713411,"command":"L"},{"x":126.9389859556279,"y":115.22246041115407,"command":"L"},{"x":119.49096275188275,"y":120.37723794015875,"command":"L"},{"x":112.55339385304295,"y":126.16818400162833,"command":"L"},{"x":106.16818400162832,"y":132.55339385304293,"command":"L"},{"x":100.37723794015878,"y":139.49096275188276,"command":"L"},{"x":95.22246041115406,"y":146.9389859556279,"command":"L"},{"x":90.74575615713414,"y":154.8555587217586,"command":"L"},{"x":86.98902992061878,"y":163.19877630775494,"command":"L"},{"x":83.99418644412782,"y":171.92673397109706,"command":"L"},{"x":81.80313047018115,"y":180.9975269692652,"command":"L"},{"x":80.45776674129861,"y":190.36925055973947,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":79.99999999999999,"y":200,"command":"L"},{"x":79.99999999999999,"y":199.99999999999994,"command":"L"},{"x":79.99999999999999,"y":200,"command":"L"},{"x":79.99999999999999,"y":200,"command":"L"},{"x":80,"y":200.00000000000003,"command":"L"},{"x":79.99999999999999,"y":200,"command":"L"},{"x":80.00000000000001,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":80.00000000000001,"y":200,"command":"L"},{"x":80,"y":200,"command":"L"},{"x":220,"y":100,"command":"M"},{"x":220,"y":101.99470791776919,"command":"L"},{"x":219.99999999999997,"y":107.65316507225728,"command":"L"},{"x":220,"y":116.48687156523509,"command":"L"},{"x":219.99999999999994,"y":128.00732749847342,"command":"L"},{"x":219.99999999999994,"y":141.7260329737431,"command":"L"},{"x":219.99999999999994,"y":157.15448809281497,"command":"L"},{"x":219.99999999999997,"y":173.8041929574598,"command":"L"},{"x":220.00000000000003,"y":191.1866476694484,"command":"L"},{"x":219.99999999999997,"y":208.8133523305516,"command":"L"},{"x":220,"y":226.19580704254022,"command":"L"},{"x":220,"y":242.84551190718503,"command":"L"},{"x":220,"y":258.2739670262569,"command":"L"},{"x":220,"y":271.99267250152656,"command":"L"},{"x":220,"y":283.5131284347649,"command":"L"},{"x":220,"y":292.34683492774275,"command":"L"},{"x":220,"y":298.0052920822308,"command":"L"},{"x":220,"y":300,"command":"L"},{"x":229.63074944026053,"y":299.5422332587014,"command":"L"},{"x":239.00247303073476,"y":298.1968695298188,"command":"L"},{"x":248.07326602890288,"y":296.0058135558722,"command":"L"},{"x":256.801223692245,"y":293.0109700793812,"command":"L"},{"x":265.14444127824135,"y":289.2542438428658,"command":"L"},{"x":273.06101404437203,"y":284.77753958884585,"command":"L"},{"x":280.5090372481172,"y":279.6227620598412,"command":"L"},{"x":287.44660614695704,"y":273.8318159983717,"command":"L"},{"x":293.8318159983716,"y":267.446606146957,"command":"L"},{"x":299.6227620598413,"y":260.50903724811724,"command":"L"},{"x":304.7775395888459,"y":253.0610140443721,"command":"L"},{"x":309.2542438428659,"y":245.1444412782414,"command":"L"},{"x":313.0109700793812,"y":236.80122369224506,"command":"L"},{"x":316.0058135558722,"y":228.07326602890294,"command":"L"},{"x":318.19686952981885,"y":219.0024730307348,"command":"L"},{"x":319.54223325870146,"y":209.63074944026056,"command":"L"},{"x":320,"y":200,"command":"L"},{"x":319.54223325870146,"y":190.3692505597395,"command":"L"},{"x":318.19686952981885,"y":180.9975269692652,"command":"L"},{"x":316.0058135558722,"y":171.9267339710971,"command":"L"},{"x":313.01097007938114,"y":163.1987763077549,"command":"L"},{"x":309.25424384286583,"y":154.8555587217586,"command":"L"},{"x":304.7775395888459,"y":146.93898595562789,"command":"L"},{"x":299.6227620598412,"y":139.49096275188276,"command":"L"},{"x":293.8318159983717,"y":132.55339385304296,"command":"L"},{"x":287.446606146957,"y":126.16818400162833,"command":"L"},{"x":280.50903724811724,"y":120.37723794015878,"command":"L"},{"x":273.06101404437203,"y":115.22246041115409,"command":"L"},{"x":265.1444412782414,"y":110.74575615713414,"command":"L"},{"x":256.80122369224506,"y":106.98902992061878,"command":"L"},{"x":248.0732660289029,"y":103.99418644412783,"command":"L"},{"x":239.0024730307348,"y":101.80313047018116,"command":"L"},{"x":229.63074944026056,"y":100.4577667412986,"command":"L"},{"x":220,"y":100,"command":"Z"}],"rotation":0,"scale":1}],"translation":{"x":0,"y":0},"rotation":0,"scale":1};
        var svg = QUnit.Utils.textToDOM(resp)[0];
        var shape = two.interpret(svg).subdivide();

        _.each(_.toArray(shape.children)[0].vertices, function(v) {
          var circle = two.makeCircle(v.x, v.y, 3);
          circle.noStroke().fill = 'red';
        });

        two.update();

        ok(QUnit.Utils.shapeEquals(answer, shape), 'Two.subdivide subdivides moveTo properly.');
        start();

        QUnit.Utils.addElemToTest(o, [two.renderer.domElement, svg]);

      });

    })();

  });

  // Use this function to get an answer of interpreted Two.Polygon
  function retrieveObject(shape) {
    var result = shape.toObject();
    result.children = _.toArray(result.children);
    console.log(JSON.stringify(result));
    return result;
  }

})();
