QUnit.test("ssGet -> Get value of object", function(assert) {
    /**
     * description
     *
     */
   var objA = "<a id='sessionID'>test</a>";
   var result = $(objA).ssGet("sessionID");
   assert.equal(result,undefined,"test","No se ha podido obtener valor del obj.");
   
});

QUnit.test("ssSet -> Set value in sessionStorage", function(assert) {
    /**
     * Crea una llave en el sessionStorage con el id del objeto 
     * obtenido por el selector y agrega el valor de ese objeto 
     * al sessionStorage
     */
    var objA = "<input id='sessionID' value='test-SessionStorage' />";
    $(objA).ssSet();
    assert.equal($(objA).ssGet(),'test-SessionStorage','No se insertó la llave en el sessionStorage.');
});
