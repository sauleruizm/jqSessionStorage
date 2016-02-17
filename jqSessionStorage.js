/*
 * Usada para administrar el session storage en el browser
 *
 */
(function($){
    
    var ss = sessionStorage;
    
    $.fn.ssGet = function(key){ 
        
        if (key) {
            return ss.getItem(key);
        }
        return ss.getItem(this.Id); };
    
    $.fn.ssSet = function (key, value) { 
        
        if (key) {
            ss.setItem(key,value);
            return;
        }
        ss.setItem(this.Id,this.val()); };
    
    $.fn.ssDel = function (key) {  
        if (key) {
            ss.removeItem(key);
            return;
        }
        ss.removeItem(this.Id); 
    };
    
    $.fn.ssClear = function () { ss.clear(); };
    
}( jQuery ));