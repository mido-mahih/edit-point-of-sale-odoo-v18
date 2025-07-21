from odoo import models, fields


class PosExtension(models.Model):
    _name = 'pos.extension'


    name = fields.Char()


class PosSession(models.Model):
    _inherit = 'pos.session'

    cash_reason_type = fields.Selection([
        ('partner', 'جاري الشريك'),
        ('other_income', 'إيرادات أخرى'),
        ('electricity', 'مصاريف كهرباء'),
        ('other_expense', 'مصاريف أخرى')
    ], string='نوع السبب')
