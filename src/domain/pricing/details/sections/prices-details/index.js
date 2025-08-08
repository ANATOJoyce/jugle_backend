"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var fade_wrapper_1 = require("../../../../../components/atoms/fade-wrapper");
var edit_icon_1 = require("../../../../../components/fundamentals/icons/edit-icon");
var body_card_1 = require("../../../../../components/organisms/body-card");
var upload_modal_1 = require("../../../../../components/organisms/upload-modal");
var use_toggle_state_1 = require("../../../../../hooks/use-toggle-state");
var edit_prices_1 = require("./edit-prices");
var edit_prices_overrides_1 = require("./edit-prices-overrides");
var prices_table_1 = require("./prices-table");
var Prices = function (_a) {
    var id = _a.id;
    var _b = (0, use_toggle_state_1.default)(), showEdit = _b.state, openEdit = _b.open, closeEdit = _b.close;
    var _c = (0, use_toggle_state_1.default)(), showUpload = _c[0], openUpload = _c[1], closeUpload = _c[2];
    var _d = React.useState(null), selectedProduct = _d[0], setSelectedProduct = _d[1];
    var actionables = [
        {
            label: "Edit manually",
            onClick: openEdit,
            icon: <edit_icon_1.default size={20}/>,
        },
        // {
        //   label: "Import price list",
        //   onClick: openUpload,
        //   icon: <UploadIcon size={20} />,
        // },
    ];
    return (<body_card_1.default title="Prices" actionables={actionables} forceDropdown>
      <prices_table_1.default id={id} selectProduct={setSelectedProduct}/>
      <fade_wrapper_1.default isVisible={showEdit} isFullScreen={true}>
        <edit_prices_1.default close={closeEdit} id={id}/>{" "}
      </fade_wrapper_1.default>
      {showUpload && (<upload_modal_1.default onClose={closeUpload} onUploadComplete={function () { }} fileTitle="price list" actionButtonText="Add Products Manually" description1Text="You can add to or 'update' a price list. A new import will update products with the same SKU. New products will be implemented as Drafts. Updated products will keep their current status." description2Title="Unsure about how to arrange your list?" description2Text="We have created a template file for you. Type in your own information and experience how much time and frustration this functionality can save you. Feel free to reach out if you have any questions."/>)}
      {selectedProduct && (<edit_prices_overrides_1.default product={selectedProduct} close={function () { return setSelectedProduct(null); }}/>)}
    </body_card_1.default>);
};
exports.default = Prices;
