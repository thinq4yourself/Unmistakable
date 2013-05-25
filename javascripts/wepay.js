var WePay = WePay || {};
WePay.load_widgets = WePay.load_widgets ||

function () {};

WePay.widgets = WePay.widgets || [];
WePay.widgets.push({
    object_id: 676793,
    widget_type: "store",
    anchor_id: "wepay_widget_anchor_5193ec1199f5e",
    widget_options: {
        store_rows: 1,
        store_columns: 3,
        store_image_size: "medium",
        button_text: null
    }
});

if (!WePay.script) {
    WePay.script = document.createElement('script');
    WePay.script.type = 'text/javascript';
    WePay.script.async = true;
    WePay.script.src = 'https://static.wepay.com/min/js/widgets.v2.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(WePay.script, s);
} else if (WePay.load_widgets) {
    WePay.load_widgets();
}



