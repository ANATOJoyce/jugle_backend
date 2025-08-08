"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var sales_channel_compare_operator_1 = require("../../../utils/sales-channel-compare-operator");
var tooltip_1 = require("../../atoms/tooltip");
var list_icon_1 = require("../../fundamentals/icons/list-icon");
var tile_icon_1 = require("../../fundamentals/icons/tile-icon");
var image_placeholder_1 = require("../../fundamentals/image-placeholder");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var useProductTableColumn = function (_a) {
    var setTileView = _a.setTileView, setListView = _a.setListView, showList = _a.showList;
    var getProductStatus = function (title) {
        switch (title) {
            case "proposed":
                return <status_indicator_1.default title={"Proposed"} variant={"warning"}/>;
            case "published":
                return <status_indicator_1.default title={"Published"} variant={"success"}/>;
            case "rejected":
                return <status_indicator_1.default title={"Rejected"} variant={"danger"}/>;
            case "draft":
                return <status_indicator_1.default title={"Draft"} variant={"default"}/>;
            default:
                return <status_indicator_1.default title={title} variant={"default"}/>;
        }
    };
    var store = (0, medusa_react_1.useAdminStore)().store;
    var getProductSalesChannels = function (salesChannels) {
        if (salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.length) {
            salesChannels.sort((0, sales_channel_compare_operator_1.defaultChannelsSorter)((store === null || store === void 0 ? void 0 : store.default_sales_channel_id) || ""));
            return (<span className="inter-small-regular">
          {salesChannels[0].name}
          {salesChannels.length > 1 && (<tooltip_1.default content={<div className="flex flex-col">
                  {salesChannels.slice(1).map(function (sc) { return (<span>{sc.name}</span>); })}
                </div>}>
              <span className="text-grey-40">
                {" "}
                + {salesChannels.length - 1} more
              </span>
            </tooltip_1.default>)}
        </span>);
        }
        return <></>;
    };
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: "Name",
            accessor: "title",
            Cell: function (_a) {
                var original = _a.row.original;
                return (<div className="flex items-center">
              <div className="h-[40px] w-[30px] my-1.5 flex items-center mr-4">
                {original.thumbnail ? (<img src={original.thumbnail} className="h-full object-cover rounded-soft"/>) : (<div className="flex items-center justify-center w-full h-full rounded-soft bg-grey-10">
                    <image_placeholder_1.default size={16}/>
                  </div>)}
              </div>
              {original.title}
            </div>);
            },
        },
        {
            Header: "Collection",
            accessor: "collection", // accessor is the "key" in the data
            Cell: function (_a) {
                var value = _a.cell.value;
                return <div>{(value === null || value === void 0 ? void 0 : value.title) || "-"}</div>;
            },
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: function (_a) {
                var value = _a.cell.value;
                return getProductStatus(value);
            },
        },
        {
            Header: "Availability",
            accessor: "sales_channels",
            Cell: function (_a) {
                var value = _a.cell.value;
                return getProductSalesChannels(value);
            },
        },
        {
            Header: "Inventory",
            accessor: "variants",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<div>
            {value.reduce(function (acc, next) { return acc + next.inventory_quantity; }, 0)}
            {" in stock for "}
            {value.length} variant(s)
          </div>);
            },
        },
        {
            accessor: "col-3",
            Header: (<div className="text-right flex justify-end">
            <span onClick={setListView} className={(0, clsx_1.default)("hover:bg-grey-5 cursor-pointer rounded p-0.5", {
                    "text-grey-90": showList,
                    "text-grey-40": !showList,
                })}>
              <list_icon_1.default size={20}/>
            </span>
            <span onClick={setTileView} className={(0, clsx_1.default)("hover:bg-grey-5 cursor-pointer rounded p-0.5", {
                    "text-grey-90": !showList,
                    "text-grey-40": showList,
                })}>
              <tile_icon_1.default size={20}/>
            </span>
          </div>),
        },
    ]; }, [showList]);
    return [columns];
};
exports.default = useProductTableColumn;
