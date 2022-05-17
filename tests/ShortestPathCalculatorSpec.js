
describe("Calculadora ShortestPath", function () {

  beforeEach(function() {

        nodes = [
            { index: 0, value: 'a', r: 20 },
            { index: 1, value: 'b', r: 20 },
            { index: 2, value: 'c', r: 20 },
            { index: 3, value: 'd', r: 20 },
            { index: 4, value: 'e', r: 20 }
        ];

        paths = [
            { source: 0, target: 1, distance: 150 },
            { source: 0, target: 2, distance: 100 },
            { source: 2, target: 3, distance: 100 },
            { source: 1, target: 3, distance: 40  },
            { source: 3, target: 4, distance: 100 },
            { source: 1, target: 4, distance: 100 }
        ];

        sp = new ShortestPathCalculator(nodes, paths);

    });

    it("la biblioteca debe estar presente", function() {
        expect(ShortestPathCalculator).toBeDefined();
    });

    it("La instancia de prueba debe estar allí", function() {
        expect(sp).toBeDefined();
    });

    it("debe encontrar una ruta válida", function() {
        var sp = new ShortestPathCalculator(nodes, paths);
        route = sp.findRoute(0,4);
        expect(route.mesg).toEqual("OK");
    });

    it("debe detectar enteros válidos", function() {
        expect(ShortestPathCalculator.isInteger(1)).toBeTruthy();
        expect(ShortestPathCalculator.isInteger(0)).toBeTruthy();
        expect(ShortestPathCalculator.isInteger(99)).toBeTruthy();
        expect(ShortestPathCalculator.isInteger('a')).toBeFalsy();
        expect(ShortestPathCalculator.isInteger(-1)).toBeFalsy();
    });

    ShortestPathCalculator.isInteger = function(i) {
    return /^\d+$/.test(i);
}

    it("debe hacer una matriz limpia adecuada para rellenar", function() {
        var nodes = [ 1,2,3,4 ];
        var sp = new ShortestPathCalculator(nodes, paths);
        sp.makeDistanceArrayFromNodes();
        expect(sp.distances).toEqual([['x','x','x','x'],['x','x','x','x'],['x','x','x','x'],['x','x','x','x']]);
    });

});
