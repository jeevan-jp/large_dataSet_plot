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
        var first_half_x = x_arr.slice(0, 500);
        var second_half_x = x_arr.slice(500, 1000);
        var first_half_y = y_arr.slice(0, 500);
        var second_half_y = y_arr.slice(500, 1000);
        console.log(x_arr);
        console.log(y_arr);
        
        var trace1 = {
            x: first_half_x,
            y: first_half_y,
            mode: 'markers'
        };

        var trace2 = {
            x: second_half_x,
            y: second_half_y,
            mode: 'markers'
        };
        
        var data = [trace1, trace2];
        
        var layout = {};
        
        Plotly.newPlot('myDiv', data, layout);
    })
    .then(() => {
        console.log('hi');
        // perceptronLearningAlgo();
    })



    function perceptronLearningAlgo() {
        var w = [0, 0, -1, 2];
        var x = [];
        var type = [0,1,1,1,1,1,1,1];
        x.push([1, 0, 0, 0]);
        x.push([1, 0, 0, 1]);
        x.push([1, 0, 1, 0]);
        x.push([1, 0, 1, 1]);
        x.push([1, 1, 0, 0]);
        x.push([1, 1, 0, 1]);
        x.push([1, 1, 1, 0]);
        x.push([1, 1, 1, 1]);
        var convergence = false;
        while(!convergence) {
            convergence = true;
            for(var i=0; i<x.length; ++i) {
                console.log(i);
                if(type[i] == 1 && prod(w, x[i])<0) {
                    w = add(w, x[i]);
                    convergence = false
                }
                else if(type[i] == 0 && prod(w, x[i])>=0) {
                    w = subtract(w, x[i]);
                    convergence = false
                }
            }
        }
        console.log(w);

        function prod(w, a) {
            var res = 0;
            for(var i=0; i<w.length; ++i) {
                res += w[i]*a[i];
            }
            return res;
        }

        function add(w, a) {
            for(var i=0; i<w.length; ++i) {
                w[i] += a[i];
            }
            return w;
        }

        function subtract(w, a) {
            for(var i=0; i<w.length; ++i) {
                w[i] -= a[i];
            }
            return w;
        }
    }
