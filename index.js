
let num = document.body.getElementsByTagName('button');

let string = "";
// string = Number.parseFloat(string);
// console.log(typeof(string));

Array.from(num).forEach((num2) => {

    num2.addEventListener('click', function (e) {
        try {
            let num1 = e.target.innerHTML
            if (num1 == 'AC') {
                document.body.querySelector('input').value = "";
                string = "";
            }
            else if (num1 == '=') {
                if (string == "") {
                    document.body.querySelector('input').value = "";

                }
                else {

                    string = eval(string);
                    string = Number.parseFloat(string);
                    document.body.querySelector('input').value = string
                }
            }

            else if (num1 == '+/-') {
                if (string >= 0) {
                    console.log(typeof(string));
                    let s = "-";
                    string = s + string;
                    document.body.querySelector('input').value = string;
                }
                
                else if (string<0) {
                    string = string.replace("-", "");
                    document.body.querySelector('input').value = string;
                }
            }

            else if (num1 == 'X') {
                let X = "*";
                string = string + X;
                document.body.querySelector('input').value = string;
            }
            else if (num1 == 'del') {
                try {
                    string = string.slice(0, -1);
                    document.body.querySelector('input').value = string
                } catch (error) {

                }
            }
            else {

                string = string + num1;
                document.body.querySelector('input').value = string;
            }
        } catch (error) {

            document.body.querySelector('input').value = (error.name);

        }

    })
})
