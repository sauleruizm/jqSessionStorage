
QUnit.test("get invalid", function(assert){
    /**
     * Tray to get a not exist key
     *
     */
    var sessionMgr = new $.fn.SStorage();
    sessionMgr.clear();
    assert.equal(sessionMgr.get(""),undefined);
});

QUnit.test("set valid", function(assert) {
    /**
     * Set a valid value and check
     * 
     */
    var sessionMgr = new $.fn.SStorage();
    var key = "test";
    var expected = "Sí";
    sessionMgr.clear();
    sessionMgr.set(key,expected);
    assert.equal(sessionMgr.get(key), expected);
});

QUnit.test("remove",function(assert) {
    /**
     * Remove a simple value
     */
    var sessionMgr = new $.fn.SStorage();
    var key = "test";
    var expected = "Sí";
    //limpio el storage
    sessionMgr.clear();
    //add the key to delete
    sessionMgr.set(key,expected);
    //remove the exists key
    sessionMgr.del(key);
    assert.equal(sessionMgr.get(key),undefined);
});

QUnit.test("set value of object", function(assert) {
    /**
     * description
     *
     */
   var objA = "<a>test</a>";
   var key = "sessionKey";
   $(objA).SessionStorage().set(key);
   
   assert.equal($(objA).SStorage.get(key),"test","No se ha podido obtener valor del obj.");
   
});