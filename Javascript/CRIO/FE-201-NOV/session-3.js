class Length {
    constructor(ft,inch){
        this.ft = ft;
        this.inch = inch;
    }
    isValidObject = () => {
        return this.ft >= 0 && this.inch >= 0;         
    }
    addLength = (lengthObj) => {
        if(this.isValidObject() && lengthObj.isValidObject()){
            let totalFt = this.ft + lengthObj.ft;
            let totalInch = this.inch + lengthObj.inch;
            let additionalFt = Math.floor(totalInch/12);
            totalFt = totalFt + additionalFt;
            totalInch = totalInch%12;
            return [totalFt,totalInch];
        }
        else
        return [0,0];
    }
}


const length1 = new Length(5, 11) //corresponding to 5 ft 11 inches
const length2 = new Length(2, 8) // corresponding to 2 ft 8 inches.
const sum = length1.addLength(length2) // the sum will be an array containing `[8, 7]`

console.log(sum);


