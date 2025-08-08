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
exports.useLayeredModal = exports.LayeredModalProvider = exports.LayeredModalContext = void 0;
var react_1 = require("react");
var modal_1 = require("../../molecules/modal");
var button_1 = require("../../fundamentals/button");
var arrow_left_icon_1 = require("../../fundamentals/icons/arrow-left-icon");
var clsx_1 = require("clsx");
var LayeredModalActions;
(function (LayeredModalActions) {
    LayeredModalActions[LayeredModalActions["PUSH"] = 0] = "PUSH";
    LayeredModalActions[LayeredModalActions["POP"] = 1] = "POP";
    LayeredModalActions[LayeredModalActions["RESET"] = 2] = "RESET";
})(LayeredModalActions || (LayeredModalActions = {}));
var defaultContext = {
    screens: [],
    push: function (screen) { },
    pop: function () { },
    reset: function () { },
};
exports.LayeredModalContext = react_1.default.createContext(defaultContext);
var reducer = function (state, action) {
    switch (action.type) {
        case LayeredModalActions.PUSH: {
            state.screens.push(action.payload);
            return __assign({}, state);
        }
        case LayeredModalActions.POP: {
            state.screens.pop();
            return __assign({}, state);
        }
        case LayeredModalActions.RESET: {
            return __assign(__assign({}, state), { screens: [] });
        }
    }
};
var LayeredModalProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useReducer)(reducer, defaultContext), state = _b[0], dispatch = _b[1];
    return (<exports.LayeredModalContext.Provider value={__assign(__assign({}, state), { push: function (screen) {
                dispatch({ type: LayeredModalActions.PUSH, payload: screen });
            }, pop: function () {
                dispatch({ type: LayeredModalActions.POP });
            }, reset: function () {
                dispatch({ type: LayeredModalActions.RESET });
            } })}>
      {children}
    </exports.LayeredModalContext.Provider>);
};
exports.LayeredModalProvider = LayeredModalProvider;
var addProp = function (children, prop) {
    return react_1.default.Children.map(children, function (child) {
        return react_1.default.cloneElement(child, prop);
    });
};
var LayeredModal = function (_a) {
    var context = _a.context, children = _a.children, handleClose = _a.handleClose, _b = _a.isLargeModal, isLargeModal = _b === void 0 ? true : _b;
    var emptyScreensAndClose = function () {
        context.reset();
        handleClose();
    };
    var screen = context.screens[context.screens.length - 1];
    return (<modal_1.default isLargeModal={isLargeModal} handleClose={emptyScreensAndClose}>
      <modal_1.default.Body className={(0, clsx_1.default)("transition-transform translate-x-full flex flex-col justify-between duration-200", {
            "translate-x-0": typeof screen !== "undefined",
        })} isLargeModal={isLargeModal}>
        {screen ? (<>
            <modal_1.default.Header handleClose={emptyScreensAndClose}>
              <div className="flex items-center">
                <button_1.default variant="ghost" size="small" className="text-grey-50 w-8 h-8" onClick={screen.onBack}>
                  <arrow_left_icon_1.default size={20}/>
                </button_1.default>
                <h2 className="inter-xlarge-semibold ml-5">{screen.title}</h2>
              </div>
            </modal_1.default.Header>
            {screen.view}
          </>) : (<></>)}
      </modal_1.default.Body>
      <div className={(0, clsx_1.default)("transition-transform duration-200", {
            "-translate-x-full": typeof screen !== "undefined",
        })}>
        <div className={(0, clsx_1.default)("transition-display", {
            "hidden opacity-0 delay-500": typeof screen !== "undefined",
        })}>
          {addProp(children, { isLargeModal: isLargeModal })}
        </div>
      </div>
    </modal_1.default>);
};
var useLayeredModal = function () {
    var context = (0, react_1.useContext)(exports.LayeredModalContext);
    if (context === null) {
        throw new Error("useLayeredModal must be used within a LayeredModalProvider");
    }
    return context;
};
exports.useLayeredModal = useLayeredModal;
exports.default = LayeredModal;
