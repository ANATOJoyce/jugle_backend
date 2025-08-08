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
exports.SteppedProvider = exports.SteppedContext = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var modal_1 = require("../../molecules/modal");
var layered_modal_1 = require("./layered-modal");
var SteppedActions;
(function (SteppedActions) {
    SteppedActions[SteppedActions["ENABLENEXTPAGE"] = 0] = "ENABLENEXTPAGE";
    SteppedActions[SteppedActions["DISABLENEXTPAGE"] = 1] = "DISABLENEXTPAGE";
    SteppedActions[SteppedActions["GOTONEXTPAGE"] = 2] = "GOTONEXTPAGE";
    SteppedActions[SteppedActions["GOTOPREVIOUSPAGE"] = 3] = "GOTOPREVIOUSPAGE";
    SteppedActions[SteppedActions["SETPAGE"] = 4] = "SETPAGE";
    SteppedActions[SteppedActions["SUBMIT"] = 5] = "SUBMIT";
    SteppedActions[SteppedActions["RESET"] = 6] = "RESET";
})(SteppedActions || (SteppedActions = {}));
var defaultContext = {
    currentStep: 0,
    nextStepEnabled: true,
    enableNextPage: function () { },
    disableNextPage: function () { },
    goToNextPage: function () { },
    goToPreviousPage: function () { },
    submit: function () { },
    reset: function () { },
    setPage: function (page) { },
};
exports.SteppedContext = react_1.default.createContext(defaultContext);
var reducer = function (state, action) {
    switch (action.type) {
        case SteppedActions.ENABLENEXTPAGE: {
            state.nextStepEnabled = true;
            return __assign({}, state);
        }
        case SteppedActions.DISABLENEXTPAGE: {
            state.nextStepEnabled = false;
            return __assign({}, state);
        }
        case SteppedActions.GOTONEXTPAGE: {
            state.currentStep = state.currentStep + 1;
            return __assign({}, state);
        }
        case SteppedActions.GOTOPREVIOUSPAGE: {
            if (state.currentStep !== 0) {
                state.currentStep = state.currentStep - 1;
            }
            return __assign({}, state);
        }
        case SteppedActions.SETPAGE: {
            if (action.payload > 0) {
                state.currentStep = action.payload;
            }
            return __assign({}, state);
        }
        case SteppedActions.SUBMIT: {
            return __assign({}, state);
        }
        case SteppedActions.RESET: {
            return __assign(__assign({}, state), { currentStep: 0, nextStepEnabled: true });
        }
    }
};
var SteppedProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useReducer)(reducer, defaultContext), state = _b[0], dispatch = _b[1];
    return (<exports.SteppedContext.Provider value={__assign(__assign({}, state), { enableNextPage: function () {
                dispatch({ type: SteppedActions.ENABLENEXTPAGE });
            }, disableNextPage: function () {
                dispatch({ type: SteppedActions.DISABLENEXTPAGE });
            }, goToNextPage: function () {
                dispatch({ type: SteppedActions.GOTONEXTPAGE });
            }, goToPreviousPage: function () {
                dispatch({ type: SteppedActions.GOTOPREVIOUSPAGE });
            }, submit: function () {
                dispatch({ type: SteppedActions.SUBMIT });
            }, setPage: function (page) {
                dispatch({ type: SteppedActions.SETPAGE, payload: page });
            }, reset: function () {
                dispatch({ type: SteppedActions.RESET });
            } })}>
      {children}
    </exports.SteppedContext.Provider>);
};
exports.SteppedProvider = SteppedProvider;
var SteppedModal = function (_a) {
    var context = _a.context, steps = _a.steps, layeredContext = _a.layeredContext, title = _a.title, onSubmit = _a.onSubmit, _b = _a.lastScreenIsSummary, lastScreenIsSummary = _b === void 0 ? false : _b, handleClose = _a.handleClose, _c = _a.isLargeModal, isLargeModal = _c === void 0 ? true : _c;
    var resetAndClose = function () {
        context.reset();
        handleClose();
    };
    var resetAndSubmit = function () {
        onSubmit();
        context.reset();
    };
    return (<ModalElement layeredContext={layeredContext} isLargeModal={isLargeModal} handleClose={resetAndClose}>
      <modal_1.default.Body className={(0, clsx_1.default)("transition-transform flex flex-col justify-between duration-100 max-h-full")} isLargeModal={isLargeModal}>
        <modal_1.default.Header handleClose={resetAndClose}>
          <div className="flex flex-col">
            <h2 className="inter-xlarge-semibold">{title}</h2>
            {!lastScreenIsSummary ||
            (lastScreenIsSummary &&
                context.currentStep !== steps.length - 1 && (<div className="flex items-center">
                    <span className="text-grey-50 inter-small-regular w-[70px] mr-4">{"Step ".concat(context.currentStep + 1, " of ").concat(steps.length)}</span>
                    {steps.map(function (_, i) { return (<span className={(0, clsx_1.default)("w-2 h-2 rounded-full mr-3", {
                        "bg-grey-20": i > context.currentStep,
                        "bg-violet-60": context.currentStep >= i,
                    }, {
                        "outline-4 outline outline-violet-20": context.currentStep === i,
                    })}/>); })}
                  </div>))}
          </div>
        </modal_1.default.Header>
        <modal_1.default.Content>{steps[context.currentStep]}</modal_1.default.Content>
      </modal_1.default.Body>
      <modal_1.default.Footer>
        <div className="flex justify-end w-full gap-x-xsmall">
          <button_1.default variant="ghost" size="small" disabled={context.currentStep === 0} onClick={function () { return context.goToPreviousPage(); }} className="w-[112px]">
            Back
          </button_1.default>
          <button_1.default variant="primary" size="small" disabled={!context.nextStepEnabled} onClick={function () {
            return context.currentStep === steps.length - 1
                ? resetAndSubmit()
                : context.goToNextPage();
        }} className="w-[112px]">
            {context.currentStep === steps.length - 1 ? "Submit" : "Next"}
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </ModalElement>);
};
var ModalElement = function (_a) {
    var layeredContext = _a.layeredContext, handleClose = _a.handleClose, _b = _a.isLargeModal, isLargeModal = _b === void 0 ? true : _b, children = _a.children;
    return layeredContext ? (<layered_modal_1.default context={layeredContext} handleClose={handleClose} isLargeModal={isLargeModal}>
      {children}
    </layered_modal_1.default>) : (<modal_1.default handleClose={handleClose} isLargeModal={isLargeModal}>
      {children}
    </modal_1.default>);
};
exports.default = SteppedModal;
