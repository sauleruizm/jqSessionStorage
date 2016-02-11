/*
 * Usada para administrar el session storage en el browser
 *
 */
(function($){
    
    $.fn.SStorage = function(){
        /** Utlizada para administrar el sessionStorage. */
        
        var session = sessionStorage;
        
        this.get = function(key){ 
            /** get a single object */
            return session.getItem(key); };
        
        this.set = function(key,value){ 
            /* Set the value  */
           session.setItem(key,value);
        };
        
        this.del = function(key){ 
            /** Delete an specific key of SessionStorage */
            session.removeItem(key); 
        };
        
        this.clear = function() { 
            /** Clear whole values of sessionStorage. */
            session.clear(); 
        };
        
        
        
        
    };
    
}( jQuery ));