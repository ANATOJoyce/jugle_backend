"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var table_1 = require("../../../../components/molecules/table");
var prices_1 = require("../../../../utils/prices");
var reasonOptions = {
    missing_item: "Missing Item",
    wrong_item: "Wrong Item",
    production_failure: "Production Failure",
    other: "Other",
};
var ClaimDetails = function (_a) {
    var claim = _a.claim, order = _a.order, onDismiss = _a.onDismiss;
    var layeredModalContext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    return (<layered_modal_1.default context={layeredModalContext} handleClose={onDismiss}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onDismiss}>
          <h2 className="inter-xlarge-semibold">Claim Details</h2>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div>
            <h3 className="inter-base-semibold">Claimed Items</h3>
            <table_1.default>
              <table_1.default.HeadRow className="text-grey-50 inter-small-semibold">
                <table_1.default.HeadCell>Product Details</table_1.default.HeadCell>
                <table_1.default.HeadCell className="text-right pr-8">
                  Quantity
                </table_1.default.HeadCell>
                <table_1.default.HeadCell className="text-right">
                  Unit Price
                </table_1.default.HeadCell>
                <table_1.default.HeadCell></table_1.default.HeadCell>
              </table_1.default.HeadRow>
              <table_1.default.Body>
                {claim.claim_items.map(function (claimItem) {
            var _a, _b, _c, _d;
            var item = claimItem.item;
            return (<>
                      <table_1.default.Row className={(0, clsx_1.default)("border-b-grey-0 hover:bg-grey-0")}>
                        <table_1.default.Cell>
                          <div className="min-w-[240px] flex py-2">
                            <div className="w-[30px] h-[40px] ">
                              <img className="h-full w-full object-cover rounded" src={item.thumbnail}/>
                            </div>
                            <div className="inter-small-regular text-grey-50 flex flex-col ml-4">
                              <span>
                                <span className="text-grey-90">
                                  {item.title}
                                </span>{" "}
                              </span>
                              <span>{((_a = item === null || item === void 0 ? void 0 : item.variant) === null || _a === void 0 ? void 0 : _a.title) || ""}</span>
                            </div>
                          </div>
                        </table_1.default.Cell>
                        <table_1.default.Cell className="text-right w-32 pr-8">
                          <span className="text-grey-40">
                            {claimItem.quantity}
                          </span>
                        </table_1.default.Cell>
                        <table_1.default.Cell className="text-right">
                          {(0, prices_1.formatAmountWithSymbol)({
                    currency: order.currency_code,
                    amount: item.unit_price,
                    tax: order.tax_rate,
                })}
                        </table_1.default.Cell>
                        <table_1.default.Cell className="text-right text-grey-40 pr-1">
                          {order.currency_code.toUpperCase()}
                        </table_1.default.Cell>
                      </table_1.default.Row>
                      <table_1.default.Row className="last:border-b-0 hover:bg-grey-0">
                        <table_1.default.Cell colSpan={2}>
                          <div className="max-w-[470px] truncate">
                            {claimItem.reason && (<span className="inter-small-regular text-grey-40">
                                <span className="text-grey-80 mr-1">
                                  <span className="inter-small-semibold mr-1">
                                    {reasonOptions[claimItem.reason]}
                                  </span>
                                </span>
                                {claimItem.note || ""}
                                <span className="ml-2">
                                  {((_b = claimItem.images) === null || _b === void 0 ? void 0 : _b.length) > 0 && (<>
                                      ({(_c = claimItem.images) === null || _c === void 0 ? void 0 : _c.length} image
                                      {((_d = claimItem.images) === null || _d === void 0 ? void 0 : _d.length) > 1 ? "s" : ""})
                                    </>)}
                                </span>
                              </span>)}
                          </div>
                        </table_1.default.Cell>
                        <table_1.default.Cell colSpan={2}>
                          <div className="flex w-full justify-end">
                            <button_1.default onClick={function () {
                    return layeredModalContext.push(ReasonDetails(layeredModalContext.pop, claimItem));
                }} variant="ghost" size="small" className="border border-grey-20">
                              View
                            </button_1.default>
                          </div>
                        </table_1.default.Cell>
                      </table_1.default.Row>
                    </>);
        })}
              </table_1.default.Body>
            </table_1.default>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full justify-end">
            <div className="flex gap-x-xsmall">
              <button_1.default onClick={function () { return onDismiss(); }} className="w-[112px]" size="small" variant="primary">
                Done
              </button_1.default>
            </div>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </layered_modal_1.default>);
};
exports.default = ClaimDetails;
var ReasonDetails = function (pop, claimItem) {
    return {
        title: "Claim Item",
        onBack: function () { return pop(); },
        view: (<>
        <modal_1.default.Content isLargeModal={true}>
          <div className="h-full">
            <h2 className="inter-base-semibold mb-4">Claim Reason</h2>
            <div className="mb-8 text-grey-50 inter-small-semibold">
              {reasonOptions[claimItem.reason]}
            </div>
            <input_1.default disabled={true} label={"Note"} value={claimItem.note} className="my-4"/>
            {claimItem.images &&
                claimItem.images.map(function (i) { return (<ImageRow url={i.url} name={i.url.split("//").pop()} size={undefined}/>); })}
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full justify-end gap-x-xsmall">
            <button_1.default variant="primary" className="w-[112px]" size="small" onClick={function () {
                pop();
            }}>
              Back
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </>),
    };
};
var ImageRow = function (_a) {
    var url = _a.url, name = _a.name, size = _a.size;
    return (<div className="flex items-center w-full justify-between my-8">
    <div className="flex items-center">
      <div className="w-20 h-20 bg-voilet-60">
        <img className="object-cover rounded-rounded w-full h-full" src={url}/>
      </div>
      <div className="inter-small-regular ml-8 flex flex-col">
        {name}
        {size && <span className="text-grey-50">{size} KB</span>}
      </div>
    </div>
  </div>);
};
