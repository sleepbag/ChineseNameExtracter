QUnit.test( "初始", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("陳嘿嘿，陳白");
  console.log(result)
  var pass = [
    {"姓":"陳","姓名":"陳嘿嘿"},
    {"姓":"陳","姓名":"陳白"}
  ];
  assert.deepEqual( result, pass, "Passed!" );
});


QUnit.test( "姓名中包含姓氏測試 - 李、狗", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("呂白，李狗蛋");
  console.log(result)
  var pass = [
    {"姓":"李","姓名":"李狗蛋"},
    {"姓":"呂","姓名":"呂白"}
  ];
  assert.deepEqual( result, pass, "Passed!" );
});

QUnit.test( "冠姓測試", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("張簡季億");
  console.log(result)
  var pass = 	
  [
    {
      "姓": "張",
      "姓名": "張簡季億"
    }
  ]
  assert.deepEqual( result, pass, "Passed!" );
});


QUnit.test( "姓名中包含姓氏測試 - 王、曉", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("姓名: 王曉明");
  console.log(result)
  var pass = 	
  [
    {
      "姓": "王",
      "姓名": "王曉明"
    }
  ]
  assert.deepEqual( result, pass, "Passed!" );
});

QUnit.test( "排除「取件人」字串", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("取件人: 王曉明");
  console.log(result)
  var pass = 	
  [
    {
      "姓": "王",
      "姓名": "王曉明"
    }
  ]
  assert.deepEqual( result, pass, "Passed!" );
});

QUnit.test( "排除「姓名」字串", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("姓名: 王安石");
  console.log(result)
  var pass = 	
  [
    {
      "姓": "王",
      "姓名": "王安石"
    }
  ]
  assert.deepEqual( result, pass, "Passed!" );
});

QUnit.test( "綜合測試", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("收貨地址：陳小寶，0911111111，台灣 新北市 汐止區新台五路一段268號2樓");
  console.log(result)
  var pass = 	
  [
    {
      "姓": "陳",
      "姓名": "陳小寶"
    }
  ]
  assert.deepEqual( result, pass, "Passed!" );
});

QUnit.test( "綜合測試", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("黃宏成 台灣阿成世界偉人財神總統");
  console.log(result)
  var pass = 	
  [
    {
      "姓": "陳",
      "姓名": "陳小寶"
    }
  ]
  assert.deepEqual( result, pass, "Passed!" );
});

