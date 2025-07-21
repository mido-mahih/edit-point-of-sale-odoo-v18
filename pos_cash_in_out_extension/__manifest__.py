{
    "name": "pos extension",
    "version": "1.0",
    "depends": [ 'base', "point_of_sale"],
'author': 'ahmed',
    "category": "Point of Sale",

    "data": [
        "security/ir.model.access.csv",
        "views/pos_cash_control_views.xml",
        # "qweb/assets.xml",
        # "qweb/cash_move_popup.xml",
    ],
"assets": {
        "point_of_sale._assets_pos": [
            "pos_cash_in_out_extension/static/src/js/CustomButton.js",
            "pos_cash_in_out_extension/static/src/js/cash_move_patch.js",
            "pos_cash_in_out_extension/static/src/xml/CustomButton.xml",
        ],
    },
    "owl": [],

    "installable": True,

}