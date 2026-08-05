/**
 * Юридическая компания «Де-Юре» — Скрипт автоматического приёма заявок с сайта в Google Таблицу.
 * 
 * ИНСТРУКЦИЯ ПО НАСТРОЙКЕ ЗА 2 МИНУТЫ:
 * 1. Создайте новую Google Таблицу: https://sheets.new
 * 2. Перейдите в меню: Расширения -> Apps Script (Extensions -> Apps Script)
 * 3. Вставьте весь этот код в редактор файла Code.gs (предварительно очистив стандартный код)
 * 4. Нажмите синюю кнопку «Развернуть» вверху справа -> «Новое развертывание» (Deploy -> New deployment)
 * 5. В левом меню нажмите на шестеренку «Выберите тип» -> выберите «Веб-приложение» (Web app)
 * 6. Заполните настройки:
 *    - Описание: Заявки Де-Юре
 *    - Выполнять от имени: Вы (Me)
 *    - У кого есть доступ: ВСЕ (Anyone)  <--- КРИТИЧЕСКИ ВАЖНО!
 * 7. Нажмите «Развернуть» (Deploy), авторизуйте доступ к вашей Google Таблице.
 * 8. Скопируйте полученную ссылку на «Веб-приложение» (URL развертывания).
 * 9. Вставьте эту ссылку в файл .env.local на сайте в переменную:
 *    NEXT_PUBLIC_GOOGLE_SCRIPT_URL=ваша_ссылка
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Автоматическая первичная настройка таблицы с дизайном «Де-Юре»
    setupSheetIfNeeded(sheet);

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var now = new Date();
    var formattedDate = Utilities.formatDate(now, Session.getScriptTimeZone(), "dd.MM.yyyy HH:mm:ss");

    var rowData = [
      formattedDate,
      data.name || '',
      data.phone ? "'" + data.phone : '',
      data.message || '',
      data.specialist || 'Общая заявка',
      data.page_url || '',
      data.page_title || ''
    ];

    sheet.appendRow(rowData);
    var lastRow = sheet.getLastRow();

    // Премиальная стилизация новой строки под брендбук ЮК «Де-Юре»
    styleRow(sheet, lastRow);

    // Защита строки от случайного редактирования (показывает предупреждение при попытке изменения)
    try {
      var rowRange = sheet.getRange(lastRow, 1, 1, 7);
      var protection = rowRange.protect().setDescription('Заявка #' + lastRow);
      protection.setWarningOnly(true);
    } catch (pErr) {
      // Игнорируем если нет прав на настройку прав
    }

    // Автоматическая ширина столбцов
    autoFitColumns(sheet);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function setupSheetIfNeeded(sheet) {
  if (sheet.getLastRow() === 0) {
    var headers = [
      'Дата и время',
      'Имя клиента',
      'Телефон',
      'Описание ситуации / Вопрос',
      'Специалист / Направление',
      'URL страницы',
      'Заголовок страницы'
    ];
    
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    
    // Фирменный темно-синий заголовок Deep Blue (#10273B) с золотой рамкой (#C1A066)
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#10273B');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    headerRange.setFontFamily('Arial');
    headerRange.setFontSize(11);
    headerRange.setVerticalAlignment('middle');
    headerRange.setHorizontalAlignment('center');
    
    sheet.setRowHeight(1, 40);

    // Нижняя золотая граница заголовка
    headerRange.setBorder(null, null, true, null, null, null, '#C1A066', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  }
}

function styleRow(sheet, rowNum) {
  var numCols = 7;
  var rowRange = sheet.getRange(rowNum, 1, 1, numCols);
  
  // Чередующийся благородный светлый фон (#FAF8F5 и #FFFFFF)
  var isEven = rowNum % 2 === 0;
  rowRange.setBackground(isEven ? '#FAF8F5' : '#FFFFFF');
  rowRange.setFontColor('#10273B');
  rowRange.setFontFamily('Arial');
  rowRange.setFontSize(10);
  rowRange.setVerticalAlignment('middle');
  
  // Форматирование столбцов
  sheet.getRange(rowNum, 1).setHorizontalAlignment('center'); // Дата
  sheet.getRange(rowNum, 3).setHorizontalAlignment('center').setNumberFormat('@'); // Телефон (текстовый формат)
  sheet.getRange(rowNum, 2).setFontWeight('bold'); // Имя клиента
  
  sheet.setRowHeight(rowNum, 32);

  // Тонкая серая разделительная линия
  rowRange.setBorder(null, null, true, null, null, null, '#E8ECEF', SpreadsheetApp.BorderStyle.SOLID);
}

function autoFitColumns(sheet) {
  var numCols = 7;
  for (var i = 1; i <= numCols; i++) {
    sheet.autoResizeColumn(i);
    var colWidth = sheet.getColumnWidth(i);
    
    // Гарантированная минимальная ширина для удобного чтения
    if (i === 1 && colWidth < 155) sheet.setColumnWidth(i, 155); // Дата
    if (i === 2 && colWidth < 180) sheet.setColumnWidth(i, 180); // Имя
    if (i === 3 && colWidth < 160) sheet.setColumnWidth(i, 160); // Телефон
    if (i === 4 && colWidth < 340) sheet.setColumnWidth(i, 340); // Сообщение
    if (i === 5 && colWidth < 220) sheet.setColumnWidth(i, 220); // Специалист
    if (i === 6 && colWidth < 260) sheet.setColumnWidth(i, 260); // URL
    if (i === 7 && colWidth < 250) sheet.setColumnWidth(i, 250); // Заголовок
  }
}
