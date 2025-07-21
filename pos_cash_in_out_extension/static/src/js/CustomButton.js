/** @odoo-module **/
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { _t } from "@web/core/l10n/translation";
import { patch } from "@web/core/utils/patch";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";

patch(ControlButtons.prototype, {
  async onClickMessage() {
    this.dialog.add(ConfirmationDialog, {
      title: _t("Custom Button"),
      body: _t("You clicked the custom button!"),
    });
  },
});
