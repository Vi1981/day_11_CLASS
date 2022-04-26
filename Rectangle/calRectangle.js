class Rectangle {
    constructor(height, width, color, a, b) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.a = a;
        this.b = b;
    }
    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
    calAround() {
        return ((this.width + this.height) * 2);
    }

    calArea() {
        return this.width * this.height;
    }
    draw() {
        let newPic = document.getElementById("myRectangle").getContext("2d");
        newPic.beginPath();
        newPic.fillStyle = this.color;
        newPic.fillRect(this.a, this.b, this.width, this.height);
        newPic.stroke();
    }
}
let show = new Rectangle(50, 100, "pink", 20, 40);
document.write("<br/>" + "Chu vi là " + show.calAround() + "<br/>");
document.write("Diện tích là " + show.calArea());
show.draw();