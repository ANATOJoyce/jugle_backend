"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var lodash_1 = require("lodash");
var medusa_react_1 = require("medusa-react");
var qs_1 = require("qs");
var react_1 = require("react");
var react_table_1 = require("react-table");
var feature_flag_1 = require("../../../context/feature-flag");
var filter_dropdown_1 = require("../../../domain/products/filter-dropdown");
var spinner_1 = require("../../atoms/spinner");
var table_1 = require("../../molecules/table");
var overview_1 = require("./overview");
var use_product_actions_1 = require("./use-product-actions");
var use_product_column_1 = require("./use-product-column");
var use_product_filters_1 = require("./use-product-filters");
var DEFAULT_PAGE_SIZE = 15;
var DEFAULT_PAGE_SIZE_TILE_VIEW = 18;
var defaultQueryProps = {
    fields: "id,title,type,thumbnail,status",
    expand: "variants,options,variants.prices,variants.options,collection,tags",
    is_giftcard: false,
};
var ProductTable = function () {
    var location = (0, router_1.useLocation)();
    var isFeatureEnabled = react_1.default.useContext(feature_flag_1.FeatureFlagContext).isFeatureEnabled;
    var hiddenColumns = ["sales_channel"];
    if (isFeatureEnabled("sales_channels")) {
        defaultQueryProps.expand =
            "variants,options,variants.prices,variants.options,collection,tags,sales_channels";
        hiddenColumns = [];
    }
    var _a = (0, use_product_filters_1.useProductFilters)(location.search, defaultQueryProps), removeTab = _a.removeTab, setTab = _a.setTab, saveTab = _a.saveTab, filterTabs = _a.availableTabs, activeFilterTab = _a.activeFilterTab, reset = _a.reset, paginate = _a.paginate, setFilters = _a.setFilters, setLimit = _a.setLimit, filters = _a.filters, setFreeText = _a.setQuery, queryObject = _a.queryObject, representationObject = _a.representationObject;
    var offs = parseInt(queryObject.offset) || 0;
    var limit = parseInt(queryObject.limit);
    var _b = (0, react_1.useState)(queryObject.query), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(0), numPages = _c[0], setNumPages = _c[1];
    var clearFilters = function () {
        reset();
        setQuery("");
    };
    var _d = (0, medusa_react_1.useAdminProducts)(__assign({}, queryObject)), products = _d.products, isLoading = _d.isLoading, isRefetching = _d.isRefetching, count = _d.count;
    (0, react_1.useEffect)(function () {
        if (typeof count !== "undefined") {
            var controlledPageCount = Math.ceil(count / limit);
            setNumPages(controlledPageCount);
        }
    }, [count]);
    var updateUrlFromFilter = function (obj) {
        if (obj === void 0) { obj = {}; }
        var stringified = qs_1.default.stringify(obj);
        window.history.replaceState("/a/products", "", "".concat("?".concat(stringified)));
    };
    var refreshWithFilters = function () {
        var filterObj = representationObject;
        if ((0, lodash_1.isEmpty)(filterObj)) {
            updateUrlFromFilter({ offset: 0, limit: DEFAULT_PAGE_SIZE });
        }
        else {
            updateUrlFromFilter(filterObj);
        }
    };
    (0, react_1.useEffect)(function () {
        refreshWithFilters();
    }, [representationObject]);
    var setTileView = function () {
        setLimit(DEFAULT_PAGE_SIZE_TILE_VIEW);
        setShowList(false);
    };
    var setListView = function () {
        setLimit(DEFAULT_PAGE_SIZE);
        setShowList(true);
    };
    var _e = react_1.default.useState(true), showList = _e[0], setShowList = _e[1];
    var columns = (0, use_product_column_1.default)({
        setTileView: setTileView,
        setListView: setListView,
        showList: showList,
    })[0];
    var _f = (0, react_table_1.useTable)({
        columns: columns,
        data: products || [],
        manualPagination: true,
        initialState: {
            pageIndex: Math.floor(offs / limit),
            pageSize: limit,
            hiddenColumns: hiddenColumns,
        },
        pageCount: numPages,
        autoResetPage: false,
    }, react_table_1.usePagination), getTableProps = _f.getTableProps, getTableBodyProps = _f.getTableBodyProps, headerGroups = _f.headerGroups, rows = _f.rows, prepareRow = _f.prepareRow, gotoPage = _f.gotoPage, canPreviousPage = _f.canPreviousPage, canNextPage = _f.canNextPage, pageCount = _f.pageCount, nextPage = _f.nextPage, previousPage = _f.previousPage, 
    // Get the state from the instance
    _g = _f.state, pageIndex = _g.pageIndex, pageSize = _g.pageSize;
    // Debounced search
    (0, react_1.useEffect)(function () {
        var delayDebounceFn = setTimeout(function () {
            if (query) {
                setFreeText(query);
                gotoPage(0);
            }
            else {
                if (typeof query !== "undefined") {
                    // if we delete query string, we reset the table view
                    reset();
                }
            }
        }, 400);
        return function () { return clearTimeout(delayDebounceFn); };
    }, [query]);
    var handleNext = function () {
        if (canNextPage) {
            paginate(1);
            nextPage();
        }
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            paginate(-1);
            previousPage();
        }
    };
    return (<div className="w-full h-full overflow-y-auto">
      <>
        <table_1.default filteringOptions={<filter_dropdown_1.default filters={filters} submitFilters={setFilters} clearFilters={clearFilters} tabs={filterTabs} onTabClick={setTab} activeTab={activeFilterTab} onRemoveTab={removeTab} onSaveTab={saveTab}/>} enableSearch handleSearch={setQuery} {...getTableProps()}>
          {showList ? (<>
              <table_1.default.Head>
                {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell className="min-w-[100px]" {...col.getHeaderProps()}>
                        {col.render("Header")}
                      </table_1.default.HeadCell>); })}
                  </table_1.default.HeadRow>); })}
              </table_1.default.Head>
              <LoadingContainer isLoading={isLoading || isRefetching || !products}>
                <table_1.default.Body {...getTableBodyProps()}>
                  {rows.map(function (row) {
                prepareRow(row);
                return <ProductRow row={row}/>;
            })}
                </table_1.default.Body>
              </LoadingContainer>
            </>) : (<LoadingContainer isLoading={isLoading || isRefetching || !products}>
              <overview_1.default products={products} toggleListView={setListView}/>
            </LoadingContainer>)}
        </table_1.default>
        <table_1.TablePagination count={count} limit={limit} offset={offs} pageSize={offs + rows.length} title="Products" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
      </>
    </div>);
};
var LoadingContainer = function (_a) {
    var isLoading = _a.isLoading, children = _a.children;
    return isLoading ? (<div className="w-full pt-2xlarge flex items-center justify-center">
      <spinner_1.default size={"large"} variant={"secondary"}/>
    </div>) : (children);
};
var ProductRow = function (_a) {
    var row = _a.row;
    var product = row.original;
    var getActions = (0, use_product_actions_1.default)(product).getActions;
    return (<table_1.default.Row color={"inherit"} linkTo={"/a/products/".concat(product.id)} actions={getActions()} {...row.getRowProps()}>
      {" "}
      {row.cells.map(function (cell, index) {
            return (<table_1.default.Cell {...cell.getCellProps()}>
            {" "}
            {cell.render("Cell", { index: index })}{" "}
          </table_1.default.Cell>);
        })}{" "}
    </table_1.default.Row>);
};
exports.default = ProductTable;
