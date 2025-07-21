/** @odoo-module **/


import { patch } from "@web/core/utils/patch";
import { CashMovePopup } from "@point_of_sale/app/navbar/cash_move_popup/cash_move_popup";
import { onMounted, onPatched } from "@odoo/owl";
patch(CashMovePopup.prototype, {


  setup() {
    super.setup(...arguments);
    this.reasonType = '';  // القيمة الأولية
    this.textAreaValue = ''
    onMounted(() => this._injectSelect());
    onPatched(() => this._injectSelect());
  },

  _injectSelect() {
    const modal = document.querySelector('main.modal-body');
    if (!modal || modal.querySelector('#custom_reason_select')) return;
    const input = document.querySelector('textarea#reason');
    const sel = document.createElement('select');
    sel.setAttribute("placeholder","اختار حساب التوجيبه المحاسبي")

    
    
    
    sel.id = 'custom_reason_select';
    sel.className = 'form-select form-select-lg mb-3';
    sel.style.cssText = 'font-size:17px;margin:10px 0;';
    const label = Object.assign(document.createElement('label'),{ 
      textContent: "اختار حساب التوجيه المحاسبي ثم اكتب السبب ان وجد",
      htmlFor:  'custom_reason_select',
      style :'display: block;direction: rtl;margin: 10px auto;font-size: 18px;'
    })



    sel.addEventListener('change', e => {
      this.reasonType = e.target.value;
        input.value = ""
        input.value = e.target.value
    });

    const applyOptions = (mode) => {
    const input = document.querySelector('textarea#reason');
      sel.innerHTML = mode === 'Cash In'
        ? `<option value="to_other_incomeا_account : ">ايرادات اخرى</option><option value="to_partner_account (رد دين): ">جاري الشريك</option>`
        : `<option value="to_other_outcome_account : ">مصروفات اخرى</option><option value="to_partner_account ( سحب دين): ">جاري الشريك</option><option value="to_electricity_account : ">مصاريف كهرباء</option>`;

      sel.value = this.reasonType;

    };

    applyOptions('Cash Out');  // الوضع الأولي



    const btns = Array.from(document.querySelectorAll('button'));
    btns.filter(b => /Cash In|Cash Out/i.test(b.textContent)).forEach(btn => {
      btn.addEventListener('click', () =>
        setTimeout(() => applyOptions(btn.textContent.trim()), 50));
    });



    modal.appendChild(label)
    modal.appendChild(sel);

  },

});





