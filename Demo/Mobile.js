class Mobile{
    constructor(manName,model,color,year,guaranteed){
        this.manName = manName;
        this.model = model;
        this.color = color;
        this.year = year;
        this.guaranteed = guaranteed;
    }
    getYear(){
        let now = new Date();
        return now.getFullYear()-this.year;
    }
    getColor(newColor){
        this.color = newColor;
    }
}