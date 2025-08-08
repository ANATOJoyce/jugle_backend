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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var edit_icon_1 = require("../../../components/fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var table_1 = require("../../../components/molecules/table");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
var prices_1 = require("../../../utils/prices");
var DenominationTable = function (_a) {
    var giftCardId = _a.giftCardId, denominations = _a.denominations, defaultCurrency = _a.defaultCurrency, setEditDenom = _a.setEditDenom;
    var _b = (0, react_1.useState)(null), selectedDenom = _b[0], setSelectedDenom = _b[1];
    var deleteDenomination = (0, medusa_react_1.useAdminDeleteVariant)(giftCardId);
    var getDenominationPrices = function (denomination) {
        var sortHelper = function (p1, p2) {
            var curr1 = p1.currency_code;
            var curr2 = p2.currency_code;
            if (curr1 < curr2) {
                return -1;
            }
            if (curr1 > curr2) {
                return 1;
            }
            return 0;
        };
        return denomination.prices
            .filter(function (p) { return p.currency_code !== defaultCurrency; }) // without default
            .sort(sortHelper) // sort by currency code
            .map(function (p) {
            return (0, prices_1.stringDisplayPrice)({ currencyCode: p.currency_code, amount: p.amount });
        }) // get formatted price
            .join(", "); // concatenate to single comma separated string
    };
    var getDenominationRow = function (denomination, index) {
        var defaultPrice = denomination.prices.find(function (p) { return p.currency_code === defaultCurrency; });
        if (!defaultPrice) {
            defaultPrice = denomination.prices[0];
        }
        return (<table_1.default.Row key={"denomination-".concat(index)} color={"inherit"} actions={[
                {
                    label: "Edit denomination",
                    onClick: function () { return setEditDenom(denomination); },
                    icon: <edit_icon_1.default size={20}/>,
                },
                {
                    label: "Delete denomination",
                    variant: "danger",
                    onClick: function () { return setSelectedDenom(denomination.id); },
                    icon: <trash_icon_1.default size={20}/>,
                },
            ]}>
        <table_1.default.Cell>
          {(0, prices_1.stringDisplayPrice)({
                currencyCode: defaultPrice.currency_code,
                amount: defaultPrice.amount,
            })}
        </table_1.default.Cell>
        <table_1.default.Cell>{getDenominationPrices(denomination)}</table_1.default.Cell>
        <table_1.default.Cell></table_1.default.Cell>
      </table_1.default.Row>);
    };
    var handleDeleteDenomination = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            deleteDenomination.mutateAsync(selectedDenom);
            return [2 /*return*/];
        });
    }); };
    return (<div className="w-full h-full overflow-y-auto">
      <table_1.default>
        <table_1.default.Head>
          <table_1.default.HeadRow>
            <table_1.default.HeadCell>Default Value</table_1.default.HeadCell>
            <table_1.default.HeadCell>Other Values</table_1.default.HeadCell>
          </table_1.default.HeadRow>
        </table_1.default.Head>
        <table_1.default.Body className="text-grey-90">
          {denominations === null || denominations === void 0 ? void 0 : denominations.map(function (d, idx) { return getDenominationRow(d, idx); })}
        </table_1.default.Body>
      </table_1.default>
      {selectedDenom && (<delete_prompt_1.default handleClose={function () { return setSelectedDenom(null); }} text="Are you sure you want to delete this denomination from your Medusa Store?" heading="Delete denomination" onDelete={function () { return handleDeleteDenomination(); }} successText="Successfully deleted denomination" confirmText="Yes, delete"/>)}
    </div>);
};
exports.default = DenominationTable;
