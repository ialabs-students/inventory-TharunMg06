class Sportshop{
    count:number;
    item:string[];

    set_data(count:number,item:string[]):void{
       this.count=count;
        this.item=item;
    }

    display():void{
        console.log("Items : "+ this.item);
    }

    defect(item1:string | object):void{
        console.log("This item is "+item1);
    }
}

let i1=new Sportshop();
let i2=new Sportshop();

i1.set_data(11,['football','badmitton Raquet','volleyball']);
i2.set_data(12,['ball','shoes','bat']);
i1.display();
i2.display();

//add
i1.item.push("jersy");
i2.item.push("helmets");

i1.display();
i2.display();

//defect
let remove_item:string="volleyball";
i1.defect(remove_item);

//update
for(let rem_item in i1.item){
    if(i1.item[rem_item] === remove_item){
        i1.item[rem_item]="football";
        i1.display();
    }
}

//Delete
for(let delete_item in i1.item)
{
    if(i1.item[delete_item]==="Volleyball"){
        delete i1.item[delete_item];
        i1.display();
    }
}

//Threshold
if(i2.count<40){
    i2.defect(i2.item);
}

