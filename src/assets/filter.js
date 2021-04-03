import moment from 'moment';
import Vue from 'vue'
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD-MM-YYYY h:mm:ss')
    }
});

