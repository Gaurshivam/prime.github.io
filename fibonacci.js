var num = 50;
        var a = 0;
        var b = 1;
        var c = 0;
        for (var i = 0; i < num; i++) {
            a = b;
            b = c;
            c = a + b;
            console.log(c);
        }