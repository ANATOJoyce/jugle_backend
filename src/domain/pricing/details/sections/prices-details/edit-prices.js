"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var medusa_react_1 = require("medusa-react");
var React = require("react");
var tooltip_1 = require("../../../../../components/atoms/tooltip");
var edit_icon_1 = require("../../../../../components/fundamentals/icons/edit-icon");
var info_icon_1 = require("../../../../../components/fundamentals/icons/info-icon");
var trash_icon_1 = require("../../../../../components/fundamentals/icons/trash-icon");
var focus_modal_1 = require("../../../../../components/molecules/modal/focus-modal");
var use_query_filters_1 = require("../../../../../hooks/use-query-filters");
var form_header_1 = require("../../../pricing-form/form-header/");
var product_prices_1 = require("../../../pricing-form/sections/product-prices");
var types_1 = require("../../../pricing-form/types");
var utils_1 = require("./utils");
var defaultQueryFilters = {
    limit: 50,
    offset: 0,
};
var EditPrices = function (_a) {
    var close = _a.close, id = _a.id;
    var params = (0, use_query_filters_1.default)(defaultQueryFilters);
    var _b = React.useState([]), selectedProducts = _b[0], setSelectedProducts = _b[1];
    var _c = (0, medusa_react_1.useAdminPriceListProducts)(id, params.queryObject), products = _c.products, isLoading = _c.isLoading;
    var handleSearch = function (query) {
        params.setQuery(query);
    };
    React.useEffect(function () {
        setSelectedProducts(function (state) { return (0, utils_1.merge)(products, state); });
    }, [products, utils_1.merge]);
    var debouncedSearch = React.useMemo(function () { return (0, lodash_1.debounce)(handleSearch, 300); }, []);
    return (<focus_modal_1.default>
      <focus_modal_1.default.Header>
        <form_header_1.default id={id} viewType={types_1.ViewType.EDIT_PRICES} onClose={close}/>
      </focus_modal_1.default.Header>
      <focus_modal_1.default.Main>
        <div className="flex justify-center mb-[25%]">
          <div className="medium:w-7/12 large:w-6/12 small:w-4/5 w-full pt-16">
            <h1 className="inter-xlarge-semibold">Edit prices</h1>
            <div className="mt-7">
              <div className="flex items-center gap-1.5">
                <h6 className="inter-large-semibold">Prices</h6>
                <tooltip_1.default content="info tooltip">
                  <info_icon_1.default size={16} className="text-grey-40"/>
                </tooltip_1.default>
              </div>
              <span className="inter-base-regular text-grey-50">
                You will be able to override the prices for the products you add
                here
              </span>
            </div>
            <product_prices_1.default products={selectedProducts} setProducts={setSelectedProducts} isLoading={isLoading} onSearch={debouncedSearch} onFileChosen={close} getVariantActions={VariantActions}/>
          </div>
        </div>
      </focus_modal_1.default.Main>
    </focus_modal_1.default>);
};
var VariantActions = function (product) {
    return [
        {
            label: "Edit prices",
            icon: <edit_icon_1.default size={20}/>,
            onClick: function () {
                // open grid ui
            },
        },
        {
            label: "Remove from list",
            icon: <trash_icon_1.default size={20}/>,
            onClick: function () {
                // missing core support
            },
            variant: "danger",
        },
    ];
};
exports.default = EditPrices;
