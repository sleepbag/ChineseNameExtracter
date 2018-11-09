QUnit.test( "初始", function( assert ) {

  var mobile = new ChineseNameExtracter();
  var result = mobile.Process("陳嘿嘿，陳白");
  console.log(result)
  var pass = ["陳嘿嘿","陳白"]
  assert.deepEqual( result, pass, "Passed!" );
});
