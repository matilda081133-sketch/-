const fs = require('fs');
const mammoth = require('mammoth');

mammoth.extractRawText({path: "C:\\Users\\Honor\\Downloads\\Telegram Desktop\\Итоговое_ТЗ_хаб_Военный_юрист_Де_Юре.docx"})
    .then(function(result){
        fs.writeFileSync('tz_military.txt', result.value);
        console.log("Extraction complete.");
    })
    .catch(function(err){
        console.log(err);
    });
