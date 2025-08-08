"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContext = void 0;
var Dialog = require("@radix-ui/react-dialog");
var Portal = require("@radix-ui/react-portal");
var clsx_1 = require("clsx");
var react_1 = require("react");
var use_window_dimensions_1 = require("../../../hooks/use-window-dimensions");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
exports.ModalContext = react_1.default.createContext({
    portalRef: undefined,
});
var Overlay = function (_a) {
    var children = _a.children;
    return (<Dialog.Overlay className="fixed bg-grey-90/40 z-50 grid top-0 left-0 right-0 bottom-0 place-items-center overflow-y-auto">
      {children}
    </Dialog.Overlay>);
};
var Content = function (_a) {
    var children = _a.children;
    var height = (0, use_window_dimensions_1.useWindowDimensions)().height;
    var style = {
        maxHeight: height - 64,
    };
    return (<Dialog.Content style={style} className="bg-grey-0 min-w-modal rounded overflow-x-hidden">
      {children}
    </Dialog.Content>);
};
var addProp = function (children, prop) {
    return react_1.default.Children.map(children, function (child) {
        return react_1.default.cloneElement(child, prop);
    });
};
var Modal = function (_a) {
    var _b = _a.open, open = _b === void 0 ? true : _b, handleClose = _a.handleClose, _c = _a.isLargeModal, isLargeModal = _c === void 0 ? true : _c, children = _a.children;
    var portalRef = react_1.default.useRef(null);
    return (<Dialog.Root open={open} onOpenChange={handleClose}>
      <Portal.UnstablePortal ref={portalRef}>
        <exports.ModalContext.Provider value={{ portalRef: portalRef }}>
          <Overlay>
            <Content>{addProp(children, { isLargeModal: isLargeModal })}</Content>
          </Overlay>
        </exports.ModalContext.Provider>
      </Portal.UnstablePortal>
    </Dialog.Root>);
};
Modal.Body = function (_a) {
    var children = _a.children, isLargeModal = _a.isLargeModal, className = _a.className, style = _a.style;
    return (<div style={style} className={(0, clsx_1.default)("inter-base-regular h-full", className)} onClick={function (e) { return e.stopPropagation(); }}>
      {addProp(children, { isLargeModal: isLargeModal })}
    </div>);
};
Modal.Content = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, isLargeModal = _a.isLargeModal;
    var height = (0, use_window_dimensions_1.useWindowDimensions)().height;
    var style = {
        maxHeight: height - 90 - 141,
    };
    return (<div style={style} className={(0, clsx_1.default)("px-7 pt-5 overflow-y-auto", className, (_b = {},
            _b["w-largeModal pb-7"] = isLargeModal,
            _b["pb-5"] = !isLargeModal,
            _b))}>
      {children}
    </div>);
};
Modal.Header = function (_a) {
    var _b = _a.handleClose, handleClose = _b === void 0 ? undefined : _b, children = _a.children;
    return (<div className="pl-7 pt-3.5 pr-3.5 flex flex-col w-full" onClick={function (e) { return e.stopPropagation(); }}>
      <div className="pb-1 flex w-full justify-end">
        {handleClose && (<button onClick={handleClose} className="text-grey-50 cursor-pointer">
            <cross_icon_1.default size={20}/>
          </button>)}
      </div>
      {children}
    </div>);
};
Modal.Footer = function (_a) {
    var children = _a.children, isLargeModal = _a.isLargeModal;
    return (<div onClick={function (e) { return e.stopPropagation(); }} className={(0, clsx_1.default)("px-7 bottom-0 pb-5 flex w-full", {
            "border-t border-grey-20 pt-4": isLargeModal,
        })}>
      {children}
    </div>);
};
exports.default = Modal;
