<!DOCTYPE html >
<html>
    <head>
        <title>
            Number of vowels
            in a sring in javaScript.
        </title>
    </head>
    <body>
    <script>
        function noOfVowels(string) {
            var listOfVowels = 'aAeEiIoOuU';
            var vowelsCount = 0;
            for(va i = o ; i < String.length ; i++ )  {
                if (listOfVowels.indexOf(string[i])!== -1) {
                    vowelsCount += 1;
                }
            }
        return vowelsCount;
        }
        document.write(noOfVowels("JavaScript este un limbaj de programare."));
        </script>
        </body>
        </html>
</html>