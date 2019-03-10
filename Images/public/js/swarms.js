
var swarms = (function () {
    function Image(data, width, height) {
        this.data = function () { return data; };        
        this.width = function () { return width; }
        this.height = function () { return height; }
    }

    function Point(x, y) {
        this.x = function () { return x; }
        this.y = function () { return y; }
    }
    
    function createPoint(width, height) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        
        return new Point(x, y);
    }
    
    function mutateCoordinate(value, delta) {
        return Math.floor(value - delta + Math.random() * delta * 2);
    }
    
    function mutatePoint(point, delta) {
        const x = mutateCoordinate(point.x(), delta);
        const y = mutateCoordinate(point.y(), delta);
        
        return new Point(x, y);
    }
    
    function Swarm(image, r, g, b, ipoints) {
        const data = image.data();
        const width = image.width();
        const height = image.height();
        const mdelta = Math.min(width / 100, height / 100);
        
        const points = [];
        
        if (ipoints)
           for (var k = 0; k < ipoints.length; k++)
               points.push(ipoints[k]);
        else {
            const point = createPoint(width, height);
            const delta = Math.floor(Math.min(width / 10, height / 10));
        
            for (var k = 0; k < 100; k++)
                points.push(mutatePoint(point, delta));
        }
        
        this.points = function () { return points; };
        
        this.evaluate = function () {
            var total = 0;
            
            for (var k = 0; k < points.length; k++)
                total += evaluatePoint(points[k]);
            
            return 1 / (total + 0.1);
        };
        
        function evaluatePoint(point) {
            const x = point.x();
            const y = point.y();
            
            const pos = (point.y() * width + point.x()) * 4;
            
            if (pos < 0 || pos >= data.length)
                return 255 * 5;
            
            return Math.abs(data[pos] - r) +
                Math.abs(data[pos + 1] - g) +
                Math.abs(data[pos + 2] - b);
        }
        
        this.mutate = function () {
            const newpoints = points.slice();
            const p = Math.floor(Math.random() * newpoints.length);
            
            newpoints[p] = mutatePoint(newpoints[p], mdelta);
            
            return new Swarm(image, r, g, b, newpoints);
        }
    }
    
    function Mutator() {
        this.mutate = function (swarm) {
            return swarm.mutate();
        }
    }
    
    function createImage(data, width, height) {
        return new Image(data, width, height);
    }
    
    function createMutator() {
        return new Mutator();
    }
    
    function createSwarm(image, r, g, b) {
        return new Swarm(image, r, g, b);
    }
    
    return {
        image: createImage,
        swarm: createSwarm,
        mutator: createMutator
    }
})();

if (typeof(window) === 'undefined')
	module.exports = swarms;

