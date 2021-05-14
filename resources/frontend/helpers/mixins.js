export default {
    methods: {
        /**
         * toggle loading
         */
        inlineLoader(obj) {
            obj = typeof (obj) == 'object' ? obj : {};
            return this.$loading.show(obj);
        },
        /**
         * has_error toggle
         */
        hasError(key = null) {
            if (key) {
                return this.formErrors[key] && this.formErrors[key].length > 0 ? ' has_error' : '';
            }
            return Object.keys(this.formErrors).length > 0;
        },
        /**
         * has_error toggle
         */
        imgErrHndlHasan(that, source) {            
            that.onerror=null; 
            var sourceArray = source.split("/");
            var safariSource = '';
            for (let index = 0; index < sourceArray.length; index++) {
                safariSource += sourceArray[index];
                if (index < sourceArray.length - 1) {
                    safariSource += '/'
                }
                if (index == sourceArray.length - 2) {
                    safariSource += 'sa/'
                }
                
            }
            that.setAttribute('src', safariSource)
        },
        /**
         * add or edit/update to route list
         */
        collapseSlide () {
            $(document).on('click', '[data-toggle="collapse_slide"]', function(e) {
                e.preventDefault();
                let list = $(this);
                var id = $(this).data('target');
                var hideCount = 0;
                for (let index = 0; index < list.length; index++) {
                    const element = list[index];
                    var elementId = $(element).data('target');
                    if (id === elementId) {
                        if ($(id).is(":visible")) { 
                            $(this).removeClass('open');
                            $(id).slideUp();          
                            hideCount++;
                        } else {             
                            $(id).slideDown();               
                        }
                    } else {
                        $(this).removeClass('open');
                        $(elementId).slideUp();    
                        hideCount++;
                    }            
                } 
            });
        },
    }
}