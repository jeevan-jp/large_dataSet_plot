fetch('sampleData.txt')
    .then(res => res.text())
    .then((string) => {

        var arr = string.split(" ");
        var x_arr = [];
        var y_arr = [];
        x_arr.push(arr[0]);
        var x = String.fromCharCode(10);
        for(var i=1; i<arr.length; ++i) {
            var arr2 = arr[i].split(x);
            y_arr.push(arr2[0]);
            x_arr.push(arr2[1]);
        }
        x_arr.pop();
        console.log(x_arr);
        console.log(y_arr);

        
        var trace1 = {
            x: x_arr,
            y: y_arr,
            mode: 'markers'
        };
        
        var data = [trace1];
        
        var layout = {};
        
        Plotly.newPlot('myDiv', data, layout);
    })




    
    // temp = [theArray[i], theArray[i+1]];
    // finalArray.push(temp);