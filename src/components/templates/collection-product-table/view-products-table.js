"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var use_debounce_1 = require("../../../hooks/use-debounce");
var api_1 = require("../../../services/api");
var spinner_1 = require("../../atoms/spinner");
var button_1 = require("../../fundamentals/button");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var table_1 = require("../../molecules/table");
var delete_prompt_1 = require("../../organisms/delete-prompt");
var use_view_product_columns_1 = require("./use-view-product-columns");
var ViewProductsTable = function (_a) {
    var collectionId = _a.collectionId, refetchCollection = _a.refetchCollection;
    var limit = 10;
    var _b = (0, react_1.useState)(""), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(0), offset = _c[0], setOffset = _c[1];
    var _d = (0, react_1.useState)(0), numPages = _d[0], setNumPages = _d[1];
    var _e = (0, react_1.useState)(0), currentPage = _e[0], setCurrentPage = _e[1];
    var debouncedSearchTerm = (0, use_debounce_1.useDebounce)(query, 500);
    var _f = (0, react_1.useState)(false), showDelete = _f[0], setShowDelete = _f[1];
    var _g = (0, react_1.useState)(undefined), idToDelete = _g[0], setIdToDelete = _g[1];
    var _h = (0, medusa_react_1.useAdminProducts)({
        q: debouncedSearchTerm,
        collection_id: [collectionId],
        limit: limit,
        offset: offset,
    }), isLoading = _h.isLoading, count = _h.count, products = _h.products, refetch = _h.refetch;
    (0, react_1.useEffect)(function () {
        refetch(); // Ensure we get the latest data
    }, [collectionId]);
    var handleRemoveProduct = function () {
        if (idToDelete) {
            api_1.default.products
                .update(idToDelete, {
                collection_id: null,
            })
                .then(function () {
                refetch();
                refetchCollection();
            });
        }
    };
    var columns = (0, use_view_product_columns_1.default)();
    // const [sorted, sortingOptions] = useSortingOptions(products ?? []) TODO: Implement this with server side sorting
    var _j = (0, react_table_1.useTable)({
        data: products || [],
        columns: columns,
        manualPagination: true,
        initialState: {
            pageIndex: currentPage,
            pageSize: limit,
        },
        pageCount: numPages,
        getRowId: function (row) { return row.id; },
    }, react_table_1.usePagination, function (hooks) {
        hooks.visibleColumns.push(function (columns) { return __spreadArray(__spreadArray([], columns, true), [
            {
                id: "actions",
                Cell: function (_a) {
                    var row = _a.row;
                    return (<table_1.default.Cell className="w-[0%] pr-2xsmall">
                <button_1.default variant="ghost" size="small" className="text-grey-40" onClick={function () {
                            setIdToDelete(row.original.id);
                            setShowDelete(true);
                        }}>
                  <trash_icon_1.default size={20}/>
                </button_1.default>
              </table_1.default.Cell>);
                },
            },
        ], false); });
    }), rows = _j.rows, prepareRow = _j.prepareRow, getTableBodyProps = _j.getTableBodyProps, getTableProps = _j.getTableProps, canPreviousPage = _j.canPreviousPage, canNextPage = _j.canNextPage, pageCount = _j.pageCount, nextPage = _j.nextPage, previousPage = _j.previousPage, 
    // Get the state from the instance
    _k = _j.state, pageIndex = _k.pageIndex, pageSize = _k.pageSize;
    (0, react_1.useEffect)(function () {
        var controlledPageCount = Math.ceil(count / limit);
        setNumPages(controlledPageCount);
    }, [products, count, limit]);
    var handleNext = function () {
        if (canNextPage) {
            setOffset(function (old) { return old + pageSize; });
            setCurrentPage(function (old) { return old + 1; });
            nextPage();
        }
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            setOffset(function (old) { return old - pageSize; });
            setCurrentPage(function (old) { return old - 1; });
            previousPage();
        }
    };
    var handleSearch = function (q) {
        setOffset(0);
        setQuery(q);
    };
    return (<>
      <div className="w-full h-full flex flex-col justify-between overflow-y-auto">
        <table_1.default enableSearch handleSearch={handleSearch} searchPlaceholder="Search Products" {...getTableProps()} className="h-full">
          {!(products === null || products === void 0 ? void 0 : products.length) ? (<div className="inter-small-regular text-grey-40 flex flex-grow justify-center items-center">
              {isLoading ? (<spinner_1.default size="large" variant="secondary"/>) : ("No products yet")}
            </div>) : (<table_1.default.Body {...getTableBodyProps()}>
              {rows.map(function (row) {
                prepareRow(row);
                return (<table_1.default.Row color={"inherit"} {...row.getRowProps()} className="px-base">
                    {row.cells.map(function (cell, index) {
                        return cell.render("Cell", { index: index });
                    })}
                  </table_1.default.Row>);
            })}
            </table_1.default.Body>)}
        </table_1.default>
        <table_1.TablePagination count={count} limit={limit} offset={offset} pageSize={offset + rows.length} title="Products" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
      </div>
      {showDelete && (<delete_prompt_1.default onDelete={function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleRemoveProduct()];
        }); }); }} handleClose={function () { return setShowDelete(!showDelete); }} heading="Remove product from collection" successText="Product removed from collection"/>)}
    </>);
};
exports.default = ViewProductsTable;
