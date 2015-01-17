
var Zones = (function () {    
    function Image(data, width, height) {
        this.count = function (r, g, b, x, y, w, h) {
            var c = 0;
            
            for (var k = x; k < x + w && k < width; k++)
                for (var j = y; j < y + h && j < height; j++) {
                    var pos = j * width * 4 + k * 4;
                    
                    if (data[pos] == r && data[pos + 1] == g && data[pos + 2] == b)
                        c++;
                }
                
            return c;
        }
        
        this.width = function () { return width; }
        this.height = function () { return height; }
    }
    
    function Rectangle(image, x, y, width, height) {
        if (x < 0)
            x = 0;
            
        if (y < 0)
            y = 0;
            
        if (x > image.width())
            x = image.width();
            
        if (y > image.height())
            y = image.height();
            
        if (x + width > image.width())
            width = image.width() - x;
            
        if (y + height > image.height())
            height = image.height() - y;
                    
        this.count = function (r, g, b) { return image.count(r, g, b, x, y, width, height); }
        
        this.x = function () { return x; }
        this.y = function () { return y; }
        this.width = function () { return width; }
        this.height = function () { return height; }
        
        this.evaluate = function () {
            var redcount = this.count(255, 0, 0);
            var bluecount = this.count(0, 0, 255);
            var size = width * height;
            
            var value = redcount;
            
            if (bluecount > 0 && bluecount < redcount / 3)
                value = (value + bluecount) * 1.5;
                
            if (redcount > size / 2)
                value *= 2;
                
            if (width > height)
                value *= 1.5;
                
            return value;
        }
        
        this.mutate = function () {
            var dice = Math.floor(Math.random() * 1000000);
            var r = dice % 12;
            
            switch (r) {
                case 0:
                    return new Rectangle(image, x - 5, y, width, height);
                    break;
                case 1:
                    return new Rectangle(image, x + 5, y, width, height);
                    break;
                case 2:
                    return new Rectangle(image, x, y - 5, width, height);
                    break;
                case 3:
                    return new Rectangle(image, x, y + 5, width, height);
                    break;
                case 4:
                    return new Rectangle(image, x, y, width - 5, height);
                    break;
                case 5:
                    return new Rectangle(image, x, y, width + 5, height);
                    break;
                case 6:
                    return new Rectangle(image, x, y, width, height - 5);
                    break;
                case 7:
                    return new Rectangle(image, x, y, width, height + 5);
                    break;
            }
            
            return this;
        }
    }
    
    function Mutator() {
        this.mutate = function (rectangle) {
            return rectangle.mutate();
        }
    }
    
    function createImage(data, width, height) {
        return new Image(data, width, height);
    }
    
    function createMutator() {
        return new Mutator();
    }
    
    function createRectangle(image) {
        var width = image.width();
        var height = image.height();
        
        var x = Math.floor(Math.random() * width);
        var y = Math.floor(Math.random() * height);
        var w = Math.floor(Math.random() * width / 4);
        var h = Math.floor(Math.random() * height / 4);
        
        return new Rectangle(image, x, y, w, h);
    }
    
    return {
        image: createImage,
        rectangle: createRectangle,
        mutator: createMutator
    }
})();

if (typeof(window) === 'undefined')
	module.exports = Zones;

