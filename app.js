document.addEventListener('DOMContentLoaded', function (event) {
    var heading = document.getElementById('heading');
    var subHead = document.getElementsByTagName('span');

    for (var i = 0, len = subHead.length; i < len; i++) {
        heading.appendChild(subHead[i]);
    }
});

// make sure global mdn object exists
var mdn = window.mdn || {};

(function (win) {
    'use strict';

    (function () {
        var FLAGS = {
                'compat_data': false,
                'kumaediting': false,
                'line_length': true,
                'page_move': false,
                'registration_disabled': false,
                'search_suggestions': false,
                'section_edit': false,
                'sg_task_completion': false,
                'spam_admin_override': false,
                'spam_checks_enabled': true,
                'spam_spammer_override': false,
                'spam_submissions_enabled': false,
                'spam_testing_mode': false,
                'wiki_samples': true,
                'wiki_spam_exempted': false,
                'wiki_spam_training': false
            },
            SWITCHES = {
                'wiki_error_on_delete': false,
                'wiki_force_immediate_rendering': false,
                'enable_optimizely': false,
                'welcome_email': true,
                'application_ACAO': true,
                'store_revision_ips': true,
                'dumb_doc_urls': true,
                'newsletter': true,
                'newsletter_article': true,
                'foundation_callout': false,
                'helpful-survey-2': true,
                'wiki_spam_training': true
            },
            SAMPLES = {

            };
        window.waffle = {
            "flag_is_active": function waffle_flag(flag_name) {

                return !!FLAGS[flag_name];
            },
            "switch_is_active": function waffle_switch(switch_name) {

                return !!SWITCHES[switch_name];
            },
            "sample_is_active": function waffle_sample(sample_name) {

                return !!SAMPLES[sample_name];
            },
            "FLAGS": FLAGS,
            "SWITCHES": SWITCHES,
            "SAMPLES": SAMPLES
        };
    })();


    // This needs to be set before ckeditor.js loads
    window.CKEDITOR_BASEPATH = '/static/js/libs/ckeditor/build/ckeditor/';

    // Site configuration
    win.mdn.ckeditor = {};
    win.mdn.features = {};
    win.mdn.staticPath = 'https://cdn.mdn.mozilla.net/static/';
    win.mdn.wiki = {
        autosuggestTitleUrl: '/en-US/docs/get-documents'
    };
    win.mdn.assets = {
        css: {
            'editor-content': ['https://cdn.mdn.mozilla.net/static/build/styles/editor-content.4d325bcf0720.css', 'https://cdn.mdn.mozilla.net/static/build/styles/editor-locale-en-US.7e45c23d7d30.css', ],

            'wiki-compat-tables': ['https://cdn.mdn.mozilla.net/static/build/styles/wiki-compat-tables.427d3667f370.css', ]
        },
        js: {
            'syntax-prism': ['https://cdn.mdn.mozilla.net/static/build/js/syntax-prism.05dc5663d445.js', ],
            'wiki-compat-tables': ['https://cdn.mdn.mozilla.net/static/build/js/wiki-compat-tables.003f4acf76ea.js', ]
        }
    };

    win.mdn.notifications = [];



    // interactive editor config
    win.mdn.interactiveEditor = {
        siteUrl: "https://developer.mozilla.org",
        editorUrl: "https://interactive-examples.mdn.mozilla.net"
    };

})(this);

(function(global){
    'use strict';
    /*
    *DISH ASSETS (DA) GLOBAL OBJECT
    * USE ALREADY EXISTS OR CREATE AN EMPTY OBJECT
    */
    var da = global.da || {};

    var assets = {
        css: [],
        js: []
    };

    da.setAssets = function(type, path) {
        if(type && assets.hasOwnProperty(type)) {
            if(isArray(path)) {
                for(var i = 0, len = path.length; i < len; i++) {
                    var curr = path[i];
                    if(curr.indexOf("." + type) === -1)
                        errTypeViolation(curr);
                    assets[type].push(curr);
                }
            }
            else {
                if(path.indexOf("." + type) === -1)
                    errTypeViolation(path);
                assets[type].push(path);
            }
        }        
    };
    da.getAssets = function(type) {
        if(type && assets.hasOwnProperty(type)) {
            return assets[type];
        }
        return null;
    };

    var errTypeViolation = function(file) {
        throw 'Target "type" and file:' + file + ' type is different';
    }

    var isArray = function(val) {
        if(Array.isArray)
            return Array.isArray(val);
        else
            return Object.prototype.toString.call(val) === '[object Array]';
    }
    /* 
    *EXPOSING DA OBEJCT AT GLOBAL LEVEL.
    */
    global.da = da;

    document.addEventListener("DOMContentLoaded", function(){
        
    })

})(window);